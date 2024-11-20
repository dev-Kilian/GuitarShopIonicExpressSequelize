Tienda de Guitarras 🎸
Este proyecto es una aplicación web y móvil desarrollada con Ionic, Angular, Node.js y Sequelize. Permite gestionar una colección de guitarras, incluyendo funciones para añadir, editar, eliminar y listar guitarras. También admite la carga de imágenes para cada guitarra, que se almacenan en el servidor.

Comenzando 🚀
Estas instrucciones te ayudarán a obtener una copia del proyecto en funcionamiento en tu máquina local:

Pre-requisitos 📋
Antes de empezar, asegúrate de tener instalado lo siguiente:

Node.js (versión 16 o superior)
Ionic CLI
Angular CLI
Postman para pruebas de API (opcional)
Base de datos MySQL

Instalación 🔧
Sigue estos pasos para configurar el proyecto:

Utiliza Git para clonar el repositorio (https://github.com/dev-Kilian/GuitarShopIonicExpressSequelize).

Configura la base de datos en el archivo config/db.config.js.

Configura el backend:

Ve a la carpeta del backend: cd backend
Inicia el servidor: node index.js

Configura el frontend:

Ve a la carpeta del frontend: cd frontend
Inicia la aplicación en modo de desarrollo: ionic serve

Prueba la aplicación:

Accede al frontend desde http://localhost:8100.
Accede al backend desde http://localhost:8080.


Ejemplo para probar la funcionalidad de la aplicación 🖥️

Navega a la página principal.
Ve a "My Guitars" para listar guitarras.
Usa el botón "+" ubicado abajo a la derecha para añadir una nueva guitarra con su imagen.
Edita o elimina guitarras desde la misma lista.

Ejecutando las pruebas ⚙️
Pruebas de la API:
Usa Postman o herramientas similares para probar los endpoints del backend. Ejemplo:

GET: http://localhost:8080/api/guitars (Listar guitarras)
POST: http://localhost:8080/api/guitars (Añadir guitarra)
PUT: http://localhost:8080/api/guitars/:id (Editar guitarra)
DELETE: http://localhost:8080/api/guitars/:id (Eliminar guitarra)


Construido con 🛠️
Ionic - Framework para el frontend.
Angular - Framework web para el desarrollo del frontend.
Node.js - Entorno de ejecución del backend.
Sequelize - ORM para la base de datos.
MySQL - Sistema de gestión de base de datos.

Autor ✒️
@dev-Kilian - Desarrollador principal
