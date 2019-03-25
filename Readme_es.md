# Intro

El objetivo de este ejercicio es el que te familiarizes con React.

Tomaremos como punto de entrada una aplicación que muestra una lista de miembros
que pertenece a la organización Lemoncode de Github (esto está harcodeado), añadiremos
un _input_ que permite al usuario cambiar dicho nombre de grupo y elegir el que quiera,
por ejemplo _quiero ver los miembros de la organización Microsoft_

# Ejercicio

- Arranca con el proyecto que se encuentra en la carpeta *00_start*.

- Instala las dependencias.

```bash
npm install
```

- Arranca la aplicación y comprueba que funciona correctamente.

```bash
npm start
```

- La implementación actual muestra una lista de miembro que pertenecen a la organización 
_lemoncode_, esta no esta mal, pero nos gustaría que el usuario pudiera teclear el nombre
de organización que quisiera, y al pulsar el botón pudiera ver la lista de miembros de la
organización que hubiera tecleado (ejemplo de organizacines validas: microsoft, facebook)

- Pistas:

  - Create una nueva entrada en el estado del component membersTable y que por defecto valga _lemoncode_.
  - Crea un input al lado del botón de carga, este botón mostrarar la orgainzación actual elegida (estado creado en paso anterior).
  - Enlaza el evento onChange para que detectar que cuando cambie actualize el estado del campo organización..
  - Cuando el usuario pulso en el botón de cargar, en vez de pasar el valor harcodeado _lemoncode_ que pase el 
  valor del estado.
  
# Para subir nota

Si quieres practicar más con React, aquí tienes una lista de desafios para añadir mejoras a esta aplicación:
If you want to play more with React here you have some proposals to enhance this excercise:

- Añade la librería material-ui y estila la aplicación (puedes mostrar los datos en una tabla o en cards...).
- Añade paginación al listado (te hara falta actualizar el UI y el cliente de api rest).
- Si pinchas en un miembro que navega a su página de detalle en el que podrás ver lo detalles de ese usuario (tiene que buscar la API de github para leer esos datos).
- (...)
