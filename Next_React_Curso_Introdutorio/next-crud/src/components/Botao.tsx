interface BotaoProps {
    cor?: 'green' | 'blue' | 'gray'
    children : any
    className?: string
}

export default function Botao(props: BotaoProps) {
    return (
        <button className={`
            bg-gradient-to-r from-blue-400 to-blue-500
            text-white px-4 rounded-md
            ${props.className}
        `}>
            {props.children}
        </button>
    )
}