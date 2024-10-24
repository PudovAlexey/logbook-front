import { builder } from "../apiHandlers";
import { ChatEndpointResponseSchema, ChatMessageResponse, ChatResponseParams } from "./types";

const BASE_ENDPOINT = 'chat';

const chatEndpoints = {
    chats: builder.query<ChatEndpointResponseSchema[], {}>({
        query: (params) => ({
            url: `${BASE_ENDPOINT}/chats`,
            params
        })
    }),
    
    getMessagesByChatId: builder.query<ChatMessageResponse[], ChatResponseParams>({
        query: (params) => ({
            url: `${BASE_ENDPOINT}/messages/${params.id}`,
            params,
        })
    }),
    sendMessage: builder.mutation<any, any>({
        query: ({id, message}) => ({
            url:   `${BASE_ENDPOINT}/create_message/${id}`,
            method: 'POST',
            body: {
                text: message
            }
        })
    })
}

export {
    chatEndpoints
}