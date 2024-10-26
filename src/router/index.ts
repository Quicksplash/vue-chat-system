import { createRouter, createWebHistory } from 'vue-router';
import ChatsPage from '@/views/ChatsPage.vue';
import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
	{
		path: '/',
		component: ChatsPage,
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
