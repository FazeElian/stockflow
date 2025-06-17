import { createContext, useContext } from "react";
import type { UserContextType } from "../../lib/types/services/auth/user.type";

export const UserContext = createContext<UserContextType>({
    user: null,
});

export const useUser = () => useContext(UserContext);