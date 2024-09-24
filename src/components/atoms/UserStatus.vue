<template>
	<span class="chat-main__recipient-status">{{ props.status }}</span>
</template>

<script setup lang="ts">
const props = defineProps<{
	status: string;
}>();
</script>

<style scoped></style>
