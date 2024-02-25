import React, { useState } from "react";
import { useContext } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { UserContext } from "../UserContext";
import axios from "axios";

import PlacePages from "./place_pages";
import AccountNav from "../AccountNav";
export default function ProfilePage() {
  const { user, ready, setUser } = useContext(UserContext);
  const [redirect, setRedirect] = useState(null);
  let { subpage } = useParams();
  if (subpage === undefined) {
    subpage = "profile";
  }
  console.log(user, "user", ready);
  async function logout() {
    await axios.post("http://localhost:4000/logout");
    setUser(null);
    setRedirect("/");
  }
  console.log("loading", ready);
  // if (!ready) {
  //   return "Loading........";
  // }
  if (!user && ready) {
    return <Navigate to={"/login"} />;
  }

  if (redirect) {
    <Navigate to={redirect}></Navigate>;
  }
  return (
    <div>
      <AccountNav />
      {subpage === "profile" && (
        <div className="text center max-w-sm mx-auto">
          Logged in as {user?.name} {user?.email}
          <br />
          <button onClick={logout} className="primary max-w-sm">
            Logout
          </button>
        </div>
      )}
      {subpage === "places" && <PlacePages />}
    </div>
  );
}
