<template>
	<input
		:type="props.type"
		:class="className"
		:name="props.name"
		:value="props.modelValue"
		:placeholder="props.placeholder"
		:required="props.required"
		:autofocus="props.autofocus"
		:aria-label="props.arialabel"
		@input="updateValue"
		@keydown.enter.prevent="onEnter"
	/>
</template>
<script setup lang="ts">
const props = withDefaults(
	defineProps<{
		type?: string;
		className: string;
		name: string;
		modelValue: string;
		placeholder?: string;
		required?: boolean;
		autofocus?: boolean;
		arialabel?: string;
	}>(),
	{
		type: 'text',
		required: false,
		autofocus: true,
		arialabel: '',
	},
);

const emit = defineEmits<{
	(e: 'update:modelValue', event: string): void;
	(e: 'enter', event: string): void;
}>();

const updateValue = (event: Event) => {
	const target = event.target as HTMLInputElement;
	emit('update:modelValue', target.value);
};
const onEnter = () => {
	emit('enter', props.modelValue);
};
</script>

<style scoped></style>
