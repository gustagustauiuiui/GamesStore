import { ArrowLeft, ArrowRight } from "@phosphor-icons/react";
import React from "react"

export default function Carrossel({ items = [] }) {

    const [atual, setAtual] = React.useState(items[0]);
    console.log(atual);

    return (
        <div className="w-full h-full flex text-white justify-between">
            <div className="w-[5%] h-full flex items-center justify-center">
                <button><ArrowLeft size={32} /></button>
            </div>
            <div>
                {atual.nome}

            </div>
            <div className="w-[5%] h-full  flex items-center justify-center">
                <button><ArrowRight size={32} /></button>
            </div>
        </div>
    )
}