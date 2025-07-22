
# API Minutos Telecom

API RESTful développée en Node.js avec Express et MySQL, destinée à gérer la relation clients pour Minutos Telecom via une interface d’administration et un espace client.

Ce projet fait partie d’une reconversion professionnelle, visant à construire un back-end robuste structuré en MVC orienté objet, sécurisé et maintenable.

---

## 🚀 Fonctionnalités principales

### Espace Administrateur (admin)
- Inscription de nouveaux clients via formulaire sécurisé
- Consultation de la liste complète des clients avec filtres dynamiques (recherche par nom, email, etc.)
- Visualisation et modification des données de chaque client
- Gestion de l’authentification administrateur avec hashage des mots de passe

### Espace Client (en cours de développement)
- Consultation et modification des informations personnelles
- Réinitialisation sécurisée du mot de passe

---

## 🛠️ Technologies utilisées

- Node.js  
- Express  
- MySQL  
- MVC (Modèle-Vue-Contrôleur) orienté objet  
- bcrypt pour le hachage des mots de passe  
- dotenv pour la gestion des variables d’environnement  
- MySQL2 comme driver de base de données  
- EJS (optionnel, si des vues sont utilisées)  

---

## 🗂️ Organisation du projet

```
backend/
├── controllers/       # Logique métier et traitement des requêtes
├── models/            # Modèles représentant les entités et interaction avec la BDD
├── routes/            # Définition des endpoints API
├── services/          # Logique métier et traitement spécifique (ex: appels API externes, services internes)
├── middleware/        # Middlewares pour authentification, validation, etc.
├── config/            # Configuration base de données, middleware
├── app.js             # Point d’entrée de l’application
├── .env               # Variables d’environnement
└── README.md
```

---

## 📄 Endpoints principaux

### Admin
(en développement)
### Client 

(en développement)
---

## 🔐 Sécurité

- Utilisation de bcrypt pour hasher les mots de passe
- Validation côté serveur des données (en cours d'amélioration)
- Requêtes SQL préparées pour éviter les injections

---

## 🚧 Travaux en cours

- Middleware d’authentification JWT pour sécuriser les routes protégées
- Finalisation des routes client et gestion de session
- Mise en place de tests unitaires et d’intégration
- Documentation Swagger interactive
- Optimisation des performances et gestion des erreurs

---

## 🤝 Contribution

Projet personnel en cours, contributions bienvenues via pull requests avec tests associés.

---

Merci pour votre intérêt !
