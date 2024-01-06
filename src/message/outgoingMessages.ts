
export enum SupportedMessage{ 
    AddChat ="ADD_CHAT",
    UpdateChat = "UpdateChat",
    
}

type MessagePayLoad  = {
    
        roomId: string;
        message: string;
        name: string;
        upvotes: number;
        chatId: string;
}

export type OutgoingMessage = {
    type: SupportedMessage.AddChat,
    payload: MessagePayLoad
} |  {
    type: SupportedMessage.UpdateChat,
    payload: Partial<MessagePayLoad>
}