export default function SecondaryButton({ className = '', disabled, current, children, onClick = () => {}, ...props }) {

    return (
        <button
            {...props}
            className={
                `p-4 min-h-8 rounded-md font-light text-sm text-white hover:bg-[#092230] transition ease-in-out duration-150 
                ${disabled
                && 'opacity-25'} ` +
                (current 
                    ? ' bg-[#092230] ' 
                    : '') +
                className
            }
            disabled={disabled}
            onClick={onClick}
        >
            {children}
        </button>
    );
}
