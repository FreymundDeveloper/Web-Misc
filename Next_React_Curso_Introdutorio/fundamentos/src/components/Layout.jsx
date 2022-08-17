import Link from "next/link";
import styles from '../styles/Layout.module.css'

export default function Layout(props) {
    return (
        <div className={styles.layout}>
            <div className={styles.cabecalho}>
                <h1>{props.titulo ?? 'Exemp'}</h1>
                <Link href='/'>Back</Link>
            </div>

            <div className={styles.conteudo}>
                {props.children}
            </div>
        </div>
    )
}