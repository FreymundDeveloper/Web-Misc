import { ClientRequest } from "http";
import { useState } from "react";
import Botao from "../components/Botao";
import Formulario from "../components/Formulario";
import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import Cliente from "../core/Cliente";

export default function Home() {

  const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela')
  const [cliente, setCliente] = useState<Cliente>(Cliente.vazio())

  const clientes = [
    new Cliente('Jack', 34, '1'),
    new Cliente('John', 73, '2'),
    new Cliente('Vi', 32, '3'),
    new Cliente('Tedd', 44, '4'),
  ]

  function clientSelect (cliente: Cliente) {
    setCliente(cliente)
    setVisivel('form')
  }

  function clientDelet (cliente: Cliente) {}

  function clientNew () {
    setCliente(Cliente.vazio())
    setVisivel('form')
  }

  function clientSave (cliente: Cliente) {
    setVisivel('tabela')
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
