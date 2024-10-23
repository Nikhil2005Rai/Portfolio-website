import ActiveSectionContextProvider from "./active-section";
import React from "react";
import ThemeContextProvider from "./theme-context";

type ProviderProps = {
    children: React.ReactNode;
}

export default function Providers({ children } : ProviderProps){
    return (
        <ThemeContextProvider>
        <ActiveSectionContextProvider>
            {children}
        </ActiveSectionContextProvider>
        </ThemeContextProvider>
    )
}