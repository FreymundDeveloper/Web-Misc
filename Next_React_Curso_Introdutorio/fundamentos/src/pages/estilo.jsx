import styles from '../styles/Estilo.module.css'
import Layout from '../components/Layout'

export default function Estilo() {
    return (
        
        <Layout titulo='Exmplo CSS'>
            <div className={styles.roxo}>
                <h1>Style modulos</h1>
            </div>
        </Layout>
    )
}