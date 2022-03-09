import { onAuthStateChanged, User } from "firebase/auth";
import React, { useCallback, useEffect, useState } from "react";
import { firebase } from "../configs";

const SignUp = () => {
  const [user, setUser] = useState<User | null>(null);
  useEffect(() => {
    onAuthStateChanged(firebase.auth, (user) => {
      if (user) {
        setUser(user);
        console.debug(user);
      } else {
        setUser(null);
      }
    });
  });
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h2>UserInfo</h2>
      <p>{JSON.stringify(user)}</p>
    </div>
  );
};

export default SignUp;
