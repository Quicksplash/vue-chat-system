import type { Message } from '@/types/chat';
import { defineStore } from 'pinia';
import { reactive } from 'vue';

export const useMessageStore = defineStore('messageStore', () => {
	const messages = reactive<Message[]>([]);

	const addMessage = (content: string, alignment: Message['alignment']) => {
		const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
		const newMessage = {
			id: messages.length + 1,
			content,
			alignment,
			time: currentTime,
		};
		messages.push(newMessage);
	};

	return { messages, addMessage };
});
