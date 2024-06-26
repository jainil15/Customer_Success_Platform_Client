import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { baseUrl } from "../Environments/environment.development";
import "../Css/Login.css";
export const Login = () => {
  const {
    loginWithRedirect,
    user,
    isAuthenticated,
    isLoading,
    getAccessTokenSilently,
  } = useAuth0();
  useEffect(() => {
    if (isAuthenticated && !isLoading && user) {
      const postUser = async () => {
        try {
          const data = {
            id: user.sub,
            name: user.nickname,
            email: user.email,
          };
          const token = await getAccessTokenSilently();
          const response = await axios.post(`${baseUrl}/user`, data, {
            headers: { Authorization: `Bearer ${token}` },
          });
        } catch (e) {}
      };
      postUser();
    }
  }, [getAccessTokenSilently, isAuthenticated, isLoading, user]);
  if (isLoading) {
    return (
      <div className="w-full h-[100vh] flex justify-center items-center bg-black">
        <div className="text-white">Loading...</div>
      </div>
    );
  } else if (!isLoading && !isAuthenticated) {
    return (
      <div className="w-full h-[100vh] flex justify-center items-center bg-black">
        <div
          className="flex flex-col fixed items-center text-gray-100 text-[14rem]"
          style={{
            lineHeight: "14rem",
            letterSpacing: "2.5rem",
            opacity: "10%",
          }}
        >
          <div className="left-to-right">CUSTOMER</div>
          <div className="right-to-left">SUCCESS</div>
          <div className="left-to-right">PLATFORM</div>
        </div>
        <button
          onClick={() => loginWithRedirect()}
          className="bg-white px-8 py-3 rounded-lg text-gray-100 z-10 bg-opacity-10 font-semibold "
        >
          Login
        </button>
      </div>
    );
  } else if (!isLoading && isAuthenticated) {
    return <Navigate to="/home" />;
  }
};
