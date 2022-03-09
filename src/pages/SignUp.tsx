import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import React, { useCallback, useState } from "react";
import { firebase } from "../configs";

const SignUp = () => {
  const [loginInfo, setLoginInfo] = useState({ email: "", password: "" });
  const singUp = useCallback(async (email: string, password: string) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        firebase.auth,
        email,
        password
      );
      const user = userCredential.user;
      if (!user.emailVerified) {
        await sendEmailVerification(user);
        alert("email verification sent to user");
      } else {
        alert("email is verified");
      }
    } catch (error) {
      alert(error);
    }
  }, []);

  const handleClickSignUp = useCallback(() => {
    singUp(loginInfo.email, loginInfo.password);
  }, [loginInfo]);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h2>SingUp</h2>
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
      <button onClick={handleClickSignUp}>singUp</button>
    </div>
  );
};

export default SignUp;
