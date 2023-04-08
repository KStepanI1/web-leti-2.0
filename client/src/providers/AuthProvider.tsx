import React, { createContext, useState } from "react";
import { authProvider } from "../utils/auth";
import { IUser } from "../types/IUser";
import { ROLES } from "../utils/constants";

interface AuthContextType {
  user: IUser | null;
  isAdmin: boolean;
  isSuper: boolean;
  signin: (user: IUser, callback: VoidFunction) => void;
  signout: (callback: VoidFunction) => void;
}

export const AuthContext = createContext<AuthContextType>({
  user: null,
  signin: () => false,
  signout: () => false,
  isAdmin: false,
  isSuper: false,
});

type Props = {
  children: React.ReactNode;
};

function AuthProvider({ children }: Props) {
  const [user, setUser] = useState<IUser | null>(null);

  function signin(newUser: IUser, callback: VoidFunction) {
    return authProvider.signin(() => {
      setUser(newUser);
      callback();
    });
  }

  function signout(callback: VoidFunction) {
    return authProvider.signout(() => {
      setUser(null);
      callback();
    });
  }

  const isAdmin =
    user?.roles.some((role) => role === ROLES.ADMIN_ROLE) || false;
  const isSuper =
    user?.roles.some((role) => role === ROLES.SUPER_ROLE) || false;

  const value = { user, signin, signout, isSuper, isAdmin };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthProvider;
