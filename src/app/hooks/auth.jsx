import { useContext } from "react";
import { AuthContext } from "../contexts/auth-context";


export function useAuth() {
    const { user, isLoading, logout } = useContext(AuthContext);

    return {
        user,
        isLoading,
        isAuthenticated: !!user,
        logout
    };
}