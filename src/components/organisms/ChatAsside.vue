<template>
	<aside :class="['chat-sidebar', { 'chat-sidebar--collapsed': isCollapsed }]">
		<ChatAssideHeader />
		<Suspense>
			<template #default>
				<ChatList />
			</template>
			<template #fallback>
				<ThePreloader />
			</template>
		</Suspense>
	</aside>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useChatStore } from '@/stores/chat';
import ChatAssideHeader from '@/components/molecules/ChatAssideHeader.vue';
import ThePreloader from '@/components/atoms/ThePreloader.vue';
import ChatList from '@/components/molecules/ChatList.vue';

const chatStore = useChatStore();

const { isCollapsed } = storeToRefs(chatStore);
</script>

<style lang="scss" scoped></style>
