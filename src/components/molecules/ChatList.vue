<template>
	<nav class="chat-sidebar__nav" aria-label="Chat List">
		<ul class="chat-list">
			<template v-for="chat in chatList" :key="chat.id">
				<ChatListItem
					:avatar="chat.avatar"
					:name="chat.name"
					:time="chat.time"
					:preview="chat.preview"
					:count="chat.count"
				/>
			</template>
		</ul>
	</nav>
</template>

<script setup lang="ts">
import { useChatStore } from '@/stores/chat';
import { onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import ChatListItem from '@/components/molecules/ChatListItem.vue';

const chatStore = useChatStore();

const { chatList } = storeToRefs(chatStore);

onMounted(async () => {
	await chatStore.getChatList();
});
</script>

<style scoped></style>
