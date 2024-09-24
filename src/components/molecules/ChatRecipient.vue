<template>
	<div class="chat-main__recipient">
		<TheAvatar src="src/assets/images/avatar-main.png" />
		<div class="chat-main__recipient-info">
			<ChatName name="Чат 1" />
			<UserStatus status="Был в сети вчера" />
		</div>
	</div>
</template>

<script setup lang="ts">
import TheAvatar from '@/components/atoms/TheAvatar.vue';
import ChatName from '@/components/atoms/ChatName.vue';
import UserStatus from '@/components/atoms/UserStatus.vue';
</script>

<style scoped></style>
