import { Input } from "@mui/material";
import TextInput from "../Atomos/TextInput";
import { MagnifyingGlass } from "@phosphor-icons/react";

export default function BarraPesquisa() {

    return (
        <div className="flex items-center justify-between gap-2 bg-[#03141A] pl-4 h-[40px]">
            <MagnifyingGlass size={24} color="#828282" />
            <input className="px-2 border-none w-[268px] bg-[#03141A] text-gray-200 focus:shadow-none focus:ring-transparent" placeholder="Search" ></input>
        </div>
    )
}