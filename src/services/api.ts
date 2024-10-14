import type { Chat } from '@/types/chat';

export const fetchChatList = async (): Promise<Chat[]> => {
	try {
		const response = await fetch('src/data/chatList.json');
		await new Promise(resolve => setTimeout(resolve, 500));
		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}
		const data: Chat[] = await response.json();
		return data;
	} catch (error) {
		console.error('Failed to fetch chat list:', error);
		throw error;
	}
};
