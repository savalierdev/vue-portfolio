import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from "./router";
import PrimeVue from 'primevue/config'
import Aura from '@primeuix/themes/aura'
import Lara from '@primeuix/themes/lara'
import Material from '@primeuix/themes/material'
import Nora from '@primeuix/themes/nora'



const app = createApp(App)
app.use(PrimeVue, {
    theme: {
        preset: Aura
    }
});

app.use(router)


app.mount('#app')