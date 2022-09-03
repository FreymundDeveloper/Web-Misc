import { ClientRequest } from "http";
import { useEffect, useState } from "react";
import ColecaoCliente from "../backend/db/ColecaoCliente";
import Botao from "../components/Botao";
import Formulario from "../components/Formulario";
import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import Cliente from "../core/Cliente";
import ClienteRepositorio from "../core/ClienteRepositorio";

export default function Home() {

  const repo: ClienteRepositorio = new ColecaoCliente()

  const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela')
  const [cliente, setCliente] = useState<Cliente>(Cliente.vazio())
  const [clientes, setClientes] = useState<Cliente[]>([])

  useEffect(obterTodos, [])

  function obterTodos() {
    repo.obterTodos().then(clientes => {
      setClientes(clientes)
      setVisivel('tabela')
    })
  }

  function clientSelect (cliente: Cliente) {
    setCliente(cliente)
    setVisivel('form')
  }

  async function clientDelet (cliente: Cliente) {
    await repo.excluir(cliente)
    obterTodos()
  }

  function clientNew () {
    setCliente(Cliente.vazio())
    setVisivel('form')
  }

  async function clientSave (cliente: Cliente) {
    await repo.salvar(cliente)
    obterTodos
  }

  return (
    <div className={`
      flex justify-center items-center h-screen
      bg-gradient-to-r from-violet-500 to-blue-500
      text-white
    `}>
      <Layout titulo='Cadastro'>
        {visivel === 'tabela' ? (
          <>
            <div className="flex justify-end">
              <Botao cor="blue" className="mb-4" 
                onClick={clientNew}>
                Novo Cliente
              </Botao>
            </div>
            <Tabela clientes={clientes} 
              clienteSelect={clientSelect}
              clienteDelet={clientDelet}
            />
          </>

        ) : (
          <Formulario 
          cliente={cliente}
          clienteMudou={clientSave}
          cancelado={() =>  setVisivel('tabela')}
          />
        )}
      </Layout>
    </div>
  )
}
