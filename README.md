# Backend Ensolvers

## Herramientas utilizadas
Este proyecto se desarrolló utilizando las siguientes herramientas
- [Java JDK 11](https://www.oracle.com/co/java/technologies/javase-jdk11-downloads.html) - Lenguaje de programación
- [GitHub](https://github.com/) - Repositorio de código fuente
- [Spring Tool Suite 4](https://spring.io/tools) - IDE de desarrollo
- [MySQL](https://www.mysql.com/) - Motor de base de datos relacional

### frameworks y librerias
Este proyecto utiliza los siguientes frameworks y librerias relevantes
- [Spring](https://spring.io/) - Framework de desarrollo Spring
- [Spring Web](https://spring.io/projects/spring-ws) - Microservicios
- [Spring Data JPA](https://spring.io/projects/spring-data-jpa) - Persistencia

#### Instrucciones
El backend fue terminado en su totalidad. Cuenta con todos las operaciones requeridas para la creación, consulta, modificación, archivo y eliminación de notas.
Fue desarrollado como una API Rest con las siguientes operaciones:

- api/note/findAll  GET (Consulta las notas activas)
- (localhost:8080/api/note/findAll)
- api/note/findArchived GET (Consulta las notas archivadas)
 (localhost:8080/api/note/findArchived)
- api/note/{idNote} GET ()Consulta la nota con Id {idNote}
 (localhost:8080api/note/findArchivedapi/note/1)
- api/note/add POST (Agrega una nota nueva, recibe un JSON con los campos title y text)
```
{
    "title":"nota1",
    "text":"Nota de prueba"
}
```
- api/note/update PUT (Modifica una nota y le asigna la fecha de modificación)
```
{
    "idNote":"1",
    "title":"nota1",
    "text":"texto modificado"
}
```
- api/note/delete/{idNote}  DELETE (Elimina una nota )

La base datos utilizada fue MySQL versión 8.0.28, los scripts de creación de la tabla se encuentran dentro del código fuente del back, en la carpeta resourses/static y en el archivo resourses/application.properties

#### Frontend Ensolvers

 El frontend fue desarrollado en React.js, se encuentra aún en construcción, ya se conectó con el backend, para obtener las notas creadas y para crear una nueva nota. Todavía está pendiente las funcionalidades de editar, archivar y eliminar notas, aunque las operaciones en el backend ya fueron desarrolladas, solo falta ejecutarlas desde el frontend.

### Prerequisitos:
- instalar npm (se utilizó la versión 8.5.5)

### comandos:
- npm i -S react (instalar react)
- npm create-react-app notes (crear una aplicación react con nombre "notes")
- npm i bootstrap reactstrap (instala bootstrap para la creación del modal)
- npm start (ejecutar la aplicación)


## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

In the project directory, you can run:


#### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

#### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

### Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

#### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

#### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

#### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

#### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

#### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

#### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
