import { createContext, useContext, useEffect, useState } from "react";
import { FC, ReactNode } from "react";
import { auth } from "../firebase-config";
import { User } from "firebase/auth";

interface AuthContextType {
    user: User | null,
    updateUser : (user: User) => void
}
const AuthContext = createContext<AuthContextType>({
    user: null,
    updateUser: () => {}
});

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => useContext(AuthContext);

const AuthProvider : FC<{children: ReactNode}> = ({children}) => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    const updateUser = (user: User) => {
        setUser(user as User);
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setUser(user as User); // Assuming you want the user ID
            setLoading(false);
          });
          return () => unsubscribe(); // Clean up
    }, [user])

    return <AuthContext.Provider value={{user, updateUser}}>
        {!loading && children}
    </AuthContext.Provider>
}

export default AuthProvider;