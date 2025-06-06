import { Pool } from 'pg';

const pool = new Pool({
    host: 'postgresql-gestionapp.alwaysdata.net', // Remplacez par l'hôte de votre base de données
    port: 5432, // Port par défaut pour PostgreSQL
    user: 'gestionapp', // Remplacez par votre nom d'utilisateur
    password: 'Dianka16', // Remplacez par votre mot de passe
    database: 'gestionapp_v-card', // Remplacez par le nom de votre base de données
});

export default pool;
