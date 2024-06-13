import { useContext } from "react"
import SecondaryButton from "../Atomos/SecondaryButton";
import BarraPesquisa from "../Moluculas/BarraPesquisa";
import { LojaContexto } from "@/LojaContexto";


export default function LojaNav() {

    const { options, current, setCurrent } = useContext(LojaContexto);
    // console.log(options);
    // console.log(current);
    // console.log(options[current]);

    const toggleCurrent = (i) => {
        setCurrent(i);
    }

    return (
        <div className="w-full bg-[#031B22] flex px-4 py-2 items-center justify-between sticky top-0">
            <div className="flex gap-4">
                {options.map((o, i) => (
                    <SecondaryButton
                        key={i}
                        className={`font-extralight`}
                        current={i == current}
                        onClick={(e) => toggleCurrent(i)}
                    >{o}</SecondaryButton>
                )
                )}
            </div>
            <div className="px-8 flex justify-end items-center gap-4">
                <BarraPesquisa></BarraPesquisa>
                <SecondaryButton className="font-medium text-base ml-24">Wishlist</SecondaryButton>
                <SecondaryButton className="font-medium text-base">Cart</SecondaryButton>
            </div>
        </div>
    )
}
