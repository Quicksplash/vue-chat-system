<template>
	<header class="chat-sidebar__header">
		<BurgerMenu @toggle="toggleSidebar" />
		<Transition name="sidebar-transition">
			<ChatSearchForm v-show="!isCollapsed" />
		</Transition>
	</header>
</template>

<script setup lang="ts">
import { useChatStore } from '@/stores/chat';
import { storeToRefs } from 'pinia';
import BurgerMenu from '@/components/atoms/BurgerMenu.vue';
import ChatSearchForm from '@/components/molecules/ChatSearchForm.vue';

const chatStore = useChatStore();

const { isCollapsed } = storeToRefs(chatStore);

const toggleSidebar = () => {
	chatStore.toggleSidebar();
};
</script>

<style scoped></style>
