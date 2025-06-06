import express from 'express';
import cors from 'cors';
import mes_routes from './routes.js'; // Assurez-vous d'ajouter l'extension .js

const app = express();
app.use(cors());
app.use(express.json());

app.use(mes_routes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
console.log('Serveur en écoute sur le port ${PORT}');
});




























/*

import express from 'express';
import cors from 'cors';
import path from 'path';
import mes_routes from 'https://test.uahb.sn/CMJLF-CTD/V-Card/dist/assets/index-9FpSVcgc.js'; // Assurez-vous d'ajouter l'extension .js

const app = express();
app.use(cors());
app.use(express.json());

// Middleware pour servir les fichiers statiques du dossier 'dist'
app.use(express.static(path.join(__dirname, 'dist')));

// Routes de l'application
app.use(mes_routes);

// Rediriger toutes les autres requêtes vers index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Serveur en écoute sur le port ${PORT}`);
});

*/