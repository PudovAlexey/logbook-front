import { useCallback, useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native"
import { GiftedChat } from "react-native-gifted-chat";
import { useStyles } from "./styles";
import { loginfoEndpoints } from "@shared/api/loginfoEndpoints/loginfoEndpoints";
import { useLazyQuery } from "@shared/lib/queryHooks/useLazyQuery";
import { chatEndpoints } from "@shared/api/chatEndpoints/chatEndpoints";
import { ChatEndpointResponseSchema } from "@shared/api/chatEndpoints/types";
import { Button } from "@shared/ui/Button/ui/Button";
import { Typography } from "@shared/ui/Typography";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";

// chatEndpoints

type ChatsListTabProps = {
  navigator: NativeStackHeaderProps;
};

function ChatsListTab({navigator}: ChatsListTabProps) {
  const [chats, setChats] = useState<ChatEndpointResponseSchema[]>([]);
  const chatsQuery = useLazyQuery(chatEndpoints.chats);

  const {masterDetailWrapper, chatItem} = useStyles();

  const handleChatNavigate = (chatId: number) => {
    navigator.navigation.push('chatDetail', { chatId });
  }

  useEffect(() => {
    chatsQuery({})
    .then(({data}) => {
      if (data) {
        setChats(data)
      }
    });
  }, []);

  // useEffect(() => {
  //   setMessages([
  //     {
  //       _id: 1,
  //       text: 'Hello developer',
  //       createdAt: new Date(),
  //       user: {
  //         _id: 2,
  //         name: 'React Native',
  //         avatar: 'https://placeimg.com/140/140/any',
  //       },
  //     },
  //   ]);
  // }, []);

  // const onSend = useCallback((messages: any) => {
  //   setMessages(previousMessages =>
  //     GiftedChat.append(previousMessages, messages),
  //   );
  // }, []);

  return (
    <View style={masterDetailWrapper}>
      <FlatList
        data={chats}
        renderItem={({item}) => (
          <Button onPress={() => handleChatNavigate(item.id)} type="clear">
            <View style={chatItem}>
            <Typography.Subtitle size="l"
            >{item.title}</Typography.Subtitle>
            <Typography.Text>{item.description}</Typography.Text>
          </View>
          </Button>
        )}
      />
    </View>
  );
}

export {
  ChatsListTab
}