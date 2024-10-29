# DOCUMENTACION DE API REST DE CAR SELLER.
Documentación de la creación del BACK, ajustando un server y una ApiREST y una base de datos no relacional MongoDB para realizar solicitudes al servidor y a nuestra BBDD y recoger los datos obtenidos en nuestro FRONT de una forma rápida, eficiente, con vista a conseguir obtener flexibilidad a la hora de crear nuevas peticiones según la necesidad del cliente.

En el proyecto se crearán 3 modelos: 
- Autos: Con el objetivo de conseguir los datos de los vehículos por la base de datos con las queries que el cliente elija en nuestro FRONT, y siendo filtrado por la BBDD.
- User: Este modelo recogerá los datos de nuestros clientes en el registro, guardando su información solicitada, además de su contraseña correctamente encriptada para asegurar el correcto almacenamiento de estos datos para que no puedan ser obtenidos y utilizados por terceros.
- customers: Son datos adiccionales que se consigen cuando el usuario ha interactuado con la web y módifica o añade información que puedan serles a ellos de utilidad.
 
 ## La base URL de la API es https://carseller-back-josedaniel.vercel.app/autos/v1

 
## GET AUTOS
Los endpoints que usaremos para conseguir los vehículos introducidos en nuestra base de datos son  los siguientes:

```sh
GET/    Conseguir Todos los Coches de la coleccion -> /search
GET/    Conseguir Coches por su marca ->/search/:brand  (Ej:/search/brand/Ford)
GET/    Conseguir Coches por su modelo -> /search/:model (Ej:/search/model/focus)
GET/   Conseguir Coches por su categoria -> /search/:category (Ej: Cars| SUV| Truck)
GET/   Conseguir Coches por su marca y categoría -> /search/query/brand/category?brand=Ford&category=SUV 
GET/   Conseguir Coches por su marca y modelo -> /search/query/brand/model?brand=Ford&model=focus
GET/ Conseguir Coches por su marca, modelo y categoría -> /search/query/brand/category/model?brand=Toyota&category=SUV&model=RAV4
```

