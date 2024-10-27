import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import { Text } from '@rneui/themed';
import { chatEndpoints } from '@shared/api/chatEndpoints/chatEndpoints';
import { useLazyQuery } from '@shared/lib/queryHooks/useLazyQuery';
import { useEffect, useRef, useState } from 'react';
import { io } from 'socket.io-client';
import { GiftedChat, IMessage } from 'react-native-gifted-chat';
import { useGetUser } from '@app/providers/UserProvider/ui/UserProvider';
import { useLazyMutation } from '@shared/lib/queryHooks/UseLazyMutation';
import { useNotification } from '@shared/ui/AlertContext/ui/AlertContext';
import { transformMessagesData } from '../lib/transformMessagesData';

// type ChatMessageSchema = {
//     _id: number
//     text:
// }

function ChatDetailPage({ route, navigation }: NativeStackHeaderProps) {
    const lockOnce = useRef(false);
    const { user } = useGetUser();
    const [socket, setSocket] = useState(null);
    const chatsQuery = useLazyQuery(chatEndpoints.getMessagesByChatId);
    const sendMessageMutation = useLazyMutation(chatEndpoints.sendMessage);
    const notify = useNotification();
    const chatId = route?.params?.chatId;

    const [messages, setMessages] = useState<any>([]);

    useEffect(() => {
        chatsQuery({ id: chatId })
        .then(({ data }) => {
            if (data) {
                const socket = io('ws://192.168.1.36:8082');
                 setMessages(transformMessagesData(data.reverse()));

                setSocket(socket);
            }
        });
    }, []);

    useEffect(() => {
       if (socket && chatId) {
        notify?.notify({
            status: 'success',
            message: 'try connecting',
        });

         socket?.emit('join', {
            room_id: chatId,
            user_uuid: user?.id,
         }).on('send_message', (socketMessages) => {
            notify?.notify({
                status: 'success',
                message: '',
            });

            const newMessage = transformMessagesData([JSON.parse(socketMessages)]);

            setMessages((prev: any) => GiftedChat.append(prev, newMessage));
         });

         setSocket(socket);
       }
     }, [chatId, socket, notify, user?.id]);

    const handleSend = (messages: IMessage[]) => {
        sendMessageMutation({
            id: chatId,
            message: messages[0].text,
        })
        .then(({ data }) => {
            setMessages((prev: any) => GiftedChat.append(prev, messages));
        });
    };

    return (

        <GiftedChat
        messages={messages}
        onSend={(messages) => handleSend(messages)}
        user={{
          _id: user?.id || '',
        }}
        />
    );
}

export {
    ChatDetailPage,
};
