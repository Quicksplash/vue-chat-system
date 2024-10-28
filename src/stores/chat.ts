import type { Chat } from '@/types/chat';
import { defineStore } from 'pinia';
import { ref } from 'vue';
import { fetchChatList } from '@/services/api';

export const useChatStore = defineStore('chat', () => {
	const chatList = ref<Chat[]>([]);
	const activeChatId = ref<number | null>(null);
	const isCollapsed = ref<boolean>(false);

	const getChatList = async () => {
		// loading.value = true;
		try {
			const data = await fetchChatList();
			chatList.value = data;
		} catch (err) {
			console.log('Failed to load chat list');
		} finally {
			// loading.value = false;
		}
	};

	const toggleSidebar = () => {
		isCollapsed.value = !isCollapsed.value;
	};

	const setActiveChat = (id: number) => {
		activeChatId.value = id;
	};

	const updateChatPreview = (previewText: string) => {
		if (activeChatId.value !== null) {
			chatList.value[activeChatId.value - 1].preview = previewText;
		}
	};

	return {
		chatList,
		activeChatId,
		isCollapsed,
		getChatList,
		toggleSidebar,
		setActiveChat,
		updateChatPreview,
	};
});
