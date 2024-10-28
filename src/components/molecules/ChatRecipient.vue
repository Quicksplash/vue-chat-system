<template>
	<div class="chat-main__recipient">
		<TheAvatar :src="props.avatar" />
		<div class="chat-main__recipient-info">
			<ChatName :name="props.name" class-name="chat-main__recipient-name" />
			<UserStatus status="Был в сети вчера" />
		</div>
	</div>
</template>

<script setup lang="ts">
import TheAvatar from '@/components/atoms/TheAvatar.vue';
import ChatName from '@/components/atoms/ChatName.vue';
import UserStatus from '@/components/atoms/UserStatus.vue';

const props = defineProps<{
	avatar: string;
	name: string;
}>();
</script>

<style scoped></style>
