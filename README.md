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
	fonts = [["Josefin+sans","300,400,700"]["nombre+de+fuente","weight"]]
```

###### 2. Fuentes locales

Si usted tiene el archivo fuente descargado puede agregarlo en  `static/resources/fonts/` , esta dirección ya esta predefinida en la configuración del tema.
```toml
	local_fonts = [{name="nombre de la fuente",file="dirección completa del archivo"}{name="Orbit",file="Orbit/Orbit-Regular.ttf"]
```

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
