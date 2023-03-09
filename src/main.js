import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
/* -------- styles --------  */
import '@/assets/styles/index.scss'

import { library } from '@fortawesome/fontawesome-svg-core'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faXmark} from '@fortawesome/free-solid-svg-icons'

library.add(faXmark)


/* -------- global components List --------  */
import 'simplebar'; // or "import SimpleBar from 'simplebar';" if you want to use it manually.
import 'simplebar/dist/simplebar.css';

import ResizeObserver from 'resize-observer-polyfill';
window.ResizeObserver = ResizeObserver;

import globalComponentsList from './components/UI/globalComponentsList';
const app = createApp(App);
globalComponentsList.forEach(component => {
    app.component(component.name, component);
});
app
.component('font-awesome-icon', FontAwesomeIcon)
.use(store)
.use(router)
.mount('#app')
