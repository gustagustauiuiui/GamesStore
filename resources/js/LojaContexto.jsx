import React from "react";

export const LojaContexto = React.createContext(
    {
        options: [],
        current: 0,
        setCurrent: () => { },
    });


export default function LojaContextProvider({ children }) {
    const options = [
        'Home',
        'Browse',
        'Discover',
        'Points Shop',
        'Gift Cards',
        'News',
    ];

    const [current, setCurrent] = React.useState(0);

    return (
        <LojaContexto.Provider value={{ options, current, setCurrent }}>
            {children}
        </LojaContexto.Provider>
    );
}