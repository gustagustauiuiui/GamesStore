import { Link } from "@inertiajs/react";

export default function NavButton({ current = false, children, className = '', href, onClick = () => {}, ...props}){

    return (
        <Link
            {...props}
            className={
                'inline-flex items-center p-2 rounded-[8px] text-xl font-medium leading-5 transition duration-200 ease-in-out' +
                (current 
                    ? ' text-[#0A8CC6] underline font-bold hover:bg-[#092331]  ' 
                    : ' text-white hover:bg-[#092331] ') +
                className
            }
            href={href}
        >
            {children}
        </Link>
    )
}