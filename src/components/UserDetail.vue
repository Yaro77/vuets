<template>
  <div class="container">
    <div v-if="profile.user">
      <p>Full name: {{fiullName}}</p>
      <p>Email: {{email}}</p>
    </div>
    <div v-if="profile.error">Ooops! An error occurred.</div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { State, Action, Getter } from "vuex-class";
import { ProfileState, User } from "../store/modules/profile/types";
import { profile } from "../store/modules/profile";
import { RootState } from "../store/types";

const namespace: string = "profile";

@Component
export default class UserDetail extends Vue {
  @State("profile") profile!: ProfileState;
  @Action("fetchData", { namespace }) fetchData!: () => Promise<any>;
  @Getter("fullName", { namespace }) fullName!: string;

  async mounted() {
    await this.fetchData();
  }
}
</script>
