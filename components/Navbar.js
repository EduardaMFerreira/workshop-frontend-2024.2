import Link from "next/link"
import Image from "next/image"
import styles from '../src/styles/Navbar.module.css'

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <ul classe={styles.direita}>
              <li><a href="#"><Image src="/images/Riot_Games_Logo.png" width={110} height={30} alt="menu do riot games"/></a></li>
              <Link href="/"><Image src="/images/Icons_Valorant.png" width={27} height={27}  alt="tela inicial"/></Link>
            </ul>
            <ul>
              <li><a href="#"><Image src="/images/Aviso.png" width={27} height={27} alt="aviso"/></a></li>
              <li><a href="#"><Image src="/images/Language.png" width={27} height={27}   alt="idioma"/></a></li>
              <li><a href="#"><Image src="/images/Menu.png" width={27} height={27}   alt="menu"/></a></li>
            </ul>
        </nav>
    )
}