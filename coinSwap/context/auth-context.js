import React, { createContext, useState } from "react";


export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [isLoading, setIsLoading] = useState(false)
    const [userToken, setUserToken] = useState(null)

    const login = () => {
        setUserToken('james')
        setIsLoading(false)
    }


    const logout = () => {
        setUserToken(null)
        setIsLoading(false)
    }


    return (
        <AuthContext.Provider value={{ login, logout, userToken, isLoading }}>
            {children}
        </AuthContext.Provider>
    )
}