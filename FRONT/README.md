# DOCUMENTACION Car Seller Front.

Documentación-guia de la página web Car Seller.

Esta página web está diseñada para llegar a los usuarios que se encuentran en busqueda de un vehículo tanto nuevo como usados a buen precio. La web se ha creado con el objetivo de que el usuario interesado pueda registrarse, guardar sus vehículos favoritos y comprarlos en caso que se decidan.

El Frontend ha sido desarrollado con Vite usando React y Typescript.

## Instalación de la app

Utilizamos la consola para traernos el proyecto a nuestro directorio que elijamos:

```sh
git clone https://github.com/jseridiaz/car-deelership-project-react-josedaniel-riveradiaz.git
```

Una vez traido nuestro proyecto instalamos dependencias en la carpeta front y back, entrando en cada directorio y utilizamos el comando

```sh
npm i
```

Una vez hecho esto tendríamos todo el proyecto listo para trabajar con el.

## Arquitectura de la aplicación

Dentro de src/components tendremos todos los componentes que utilizamos para renderizar nuestra app con estos. Se ha utilizado una arquitectura de atoms y molecules, donde dentro de atoms están los componentes más simples que tiene pocas lineas de HTML para renderizar como una sencilla funcionalidad como pueden ser un botón o un párrafo. En el directorio de molecules están los componentes que tienen más lineas de código y su estructuración está compuesto por varios componentes atoms, con una funcionalidad más compleja, como puede ser el filtro de búsqueda de vehículos.

## Data fetching

La función globalFetch será la que englobe todas las peticiones que necesitemos realizar en la aplicación. Los posibles endpoints y los demás parametros necesarios lo detallaré a continuación para que su uso sea entendible por todos los desarrolladores que tengan que utilizarla.

### Parámetros

## Explicación de los componentes a reutilizar.

Aqui entraremos a abordar para que se ha creado cada componente.

### - Atoms

Carpeta Icons-> dentro de esta carpeta están componetizados los svg que utilizamos en nuestra aplicación como son por ejemplo las marcas de los veículos de la home. A cada uno se le pueden añadir props para darle una modificación por ejemplo en los estilos para cambiar de ancho o alto de cada uno.

#### - Banner

Este banner contiene el texto que le pongamos con un fondo del color que establezcamos en la porp color, se utiliza para para establecer una linea en todo el ancho del elemento padre con el texto que le pongamos dentro de la prop children. Compuesto por un anchor que nos llevará a la página que le hayamos indicado.

Se utiliza para señalar plasmar un rápido link y cta a una acción comercial que la app quiera destacar, pero sin ocupar mucho espacio, como por ejemplo un enlace a rebajas. O un enlace a una página con un nuevo contenido.

### - BlogContainer

Este componente se utiliza para renderizar un contenedor principal con un enlace sobre una imagen y un parrafo. La imagen y el parrafo es ajustable por props.

Se utiliza para cuando queramos renderizar una imagen y debajo de ella un parrafo que indique a donde lleva esa imagen.

El parrafo que cae debajo de la imagen se monta un poco por encima de la imagen dando un efecto de sobreposición del texto sobre la imagen.

### - Button

props |signal|properties|type|link|children|isLink|functionClick

La prop unicamente requerida es properties.
Componente boton que como su nombre indica crea un boton con un texto que se le aplica con la porp children.
El boton puede o ser un button o ser un anchor que nos lleve a otra página. Lo indicaremos en la prop isLink= true será un anchor | false será un button
Signal: boolean-true: Dejará un icono justo a la derecha del texto|false: No habrá icono.
Properties:Se podrá ajustar los estilos con tailwind sintaxis.
type: el tipo de botton ej: "submit"|"reset"
link: String-> indicando la ruta de la página a la que se va.
functionClick: Callback que indica la función a ejecutar cuando se haga click en el button.

### -CheckBoxFilter

props idName|children|checked|handleChange|reference|

Este componente despliega un input tipo checkbox con funcionalidad.
children:string -> Se creará un label que acompaña al input con el nombre que escribamos en la prop.
handleChange: función que se aplica al clicar el input.
idName: id del input que relaciona el input con el label uniendolos, para que en el caso que se pulse el label sirva como si se hiciese click al input.
reference: Aqui se introduce la constante que utiliza useRef para guardar el valor del input.

