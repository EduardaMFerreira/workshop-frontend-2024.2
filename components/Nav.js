import Link from 'next/link';
import styles from '../src/styles/Nav.module.css'

export default function Nav(){
    return (
        <nav className={styles.nav}>
            
            <ul>
                <li>
                    <Link href="/download-game">BAIXE O JOGO</Link>
                </li>
                <li>
                    <Link href="/independent-tournaments">TORNEIOS INDEPENDENTES</Link>
                
                </li>
                <li>
                    <Link href="/riot-mobile-app">BAIXE O APLICATIVO DE CELULAR RIOT MOBILE</Link>
                </li>
            </ul>
        </nav>
    );
}
