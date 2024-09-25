<template>
	<nav class="chat-sidebar__nav" aria-label="Chat List">
		<ul class="chat-list">
			<ChatListItem :is-active="true" />
			<ChatListItem />
			<ChatListItem />
		</ul>
	</nav>
</template>

<script setup lang="ts">
import ChatListItem from '@/components/molecules/ChatListItem.vue';
</script>

<style scoped></style>
