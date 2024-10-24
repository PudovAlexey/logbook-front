import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import { Text } from "@rneui/themed";
import { chatEndpoints } from "@shared/api/chatEndpoints/chatEndpoints";
import { useLazyQuery } from "@shared/lib/queryHooks/useLazyQuery";
import { useEffect, useRef, useState } from "react"
import { io } from "socket.io-client";
import { GiftedChat, IMessage } from "react-native-gifted-chat"
import { transformMessagesData } from "../lib/transformMessagesData";
import { useGetUser } from "@app/providers/UserProvider/ui/UserProvider";
import { useLazyMutation } from "@shared/lib/queryHooks/UseLazyMutation";
import { useNotification } from "@shared/ui/AlertContext/ui/AlertContext";

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
        chatsQuery({id: chatId})
        .then(({data}) => {
            if (data) {
                const socket = io("ws://10.96.183.36:8082");
                setMessages(transformMessagesData(data))
    
                setSocket(socket);
            }
        })
    }, []);

    useEffect(() => {
       if (socket && chatId) {
         socket?.emit("join", chatId).on('send_message', (socketMessages) => {
            notify?.notify({
                status: 'success',
                message: `${JSON.stringify(socketMessages)} FROM SOCKET`
            })
        //    console.log(el);
        setMessages((prev) => [...prev, ...transformMessagesData(socketMessages)])
         });
   
         // socket.on("joiner", (el) => {
         //   console.log(el)
         // });
     
         setSocket(socket);
   
       };
       
     }, [chatId, socket]);

    const handleSend = (messages: IMessage[]) => {
        sendMessageMutation({
            id: chatId,
            message: messages[0].text
        })
        .then(({data}) => {
            setMessages((prev: any) => GiftedChat.append(prev, messages))
        })
    };

    

    return (
   
        <GiftedChat
        messages={messages}
        onSend={messages => handleSend(messages)}
        user={{
          _id: user?.id || ''
        }}
      />
    )
}

export {
    ChatDetailPage
}