import Layout from "../../../components/Layout";
import { useRouter } from "next/router";

export default function ClinteProCodigo() {
    const router = useRouter()

    return (
        <Layout titulo='Navegação D'>
            <div>Código = {router.query.codigo}</div>
            <div>Filial = {router.query.filial}</div>
        </Layout>
    )
}