<template>
	<span>{{ props.name }}</span>
</template>

<script setup lang="ts">
const props = defineProps<{
	name: string;
	className: string;
}>();
</script>

<style scoped></style>
