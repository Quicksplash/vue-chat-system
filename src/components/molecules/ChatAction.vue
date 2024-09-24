<template>
	<div class="chat-main__actions">
		<TheButton @click="onSearchClick">
			<SearchIcon />
		</TheButton>
		<TheButton @click="onCallClick">
			<CallIcon />
		</TheButton>
		<TheButton @click="onMoreOptionsClick">
			<MoreIcon />
		</TheButton>
	</div>
</template>

<script setup lang="ts">
import TheButton from '@/components/atoms/TheButton.vue';
import SearchIcon from '@/components/atoms/SearchIcon.vue';
import CallIcon from '@/components/atoms/CallIcon.vue';
import MoreIcon from '@/components/atoms/MoreIcon.vue';

const onSearchClick = () => {
	console.log('Search button clicked');
};

const onCallClick = () => {
	console.log('Call button clicked');
};

const onMoreOptionsClick = () => {
	console.log('More options button clicked');
};
</script>

<style scoped></style>
