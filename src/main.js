/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'
import './assets/styles.css'
// Components
import App from './App.vue'
import store from './store';
import router from './router';

// Composables
import { createApp } from 'vue'

const app = createApp(App)

registerPlugins(app)

app.use(store);
app.use(router); 
app.mount('#app')
