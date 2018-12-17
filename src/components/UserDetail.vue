<template>
  <div class="container">
    <div v-if="profile.user">
      <p>Full name: {{profile.fullName}}</p>
      <p>Email: {{profile.user.email}}</p>
    </div>
    <div v-if="profile.error">Ooops! An error occurred.</div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { State, Action, Getter } from "vuex-class";
import { User } from "../store/modules/profile/types";
import ProfileModule from "../store/modules/profile";
import { getModule } from "vuex-module-decorators";

@Component
export default class UserDetail extends Vue {
  profile: ProfileModule = getModule(ProfileModule, this.$store);

  async mounted() {
    await this.profile.fetchData();
  }
}
</script>

<style lang="less">
@my-color: beige;
.container {
  background-color: @my-color;
}
</style>
