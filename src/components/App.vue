<template>
  <div class="app">
    <shell></shell>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import { Shell } from "./shell";

@Component({
  components: {
    Shell
  }
})
export default class App extends Vue {}
</script>
