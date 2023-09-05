import React from "react";

type HeaderProps = {
    title: string;
};
export const HeaderComponent: React.FC<HeaderProps> = ({ title }) => {
    return <h1>{title}</h1>;
};
