<template>
	<div class="preloader">
		<div class="spinner"></div>
	</div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.preloader {
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100%;
	width: 100%;
}

.spinner {
	border: 5px solid rgba(0, 0, 0, 0.1);
	border-left-color: #42b883;
	border-radius: 50%;
	width: 40px;
	height: 40px;
	animation: spin 1s linear infinite;
}

@keyframes spin {
	0% {
		transform: rotate(0deg);
	}
	100% {
		transform: rotate(360deg);
	}
}
</style>
