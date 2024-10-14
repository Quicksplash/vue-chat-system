export interface Chat {
	id: number;
	avatar: string;
	name: string;
	time: string;
	preview: string;
	count: number;
}

export type ChatData = Omit<Chat, 'id'>;
