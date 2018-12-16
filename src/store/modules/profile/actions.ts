import axios from "axios";
import { ActionTree } from "vuex";
import { ProfileState, User } from "./types";
import { RootState } from "../../types";

export const actions: ActionTree<ProfileState, RootState> = {
  async fetchData({ commit }): Promise<any> {
    // axios({
    //   url: "https://...",
    // }).then(
    //   response => {
    //     const payload: User = response && response.data;
    //     commit("profileLoaded", payload);
    //   },
    //   error => {
    //     console.log(error);
    //     commit("profileError");
    //   }
    // );

    try {
      const r = await axios({ url: "https://127.0.0.1/test" });
      const p: User = r && r.data;
      commit("profileLoader", p);
    } catch (e) {
      console.log(e);
      commit("profileError");
    }
  }
};