# React + Vite

Este proyecto se realizó con React + Vite. Si deseas aprender sobre estas herramientas, dejo a continuación los siguientes enlaces:

https://es.react.dev/learn
![](https://res.cloudinary.com/dvqc2bb12/image/upload/v1734644582/React_fgrx0f.jpg)

https://es.vite.dev/guide/
![](https://res.cloudinary.com/dvqc2bb12/image/upload/v1734644470/vite_rggkfj.svg)

# Firebase + React + Variables de Entorno

El presente proyecto desde React, utiliza la tecnología de Firebase para utilizar su entorno como base de datos para los datos de los productos del e-commerce de venta de productos de respostería ( para utilizar esta tecnología, ingresa al siguiente enlace: https://firebase.com)
De esta manera aseguramos que dentro de su plataforma podamos acceder de manera segura y modificar o agregar en un servidor remoto, sin utilizar el equipo en local. Cabe aclarar que Firebase es una platforma que ofrece múltiples opciones, como hosting, data base, etc. pero para este proyecto usamos Cloud Firestore, una herramienta de Fidebase donde genreamos las bases de datos de nuestro e-commerce. 

Si desean aprender mas sobre esta herramienta, sigan este link: https://firebase.google.com/docs/firestore?hl=es-419

![](https://res.cloudinary.com/dvqc2bb12/image/upload/v1734643410/Firestore_c95fz9.jpg)

## Subir proyecto a Vercel

![](https://res.cloudinary.com/dvqc2bb12/image/upload/v1734643836/Vercel_a50fkh.jpg)

Utilizamos el hosting de Vercel para subir nuestra App a través de su enlace directo con Github. UNa vez coregido todos los errores y verificada la funcionalidad de la aplicación, se genera el deploy y se genera el domain de la página. 



## Uso de Variables de Entorno 

Para proteger informacion de nuestra App, es necesario utilizar variables de entorno que contenga los datos a resguardar de posibles intrvenciones maliciosas. Ejemplo:
 Firebase, a traves de Firestore, nos brinda una base de datos No SQL, que contiene información de todas los documentos que se ingresan al generar una colección de datos que deben ser resguardados para su posteior uso en la App. Estos tienen carácter de "información sensible". 
 Las variables de entorno, reemplzan la configuración de Firebase en nuesto código para que no sea visible si logran entrar a nuestro proyecto, por una entorno seguro que no es hackeable.

 ![](https://res.cloudinary.com/dvqc2bb12/image/upload/v1734645428/VariableEntorno_x37p1z.png)

Acá una guia sobre como crear las variables en Vite:
https://es.vite.dev/guide/env-and-mode
