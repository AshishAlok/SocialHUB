import React, { useState, useEffect } from "react";
import { setCookie, getCookie, deleteCookie } from "./CookiesFunction";
import api from "../services/api";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Profile from "./profile";

export default function Home()
{   

    return (
        <div>
            <Profile/>
        </div>
    );
}