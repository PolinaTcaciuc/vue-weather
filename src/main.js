import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
/* -------- styles --------  */
import '@/assets/styles/index.scss'
/* -------- global components List --------  */
import globalComponentsList from './components/UI/globalComponentsList';
const app = createApp(App);
globalComponentsList.forEach(component => {
    app.component(component.name, component);
});

app
.use(store)
.use(router)
.mount('#app')
