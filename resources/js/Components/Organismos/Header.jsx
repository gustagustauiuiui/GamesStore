import ApplicationLogo from "../Atomos/ApplicationLogo";
import BarraNav from "../Moluculas/BarraNav";
import PerfilNav from "../Moluculas/PerfilNav";

export default function header(){

    return(
        <div className="w-full h-24 bg-[#030F15]">
            <BarraNav />
            <PerfilNav />
        </div>
    )
}