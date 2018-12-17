import { VuexModule, Module, Action, Mutation } from "vuex-module-decorators";
import axios from "axios";
import { User } from "./types";

@Module({ namespaced: true, name: "profile" })
export default class ProfileModule extends VuexModule {

  user?: User = undefined;
  error: boolean = false;

  get fullName() {
    const firstName: string = (this.user && this.user.firstName) || "";
    const lastName: string = (this.user && this.user.lastName) || "";

    return `${firstName} ${lastName}`;
  }

  @Action
  async fetchData(): Promise<any> {
    try {
      const r = await axios({ url: "https://127.0.0.1/test" });
      const p: User = r && r.data;
      this.context.commit("profileLoader", p);
    } catch (e) {
      console.log(e);
      this.context.commit("profileError");
    }
  }

  @Mutation
  profileLoaded(payload: User) {
    this.error = false;
    this.user = payload;
  }

  @Mutation
  profileError() {
    this.error = true;
    this.user = undefined;
  }
}