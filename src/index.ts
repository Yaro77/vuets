import Vue from "vue";
import store from "./store";
import App from './components/App.vue';

new Vue({
  el: "#app",
  store,
  render(h) {
    return h(App);
  }
});
