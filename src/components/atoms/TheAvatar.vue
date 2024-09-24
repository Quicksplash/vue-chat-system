<template>
	<img :src="props.src" :alt="props.alt" />
</template>

<script setup lang="ts">
const props = withDefaults(
	defineProps<{
		src: string;
		alt?: string;
	}>(),
	{
		alt: 'Avatar',
	},
);
</script>

<style scoped></style>
