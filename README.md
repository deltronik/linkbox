<h1 style="text-align:center">LinkBox</h1>

![LinkBox Preview](https://github.com/deltronik/linkbox/blob/main/images/tn.png)

Linkbox es un tema diseñado para <a href="https://gohugo.io/">Hugo</a> e inspirado en Linktree. Es una página web sencilla construida con HTML, CSS y JS que te permite organizar tus enlaces en un solo lugar.

#### Indice

* [Requisitos](#requisitos)
* [Instalación](#instalacion)
* [Uso](#uso)
* [Personalización](#personalizacion)


## [Requisitos](#requisitos)

* Trabajar en local
	1. [Instale hugo](https://gohugo.io/installation/)
	2. [Instale git](https://git-scm.com/)

* Trabajar directo desde github
	1. fork a este repositorio

## [Instalación](#instalacion)

 * Instalación para edición en local
 	1. Descarge el archivo comprimido aquí o clone el repositorio
 	2. Copie la carpeta LinkBox dentro de la carpeta `themes`
 	3. Edite el archivo de construción `hugo.toml` con la siguiente linea: `theme='linkbox'`

 * Instalación para edición desde github
 	1. fork a este repositorio
 	2. Edite el archivo de construcción `hugo.toml`

## [Uso](#uso)

LinkBox puede configurarse tranquilamente desde el archivo de `hugo.toml`, pero por otro lado si usted tiene conocimientos en desarrollo web puede editar los archivos fuentes.

Confio en que el sitio es tan básico que no se requiere de altos niveles de conocimientos para la edición del codigo fuente.

### Arbol de contenido

```bash
linkbox
├── archetypes
│	└── default.md
├── assets
│	├── css
│	└── js
├── content
│	└── index.md
├── layouts
│	├── _default
│		 └── partials
├── static
	├── image
	│	├── avatar
	│	├── background
	│	└── favicon
	└── fonts
```

Como todos los temas de hugo linkbox utiliza el tipico arbol de archivo, siendo la carpeta `static` la carpeta raiz de su pagina, algunas carpetas como `fonts/` ya estan pre-establecidas en la configuración del sitio, otras como `avatar/` pueden llegar a ser opcionales. Pero no se preocupe esto iremos viendolo poco a poco mientras configuramos el sitio.

### Construir el sitio

Como he dicho antes, linkbox puede configurarse completamente desde el archivo hugo.toml, puede hacer una prueba copiando el siguiente contenido a tu archivo `hugo.toml` que se encuentra en la raiz de su proyecto

```toml
languageCode = 'en-Es'
title = 'LinkBox'

[menu]
        [[menu.main]]
        name = 'LinkBox'
        url = 'https://github.com/deltronik/linkbox'
        weight = 1
	[[menu.main]]
	name = 'DelTronik'
	url = 'https://deltronik.net'
	weight = 2

[params]
        description= "my linkbox site"
        title = 'linkbox'
        google_fonts= true
        fonts = [["Josefin+sans","300,400,700"]]
[params.header]
        enable_avatar=true
        gravatar = false
        avatar = 'image/avatar/avatar.png'
        title_site = 'Linbox'
        paragraph = 'My linkbox site'
        social_menu_bar = true
[params.header.social_bar]
        github = 'deltronik98'
        blog = 'deltronik.net'
```

luego realice un `hugo server` para comprobar su sitio web.

### Parametros

Si esta siguiendo de forma lineal el README ya tendra un modelo de pagina funcional, de ahora en adelante empezaremos a modificar el resto del sitio.
Habrá notado que el sitio se carga con estilos preterminados, estos veremos como editarlos facilmente desde el archivo `hugo.toml` mas adelante, pero siempre es libre de editar el archivo `linkbox/assets/css/template_style.css` claro que siempre que tenga conocimientos de CSS.

#### Hugo.toml

Puede iniciar la edición del archivo hugo.toml o config.toml con las siguientes lineas
```toml
languageCode = 'en-Es'
title = 'titulo que se mostrara en la barra del navegador'
theme = 'linkbox'
```

#### Meta
Puede modifcar las etiquetas Meta del sitio mediante las siguientes lineas:

```toml
[params]
	# descripción del sitio
	description = 'This is a site of hugo with linkbox theme'
	#  Palabras claves del sitio
	keywords = "site, linktree, social media"
	# autor del sitio
	author = 'DANH'
```

#### Fuentes
Usted puede configurar fuentes mediante dos metodos:

  1. Fuentes de [google fonts](https://fonts.google.com/)
  2. Fuentes locales

###### 1. Google fonts

```toml
	# active google fonts
	google_fonts = true
```

Un dato importante es que usted puede agregar tantas fuentes como requiera, lo cual no es recomendable, pero es posible. Solo recuerde que si el nombre de la fuente es por ejemplo 'Josefin sans' remplaze el espacio ` ` con el '+', es decir el nombre de la fuente quedaria de la siguiente forma `Josefin+sans`.

```toml
	google_fonts = true
	fonts = [["Josefin+sans","300,400,700"],["nombre+de+fuente","weight"]]
```

###### 2. Fuentes locales

Si usted tiene el archivo fuente descargado puede agregarlo en  `linkbox/static/resources/fonts/` , esta dirección ya esta predefinida en la configuración del tema.
```toml
	local_fonts = [{name="nombre de la fuente",file="dirección completa del archivo"},{name="Orbit",file="Orbit/Orbit-Regular.ttf"}]
```

#### Header

###### Avatar

Puede configurar una imagen como avatar del sitio, esta imagen puede configurarla de tres maneras diferentes

 1. Usar  [gravatar](https://es.gravatar.com/)
 2. Usar una imagen de forma local
 3. Usar dos imagenes de forma local, las cuales cambiaran dependiendo el tema (dark/light) del usuario

**avatar mediante gravatar**

```toml
	# active la visualización del avatar
	enable_avatar = true
	# Active gravatar
	gravatar = true
	# ingrese su dirección de correo para enlazar gravatar
	avatar = 'mi-correo@gmail.com'
```

**avatar local**

```toml
	# active la visualización del avatar
	enable_avatar = true
	# establesca la dirección de la imagen que desea utilizar, recuerde que su carpeta raiz es 'static'
	avatar = 'image/avatar/avatar.png'
```

**avatar toggle**

```toml
	enable_avatar = true
	gravatar = false
	avatar_light = 'image/avatar/avatarLight.png'
	avatar_dark = 'image/avatar/avatarDark.png'
```

##### Titulo y descripción

```toml
	# Puede agregar un titulo diferente al de la pestaña si lo desea
	title_site = 'my-site'
	# Tambien puede agregar una descripción u slogan
	paragraph = 'el cafe con leche es como el cafe, pero con leche'
```

##### Barra de iconos

Para utilizar los enlaces por iconos solo debera incluir el nombre de la red social, app o pagina web a la que quiera enlazar seguida de su usuario en la mayoria de los casos, en otras debera proporcionar el link completo a su perfil. De momento no todas las redes sociales estan soportadas si usted tiene conocimientos de desarrollo web puede añadir la que desee en el archivo `layout/partial/header/social_bar.html`.

```toml
	[params.header.social_bar]
	github = 'user'
	gitlab = 'user'
	facebook = 'user'
	instagram = 'user'
	twitter = 'user'
	mastodon = 'user'
	linkedin = 'user'
	youtube = 'chanel'
	pinterest = 'user'
	tiktok = 'user'
	reddit = 'user'
	snapchat = 'user'
	whatsapp = 'number'
	telegram = 'user'
	wordpress = 'url'
	wix = 'url'
	stack_overflow = 'user'
	sound_cloud = 'user'
	spotify = 'user'
	apple_music = 'user'
	bandcamp = 'user'
	vimeo = 'user'
	daylamotion = 'user'
	twitch = 'chanel'
	cafecito = 'user'
	tesito = 'user'
	onlyfans = 'user'
	patreon =  'user'
	paypal = 'url'
	blog = 'url'
	personal_site = 'url'
	curriculum = 'url'
	steam = 'user'
	kickstarter = 'url'
```

En caso no querer incluir los iconos, solo el echo de no escribirlos ya lo desactiva, por ello solo escriba aquellos iconos que quiera que se muestre e ignore el resto de la lista.

#### Menu

Linkbox respeta la sintaxis de un menu tipico de Hugo:
```toml
[menu]
	[[menu.main]]#indique que configurara un item para el menu
	# incluir algo antes del nombre (puede incluir html)
	pre = '<i class="fa-brands fa-blog"></i>'
	# Nombre que se mostrara en el menu
	name = 'Item One'
	# incluir algo despues del nombre (puede incluir html)
	post = ''
	# Enlace del item
	url = 'http://localhost:3300'
	# posición (de arriba abajo)
	weight = 1
```

Puede agregar tantos items para el menu como necesite, los parametros post y pre puede no incluirlos si solo requiere mostrar el nombre de sitio al que quiere redireccionar. En caso de querer agregarle un icono recomiendo usar los brands de [font-awesome](https://fontawesome.com/).

#### Footer

De momento no hay mucha configuración activa para el footer, estructuralmente hablando tratare de mejorar esto en futuras revisiones.
Por otro lado puedes modificar el archivo `layout/partial/footer.html`

## [Personalización](#personaizacion)

Por defecto el tema cargara un archivo de estilos preterminados `template_style.css` puedes editar este archivo para modificar la visualización del sitio.
En otras circunstancias LinkBox puede cargar opcionalmente al igual que en el caso de la imagen avatar hojas de estilos a selección del usuario:

 1. Preterminado del tema `template_style.css`
 2. Personalizado tema simple `simple_style.css`
 3. Personalizado tema adaptativo al tema (dark/light) del usuario `toggle_theme.css`

#### 1. Preterminado del tema

Este se cargara automaticamente, no necesita hacer nada.

#### 2. Personalizado simple

active los estilos personalizados con `[params.custom_css]`a continuación la lista de propiedades modificables:

```toml

[params.custom_css]
	# color de fondo
	background_color_body = 'rgb,hexadecimal,name-color,etc..'
	# imagen de fondo
	background_image_body = 'url, recuerde que su rais es la carpeta css en public'
	# Si utiliza una imagen como fondo puede editar otras propiedades como
	# Puede consultar https://developer.mozilla.org/es/docs/Web/CSS/background
	attachment_image = 'fixed'
	size_image = 'cover'
	position_image = 'top'
	repeat_image = 'no-repeat'
	# Color del texto
	color_text = 'black'
	# Contenedor de los elementos del sitio
	# Color del contenedor, puede obviar si no quiere visualizar este contenedor
	background_color_container = '#fff00'
	# redondeo de las puntas superiores del contenedor
	borde_radius_container = '15px'
	# ancho del contenedor
	width_container = '90%'
	# separación entre el borde superior del navegador y el contenedor
	top_container = '2em'
	# circunbalación del avatar
	radius_avatar = '15px'
	# tamaño del avatar
	size_avatar = '120px'
	# separación entre el borde superior del contenedor y la imagen avatar
	top_avatar = '2em'
	# Separación entre el avatar y el titulo [si es que existe]
	divisor_avatar_title = '1em'
	#  fuente (fonts) para el titulo
	font_title = 'Roboto'
	# Tamaño del titulo
	size_title = '2em'
	# ancho de la letra titulo(grosor?)
	weight_title = '100%'
	# style del titulo
	style_title = 'italic'
	# variante
	variant_title = 'none'
	# stretch_title = 'expaded'
	# Divisor entre el titulo y la descripción o frase
	divisor_title_description = '8px'
	# tamaño de texto
	description_size = '0.8em'
	# Divisor de la descripción y la barra de iconos
	divisor_description_icon
	# Si por alguna loca razon quiere agregar color fondo a los iconos
	color_back_icon = 'none'
	# separación entre iconos (el espacio multiplicado en 2)
	separate_icon = '8px'
	# Colores de los iconos
	color_icon
	# tamaño de los iconos
	size_icon = '1em'
	# divisor entre el menu y la barra de iconos
	divisor_menu_header = '4em'
	# divisor entre el menu y el pie de pagina
	divisor_menu_footer = '4em'
	# ancho de los items del menu
	widht_menu = '100%'
	# Separación entre items
	divisor_item_menu = '1em'
	# redondear items
	radius_item_menu = '0px'
	# color de los items
	color_item_menu = 'white'
	# color del texto de los items
	color_text_menu = 'black'
	# tamaño del texto de los items
	color_text_menu = '1em'
	# ancho de los items  '100%' recomendado, si le da un tamaño menor puede enlistar de 2 en 2 o mas
	widht_item_element = '100%'
	# Color de fondo pie de pagina
	background_color_footer = 'red'
	# color de texto pie de pagina
	color_text_footer = 'white'
	# tamaño del pie de pagina
	size_footer = '4em'

```

