<template>
	<form class="chat-input" role="form" @submit.prevent="sendMessage">
		<TheButton type="button" modifier="send" @click="toggleEmoji">
			<IconEmoji />
		</TheButton>
		<TheInput
			v-model:model-value="message"
			class-name="chat-input__field"
			name=""
			placeholder="Напишите сообщение"
		/>
		<TheButton modifier="send">
			<IconSend />
		</TheButton>
	</form>
</template>

<script setup lang="ts">
import { useMessageStore } from '@/stores/messages';
import { ref } from 'vue';
import TheButton from '@/components/atoms/TheButton.vue';
import IconEmoji from '@/assets/icons/emoji-icon.svg';
import TheInput from '@/components/atoms/TheInput.vue';
import IconSend from '@/assets/icons/send-icon.svg';

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
