import { createWebHistory, createRouter } from "vue-router";
import Home from '../components/Home.vue';
import About from '../components/About.vue';
import Shouq from '../components/SHouq.vue'

const routes =[

{
    path: "/",
    name: "Home",
    component: Home,    
},

{
    path: "/about",
    name: "About",
    component: About,
},

{
    path: "/shouq",
    name: "Shouq",
    component: Shouq,
}

];

const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  export default router;  