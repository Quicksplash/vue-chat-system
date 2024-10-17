<template>
	<div class="chat-sidebar__burger" @click="handleToggle">
		<span class="chat-sidebar__burger-line"></span>
		<span class="chat-sidebar__burger-line"></span>
		<span class="chat-sidebar__burger-line"></span>
	</div>
</template>

<script setup lang="ts">
const emit = defineEmits<{
	(e: 'toggle'): void;
}>();

const handleToggle = () => {
	emit('toggle');
};
</script>

<style scoped></style>
