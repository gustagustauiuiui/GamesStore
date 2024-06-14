import { ArrowLeft, ArrowRight } from "@phosphor-icons/react";
import React from "react"

export default function Carrossel({ items = [] }) {

    const atualIndex = 0;
    const max = items.length-1;
    const [atual, setAtual] = React.useState(items[atualIndex]);

    const handleNext = (e) => {
        e.preventDefault();
        atualIndex = atualIndex - 1 < 0 ? 0 : atualIndex - 1;
        setAtual(items[atualIndex]);
    }

    const handlePrev = () => {
        e.preventDefault();
        atualIndex = atualIndex + 1 > max ? max : atualIndex + 1;
        setAtual(items[atualIndex]);
    }

    console.log(atual);

    return (
        <div className="w-full h-full flex text-white justify-between">
            <div
                className="w-[5%] h-full flex items-center justify-center"
                onClick={(e) => handlePrev(e)}
            >
                <button><ArrowLeft size={32} /></button>
            </div>
            <div>
                {atual.nome}

            </div>
            <div
                className="w-[5%] h-full  flex items-center justify-center"
                onClick={(e) => handleNext(e)}
            >
                <button><ArrowRight size={32} /></button>
            </div>
        </div>
    )
}