<template>
	<form class="chat-input" role="form" @submit.prevent="sendMessage">
		<TheButton type="button" modifier="send" @click="toggleEmoji">
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
import { useMessageStore } from '@/stores/messages';
import { ref } from 'vue';

const message = ref<string>('');

const messageStore = useMessageStore();

const sendMessage = () => {
	message.value.trim();
	const alignment = Math.random() > 0.5 ? 'left' : 'right';
	messageStore.addMessage(message.value, alignment);
	message.value = '';
};

const toggleEmoji = () => {
	console.log('тест1');
};
</script>

<style scoped></style>
