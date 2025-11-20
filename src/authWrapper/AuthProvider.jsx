import React, { useState } from "react";
import AuthContext from "./AuthContext";

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const login = (username, password) => {
        setUser({username, password})
    }

    const logout = () => {
        setUser(null);
    }


    return <AuthContext.Provider value={{user, login, logout}} >{ children}</AuthContext.Provider>
}