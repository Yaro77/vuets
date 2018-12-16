import Vue from "vue";
import HelloComponent from "./components/Hello";
import SfcComponent from "./components/Sfc.vue";
import SfcClassComponent from "./components/SfcClass.vue";

const v = new Vue({
  el: "#app",
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
    </main>
  `,
  data: {
    name: "App"
  },
  components: {
    HelloComponent, SfcComponent, SfcClassComponent
  }
});
