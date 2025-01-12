import { createContext } from "react";
import { theme } from "./theme";

type ThemContextProviderProps = {
    children: React.ReactNode;
};

export const ThemContext = createContext(theme);

export const ThemeContextProvider = ({children}: ThemContextProviderProps) =>{
    return (
        <ThemContext.Provider value={theme}>
            {children}
        </ThemContext.Provider>
    );
}
