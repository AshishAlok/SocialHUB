import { createContext, useState, useEffect } from "react";
import axios from "../services/authService";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) setUser(JSON.parse(localStorage.getItem("user")));
    }, []);

    const login = async (credentials) => {
        const res = await axios.post("/login", credentials);
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user", JSON.stringify(res.data.user));
        setUser(res.data.user);
    };

    return <AuthContext.Provider value={{ user, login }}>{children}</AuthContext.Provider>;
};
