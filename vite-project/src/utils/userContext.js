import { createContext } from "react";

const userContext = createContext({
    currentUser: "abc",
});

export default userContext;