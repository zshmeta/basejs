# Project Structure

## Front

The Front base is a template for a React app that uses vite as a bundler. It's the simplest architecture you will find in any ful react app

```bash
 vite-zshmeact
├──  FileTree.md
├──  index.html
├──  package.json
├──  public
│   ├──  apple-touch-icon.png
│   ├──  browserconfig.xml
│   ├──  humans.txt
│   ├──  manifest.json
│   ├── 󰚩 robots.txt
│   ├──  sitemap.xml
│   └──  zshmeta.ico
├──  README.md
├── 󱧼 src
│   ├──  App.css
│   ├──  App.jsx
│   ├──  assets
│   │   └──  images
│   │       ├──  pikamanx.gif
│   │       └──  zshmetapunk.svg
│   ├──  components
│   │   ├──  Particles
│   │   │   ├──  index.js
│   │   │   ├──  Particles.jsx
│   │   │   └──  Particule.scss
│   │   ├──  PetitZshmeta
\│   │   │   ├──  index.js
│   │   │   ├──  PetitZshmeta.jsx
│   │   │   └──  PetitZshmeta.scss
│   │   ├──  Pikamanx
│   │   │   ├──  index.js
│   │   │   ├──  Pikamanx.jsx
│   │   │   ├──  Pikamanx.lazy.js
│   │   │   ├──  Pikamanx.module.scss
│   │   └──  Ui
│   │       └──  Modal
│   │           ├──  index.js
│   │           ├──  Modal.jsx
│   │           ├──  Modal.module.scss
│   │           ├──  Modal.Readme.md
│   │           └──  Modal.styled.js
│   ├──  data
│   │   ├──  global
│   │   │   └──  modals.json
│   │   └──  index.js
│   ├──  index.css
│   ├──  main.jsx
│   └──  utils
│       ├──  dataUtils
│       │   └──  data.js
│       ├──  index.js
│       └──  uiUtils
│           └──  icons.js
├──  utils
│   └──  dataUtils
│       └──  data.test.js
├──  vite.config.js
└──  yarn-error.log
Front
├── src # Source files for the front-end application
│   ├── components # React components
|   |   ├──
│   ├── App.js # Main application component
│   ├── index.js # Entry point for the application
│   └── App.test.js # Tests for the App component
├── public # Static files
│   └── index.html # HTML template
├── package.json # This file manages the dependencies of your project.
├── README.md # This file is for documenting your project.
└── .gitignore # This file specifies which files and directories to ignore in git.
```

## Micro-front

The Micro-front base is designed for creating a micro-frontend architecture using Module Federation.
It allows for independent deployment of parts of your application, making it highly scalable.
The base is created using Webpack 5, which introduced support for Module Federation.

```bash
Micro-front
├── packages # This directory contains your micro-frontend applications.
│   ├── app1 # This is one of your micro-frontend applications.
│   │   ├── src # Source files for the micro-frontend application
│   │   │   ├── components # React components
│   │   │   ├── App.js # Main application component
│   │   │   ├── index.js # Entry point for the application
│   │   │   └── App.test.js # Tests for the App component
│   │   ├── public # Static files
│   │   └── package.json # This file manages the dependencies of the app1.
│   └── app2 # This is another one of your micro-frontend applications.
│       ├── src # Source files for the micro-frontend application
│       │   ├── components # React components
│       │   ├── App.js # Main application component
│       │   ├── index.js # Entry point for the application
│       │   └── App.test.js # Tests for the App component
│       ├── public # Static files
│       └── package.json # This file manages the dependencies of the app2.
├── package.json # This file manages the dependencies of your project.
├── README.md # This file is for documenting your project.
└── .gitignore # This file specifies which files and directories to ignore in git.
```

## Back

The Back base is designed for creating a back-end server using Express and Nodemon.
It's ideal for building REST APIs or GraphQL servers. The base is created using Express, a minimal and flexible Node.js web application framework, and Nodemon, a utility that monitors for any changes in your source and automatically restarts your server.

```bash
Back
├── src # This is the main directory where your server's source code resides.
│   ├── routes # This directory is for your Express routes.
│   ├── server.js # This is the entry point for your server.
│   └── server.test.js # Tests for the server
├── package.json # This file manages the dependencies of your project.
├── README.md # This file is for documenting your project.
└── .gitignore # This file specifies which files and directories to ignore in git.
```

## Full-back

The Full-back base is designed for creating a full backend application.
It includes API endpoints and database configuration and models.
The base is created using Node.js, Express, and a database management system like MongoDB or PostgreSQL.

```bash
Full-back
├── src # This is the main directory where your full backend app's source code resides.
│   ├── api # This directory is for your API endpoints.
│   ├── db # This directory is for your database configuration and models.
│   ├── server.js # This is the entry point for your server.
│   └── server.test.js # Tests for the server
├── package.json # This file manages the dependencies of your project.
├── README.md # This file is for documenting your project.
└── .gitignore # This file specifies which files and directories to ignore in git.
```
