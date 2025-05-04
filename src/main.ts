// Import the main CSS file
import "./assets/css/main.css";

// Import necessary modules
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

// Create the Vue application instance
const app = createApp(App);

// Use the router in the Vue app
app.use(router);

// Mount the Vue app to the DOM element with the ID 'app'
app.mount("#app");
