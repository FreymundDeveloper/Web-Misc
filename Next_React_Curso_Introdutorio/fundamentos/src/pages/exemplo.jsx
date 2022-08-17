import Cabecalho from "../components/Exemplo";
import Layout from "../components/Layout";

export default function Exemplo() {
    return (
        <Layout titulo='Componentes'>
            <Cabecalho title='Next.js'/>
            <Cabecalho title='Exemplo'/>
        </Layout>
    )
}