### -ContainerColumn

props children|className
El objetivo de este componente es crear un container que englobe su children dentro de el. Por defecto este container tiene un display:flex y flex-direction:column.

className:string- Se introducen los estilos que se quieran añadir al contenedor.
children: otros componentes o etiquetas HTML que irán dentro del contenedor

### -ErrorContainer

props children|errors
Este comoponente se utiliza cuando al enviar un formulario existen errores se añadan el parrafo debajo del input que contiene el error.

children: Vendra incluido el texto (string) que queremos que aparezca como error.
errors: Al utilizar React-form-hook utilizamos el valor errors que nos indicará que tipo de error es. Si el error es pattern el texto se coloca más abajo debido a que ek texto es mayor y por lo tanto necesita más espacio.

### - ErrorPost

Es el componente que se utiliza en la página post para mostrar los errores de esta página. Parecido al componente ErrorContainer.

### -FieldSet

Props- description|children| cssProperties,
Este componente se utiliza dentro del formulario para incluir dentro los inputs que queramos colocar. Incluira en su interior un label que describirá el input que acompañará. Funciona como container.

description:string- descripción del label.
children: lo que queramos incluir después del label pe: inputs.
cssProperties: añadidos de estilos tailwind.

### - H1Component

prop children
Componente para renderizar un h1.
children: texto del h1

### -H2Component

props children|colorTitle

Este componente se utiliza para crear un h2 que esté entre dos lineas que van hasta todo el ancho del viewport.

children: texto del h2
colorTitle: estilos añadidos al h2

### -H2SingleComponent

props h2Text,cssProperties, children

Este comoponente se utiliza para crear un H2 simple con el texto que añadamos y con el estilo que apliquemos.

h2Text: Texto del h2
cssProperties: estilos que se aplican al título
children: Añadido que queramos incluir después del h2. Pueden ser otros componentes o etiquetas HTML.

### -ImgComponent

props- imgPath|alt|classContainer|classImg,

Este componente incluye un container div y dentro una imagen.Lo utilizamos para renderizar una imagen en cualquier lugar de la app. La imagen viene optimizada para que consuma recursos solo cuando se utilicen y para que no se puedan arrastrar.

imgPath:string- ruta de la imagen.
alt:string- descipcion del atributo alt.
classContainer:string- estilos al container padre de la imagen.
classImg: string- estilos aplicados a la imagen.

### -InfoCard

Props title| description| img
Este componente crea un contenedor donde dentro hay una imagen, hay posibilidad de crear un titulo despues de la imagen y después siempre habra un parrafo.

Utilizado en la home en la seccion our services.

title: string- prop opcional que creara un h3 justo después de la imagen.
description:string- Texto descriptivo que se crea al final del componente.
img:string- Solo acepta otro componente que renderice una imagen.

### -InputTextForm

autoComplete = "on",
requiredBoolean = true,
Props id|placeholder|name|type|autoComplete|register
Este componente es un contenedor preparado para renderizarlo dentro de un formulario con un width del 80%.
Dentro del contenedor se renderizará un un label y un input que están los dos unidos por la Id.

id:string- id que se aplica al input y relaciona al label con él.
placeholder:string- ajustará un placeholder dentro del input
type:string- Por defecto es de tipo text, pero se puede indicar otro.
autoComplete: boolean- si es true el input será autocompletable, en caso contrario no.
register: Constant- Con react-hook-form usando el customHook useForm desestructurizamos la constante register, que es la que añadimos ahi si usamos este customHook y tener así el valor del input siempre.
name:string- Aqui viene el nombre que le hemos aplicado al valor dentro del useForm

### -InputNumber

props spanName,idName,handleInput,numberValue,reference,handleKey,placeholder

El componente renderiza un container donde dentro hay un label y un input de tipo número dentro de un formulario.

