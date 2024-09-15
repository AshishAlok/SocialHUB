import React, { useState, useEffect } from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";
import { setCookie, getCookie, deleteCookie } from "./CookiesFunction";
import api from "../services/api";
import { useNavigate } from 'react-router-dom';

import Welcome from "./home";

const LoginButton = () => {
  const [institute, setInstitute] = useState("");
  const [gender, setGender] = useState("male");
  const navigate = useNavigate();

  const handleGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      const idToken = await user.getIdToken(); // Obtain the user's ID token
      // console.log("User ID:", user.uid);
      // console.log("name",user.displayName);
      // console.log("UserEmail",user.email);
      // console.log("ID Token:", idToken); // You can access other profile data as needed

      setCookie("userId", user.uid, 24);
      setCookie("userEmail", user.email, 24);
      setCookie("userName", user.displayName, 24);
      setCookie("tokenId", idToken, 24);
      setCookie("userInstitute", institute, 24);
      setCookie("userGender", gender, 24);

    } catch (error) {
      console.error("Authentication error:", error);
    }
  };

  const signIn = async () => {
    // console.log("bhai vhai");
    if (institute.trim() !== "" && gender.trim() !== "") {
      // If institute value is not empty, proceed with your logic
      // For example, you can make an API call to register the institute
      try {
        await handleGoogle(); // Call handleGoogle to authenticate the user
        // console.log(`${user.displayName}`);
        const currentUser = auth.currentUser;
        // Make the API call using the current user's information
        console.log(`${currentUser.email}`);
        console.log(`${currentUser.displayName}`);

        const response = await api.post("/auth/register", {
          email: currentUser.email,
          name: currentUser.displayName,
          gender: gender,
          institute: institute
        });
        if (response.status === 200) {
          console.log("user registered successfully");
        } else if (response.status === 500) {
          console.log("user registeration failed");
        }
        else {
          console.error("Failed to register user:", response.statusText);
        }
      } catch (error) {
        console.error("Error registering user:", error);
      }
    } else {
      // If institute value is empty, display an error message or take appropriate action
      console.error("Please enter the institute name or gender");
    }

  };
  const logIn = async () => {
    try {
      await handleGoogle(); // Call handleGoogle to authenticate the user
      // console.log(`${user.displayName}`);
      const currentUser = auth.currentUser;


      const response = await api.post('/auth/login', { email: currentUser.email });

      if (response.status === 200) {
        const { token } = response.data;
        // Store the JWT token securely 
        setCookie('jwtToken', token);
        navigate('/home');

      }
      else {
        console.log("NOT A VERFIED USER!");
      }
    } catch (error) {
      console.error('Error logging in:', error);
    }


  }

  return (
    <>
      <button onClick={logIn}>LogIn with Google</button>
      {/* <button onClick = {testApi}> Test</button> */}
      <button onClick={signIn}>SignIn with Google</button>
      <div>
        <label htmlFor="instituteName">Institute Name:</label>
        <input
          type="text"
          id="instituteName"
          name="instituteName"
          value={institute}
          onChange={(e) => setInstitute(e.target.value)}
          required
        />
      </div>

      <div>
        <label htmlFor="gender">Gender:</label>
        <select
          id="gender"
          name="gender"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </div>
      

    </>
  );
};

export default LoginButton;
