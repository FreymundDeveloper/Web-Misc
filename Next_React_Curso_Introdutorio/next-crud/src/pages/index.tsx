import { ClientRequest } from "http";
import { useEffect, useState } from "react";
import ColecaoCliente from "../backend/db/ColecaoCliente";
import Botao from "../components/Botao";
import Formulario from "../components/Formulario";
import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import Cliente from "../core/Cliente";
import ClienteRepositorio from "../core/ClienteRepositorio";
import useClientes from "../hooks/useClientes";

export default function Home() {

  const { clientSelect, clientDelet, clientSave, clientNew, cliente, clientes, tabelaVisivel, exibirTabela } = useClientes()

  return (
    <div className={`
      flex justify-center items-center h-screen
      bg-gradient-to-r from-violet-500 to-blue-500
      text-white
    `}>
      <Layout titulo='Cadastro'>
        {tabelaVisivel ? (
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
          cancelado={() =>  exibirTabela}
          />
        )}
      </Layout>
    </div>
  )
}
