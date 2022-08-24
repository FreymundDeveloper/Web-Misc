import Cliente from "../core/Cliente";
import { IconeEdit, IconeJunk } from "./Icones";

interface TabelaProps {
    clientes: Cliente[]
    clienteSelect?: (cliente: Cliente) => void
    clienteDelet?: (cliente: Cliente) => void
}

export default function Tabela(props: TabelaProps) {

    const exibirAcoes = props.clienteDelet || props.clienteSelect

    function renderCabecalho() {
        return (
        <tr>
            <th className="teext-left p-4">Código</th>
            <th className="teext-left p-4">Nome</th>
            <th className="teext-left p-4">Idade</th>
            {exibirAcoes ? <th className="p-4">Ações</th> : false}
        </tr>
        )
    }

    function renderDados() {
        return props.clientes?.map((cliente, i) => {
            return (
                <tr key={cliente.id} 
                    className={`${i % 2 === 0 ? 'bg-violet-200' : 'bg-violet-100'}`}>
                    <td className="text-left p-4">{cliente.id}</td>
                    <td className="text-left p-4">{cliente.nome}</td>
                    <td className="text-left p-4">{cliente.idade}</td>
                    {exibirAcoes ? renderAcoes(cliente) : false}
                </tr>
            )
        })
    }

    function renderAcoes(cliente: Cliente) {
        return (
            <td className="flex justify-center">
                {props.clienteSelect ? (
                    <button onClick={() => props.clienteSelect?.(cliente)} className={`
                        flex justify-center items-center
                        text-green-600 rounded-full p-2 m-1
                        hover:bg-violet-50
                    `}>
                        {IconeEdit}
                    </button>
                ) : false}

                {props.clienteDelet ? (
                    <button onClick={() => props.clienteDelet?.(cliente)} className={`
                        flex justify-center items-center
                        text-red-600 rounded-full p-2 m-1
                        hover:bg-violet-50
                    `}>
                        {IconeJunk}
                    </button>
                ) : false}
                
            </td>
        )
    }

    return (
        <table className="w-full rounded-xl overflow-hidden">
            <thead className={`
                text-gray-100
                bg-grandient-to-r from-violet-500 to-violet-800
            `}>
                {renderCabecalho()}
            </thead>

            <tbody>
                {renderDados()}
            </tbody>
        </table>
    )
}