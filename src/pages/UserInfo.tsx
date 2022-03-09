import { IdTokenResult, onAuthStateChanged, User } from "firebase/auth";
import React, { useCallback, useEffect, useState } from "react";
import { firebase } from "../configs";

const SignUp = () => {
  const [user, setUser] = useState<User | null>(null);
  const [idToken, setIdToken] = useState<string | null>(null);
  const [idTokenResult, setIdTokenResult] = useState<IdTokenResult | null>(
    null
  );
  useEffect(() => {
    onAuthStateChanged(firebase.auth, async (user) => {
      if (user) {
        setUser(user);
        console.debug(user);
        setIdToken(await user.getIdToken());
        console.debug({
          setIdTokenResult: await user.getIdTokenResult(),
        });
        setIdTokenResult(await user.getIdTokenResult());
      } else {
        setUser(null);
      }
    });
  }, []);
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h2>UserInfo</h2>
      <p>{JSON.stringify(user)}</p>
      <h2>IdToken</h2>
      <p>{idToken}</p>
      <h2>claims</h2>
      <p>{JSON.stringify(idTokenResult?.claims)}</p>
    </div>
  );
};

export default SignUp;
