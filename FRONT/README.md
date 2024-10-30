# DOCUMENTACION Car Seller Front.

Documentación-guia de la página web Car Seller.

Esta página web está diseñada para llegar a los usuarios que se encuentran en busqueda de un vehículo tanto nuevo como usados a buen precio. La web se ha creado con el objetivo de que el usuario interesado pueda registrarse, guardar sus vehículos favoritos y comprarlos en caso que se decidan.

El Frontend ha sido desarrollado con Vite usando React y Typescript.

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
