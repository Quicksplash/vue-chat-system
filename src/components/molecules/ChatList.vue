<template>
	<nav class="chat-sidebar__nav" aria-label="Chat List">
		<ul class="chat-list">
			<template v-for="chat in chatList" :key="chat.id">
				<ChatListItem
					:id="chat.id"
					:avatar="chat.avatar"
					:name="chat.name"
					:time="chat.time"
					:preview="chat.preview"
					:count="chat.count"
					:is-collapsed="isCollapsed"
				/>
			</template>
		</ul>
	</nav>
</template>

<script setup lang="ts">
import { useChatStore } from '@/stores/chat';
import { storeToRefs } from 'pinia';
import ChatListItem from '@/components/molecules/ChatListItem.vue';

const chatStore = useChatStore();

const { chatList, isCollapsed } = storeToRefs(chatStore);

await chatStore.getChatList();
</script>

<style scoped></style>
