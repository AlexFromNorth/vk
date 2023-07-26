import { FC, createContext, useEffect, useMemo, useState } from "react";
import { IUser, TypeSetState } from "../../types";
import { Auth, getAuth, onAuthStateChanged } from "firebase/auth";
import { users } from "../layout/sidebar/DataUsers";
import { useNavigate } from "react-router-dom";

interface IContext {
  user: IUser | null;
  setUser: TypeSetState<IUser | null>;
  ga: Auth;
}
interface Props {
  children: React.ReactNode;
}

export const AuthContext = createContext<IContext>({} as IContext);

export const AuthProvider: FC<Props> = ({ children }) => {
  const [user, setUser] = useState<IUser | null>(null);

  const ga = getAuth();

  useEffect(() => {
    const auth = getAuth();
    const unListen = onAuthStateChanged(ga, (authUser) => {
      if (authUser) {
        setUser(
          {
            id: authUser.uid,
            avatar: users[1].avatar,
            name: authUser?.displayName || "",
          }
        );
      }
      else{
        setUser(null)
      }
    });
    return () => {
      unListen();
    };
  }, []);

  const values = useMemo(
    () => ({
      user,
      setUser,
      ga,
    }),
    [user, ga]
  );

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};
