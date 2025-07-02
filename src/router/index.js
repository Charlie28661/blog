import { createRouter, createWebHistory } from 'vue-router';

import Home from '../views/Home.vue'
import About from '../views/About.vue';
import Blog from '../views/Blog.vue';
import Projects from '../views/Projects.vue';
import Links from '../views/Links.vue';
import Contact from '../views/Contact.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/blog', component: Blog },
  { path: '/projects', component: Projects },
  { path: '/links', component: Links },
  { path: '/contact', component: Contact },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
