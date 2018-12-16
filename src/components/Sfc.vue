<template>
  <div class="sfc">Hello from SFC component. The component's value is {{value}}!</div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data() {
    return {
      value: 3
    };
  }
});
</script>

<style lang="less">
@my-color: red;

.sfc {
  color: @my-color;
}
</style>
