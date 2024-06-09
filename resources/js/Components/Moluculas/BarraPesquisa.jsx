import { Input } from "@mui/material";
import TextInput from "../Atomos/TextInput";
import { MagnifyingGlass } from "@phosphor-icons/react";

export default function BarraPesquisa() {

    return (
        <div className="flex ">
            <MagnifyingGlass size={24} />
            <TextInput
                
            >

            </TextInput>
        </div>
    )
}