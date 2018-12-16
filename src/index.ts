import Vue from "vue";
import HelloComponent from "./components/Hello";
import SfcComponent from "./components/Sfc.vue";
import SfcClassComponent from "./components/SfcClass.vue";
import store from "./store";
import UserDetail from "./components/UserDetail.vue";

const v = new Vue({
  el: "#app",
  store,
  template: `
    <main>
      <div>Hello, {{name}}!</div>
      <div>Name: <input v-model="name" type="text"></div>
      <hr>
      <hello-component></hello-component>
      <hr>
      <sfc-component></sfc-component>
      <hr>
      <sfc-class-component></sfc-class-component>
      <hr>
      <user-detail></user-detail>
    </main>
  `,
  data: {
    name: "App"
  },
  components: {
    HelloComponent, SfcComponent, SfcClassComponent, UserDetail
  }
});
