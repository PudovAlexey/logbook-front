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
    })
}

export {
    chatEndpoints
}