Tras la petición se obtendrá un archivo Json con todos los datos 
### Ejemplo de la  respuesta:
>
{
	"message": "Fetch succesfull",
	"res": [
		{
			"_id": "6703bad8562ba64518fe3ff9",
			"vin": "1GNSCBE01ER123456",
			"brand": "Chevrolet",
			"model": "Suburban",
			"type": "SUV",
			"manufactureYear": 2021,
			"kilometer": 60000,
			"state": "Used",
			"price": 28500,
			"acquisitionDate": "2024-04-21T00:00:00.000Z",
			"availability": "Disponible",
			"picture": [
				"https://res.cloudinary.com/ddybbosdk/image/upload/v1726323256/CARS%20AUTODEELER/autos/chevrolet-suburban-2021-brown_1_1_xzicjl.avif"
			],
			"color": "brown",
			"__v": 0,
			"createdAt": "2024-10-07T10:41:28.336Z",
			"updatedAt": "2024-10-07T10:41:28.336Z"
		}

## POST AUTO
- NOTA: Para poder subir un vehículo hay que tener permisos de administrador, Para que la respuesta sea válida se necesita el token creado tras realizar el login (Instrucciones para conseguir el Token se ecuentra más abajo en la sección Login & Register. En caso de no cumplirse este requisito, la solicitud devolverá una respuesta de error 401(unauthorized).

Para añadir nuevos vehículos a nuestra BBDD y poder verlos en nuestro Front, podemos hacerlo a traves una petición POST donde le debemos de añadir toda la información requerida a través de un formulario en nuestro.

- IMPORTANTE: Para subir una foto del vehículo se debe incluir una url de una imagen que esté en la web o subido a un mdn como cloudinary.



## Endpoint del POST 
```sh 
Método  Endpoint    Body                        
/POST   /search     application/json     
```

### Valores únicos y requeridos en el envío de nuestro body como JSON
> {
    "vin": "3513dasdadw13d", -string-
    "brand": "Nissan", -string-
    "model":"X-Trail", -string-
    "type": "SUV", -string-
    "manufactureYear":2020, -number
    "kilometer": 120000, -number-
    "state": "used", -string-
    "price": 10000, -number-
    "acquisitionDate": "2020-01-01", -date-
    "availability": "Disponible", "Disponible" | "Reservado" | "Vendido"
    "picture": "https://res.cloudinary.com/ddybbosdk/image/upload/v1728908855/AutosUploaded/lgomsbhzlq5vkpz5klq3.avif", -string-
    "color": "white"   -string-
  }

### Ejemplo de Petición
fetch("https://carseller-back-josedaniel.vercel.app/autos/v1/search", {
         method: "POST",
         headers: {
            Authorization: "Bearer " + token
         },
         body: {
    "vin": "3513dasdadw13d",
    "brand": "Opel",
    "model":"Astra",
    "type": "Turismo",
    "manufactureYear":2020,
    "kilometer": 120000,
    "state": "used",
    "price": 10000,
    "acquisitionDate": "2020-01-01",
    "availability": "Disponible",
    "picture": "https://res.cloudinary.com/ddybbosdk/image/upload/v1728908855/AutosUploaded/lgomsbhzlq5vkpz5klq3.avif",
    "color": "white"
  },
      })
      
### Ejemplo de la respuesta del Post
Posterior al envio del la petición se obtendrá una respuesta de 201, con el siguiente formato. 
>{
	"message": "Fetch created succesfully",
	"res": {
		"vin": "3513dasdadw13d",
		"brand": "Nissan",
		"model": "X-Trail",
		"type": "Suv",
		"manufactureYear": 2020,
		"kilometer": 120000,
		"state": "used",
		"price": 10000,
		"acquisitionDate": "2020-01-01T00:00:00.000Z",
		"availability": "Disponible",
		"picture": [
			"https://res.cloudinary.com/ddybbosdk/image/upload/v1728908855/AutosUploaded/lgomsbhzlq5vkpz5klq3.avif"
		],
		"color": "white",
		"_id": "67193b3896cfab0923ef5d36",
		"createdAt": "2024-10-23T18:06:48.299Z",
		"updatedAt": "2024-10-23T18:06:48.299Z",
		"__v": 0
	}
}

## PUT AUTO
- NOTA: Para poder subir un vehículo hay que tener permisos de administrador, Para que la respuesta sea válida se necesita el token creado tras realizar el login (Instrucciones para conseguir el Token se ecuentra más abajo en la sección Login & Register. En caso de no cumplirse este requisito, la solicitud devolverá una respuesta de error 401(unauthorized).

En el caso de querer realizar modificaciones en algunos de los valores de los vehículos, se prodecerá a través del siguiente endPoint /:id del vehículo que queremos modificar, utilizando el método PUT y enviando en el body de la petición un objeto JSON, indicando las claves y valores que queremos cambiar.

- IMPORTANTE: Para subir una foto del vehículo se debe incluir una url de una imagen que esté en la web o subido a un mdn como cloudinary.

```sh
Método      Endpoint        Body
/PUT        /:id            JSON 
```

### Solicitud de la modificación

>
fetch("https://carseller-back-josedaniel.vercel.app/autos/v1/search/66fe746c2dab267032afbbdb", {
         method: "PUT",
         headers: { "Authorization: "Bearer " + token"},
         body: JSON.stringify({ model: "Rogue",
    picture: ["https://res.cloudinary.com/ddybbosdk/image/upload/v1726260129/CARS%20AUTODEELER/autos/Nissan-rogue_1_eikaa5.avif"]
         })
         

### Respuesta de la peticion Put
>{
	"message": "Car updated succesfully:",
	"res": {
		"_id": "66fe746c2dab267032afbbdb",
		"vin": "KNMAT2MTXHP123456",
		"brand": "Nissan",
		"model": "Rogue",
		"type": "SUV",
		"manufactureYear": 2021,
		"kilometer": 0,
		"state": "New",
		"price": 26000,
		"acquisitionDate": "2024-02-14T00:00:00.000Z",
		"availability": "Reservado",
		"picture": [
			"https://res.cloudinary.com/ddybbosdk/image/upload/v1726260129/CARS%20AUTODEELER/autos/Nissan-rogue_1_eikaa5.avif"
		],
		"color": "black",
		"__v": 0,
		"createdAt": "2024-10-03T10:39:40.209Z",
		"updatedAt": "2024-10-03T10:45:05.484Z"
	}
}
    
### Delete Autos
- NOTA: Para poder subir un vehículo hay que tener permisos de administrador, Para que la respuesta sea válida se necesita el token creado tras realizar el login (Instrucciones para conseguir el Token se ecuentra más abajo en la sección Login & Register. En caso de no cumplirse este requisito, la solicitud devolverá una respuesta de error 401(unauthorized).

Para eliminar un vehículo se utilizara una solicitud de método Delete con el siguiente endpoint, quedando eliminado de nuestra base de datos, además de eliminarse la imagen guardada de nuestro cdn cloudinary. 

```sh
Método      endpoint        
Delete      /search/:id 
```

### Ejemplo de petición para eliminar el vehículo

>fetch('http://localhost:3000/autos/v1/search/${id}', {
         method: "DELETE",
         headers: { Authorization: "Bearer" + token },
      })
      
### Ejemplo de respuesta del servidor

>{
	"message": "Fetch succesfull",
	"res": {
		"_id": "67091beb99c911f21ab5c640",
		"vin": "3513dasdadw13d",
		"brand": "Opel",
		"model": "Corsa",
		"type": "Suv",
		"manufactureYear": 2020,
		"kilometer": 120000,
		"state": "used",
		"price": 10000,
		"acquisitionDate": "2020-01-01T00:00:00.000Z",
		"availability": "in Stock",
		"picture": [
			"http:..."
		],
		"color": "white",
		"createdAt": "2024-10-11T12:36:59.570Z",
		"updatedAt": "2024-10-11T12:36:59.570Z",
		"__v": 0
	}
}
## User Crud.
En esta sección se muestra información para registrarse como usuario en la página, logearse, buscar la información de los usuarios registrados y obtener el token de verificación necesario para acceder a los permisos de administrador y eliminar el usuario.

Base URL: "https://carseller-back-josedaniel.vercel.app/autos/v1/user"

### Conseguir todos los usuarios
- NOTA: Para poder subir un vehículo hay que tener permisos de administrador, Para que la respuesta sea válida se necesita el token creado tras realizar el login (Instrucciones para conseguir el Token se ecuentra más abajo en la sección Login & Register. En caso de no cumplirse este requisito, la solicitud devolverá una respuesta de error 401(unauthorized).


### Petición de todos los usuarios.
Con la siguiente petición se obtendrán los datos de todos los usuarios registrados en la BBDD. Para conseguirlos se necesitará accesos de administrador utilitando el método GET. Ejemplo:

> fetch("https://carseller-back-josedaniel.vercel.app/autos/v1/user",{method:"GET",{headers:Authorization:"Bearer "+token})


El resultado obtenido es un array json de todos los usuarios actuales en la BBDD.

### Petición de los usuarios por id.

```sh
Método          Endopoint       
Get             /:id
```

> fetch("https://carseller-back-josedaniel.vercel.app/autos/v1/user/"+id,{method:"GET",{headers:Authorization:"Bearer "+token})


### Registro de usuario

Para registrarse como usuario se utilizará el método post en una petición al servidor donde comprobará previamente de que el usuario no exista para finalmente crear el registro de forma correcta.

Automáticamente tras realizar el registro de forma correcta se crea paralelo un modelo Customer con infomación adiccional del usuario.

La contraseña deberá contener al menos 7 caracteres, y al menos una letra mayúscula, minúscula, un número y un caracter especial.

#### Claves requeridas a enviar en el body de la petición.
```sh
claves          Ejemplo                                  Requisitos
	name        "Jose",                                 string
	surname     "Rivera"                                string
	email       "pruebadelete@gmail.com"                string
	age         "2020/10/01"                            string format "YYYY-MM-DD"
    favourites  "cars"                                  Values: |cars|SUV|Truck
    password    "Contraseña.234"                        string    
```

#### Ejemplo de registro.



>fetch("https://carseller-back-josedaniel.vercel.app/autos/v1/user/register", {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify({
            name: "Jose",
            surname: "Rivera",
            age: "1992-11-14",
            email: "pruebadelete@gmail.com",
            favourites: "cars",
            password: "Contraseña.234",
         })
         
         
### Login 

Una vez dado de alta como usuario en la BBDD podremos logearnos para obtener acceso a las opciones que tengamos según nuestro rol de usuario. Por defecto los usuarios registrados entran con el rol de usuario, y solo podrá ser cambiado a admin si el desarrollador de la aplicación lo reasigna manualmente.

```sh
Método      Endpoint        body
POST        /login          application/json
```
Para realizar la correcta petición de login se tendrá que incluir en el cuerpo de la peticion dos claves con los valores correctos a la hora del anterior registro.

```sh
Campos requeridos       Formato
email                   string
password                string
```



#### Ejemplo de login

>   fetch("https://carseller-back-josedaniel.vercel.app/autos/v1/user/login", {
         method: "POST",
         headers: { "Content-Type": "application/json" },
         body: JSON.stringify({
            email: "pruebadelete@gmail.com",
            password: "Contraseña.234",
         }),
      })
      
#### Respuesta del servidor y Token identificativo

Como respuesta se obtendrá los datos del usuario registrado y un token de identificación que apostará información a nuestra aplicación para otorgarnos los accesos que tengamos habilitados según nuestro rol.

Este token es el que introduciremos en nuestras peticiones que realicemos y que necesitemos obtener accesos de administrador para que nos permita el acceso a la funcionalidad.

>{
	"message": "You're in!",
	"res": {
		"logged": {
			"_id": "6702caa419f2fa3b7cb7111b",
			"name": "Prueba5",
			"surname": "Prueba",
			"email": "prueba5@gmail.com",
			"age": "2024-10-05T22:00:00.000Z",
			"rol": "admin",
			"favourites": "Cars",
			"password": "$2b$10$hiL4Z2m/uopUBi.fpGGBT.c1EVFOfB8opRgYzGvcDS5gEVDBCH/1.",
			"createdAt": "2024-10-06T17:36:36.729Z",
			"updatedAt": "2024-10-25T15:42:27.101Z",
			"__v": 0
		},
		"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3MDJjYWE0MTlmMmZhM2I3Y2I3MTExYiIsImlhdCI6MTczMDEzMDgyOSwiZXhwIjoxNzMwNDc2NDI5fQ.iZD7X2c19-VHRK_pslv0HuCqprnEuu4mCIkjboNXHyw"
	}
}

### Modificación del Usuario.

Se puede modificar los datos del usuario utilizando el método PUT y enviando el cuerpo de los datos a cambiar. 

```sh
Método          Body
PUT             Cualquiera de los datos que se quieran modificar (ej: name, surname, password, email, favourites)
```

#### Ejemplo de petición de modificación de datos de usuarios.


>fetch(`https://carseller-back-josedaniel.vercel.app/autos/v1/user/${idUser}`, {
         method: "PUT",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify({name:"Jose Daniel"
         }),

### Eliminar usuario de la BBDD 
Se usará el siguiente endpoint para eliminar un usuario de la base de datos junto con su modelo de Customer.

```sh
Método              Endpoint
Delete              /:id
```

###  Ejemplo de petición de eliminación del usuario
>  fetch(`https://carseller-back-josedaniel.vercel.app/autos/v1/user/${id}`, {
         method: "DELETE"
      })
      

## Customer model

Cuando se registra un usuario en nuestra App se crea de forma palalela un modelo de este ususario con información adicional del usuario en nuestra aplicación y su historial de compras, como por ejemplo los vehículos que este guarda en favoritos, reviews o vehículos que haya reservado o haya comprado.

##### Base de URL: https://carseller-back-josedaniel.vercel.app/autos/v1/customer

### Conseguir los datos de los usuarios

```sh
Obtención                  Método          Endpoint
Todos Customer              GET                 /
Customer por id             GET                 /:id
```

### Ejemplo de petición
>  fetch(`https://carseller-back-josedaniel.vercel.app/autos/v1/customer`)

Se obtiene el array JSON con los datos de todos los customers. 

>  fetch(`https://carseller-back-josedaniel.vercel.app/autos/v1/customer/${id}`)

Se obtendrá unicamente los datos del customer que introduzcamos con la id del mismo.





