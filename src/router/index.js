import { createRouter, createWebHashHistory } from 'vue-router';
import routes from './route';

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
router.beforeEach(async (to, from, next) => {
  next();
});

export default router;
