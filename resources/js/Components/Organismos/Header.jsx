import ApplicationLogo from "../Atomos/ApplicationLogo";
import BarraNav from "../Moluculas/BarraNav";
import PerfilNav from "../Moluculas/PerfilNav";

export default function header({user}){

    return(
        <div className="w-full p-5 bg-[#030F15] flex justify-between items-center flex-1">
            <BarraNav />
            <PerfilNav user={user} />
        </div>
    )
}