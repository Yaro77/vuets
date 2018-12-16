import Vue from "vue";

export default Vue.extend({
  template: `
    <div>Hi! {{name}}</div>
  `,
  data() {
    return {
      name: "Hello (component)"
    }
  }
});