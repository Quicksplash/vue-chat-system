<template>
	<form class="chat-input" role="form" @submit.prevent="sendMessage">
		<TheButton modifier="send">
			<EmojiIcon />
		</TheButton>
		<TheInput
			v-model:model-value="message"
			class-name="chat-input__field"
			name=""
			placeholder="Напишите сообщение"
		/>
		<TheButton modifier="send">
			<SendIcon />
		</TheButton>
	</form>
</template>

<script setup lang="ts">
import EmojiIcon from '@/components/atoms/EmojiIcon.vue';
import SendIcon from '@/components/atoms/SendIcon.vue';
import TheButton from '@/components/atoms/TheButton.vue';
import TheInput from '@/components/atoms/TheInput.vue';
import { ref } from 'vue';

const message = ref('');

const sendMessage = () => {};

const toggleEmoji = () => {};
</script>

<style scoped></style>
