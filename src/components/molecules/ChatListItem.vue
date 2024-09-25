<template>
	<li :class="chatItemClasses">
		<TheAvatar src="src/assets/images/Avatar-2.png" />
		<div class="chat-list__item-content">
			<div class="chat-list__item-header">
				<ChatName name="Чат1" class-name="chat-list__item-name" />
				<span class="chat-list__item-time">19:48</span>
			</div>
			<div class="chat-list__item-message">
				<span class="chat-list__item-preview">Привет, как дела!</span>
				<span class="chat-list__item-count">2</span>
			</div>
		</div>
	</li>
</template>

<script setup lang="ts">
import TheAvatar from '@/components/atoms/TheAvatar.vue';
import ChatName from '@/components/atoms/ChatName.vue';
import { computed } from 'vue';

const props = defineProps<{
	isActive?: boolean;
}>();

// const emit = defineEmits<{
// 	(e: 'selectChat'): void;
// }>();

const chatItemClasses = computed(() => {
	return ['chat-list__item', { 'chat-list__item--active': props.isActive }];
});
</script>

<style scoped></style>
