<template>
	<header class="chat-main__header">
		<ChatRecipient />
		<ChatAction />
	</header>
</template>

<script setup lang="ts">
import ChatRecipient from '@/components/molecules/ChatRecipient.vue';
import ChatAction from '@/components/molecules/ChatAction.vue';
</script>

<style scoped></style>
