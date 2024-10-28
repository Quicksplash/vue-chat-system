<template>
	<header class="chat-main__header">
		<ChatRecipient :avatar="chat.avatar" :name="chat.name" />
		<ChatAction />
	</header>
</template>

<script setup lang="ts">
import type { Chat } from '@/types/chat';
import ChatRecipient from '@/components/molecules/ChatRecipient.vue';
import ChatAction from '@/components/molecules/ChatAction.vue';
import { computed } from 'vue';
import { useChatStore } from '@/stores/chat';
import { storeToRefs } from 'pinia';

const chatStore = useChatStore();
const { activeChatId, chatList } = storeToRefs(chatStore);

const chat = computed<Chat | Pick<Chat, 'id' | 'name' | 'avatar'>>(() => {
	return (
		chatList.value.find(chat => chat.id === activeChatId.value) ?? {
			id: 0,
			name: 'Чат 1',
			avatar: 'src/assets/images/Avatar-3.png',
		}
	);
});
</script>

<style scoped></style>
