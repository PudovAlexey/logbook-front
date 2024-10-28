import { ChatMessageResponse } from '@shared/api/chatEndpoints/types';

function transformMessagesData(messagesData: ChatMessageResponse[]) {
    return messagesData.map(({ message, author }) => ({
        _id: message.id,
        text: message.text,
        createdAt: new Date(message.created_at),
        user: {
            _id: author?.id || '2',
            name: author?.name || '2',
            avatar: author?.id ? 'https://banner2.cleanpng.com/20180330/daw/kisspng-avatar-james-cameron-neytiri-jake-sully-film-avatar-5abe8203841485.103733601522434563541.jpg' : '',
        },
    }));
}

export {
    transformMessagesData,
};
