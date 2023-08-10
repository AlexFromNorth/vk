import { FC, createContext, useEffect, useMemo, useState } from "react";
import { IUser, TypeSetState } from "../../types";
import { Auth, getAuth, onAuthStateChanged } from "firebase/auth";
// import { users } from "../layout/sidebar/DataUsers";
import {
  Firestore,
  collection,
  getFirestore,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
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

  const [currentUser, setCurrentUser] = useState<any[]>([]);

  // console.log('test')
  // console.log(Firebase_db("users"))

  useEffect(() => {
    const unListen = onAuthStateChanged(ga, (authUser) => {
      console.log(authUser);
      if (!!authUser) {
        const q = query(
          collection(db, "users"),
          where("userData.uid", "==", authUser?.uid)
        );

        const unsub = onSnapshot(q, (doc) => {
          const array: any[] = [];
          doc.forEach((d) => {
            array.push(d.data());
          });
          setCurrentUser(array);
        });
      }
    });

    return () => {
      unListen();
    };
  }, []);

  useEffect(() => {
    const unListen = onAuthStateChanged(ga, (authUser) => {
      if (authUser) {
        setUser({
          id: authUser.uid,
          // avatar: users[1].avatar,
          // удалить тут аватар или переделать
          avatar: currentUser[0]?.userData.avatar,
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

  // console.log(currentUser)
  const values = useMemo(
    () => ({
      user,
      setUser,
      ga,
      db,
    }),
    [user, ga]
  );
  // console.log(user)

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};
