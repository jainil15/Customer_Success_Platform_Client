import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const ProfileIcon = () => {
  const {user} = useAuth0()
  return (
    <div className="flex items-center gap-2 min-w-[140px] justify-center  ">
      <img
        className=" rounded-full"
        src={user.picture}
        style={{
          width: "35px",
          height: "35px",
        }}
      />
      <div>{user.nickname}</div>
    </div>
  );
};

export default ProfileIcon;
