import { LojaContexto } from "@/Pages/Loja";
import { useContext } from "react"
import NavButton from "../Atomos/NabButton";
import SecondaryButton from "../Atomos/SecondaryButton";
import TextInput from "../Atomos/TextInput";
import BarraPesquisa from "../Moluculas/BarraPesquisa";
import { Input } from "@mui/material";

export default function LojaNav() {

    const { options, current, setCurrent } = useContext(LojaContexto);
    // console.log(options);
    // console.log(current);
    // console.log(options[current]);

    const toggleCurrent = (i) => {
        setCurrent(i);
    }

    return (
        <div className="w-full bg-[#031B22] flex gap-4 px-4 py-2">
            {options.map((o, i) => (
                <SecondaryButton
                    key={i}
                    className={`font-extralight`}
                    current={i == current}
                    onClick={(e) => toggleCurrent(i)}
                >{o}</SecondaryButton>
            )
            )}
            <BarraPesquisa></BarraPesquisa>
        </div>
    )
}
