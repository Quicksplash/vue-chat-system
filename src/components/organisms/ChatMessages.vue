<template>
	<section class="chat-messages" aria-live="polite">
		<div class="chat-messages__spacer"></div>
		<div v-if="messages.length > 0" class="chat-messages__date">
			<span>Сегодня</span>
		</div>
		<template v-for="message in messages" :key="message.id">
			<ChatMessage :content="message.content" :alignment="message.alignment" :time="message.time" />
		</template>
	</section>
</template>

<script setup lang="ts">
import ChatMessage from '@/components/molecules/ChatMessage.vue';
import { useMessageStore } from '@/stores/messages';
import { storeToRefs } from 'pinia';

const messageStore = useMessageStore();

const { messages } = storeToRefs(messageStore);
</script>

<style scoped></style>
