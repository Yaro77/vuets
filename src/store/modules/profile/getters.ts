import { GetterTree } from "vuex";
import { ProfileState } from "./types";
import { RootState } from "../../types";


export const getters: GetterTree<ProfileState, RootState> = {
  fullName({ user }: ProfileState) {
    const firstName: string = (user && user.firstName) || "";
    const lastName: string = (user && user.lastName) || "";

    return `${firstName} ${lastName}`;
  }
};