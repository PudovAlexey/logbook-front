import { ChatMessageResponse } from "@shared/api/chatEndpoints/types";

function transformMessagesData(messagesData: ChatMessageResponse[]) {
    return messagesData.map(({message, author}) => ({
        _id: message.id,
        text: message.text,
        createdAt: new Date(message.created_at),
        user: {
            _id: author?.id || '',
            name: author?.name || '',
            avatar: '',
        }
    }))
}

export {
    transformMessagesData
}