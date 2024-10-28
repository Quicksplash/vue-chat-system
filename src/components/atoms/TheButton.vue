<template>
	<button :class="buttonClass" :type="props.type" @click="() => handleClick">
		<slot></slot>
	</button>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = withDefaults(
	defineProps<{
		type?: HTMLButtonElement['type'];
		modifier?: 'send' | 'actions';
	}>(),
	{
		modifier: 'actions',
		type: 'submit',
	},
);

const emit = defineEmits<{
	(e: 'click'): void;
}>();

const handleClick = () => {
	emit('click');
};

const buttonClass = computed(() => {
	switch (props.modifier) {
		case 'send':
			return 'chat-input__emoji-button';
		default:
			return 'chat-main__action-button';
	}
});
</script>

<style scoped></style>
