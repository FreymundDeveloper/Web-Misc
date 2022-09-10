import { useEffect, useState } from "react"
import ColecaoCliente from "../backend/db/ColecaoCliente"
import Cliente from "../core/Cliente"
import ClienteRepositorio from "../core/ClienteRepositorio"
import useTableOurForm from "./useTableOurForm"

export default function useClientes() {
    const repo: ClienteRepositorio = new ColecaoCliente()

    const {exibirTabela, exibirForm, formularioVisivel, tabelaVisivel} = useTableOurForm()
    const [cliente, setCliente] = useState<Cliente>(Cliente.vazio())
    const [clientes, setClientes] = useState<Cliente[]>([])

    useEffect(obterTodos, [])

    function obterTodos() {
      repo.obterTodos().then(clientes => {
        setClientes(clientes)
        exibirTabela()
      })
    }

    function clientSelect (cliente: Cliente) {
      setCliente(cliente)
      exibirForm()
    }

    async function clientDelet (cliente: Cliente) {
      await repo.excluir(cliente)
      obterTodos()
    }

    function clientNew () {
      setCliente(Cliente.vazio())
      exibirForm()
    }

    async function clientSave (cliente: Cliente) {
      await repo.salvar(cliente)
      obterTodos()
    }

    return {
        exibirTabela,
        tabelaVisivel,
        cliente,
        clientes,
        clientSave,
        clientNew,
        clientDelet,
        clientSelect,
        obterTodos
    }
}