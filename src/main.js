import { createApp } from "vue"
import { createRouter, createWebHistory } from "vue-router"
import App from "./App.vue"
import './style.css'



import Introduccion from "./views/Introduccion.vue"
import instalación_preparación_del_entorno from "./views/instalación_preparación_del _entorno.vue"
import Estructura_del_Proyecto_Vue from "./views/Estructura_del_Proyecto _Vue.vue"
import Los_Componentes from "./views/Los_Componentes.vue"
// Router
const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: "/", component: Introduccion },
        { path: "/instalacion", component: instalación_preparación_del_entorno  },
        { path: "/estructura", component: Estructura_del_Proyecto_Vue  },
        {path: "/componentes", component: Los_Componentes}
    ],
    scrollBehavior(to, from, savedPosition) {
        return { top: 0 }
    }
})

createApp(App).use(router).mount("#app")
