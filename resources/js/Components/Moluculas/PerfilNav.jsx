import { Bell, CaretDown, User, UsersThree } from "@phosphor-icons/react";
import PrimaryButton from "../Atomos/PrimaryButton";

export default function PerfilNav({ user }) {

    return (
        <div className="flex items-center px-9 justify-end gap-4 flex-wrap">
            <PrimaryButton className="py-1"><UsersThree size={18} weight="fill" /></PrimaryButton>
            <PrimaryButton className="py-2"> <Bell size={14} /> </PrimaryButton>
            <PrimaryButton className="w-[185px]">
                <div className="w-full flex items-center justify-start gap-2">
                    <User size={14} weight="fill" />
                    {user.name}
                </div>
                <CaretDown size={12} weight="fill" />
            </PrimaryButton>
        </div>
    )
}