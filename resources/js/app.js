/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

import './bootstrap';
import { createApp } from 'vue';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {faInstagram, faYoutube} from "@fortawesome/free-brands-svg-icons";
import {faUserSecret, faRocket, faCartShopping, faHandshake, faLayerGroup}
    from '@fortawesome/free-solid-svg-icons';
import { faPaste } from '@fortawesome/free-regular-svg-icons';
library.add(faUserSecret, faPaste, faRocket, faCartShopping, faHandshake, faLayerGroup,
    faYoutube, faInstagram);

/**
 * Next, we will create a fresh Vue application instance. You may then begin
 * registering components with the application instance so they are ready
 * to use in your application's views. An example is included for you.
 */

const app = createApp({});

import ExampleComponent from './components/ExampleComponent.vue';
import HeaderComponent from "./components/HeaderComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";
import HomeFrame1Component from "./components/HomeFrame1Component.vue";
import HomeFrame2Component from "./components/HomeFrame2Component.vue";
import HomeFrame3Component from "./components/HomeFrame3Component.vue";
import HomeFrame4Component from "./components/HomeFrame4Component.vue";
import HomeFrame5Component from "./components/HomeFrame5Component.vue";
app.component('example-component', ExampleComponent);
app.component('header-component', HeaderComponent);
app.component('footer-component', FooterComponent);
app.component('home-frame1-component', HomeFrame1Component);
app.component('home-frame2-component', HomeFrame2Component);
app.component('home-frame3-component', HomeFrame3Component);
app.component('home-frame4-component', HomeFrame4Component);
app.component('home-frame5-component', HomeFrame5Component);
app.component('font-awesome-icon', FontAwesomeIcon);

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// Object.entries(import.meta.glob('./**/*.vue', { eager: true })).forEach(([path, definition]) => {
//     app.component(path.split('/').pop().replace(/\.\w+$/, ''), definition.default);
// });

/**
 * Finally, we will attach the application instance to a HTML element with
 * an "id" attribute of "app". This element is included with the "auth"
 * scaffolding. Otherwise, you will need to add an element yourself.
 */

app.mount('#app');
