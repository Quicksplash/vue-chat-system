import type { Chat } from '@/types/chat';
import { defineStore } from 'pinia';
import { ref } from 'vue';
import { fetchChatList } from '@/services/api';

export const useChatStore = defineStore('chat', () => {
	const chatList = ref<Chat[]>([]);
	const isCollapsed = ref<boolean>(false);

	const getChatList = async () => {
		// loading.value = true;
		try {
			const data = await fetchChatList();
			chatList.value = data;
		} catch (err) {
			// error.value = 'Failed to load chat list';
		} finally {
			// loading.value = false;
		}
	};

	const toggleSidebar = () => {
		isCollapsed.value = !isCollapsed.value;
	};
	return { chatList, isCollapsed, getChatList, toggleSidebar };
});
