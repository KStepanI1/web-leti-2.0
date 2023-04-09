import { makeAutoObservable } from "mobx";
import { IUser } from "../types/IUser";
import { ROLES } from "../utils/constants";

export default class AuthStore {
  user: IUser | null;
  isAdmin: boolean;
  isSuper: boolean;

  constructor() {
    this.user = null;
    this.isAdmin = false;
    this.isSuper = false;
    makeAutoObservable(this);
  }

  setUser(newUser: IUser | null) {
    this.isAdmin =
      newUser?.roles.some((role) => role === ROLES.ADMIN_ROLE) || false;
    this.isSuper =
      newUser?.roles.some((role) => role === ROLES.SUPER_ROLE) || false;
    this.user = newUser;
  }
}
