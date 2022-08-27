interface BotaoProps {
    cor?: 'green' | 'blue' | 'gray'
    children : any
    className?: string
    onClick: () => void
}

export default function Botao(props: BotaoProps) {
    const cor = props.cor ?? 'gray'
    return (
        <button onClick={props.onClick} className={`
            bg-gradient-to-r from-blue-400 to-blue-500
            text-white px-4 rounded-md
            ${props.className}
        `}>
            {props.children}
        </button>
    )
}