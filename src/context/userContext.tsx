import { createContext } from "react";
import { UserResponse } from "../redux/actions/userAction";

export const UserContext = createContext<UserResponse | null>(null);
