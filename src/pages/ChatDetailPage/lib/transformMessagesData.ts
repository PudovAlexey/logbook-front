import { ChatMessageResponse } from '@shared/api/chatEndpoints/types';

function transformMessagesData(messagesData: ChatMessageResponse[]) {
    return messagesData.map(({ message, author }) => ({
        _id: message.id,
        text: message.text,
        createdAt: new Date(message.created_at),
        user: {
            _id: author?.id || '2',
            name: author?.name || '2',
            avatar: author?.id ? 'https://www.google.com/imgres?q=%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80%D0%BA%D0%B0&imgurl=https%3A%2F%2Fimg.freepik.com%2Ffree-photo%2Fview-3d-cool-modern-bird_23-2150946453.jpg&imgrefurl=https%3A%2F%2Fru.freepik.com%2Fphotos%2F%25D0%25B0%25D0%25B2%25D0%25B0%25D1%2582%25D0%25B0%25D1%2580%25D0%25BA%25D0%25B0&docid=AqsdhQXGjsCVKM&tbnid=7BOmgaW5dTibEM&vet=12ahUKEwjCncT2hKKJAxViGxAIHdJNAv4QM3oECB0QAA..i&w=626&h=417&hcb=2&ved=2ahUKEwjCncT2hKKJAxViGxAIHdJNAv4QM3oECB0QAA' : 'https://www.google.com/imgres?q=%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80%D0%BA%D0%B0&imgurl=https%3A%2F%2Fshapka-youtube.ru%2Fwp-content%2Fuploads%2F2024%2F07%2Fkrutaya-avatarka-standoff-2-dlya-kibersportsmena.jpg&imgrefurl=https%3A%2F%2Fshapka-youtube.ru%2Fgamer%2F&docid=XGnpZhgFlW45ZM&tbnid=8simQchZOkenlM&vet=12ahUKEwjCncT2hKKJAxViGxAIHdJNAv4QM3oECHEQAA..i&w=800&h=800&hcb=2&ved=2ahUKEwjCncT2hKKJAxViGxAIHdJNAv4QM3oECHEQAA',
        },
    }));
}

export {
    transformMessagesData,
};
