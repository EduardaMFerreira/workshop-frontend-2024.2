import Image from "next/image";
import Link from 'next/link';
import styles from '../src/styles/Footer.module.css'

export default function Footer() {
    return(
        <footer className={styles.footer}>
            <ul class="redes">
                <li><a href="https://www.facebook.com/VALORANTbrasil/"><Image src="/images/facebook.png" width="27" height="27" alt="facebook"/></a></li>
                <li><a href="https://www.youtube.com/channel/UCgWiuB2PQIUhJgEN9No281g"><Image src="/images/youtube.png"  width="27" height="27" alt="youtube"/></a></li>
                <li><a href="https://www.instagram.com/valorantbrasil"><Image src="/images/instagram.png"  width="27" height="27" alt="instagram"/></a></li>
                <li><a href="https://x.com/valorantbrasil"><Image src="/images/twitterx.png"  width="27" height="27" alt="twiter"/></a></li>
                <li><a href="https://discord.com/invite/valorant-br"><Image src="/images/discord.png"  width="27" height="27" alt="discord"/></a></li>
            </ul>
            <div>
                <a href="https://www.riotgames.com/pt-br"><Image src="/images/Riot_Games_Logo.png"  width="110" height="27"alt="RIOT GAMES"/></a>
                <Image src="/images/logo_valorant.webp"  width="150" height="20"alt="VALORANT"/>
            </div>
            <ul>
                <a href="#">POLÍTICA DE PRIVACIDADE</a>
                <a href="#">TERMOS DE SERVIÇO</a>
                <a href="#">PREFERÊNCIAS DE COOKIES</a>
            </ul>
            <Image src="/images/14anos.webp"  width="200" height="150" alt="Classificação indicativa:14 anos"/>
            
        </footer>
    )
}