spanName:string- Esto es el texto que hay dentro del label
idName: string- Aqui se escribe el id del input relacionando el label con el input.
handleInput: función- Aqui se introduce una función callback que se ejecuta cada vez que se escribe un caracter dentro del input.
numberValue:string- Campo para escribir el valor del número, es decir, si el número serán euros, kilometros, etc. Ej: "km","€","Years",etc...
reference: Aqui se escribe el register que lo conseguimos al usar el useForm.
handleKey: funcion- Función callback que se aplica cuando se pulsa un caracter en el teclado.
placeholder: string- texto que aparece en el input como placeholder.

### -LiHeader

prop children

Este componente se usa para renderizar un li.
children: Texto del li.

### -Loader

prop properties

Componente utilizado para renderizar un loader entre la petición al backend y hasta que obtenemos una respuesta.

properties: estilos añadidos de tailwind

### -MenuMobile

prop handleClick

Este componente renderiza el nav del header pero en formato movil.

handleClick: funcion callback que se activa cuando hacemos click al componente.

### -ParrafAutoPicture

prop el, children

Componente que renderiza un parrafo dentro de la tarjeta de cada vehículo. Este parrafo tiene la particularidad que
children:string- primer texto dentro del parrafo.
el:string-Es la última parte del parrafo que tiene el estilo no wrap.

### -SelectPost

prop children, name, register

Container que es una etiqueta Html selector para incluir a dentro las diferentes options.

children: Todas las opciones que queremos poner dentro del selector.
register: register- Al usar useForm de react-form-hook, conseguimos la clave register de la desestructurización del componente, que es la que tenemos que incluir.
name: Aqui utilizaremos al nombre que hemos indicado que va a tener el valor de nuestro selector en el useForm.

## Componentes dentro de Moleculas Reutilizables

### - Seo

Props title, description, url, img
Este componente se utiliza en las páginas que queremos cambiar los metadatos de nuestro html y posicionar mejor el SEO. Y también cambiar en cada página la descripción e imagen y el enlace cuando compartimos el contenido en facebook o twitter.

title:string- Titulo que aparecerá en la pestaña del navegador en la página
description:string- Descripción que aparece en el buscador de google cuando buscamos nuestrá página. Y tambié al compartir la página.
url:string- Enlace de nuestra página que aparecerá cuando compartamos.
img: string- enlace a la imagen.

###-Toast

Prop children, handle
Este componente se usa cuando queremos hacer que aparezca un corto mensaje de aviso, como un alert, dando un mensaje en específico. El contenedor del mensaje podrá ser o verde o rojo.

Lo utilizamos cuando enviamos un formulario y recibimos una respuesta que puede ser de succes o error.

children:string- Texto que aparece en el contenedor para informar.
handle: boolean- true (contenedor de color verde, para indicar succes) o false (contenedor de color rojo, para indicar error)

### Pagination

props allPages, currentPage, setCurrentPage

Componente utilizado para establecer una linea de botones que dependiendo de la longitud de un array que se le pase como prop creará los botones según los argumentos que le pasemos.

Para que funcione correctamente el componente se debe de establecer los siguientes argumentos.
allPages: number- Aqui va el numero de páginas que tiene el listado. Para ellos hay que calcular la longitud del array antes y pasarlo aqui como prop.
currentPage: number- aqui se escribe un estado de react de tipo número con el valor 1 inicial.
setCurrentPage: number- aqui va el setState del estado currentPage.

### -LiProfileMenu

props path,handleClick,children,textLi,

Componente que crea un li donde dentro hay un anchor para cambiar a alguna página dentro de nuestra aplicación y dentro de este Link existe un parrafo.

path: string- Ruta a la página que nos queremos desplazar.
handleClick: funcion- funcion que se aplica cuando hacemos click en el anchor.
children:añadido que se crea después del último párrafo.
textLi: texto que se incluye dentro del parrafo.

En el children lo he utilizado para añadir una imagen después del párrafo y que esté dentro del anchor.

## Home

La home se ha formado con un hero carousel con dos marcas y vehículos para llamar la atención de los usuarios. Sigue una lista con algunas de las marcas que podemos encontrar en el catálogo, con una pequeña transición de animación al hacer hover sobre ellos.

