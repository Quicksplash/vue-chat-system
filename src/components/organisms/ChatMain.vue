<template>
	<main class="chat-main">
		<ChatMainHeader />
		<ChatMessages />
		<ChatFooter />
		<slot></slot>
	</main>
</template>

<script setup lang="ts">
import ChatMainHeader from '@/components/molecules/ChatMainHeader.vue';
import ChatMessages from '@/components/organisms/ChatMessages.vue';
import ChatFooter from '@/components/organisms/ChatFooter.vue';
</script>

<style lang="scss" scoped></style>
