# The Fem Post

Blog para la Hackathon BCN Inclusive Coding Impulsado por Mobile World Capital Barcelona, NUWE y Cruz Roja

##  Objetivo del proyecto

Dar visibilidad a mujeres importantes, tanto actuales como históricas y a sus logros, y su impacto en el mundo.

En una versión más avanzada del proyecto la idea es que el foro sirva como referente de educación para equilibrar la invisibilización de las mujeres. 
Y que esos conocimientos sean más fáciles de recordar con métodos dinámicos de aprendizaje, como podría ser un quiz sobre esa información.

## Funcionalidades del Backend

- Se pueden crear usuarios.
- Se puede hacer login y comprobar las credenciales del usuario.
- Se obtiene el token de JWT.
- Se pueden subir posts.
- Se pueden editar y eliminar los posts.
- Se puede acceder a los datos de la base de datos mediante API.

## Funcionalidades del Frontend

- Se puede previsualizar cómo quedarían los posts desde la Home.
- Se pueden filtrar mediante un buscador.
- Hay vistas de los formularios de login y para crear y editar los posts.

## Features

- Que se conecten el backend y el frontend.
- Que el front gestione el admin para poder subir contenido.
- Refactorizar el código.
- Hacer deploy en producción.
- Que por cada post que se añada se puedan añadir quizes sobre el post para hacer la lectura más inmersiva.
- Que el admin pueda acceder a administrar el sitio a través de una URL y que desde allí pueda seleccionar las acciones a realizar en la web.


## Instalación

Para poder instalar el Frontend, se deben usar los comandos: 

Instalar las dependencias

`npm install`

Levantar el proyecto para verlo en el navegador

`npm start`

Para poder levantar el servidor:

Se debe instalar MongoDB en local, a través de su web.

Para instalar las dependencias del proyecto se debe usar el comando

`npm install`

Para levantar el proyecto se debe usar el comando

`npm run start`

Desde Postman se pueden hacer requests de tipo POST, GET, DELETE y PUT

Las siguientes URLs se deben utilizar para las distintas peticiones.

Para crear un nuevo post - http://localhost:3500/api/newPost

Para eliminar un post - http://localhost:3500/api/delete/:id

Para actualizar un post - http://localhost:3500/api/update/:id

Para obtener todos los posts - http://localhost:3500/api/allPosts

Para registrar un usuario - http://localhost:3500/api/register

Para hacer login - http://localhost:3500/api/login

Para obtener los usuarios - http://localhost:3500/api/getUsers


## Stack

![React.js](https://img.shields.io/badge/-React.js-09D3AC?logo=react&logoColor=black&color=white&style=flat) ![TailwindCSS](https://img.shields.io/badge/-TailwindCSS-06B6D4?logo=tailwindcss&logoColor=black&color=white&style=flat) ![Git](https://img.shields.io/badge/-Git-F05032?logo=git&logoColor=black&color=white&style=flat) ![GitHub](https://img.shields.io/badge/-GitHub-181717?logo=github&logoColor=black&color=white&style=flat)

MongoDB, Express, NodeJS, JavaScript

## Integrantes del equipo

- Claudia Di Pietro
- Ales Navarro
- Damaris Teoc 
- Ingrid Álvarez
- Miguel Dominguez
- Jhon Velazquez

## Reconocimientos

Gracias a Mobile World Capital Barcelona, NUWE y Cruz Roja por la oportunidad.
