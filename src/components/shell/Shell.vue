<template>
  <div class="shell">
    <shell-menu></shell-menu>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Menu from "./Menu.vue";
import { Component } from "vue-property-decorator";

@Component({
  components: {
    "shell-menu": Menu
  }
})
export default class Shell extends Vue {
  data() {
    return {};
  }
}
</script>
