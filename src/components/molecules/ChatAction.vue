<template>
	<div class="chat-main__actions">
		<TheButton @click="onSearchClick">
			<IconSearch />
		</TheButton>
		<TheButton @click="onCallClick">
			<IconCall />
		</TheButton>
		<TheButton @click="onMoreOptionsClick">
			<IconMore />
		</TheButton>
	</div>
</template>

<script setup lang="ts">
import TheButton from '@/components/atoms/TheButton.vue';
import IconSearch from '@/assets/icons/search-icon.svg';
import IconCall from '@/assets/icons/call-icon.svg';
import IconMore from '@/assets/icons/more-icon.svg';

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
