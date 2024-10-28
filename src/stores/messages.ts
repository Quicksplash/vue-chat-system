import type { Message } from '@/types/chat';
import { defineStore } from 'pinia';
import { ref } from 'vue';
import { useChatStore } from '@/stores/chat';

export const useMessageStore = defineStore('messageStore', () => {
	const messages = ref<Message[]>([]);

	const addMessage = (content: string, alignment: Message['alignment']) => {
		const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
		const newMessage = {
			id: messages.value.length + 1,
			content,
			alignment,
			time: currentTime,
		};
		messages.value.push(newMessage);

		const chatStore = useChatStore();
		if (alignment === 'right') {
			chatStore.updateChatPreview(content);
		}
	};

	const clearMessages = () => (messages.value = []);

	return { messages, addMessage, clearMessages };
});
