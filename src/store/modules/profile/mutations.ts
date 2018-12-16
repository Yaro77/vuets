import { MutationTree } from "vuex";
import { ProfileState, User } from "./types";

export const mutations: MutationTree<ProfileState> = {
  profileLoaded(state: ProfileState, payload: User) {
    state.error = false;
    state.user = payload;
  },

  profileError(state: ProfileState) {
    state.error = true;
    state.user = undefined;
  }
};