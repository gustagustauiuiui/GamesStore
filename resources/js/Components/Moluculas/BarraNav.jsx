import NavButton from "../Atomos/NabButton";
import NavLink from "../Atomos/NavLink";

export default function BarraNav(){

    return(
        <div className="w-2/5 h-full flex items-center justify-center gap-4">
            <NavButton current={true}> Store </NavButton>
            <NavButton> Discover </NavButton>
            <NavButton> Libary </NavButton>
            <NavButton> Community </NavButton>
        </div>
    )
}