interface ButtonProps {
    caption: string
    icon?: any
    className?: string 
}

export default function Button(props: ButtonProps) {
    return (
        <button className={`
            flex flex-row h-10 px-2 rounded-md gap-2
            bg-[#7D8F69] hover:bg-[#A9AF7E]
            ${props.className}
        `}>{props.caption}{props.icon}</button>
    )
}