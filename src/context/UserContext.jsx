import { createContext } from 'react';
export const UserContext = createContext(null);
export function UserProvider({ children }) {
    const user = {
        name: "ahmed ",
        age: 25,
        email: "mh5242478@gmail.com",
        role: "frontend developer"
    };
    return (
        <UserContext.Provider value={user} >
            {children}
        </UserContext.Provider>
    );
}
