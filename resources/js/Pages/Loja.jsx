import Authenticated from "@/Layouts/AuthenticatedLayout";
import LojaNav from "../Components/Organismos/LojaNav";
import React from "react";

export const LojaContexto = React.createContext(
    {
        options: [],
        current: 0,
        setCurrent: () => { },
    });


export default function Loja({ children }) {
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
            <Authenticated>
                <div className="">
                    <LojaNav />
                </div>
            </Authenticated>
            {children}
        </LojaContexto.Provider>
    );
}