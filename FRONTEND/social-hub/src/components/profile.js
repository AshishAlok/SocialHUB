import React, { useState, useEffect } from "react";
import api from "../services/api";
import { getCookie } from "./CookiesFunction";

function Profile() {

 
  // setCookie("userId", user.uid, 24);
  // setCookie("userEmail", user.email, 24);
  // setCookie("userName", user.displayName, 24);
  // setCookie("tokenId", idToken, 24);
  // setCookie("userInstitute", institute, 24);
  // setCookie("userGender", gender, 24);

  let userId = getCookie("userId");
  let userName = getCookie("userName");
  let userEmail = getCookie("userEmail");


  return (
    <div className="profile-container">
      {/* <img src={userData.imageUrl} alt="User profile picture" /> */}
      <h2>{userName}</h2>
      <p>{userEmail}</p>
    </div>
  );
}

export default Profile;