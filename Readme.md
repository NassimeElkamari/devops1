# Application Full Stack Dockerisée

Ce projet contient une application web simple à stack complet utilisant Docker pour le frontend et le backend. Le frontend est développé avec **React** et le backend avec **Express**. Le projet utilise **Nginx** en production pour servir les fichiers statiques du frontend et proxy les requêtes vers le backend.

## Table des matières
- [Aperçu](#aperçu)
- [Technologies utilisées](#technologies-utilisées)
- [Structure du projet](#structure-du-projet)
- [Comment démarrer](#comment-démarrer)
- [Notes](#notes)

## Aperçu

Ce projet comprend un **frontend React** et un **backend Express**, tous deux containerisés avec Docker. Nginx est utilisé en production pour servir le frontend et rediriger les requêtes vers le backend.

## Technologies utilisées

- **Docker** : Pour containeriser le frontend et le backend.
- **React** : Pour l'interface utilisateur (frontend).
- **Express** : Pour l'API backend.
- **Nginx** : Pour servir le frontend en production et proxy les requêtes vers le backend.
- **Docker Compose** : Pour gérer et configurer plusieurs conteneurs Docker.

## Structure du projet

Le projet est organisé comme suit :

docker/
├── first_project/
│ ├── frontend/ # Application React (frontend)
│ │ ├── Dockerfile.prod # Dockerfile pour le frontend en production
│ ├── backend/ # Application Express (backend)
│ │ ├── Dockerfile # Dockerfile pour le backend
│ ├── nginx/ # Configuration Nginx
│ │ ├── default.conf # Fichier de configuration pour Nginx
│ ├── docker-compose.yml # Configuration Docker Compose pour l'ensemble du projet
└── README.md # 


## Comment démarrer

### Étape 1 : Cloner le dépôt

Clonez le dépôt sur votre machine locale :

```bash
git clone https://github.com/NassimeElkamari/Devops1.git
cd ton-depot

Étape 2 : Construire les conteneurs Docker
Construisez les conteneurs en utilisant la commande suivante :

bash
Copy
Edit
docker-compose build
Étape 3 : Démarrer les conteneurs
Lancez les conteneurs en utilisant Docker Compose :

bash
Copy
Edit
docker-compose up
Une fois les conteneurs démarrés, l'application sera accessible :

Frontend : http://localhost:3001

Backend : http://localhost:3000

Nginx sert le frontend à travers le port 3001, et le backend est accessible via le port 3000.

Étape 4 : Pour une version de production
Si vous souhaitez construire le frontend en mode production, vous pouvez utiliser Nginx pour servir les fichiers statiques générés par React :

Construire l'application React en mode production :

bash
Copy
Edit
docker-compose up --build
L'application frontend en mode production sera désormais servie par Nginx à http://localhost:3001 et le backend sera toujours accessible via http://localhost:3000.

Notes
L'application utilise CORS pour autoriser les communications entre le frontend et le backend pendant le développement local.

En production, Nginx sert l'application React et proxy les requêtes vers l'API backend.

