// React
import { useState, useEffect } from "react";

// NextJS
import { useRouter } from "next/router";

// Firebase
import { authStateChanged } from "@firebase/authentication";

export const USER_STATES = {
  NOT_LOGGED: null,
  NOT_KNOWN: undefined,
};

// Hook
export default function useUser() {
  const [user, setUser] = useState(USER_STATES.NOT_KNOWN);
  const router = useRouter();

  useEffect(() => {
    authStateChanged(setUser);
  }, []);

  useEffect(() => {
    user === USER_STATES.NOT_LOGGED && router.push("/signin");
  }, [user]);

  return user;
}
