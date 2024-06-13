import Titulo from "../Atomos/Titulo";
import VerMais from "../Atomos/VerMais";
import Carrossel from "./Carrossel";

export default function LojaRecomendados(){

    const recomendados = [
        {nome: 'asd'},
        {nome: 'asd2'},
    ];

    return (
        <div className="w-full bg-[#05171C] flex items-center justify-center pb-20">
            <div className="w-[80%]">
                <div className="flex items-center justify-between p-4">
                    <Titulo>Recomendações e em destaque</Titulo>
                    <VerMais href={'#'}></VerMais>
                </div>
                <div className="bg-gradient-to-t to-[#05171C] from-[#051B20] h-[500px]">
                    <Carrossel items={recomendados}></Carrossel>
                </div>
            </div>
        </div>
    )
}