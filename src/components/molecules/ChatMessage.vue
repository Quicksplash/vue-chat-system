<template>
	<article :class="['message', messageClass]">
		<p>{{ props.content }}</p>
		<div class="message__status">
			<time datetime="2024-09-20T18:12">{{ props.time }}</time>
			<MessageStatusIcon />
		</div>
	</article>
</template>

<script setup lang="ts">
import type { Message } from '@/types/chat';
import MessageStatusIcon from '@/components/atoms/MessageStatusIcon.vue';
import { computed } from 'vue';

const props = withDefaults(defineProps<Omit<Message, 'id'>>(), {
	alignment: 'left',
});

const messageClass = computed(() => {
	return props.alignment === 'right' ? 'message--right' : 'message--left';
});
</script>

<style scoped></style>
