import { createRouter, createWebHistory } from "vue-router";
import routes from "./router";

const router = createRouter({
    routes,
    history:createWebHistory(),
    // linkActiveClass:'active',
});

router.beforeEach((to,from) => {
   if(to.path == "/tasks") {
    return { name: 'login'}
   }
})

export default router