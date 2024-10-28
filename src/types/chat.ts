export interface Chat {
	id: number;
	avatar: string;
	name: string;
	time: string;
	preview: string;
	count: number;
}

export interface Message {
	id: number;
	content: string;
	alignment: 'left' | 'right';
	time: string;
}

export type ChatData = Omit<Chat, 'id'>;
