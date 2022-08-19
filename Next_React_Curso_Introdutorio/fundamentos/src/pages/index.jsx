import Navegador from "../components/Navegador"
import styles from "../styles/Navegador.module.css"

export default function Inicio() {

    return (
        <div className={styles.base}>
            <Navegador texto='Estilo' destino='/estilo'/>
            <Navegador texto='Exemplo' destino='/exemplo'/>
            <Navegador texto='Navegação 1' destino='/navegacao'/>
            <Navegador texto='Navegação 2' destino='/cliente/sp-2/123'/>
            <Navegador texto='State' destino='/estado'/>
            <Navegador texto='API' destino='/integracao1'/>
            <Navegador texto='Estatico' destino='/estatico'/>
            
        </div>
    )
}