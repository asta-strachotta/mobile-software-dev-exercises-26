import React, {createContext, useContext, useState} from "react";

//defining the context
interface AuthContextType {
    user: string | null;
    login: (username: string) => void;
    logout: () => void;
}

//creating the authentication context
const AuthContext = createContext<AuthContextType | undefined>(undefined);

//creating an auth provider
export function AuthProvider({children}: { children: React.ReactNode }) {
    //TODO: Add user state here

    //TODO: create login function here


    //TODO: create logout function here


    //TODO: collect elements into a single object

    return (
        //TODO: wrap children with the AuthContext, and pass the elements to the value-prop
        <></>
    );
}

export function useAuth() {
    //TODO: get the authentication context
    //TODO: handle the undefined case
    //TODO: return the context
}