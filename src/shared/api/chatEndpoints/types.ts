import { UserResponseSchema } from "../loginEndpoints/types";

type ChatEndpointResponseSchema = {
    description: string
    created_at: string
    id: number
    title: string
    updated_at?: string
};

type ChatResponseParams = {
    id: number
}

type ChatMessageSchema = {
    chat_id: number,
    created_at: string,
    id: number,
    text: string,
    updated_at: string,
    user_id: string
}

type ChatMessageResponse = {
    author: UserResponseSchema
    message: ChatMessageSchema
}

export type {
    ChatEndpointResponseSchema,
    ChatMessageSchema,
    ChatMessageResponse
    ChatResponseParams,
}