<template>
	<aside class="chat-sidebar">
		<AssideHeader />
		<slot></slot>
	</aside>
</template>

<script setup lang="ts">
import AssideHeader from '@/components/molecules/AssideHeader.vue';
</script>

<style lang="scss" scoped></style>
