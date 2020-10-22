import Vue from 'vue';
import Router from 'vue-router';
import StartPage from "@/components/StartPage";
import HomePage from "@/components/HomePage";

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'start',
            component: StartPage
        },
        {
            path: '/home',
            name: 'home',
            component: HomePage
        }
    ]
})