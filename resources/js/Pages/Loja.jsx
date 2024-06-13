import Authenticated from "@/Layouts/AuthenticatedLayout";
import React from "react";
import LojaNav from "../Components/Organismos/LojaNav";
import LojaContextProvider from "@/LojaContexto";
import LojaBanner from "@/Components/Atomos/LojaBanner";
import LojaRecomendados from "@/Components/Organismos/LojaRecomendados";

export default function Loja({ children }) {

    return (
        <LojaContextProvider>
            <Authenticated>
                <div className="">
                    <LojaNav />
                    <LojaBanner />
                    <LojaRecomendados />
                </div>
            </Authenticated>
        </LojaContextProvider>
    )
}
