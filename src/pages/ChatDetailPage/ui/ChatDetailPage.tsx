import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import { Text } from "@rneui/themed";
import { chatEndpoints } from "@shared/api/chatEndpoints/chatEndpoints";
import { useLazyQuery } from "@shared/lib/queryHooks/useLazyQuery";
import { useEffect, useState } from "react"
import { View } from "react-native";
import { GiftedChat } from "react-native-gifted-chat"

// type ChatMessageSchema = {
//     _id: number
//     text: 
// }

function ChatDetailPage({ route, navigation }: NativeStackHeaderProps) {
    const chatsQuery = useLazyQuery(chatEndpoints.getMessagesByChatId);
    const chatId = route?.params?.chatId;

    const [messages, setMessages] = useState([]);


    useEffect(() => {
        chatsQuery({id: chatId})
        .then(({data}) => {
            if (data) {
                setMessages(data)
            }
        })
    }, []);

    

    return (
         <View>
            <Text>{JSON.stringify(messages)}</Text>
         </View>
    //     <GiftedChat
    //     messages={[]}
    //     // onSend={messages => this.onSend(messages)}
    //     user={{
    //       _id: 1
    //     }}
    //   />
    )
}

export {
    ChatDetailPage
}