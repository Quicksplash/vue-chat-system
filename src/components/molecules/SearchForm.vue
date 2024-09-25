<template>
	<form class="chat-sidebar__search" role="search">
		<SearchIcon />
		<TheInput
			class-name="chat-sidebar__search-input"
			name="search"
			v-model:modelValue="searchMessage"
			placeholder="Поиск"
		/>
	</form>
</template>

<script setup lang="ts">
import SearchIcon from '@/components/atoms/SearchIcon.vue';
import TheInput from '@/components/atoms/TheInput.vue';
import { ref } from 'vue';

const searchMessage = ref('');
</script>

<style scoped></style>
