import React from "react";
import { useTheme } from "../Contect";

type HeaderProps = {
    title: string;
};
export const HeaderComponent: React.FC<HeaderProps> = ({ title }) => {
    const {theme, toggleTheme} = useTheme()
    return (
        <header className={theme === 'light' ? 'light-mode' : 'dark-mode'}>
             <h1>{title}</h1>
             <button onClick={toggleTheme}>{theme}</button>
        </header>
    )
    
};
