
import React from 'react';
import styles from '../../styles/Agentes.module.css';
import Navbar from '../../../components/Navbar';
import Nav from '../../../components/Nav';
import Footer from '../../../components/Footer';

export async function getStaticProps() {
    try {
        const response = await fetch('https://valorant-api.com/v1/agents/');
        const data = await response.json();

        
        console.log(data);

        return {
            props: { agentes: data.data || [] }, 
        };
    } catch (error) {
        console.error('Erro ao buscar dados:', error);
        return {
            props: { agentes: [] }, 
        };
    }
}

const AgentesPage = ({ agentes }) => {
    return (
        <div>
            <Navbar/>
            <main className={styles.agenteslist}>
                <ul>
                    {Array.isArray(agentes) && agentes.map((agente) => (
                        <li key={agente.uuid}>
                            <img src={agente.displayIcon} alt={agente.displayName} />
                            <h2>{agente.displayName}</h2>
                            <p>{agente.description}</p>
                        </li>
                    ))}
                </ul>
            </main>
            <Nav/>
            <Footer/>
            
        </div>
    );
};

export default AgentesPage;
