import Vue from "vue";
import store from "./store";
import App from './components/App.vue';

const v = new Vue({
  el: "#app",
  store,
  template: `
    <app></app>
  `,
  data: {
  },
  components: {
    App
  }
});
