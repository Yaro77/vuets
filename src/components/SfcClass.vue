<template>
  <div
    class="sfc-class"
  >Hello from SFC class component. Decorators here. The component's value is {{value}}!</div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class SfcClass extends Vue {
  value: number = 7;
}
</script>

<style lang="less">
@green: green;

.sfc-class {
  color: @green;
}
</style>

