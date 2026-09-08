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
    const [user, setUser] = useState<string | null>(null);

    //TODO: create login function here
    const login = (username: string) => {
        setUser(username);
    }

    //TODO: create logout function here
    const logout = () => {
        setUser(null);
    }

    //TODO: collect elements into a single object
    const data = {user, login, logout};

    return (
        //TODO: wrap children with the AuthContext, and pass the elements to the value-prop
        <AuthContext value={data}>
            {children}
        </AuthContext>
    );
}

export function useAuth() {
    //TODO: get the authentication context
    //TODO: handle the undefined case
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within the AuthProvider");
    }
    return context;
}
