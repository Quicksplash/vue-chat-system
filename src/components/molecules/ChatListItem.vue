<template>
	<li :class="chatItemClasses">
		<TheAvatar :src="props.avatar" />
		<div class="chat-list__item-content">
			<div class="chat-list__item-header">
				<ChatName :name="props.name" class-name="chat-list__item-name" />
				<span class="chat-list__item-time">{{ props.time }}</span>
			</div>
			<div class="chat-list__item-message">
				<span class="chat-list__item-preview">{{ props.preview }}</span>
				<span v-if="props.count > 0" class="chat-list__item-count">{{ props.count }}</span>
			</div>
		</div>
	</li>
</template>

<script setup lang="ts">
import type { ChatData } from '@/types/chat';
import TheAvatar from '@/components/atoms/TheAvatar.vue';
import ChatName from '@/components/atoms/ChatName.vue';
import { computed } from 'vue';

const props = defineProps<
	ChatData & {
		isActive?: boolean;
	}
>();

const chatItemClasses = computed(() => {
	return ['chat-list__item', { 'chat-list__item--active': props.isActive }];
});
</script>

<style scoped></style>
