<template>
	<aside :class="['chat-sidebar', { 'chat-sidebar--collapsed': isCollapsed }]">
		<AssideHeader />
		<ChatList />
	</aside>
</template>

<script setup lang="ts">
import AssideHeader from '@/components/molecules/AssideHeader.vue';
import ChatList from '@/components/molecules/ChatList.vue';
import { useChatStore } from '@/stores/chat';
import { storeToRefs } from 'pinia';

const chatStore = useChatStore();

const { isCollapsed } = storeToRefs(chatStore);
</script>

<style lang="scss" scoped></style>
