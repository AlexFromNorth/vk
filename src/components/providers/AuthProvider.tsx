import { FC, createContext, useEffect, useMemo, useState } from "react";
import { IUser, TypeSetState } from "../../types";
import { Auth, getAuth, onAuthStateChanged } from "firebase/auth";
// import { users } from "../layout/sidebar/DataUsers";
import { Firestore, getFirestore } from "firebase/firestore";
import { useAuth } from "./useAuth";
import Firebase_db from "../routes/Firebase_db";

interface IContext {
  user: IUser | null;
  setUser: TypeSetState<IUser | null>;
  ga: Auth;
  db: Firestore;
}
interface Props {
  children: React.ReactNode;
}

export const AuthContext = createContext<IContext>({} as IContext);

export const AuthProvider: FC<Props> = ({ children }) => {
  const [user, setUser] = useState<IUser | null>(null);
  const ga = getAuth();
  const db = getFirestore();


// console.log('test')


useEffect(() => {
  const auth = getAuth();
  const unListen = onAuthStateChanged(ga, (authUser) => {
    if (authUser) {
      setUser({
        id: authUser.uid,
        // avatar: users[1].avatar,
        // удалить тут аватар или переделать
        // avatar: 'https://i.pinimg.com/originals/a7/9c/f3/a79cf3ef0d9a67d718c06cf51b9b3d5b.jpg',
        name: authUser?.displayName || "",
      });
    } else {
      setUser(null);
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
      db,
    }),
    [user, ga]
  );

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};
