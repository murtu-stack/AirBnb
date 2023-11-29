import { Link, Navigate } from "react-router-dom";
import Header from "../Header";
import { useContext } from "react";
import { useState } from "react";
import { UserContext } from "../UserContext";
import axios from "axios";
export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const { setUser } = useContext(UserContext);
  async function handleLoginSubmit(e) {
    e.preventDefault();
    try {
      const { data } = await axios.post("http://localhost:4000/login", {
        email,
        password,
      });
      console.log(data);
      setRedirect(true);
      setUser(data);
      alert("Login Successful");
    } catch (error) {
      alert("Login failed");
    }
  }
  if (redirect) {
    return <Navigate to={"/"} />;
  }
  return (
    <div className="mt-4  grow items-center flex justify-around">
      <div className="mb-20">
        <h1 className="text-xl text-center mb-4">Login</h1>
        <form className="max-w-md mx-auto" onSubmit={handleLoginSubmit}>
          <input
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button className="primary text-xs">Login</button>
          <div className="text-center text-xs text-gray-500 py-1.5">
            Don't have an account yet?
            <Link
              className="px-1 underline text-xs text-black"
              to={"/register"}
            >
              Register Now
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
