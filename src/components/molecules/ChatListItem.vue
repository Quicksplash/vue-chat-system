<template>
	<li :class="chatItemClasses" @click="chatStore.setActiveChat(props.id)">
		<TheAvatar :src="props.avatar" />
		<Transition name="sidebar-transition">
			<div v-show="!props.isCollapsed" class="chat-list__item-content">
				<div class="chat-list__item-header">
					<ChatName :name="props.name" class-name="chat-list__item-name" />
					<span class="chat-list__item-time">{{ props.time }}</span>
				</div>
				<div class="chat-list__item-message">
					<span class="chat-list__item-preview">{{ props.preview }}</span>
					<span v-if="props.count > 0" class="chat-list__item-count">{{ props.count }}</span>
				</div>
			</div>
		</Transition>
	</li>
</template>

<script setup lang="ts">
import type { Chat } from '@/types/chat';
import TheAvatar from '@/components/atoms/TheAvatar.vue';
import ChatName from '@/components/atoms/ChatName.vue';
import { useChatStore } from '@/stores/chat';
import { computed } from 'vue';
import { storeToRefs } from 'pinia';

const props = defineProps<
	Chat & {
		isCollapsed?: boolean;
	}
>();
const chatStore = useChatStore();

const { activeChatId } = storeToRefs(chatStore);

const chatItemClasses = computed(() => {
	return ['chat-list__item', { 'chat-list__item--active': props.id === activeChatId.value }];
});
</script>

<style scoped></style>
