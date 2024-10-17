<template>
	<header class="chat-sidebar__header">
		<BurgerMenu @toggle="toggleSidebar" />
		<Transition name="sidebar-transition">
			<SearchForm v-show="!isCollapsed" />
		</Transition>
	</header>
</template>

<script setup lang="ts">
import BurgerMenu from '@/components/atoms/BurgerMenu.vue';
import SearchForm from '@/components/molecules/SearchForm.vue';
import { useChatStore } from '@/stores/chat';
import { storeToRefs } from 'pinia';

const chatStore = useChatStore();

const { isCollapsed } = storeToRefs(chatStore);

const toggleSidebar = () => {
	chatStore.toggleSidebar();
};
</script>

<style scoped></style>
