// React
import { useState, useEffect } from "react";

// Firebase
import { authStateChanged } from "@firebase/authentication";
import { useRouter } from "next/router";

export const USER_STATES = {
  NOT_LOGGED: null,
  NOT_KNOWN: undefined,
};

export default function useUser() {
  const [user, setUser] = useState(USER_STATES.NOT_KNOWN);
  const router = useRouter();

  useEffect(() => {
    authStateChanged(setUser);
  }, []);

  useEffect(() => {
    user === USER_STATES.NOT_LOGGED && router.push("/signin");
  });

  return user;
}
