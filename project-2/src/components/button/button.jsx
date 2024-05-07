
const button = ({ isOutline, icon, text, ...rest }) => {

    return (
        <button {...rest} className={`${isOutline ? "bg-white text-black border border-black w-full " : "bg-black text-white"} px-[18px] py-[10px] min-w-[220px] rounded-lg bg-black flex items-center justify-center gap-2`}>
            
            {icon}
            {text}
        </button>
    )
}

export default button
