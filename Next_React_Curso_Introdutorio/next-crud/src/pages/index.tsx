import { ClientRequest } from "http";
import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import Cliente from "../core/Cliente";

export default function Home() {

  const clientes = [
    new Cliente('Jack', 34, '1'),
    new Cliente('John', 73, '2'),
    new Cliente('Vi', 32, '3'),
    new Cliente('Tedd', 44, '4'),
  ]

  function clientSelect (cliente: Cliente) {}

  function clientDelet (cliente: Cliente) {}

  return (
    <div className={`
      flex justify-center items-center h-screen
      bg-gradient-to-r from-violet-500 to-blue-500
      text-white
    `}>
      <Layout titulo='Cadastro'>
        <Tabela clientes={clientes} 
          clienteSelect={clientSelect}
          clienteDelet={clientDelet}
          />
      </Layout>
    </div>
  )
}
