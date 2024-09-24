<template>
	<main class="chat-main">
		<MainHeader />
		<slot></slot>
	</main>
</template>

<script setup lang="ts">
import MainHeader from '@/components/molecules/MainHeader.vue';
</script>

<style lang="scss" scoped></style>
