<template>
	<main class="chat-main">
		<MainHeader />
		<ChatMessages />
		<ChatFooter />
		<slot></slot>
	</main>
</template>

<script setup lang="ts">
import MainHeader from '@/components/molecules/MainHeader.vue';
import ChatMessages from '@/components/organisms/ChatMessages.vue';
import ChatFooter from '@/components/organisms/ChatFooter.vue';
</script>

<style lang="scss" scoped></style>