A continuación se ha establecido una lista aletoria de vehículos existentes en el catálogo de nuestra base de datos, filtrados por tipo de vehículo que pueden ser Turismos, Suvs y camiones (concebido como vehículos 4x4 para montaña).En esta parte se a programado la web para que si el usuario se ha registrado eligiendo un tipo favorito de vehículo que está buscando, se elija automáticamente al tipo elegido.

Y por último se a establecido varias secciones de información de valor para el usuario, como acceso al blog, reviews de otros clientes y los servicios que ofrece nuestra página.

### Página de autos

Cambiando a la página de autos accediendo desde un link en el header de nuestra página, se encuentra la parte donde se encontrarán todos los vehículos que se tienen en la base de datos, donde se ha hecho especial foco en la funcionalidad del filtro de lso vehículos por marca, tipo, modelo, tramo de año de fabricación, precio y kilometraje del vehículo. Además de poder seleccionar entre vehículos que ya esten disponibles o que por el contrario esten o reservados o vendidos.

El filtro ha sido diseñado con la base de datos no relacional mongoDB, haciendolo un filtro dinámico y rápido para que se vayan renderizando los vehículos por cada modificación que se haga sin tener que clicar para comenzar a realizar la petición al servidor, dandole una carasterística eficaz a este.

También el filtro consta de un componente de paginación para ir pasando de página, ya que solo se renderizará por página únicamente 8 vehículos.

En cada carta del vehículo se muestra información de marca, modelo, estado del vehículo, año de fabricación, kilometrje, color y precio. Y en el caso que el usuario se haya logeado se añadira un boton para añadir a su modelo de cliente el vehículo como favorito, creandose un listado con solo estos.

Y también si el usuario tiene acceso de administrador se mostrará la información del id del vehículo y un botón para eliminar el vehículo de la base de datos.

### Post

En el caso que el usuario tenga acceso de administrador, aparecerá en el header un link para acceder a la página de post de vehículos, donde rellenado un formulario con los datos del vehículo requeridos se realizará una petición al servidor para crear un nuevo vehículo en la BBDD.

Se ha diñado la web para que solo usuarios administradores sean los autorizados a realizar este tipo de solicitudes y creación de contenido.

### Página de About us

Página About us es donde se mostrará toda la información que se quiera transmitir a los usuarios sobre la web, porque se creo, su misión, en que se diferencia con otras etc...

### Desplegable de perfil

Cuando el usuario se logea aparecerá en el header un botón profile, con varios links |Infomación personal|favoritos|chats (sin funcionalidad)|settings (sin funcionalidad)

####Información personal

En esta página aparece la información personal del usuario que se declaró en el momento del registro, como su nombre, apellido, tipo de vehículo que busca y el número de vehículos que tiene como favoritos.

Y junto a esta infomación, existe un formulario para en el caso que el cliente quiera cambiar algunos de estos datos personales.

#### Página de Favoritos

En esta página obtenemos una lista con los vehículos que el usuario ha previamente en la página de vehículos establecido como que quiere tener un seguimiento de estos, por lo que verá de forma rápida si el vehículo sigue disponible o ha cambiado a estar reservado, o cambios en su precio.

Igualmente desde aqui se pueden eliminar de favoritos cada uno de ellos o todos a la vez clicando en el botón limpiar todos los favoritos.

### Página de Login

Por último en la página de login se encontrará un formulario donde poder introducir el email , y la contraseña que se definió en el momento del registro. Con la opción de guardar su contraseña en el caso que el cliente quiera ahorrarse el paso de logeo cada vez que entra a la página, ahorrandose este paso.

También existe un enlace a la página de registro, para que el usuario que aún no se haya registrado pueda introducir sus datos a traves de un formulario para crear su email de registro y clave de acceso y establecer sus datos personales.

### Resumen

La web es un ecommerce de vehículos administrado por administradores con este rol que es otorgado únicamente por el desarrollador de la web.

Los filtros se han desarrollado para que lo realice la base de datos y no el front, obteniendose una ganancia de eficiencia, rapidez y dinamismo que marca la diferencia con otros filtros existentes en la competencia y no sobrecargando el procesador del equipo del usuario.

Existe aún una gran cantidad de funcionalidad a desarrollar para que la web gane en posibilidades para el usuario.
