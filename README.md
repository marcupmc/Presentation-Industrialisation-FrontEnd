[ ![Codeship Status for marcupmc/Presentation-Industrialisation-FrontEnd](https://codeship.com/projects/b2aa31d0-d3f1-0132-bc32-6a9d26101b06/status?branch=master)](https://codeship.com/projects/77713)
#Presentation Industrialisation FrontEnd

[Lien de l'application](http://marcupmc.github.io/Presentation-Industrialisation-FrontEnd/app/)

[Lien de la présentation](http://slides.com/marcgregoire/industrialisationfrontend#/)

#Comment installer le projet ?

####Prérequis : 
Avoir NodeJS. Si vous n'avez pas Node -> https://nodejs.org/

####Importer le projet

```
git clone https://github.com/marcupmc/Presentation-Industrialisation-FrontEnd.git
```

####Recupérer les packages nodes nécessaires :

```
npm install 
```

####Installer les librairies JS nécessaires :

```
bower install
```

#Les différentes tâches Grunt

####LiveReload (pratique pour le dev)

```
grunt serve 
```

####Lancer les tests unitaires

```
grunt test-unit
```

####Lancer les tests d'intégration

//TODO

####Lancer les test e2e

Dans un terminal :

```
webdriver-manager start
```

Puis dans un autre terminal :

```
grunt test-e2e
```