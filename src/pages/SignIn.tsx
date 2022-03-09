import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useCallback, useState } from "react";
import { firebase } from "../configs";

const SignIn = () => {
  const [loginInfo, setLoginInfo] = useState({ email: "", password: "" });
  const singUp = useCallback(async (email: string, password: string) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        firebase.auth,
        email,
        password
      );
      console.debug({
        userCredential,
        user: userCredential.user,
      });
    } catch (error) {
      alert(error);
    }
  }, []);

  const handleClickSignIn = useCallback(() => {
    singUp(loginInfo.email, loginInfo.password);
  }, [loginInfo]);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h2>SignIn</h2>
      <input
        name="email"
        onChange={(e) =>
          setLoginInfo((info) => ({ ...info, [e.target.name]: e.target.value }))
        }
      />
      <input
        name="password"
        onChange={(e) =>
          setLoginInfo((info) => ({ ...info, [e.target.name]: e.target.value }))
        }
      />
      <button onClick={handleClickSignIn}>singUp</button>
    </div>
  );
};

export default SignIn;
