import { createContext, useContext } from "react";
import type { UserContextType } from "../../lib/types/services/user.type";

export const UserContext = createContext<UserContextType>({
    user: null,
});

export const useUser = () => useContext(UserContext);