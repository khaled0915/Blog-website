import { createContext } from "react";
import { getAuth } from "firebase/auth"

export const AuthContext = createContext(null);

const auth = getAuth(app);