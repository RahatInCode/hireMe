import { signInWithPopup, signInWithEmailAndPassword } from "firebase/auth";
import { auth, googleProvider, githubProvider } from "../firebase.config";
import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    await signInWithEmailAndPassword(auth, email, password);
  };

  const handleGoogle = async () => {
    await signInWithPopup(auth, googleProvider);
  };

  const handleGithub = async () => {
    await signInWithPopup(auth, githubProvider);
  };

  return (
    <>
      <h2 className="to-blue-600">Login</h2>

      <form onSubmit={handleEmailLogin}>
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Login</button>
      </form>

      <button onClick={handleGoogle}>Continue with Google</button>
      <button onClick={handleGithub}>Continue with GitHub</button>
    </>
  );
}

export default Login;
