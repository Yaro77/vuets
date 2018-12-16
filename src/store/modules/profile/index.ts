import { Module } from "vuex";
import { ProfileState } from "./types";
import { RootState } from "../../types";
import { mutations } from "./mutations";
import { actions } from "./actions";
import { getters } from "./getters";

export const state: ProfileState = {
  user: undefined,
  error: false
};

const namespaced: boolean = true;

export const profile: Module<ProfileState, RootState> = {
  namespaced,
  state,
  actions,
  getters,
  mutations
};
