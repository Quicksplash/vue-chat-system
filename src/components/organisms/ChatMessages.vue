<template>
	<section class="chat-messages" aria-live="polite">
		<div class="chat-messages__spacer"></div>
		<div class="chat-messages__date">
			<span>Сегодня</span>
		</div>
		<ChatMessage />
		<ChatMessage alignment="right" status="seen" />
	</section>
</template>

<script setup lang="ts">
import ChatMessage from '@/components/molecules/ChatMessage.vue';
</script>

<style scoped></style>
