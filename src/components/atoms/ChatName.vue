<template>
	<span class="chat-main__recipient-name">{{ props.name }}</span>
</template>

<script setup lang="ts">
const props = defineProps<{
	name: string;
}>();
</script>

<style scoped></style>
