import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function registerUser(ev) {
    ev.preventDefault();

    try {
      await axios.post("http://localhost:4000/register", {
        name,
        email,
        password,
      });
      alert("Regitration Successful, Now u can Login");
    } catch (e) {
      alert("Registration Failed, Please try again later");
    }
  }
  return (
    <div className="mt-4  grow items-center flex justify-around">
      <div className="mb-20">
        <h1 className="text-xl text-center mb-4">Register</h1>
        <form className="max-w-md mx-auto" onSubmit={registerUser}>
          <input
            type="text"
            value={name}
            placeholder="Joh Doe"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <input
            type="email"
            value={email}
            placeholder="your@email.com"
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
          <button className="primary text-xs">Register</button>
          <div className="text-center text-xs text-gray-500 py-1.5">
            Already a memeber?
            <Link className="px-1 underline text-xs text-black" to={"/login"}>
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
