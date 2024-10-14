<template>
	<article :class="['message', messageClass]">
		<p>Привет как дела!</p>
		<div class="message__status">
			<time datetime="2024-09-20T18:12">18:12</time>
			<MessageStatusIcon />
		</div>
	</article>
</template>

<script setup lang="ts">
import MessageStatusIcon from '@/components/atoms/MessageStatusIcon.vue';
import { computed } from 'vue';

const props = withDefaults(
	defineProps<{
		alignment?: 'left' | 'right';
	}>(),
	{
		alignment: 'left',
	},
);

const messageClass = computed(() => {
	return props.alignment === 'right' ? 'message--right' : 'message--left';
});
</script>

<style scoped></style>
