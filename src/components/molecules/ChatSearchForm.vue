<template>
	<form class="chat-sidebar__search" role="search">
		<IconSearch />
		<TheInput
			v-model:model-value="searchMessage"
			class-name="chat-sidebar__search-input"
			name="search"
			placeholder="Поиск"
		/>
	</form>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import IconSearch from '@/assets/icons/search-icon.svg';
import TheInput from '@/components/atoms/TheInput.vue';

const searchMessage = ref<string>('');
</script>

<style scoped></style>
