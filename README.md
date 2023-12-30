<h1 style="text-aligb:center">LinkBox</h1>

![LinkBox Preview](https://github.com/deltronik/linkbox/blob/main/images/tn.png)

---

Linkbox es un tema diseñado para [hugo](https://gohugo.io) e inspirado en LinkTree. Es una web rapida y sencilla construida con HTML y CSS que permitira organizar tus enlaces en un solo lugar.

#### Indice

* [Requisitos](#requisitos)
* [Instalación](#instalación)
* [Configuración básica](#config)
* [Enlaces](#enlaces)
* [Etiquetas metas](#metas)
* [Perfil](#user)
* [Pie de Pagina](#footer)
* [Personalización](#css)


## [Requisitos](#requisitos)
- Local
	1. Instalar [hugo.](https://gohugo.io/installation)
	2. Instalar [Git.](https://git-scm.com)
- Remoto
	1. Fork a este repositorio

## [Instalación](#instalación)

Linkbox es extremadamente sencillo, desde su instalación hasta su uso, por ello puede implementarlo de la manera que mas le convenga

- #### Instalación mediante Submodule Git
	1. inicie un nuevo proyecto con HUGO → `hugo new site my-new-site`
	2. muevase dentro de su nuevo proyecto → `cd my-new-site` e inicie git `git init`  
	3. Añada linkbox mediante submodule
	```bash
	git submodule add https://github.com/deltronik/linkbox.git 'themes/linkbox'
	```
	4. En su archivo de configuración hugo.toml modifique lo siguiente
	```toml
	baseURL = ''
	title = 'your title site'
	theme = 'linkbox'
	```
- #### Clonar mediante git

De forma alternativa y creo la mas facil, es clonar este repositorio mediante git `git clone https://github.com/deltronik/linkbox.git` y editar el archivo hugo.toml

- #### Fork al repositorio
Otra forma aun mas sencilla es directamente hacer fork del reposirio y editar el archivo hugo.toml en editor

## [Configuración Básica](#config)

LinkBox puede configurarse completamente desde el archivo hugo.toml, por ello puede iniciar la edición de dicho archivo con la siguientes lineas:

```toml
baseURL = "."
# Idioma del sitio
languageCode = "es-es"
# Titulo del sitio
Title = "my-title-site"
# buscadores pueden indexar enlaces del sitio (true or false)
enableRobotsTXT = "false" 
```
## [Enlaces](#enlaces)
Para configurar enlaces del menu linkbox respeta la sintaxis tipica de los menus en Hugo.
- Parametros del menu
	1. `pre`: este permite añadir contenido antes del titulo del item del menu, puede implementar html si asi lo desea por ejemplo añadir un icono de [fontawesome](https://fontawesome.com)
	2. `name`: es el nombre o titulo que mostrara el item del menu
	3. `url`: es la dirección a la que se redirigira al presionar el enlace
	4. `post`: al igual que pre, post permite añadir contenido solo que este lo añade al final, despues del nombre
	5. `weight`: permite seleccionar la posición en la que se mostrara el item

```toml
[menu]
	[menu.main]
	pre = "<i class='fa-brands fa-github'></i>"
	name = "github"
	url = "https://github.com"
	post = ""
	weight = 2
	[menu.main]
	pre = ""
	name = "github"
	url = "https://github.com"
	post = "<i class='fa-brands fa-github'></i>"
	weight = 1
```
## [Algunas etiquetas meta..](#meta)

Linkbox permite configurar algunas etiquetas metas para  mejorar el SEO del sitio, estas son opcionales y no necesariamente es obligatorio configurarlas.

```toml
[Params]
	description = "Una breve descripción del su sitio web y/o emprendimiento o empresa.."
	keywords  = "Palabras claves para facilitar la busqueda..."
	author = "author del sitio"
```

#### Favicons
Por defecto puede arrojar los archivos del favicon dentro de `statics` con los nombres preterminados, linkbox los indexara de forma automatica. 
Por otra parte si quiere una mejor organización, por ejemplo poner el archivo favicon.ico dentro de `static/img/favicon/favicon.ico` puede configurarlo desde el archivo hugo.toml de la siguiente manera:

```toml
[params]
	favicon = "static/img/favicon"
```
No es necesario configurar la ruta para cada archivo individual, linkbox toma la ruta del parametro favicon y la utiliza de forma preterminada con todos los archivos dentro de la carpeta.

| Nota: Preferentemente mantenga los nombres preterminados de los archivos favicon.

#### Fonts
Linkbox le permitira conectar fuentes de dos formas
1. **Fuentes locales** : por defecto la raiz de su proyecto es en 'static', por ello si tiene una fuente tipografica que añadir arrojarla en este directorio y configurar en hugo.toml lo siguiente:

```toml
[params]
	local_fonts = [{name="Orbit",file="orbit.ttf"},{name="name-fonts", file="path"}]
```
2. **Usar la api de Google**: Para conectar una fuente desde google fonts puede configurar en el archivo hugo.toml lo siguiente:

```toml
[params]
	google_fonts = [["Josefin+Sans","300,700"],["Orbit","400"]]
```
|Nota: Si el nombre de la fuente tipografica lleva un espacio ' ', remplase el mismo con el simbolo '+' 

## [Perfil](#user)

#### Avatar

Si desea configurar una imagen para el avatar puede hacerlo de dos formas.

1. Utilizar [gravatar](https://gravatar.com), en el archivo hugo.toml configure su correo electronico en el parametro gravatar de la siguiente forma:

```toml
[params]
	[params.header]
	gravatar = "mi-correo@gmail.com"
```
2. Puede utilizar una imagen local, recuerde siempre que su carpeta raiz es `static` ,por ende, puede arrojar el archivo de imagen en el directorio y configurar el parametro avatar de la siguiente manera:
```toml
[params]
	[params.header]
	avatar = "avatar.jpg"
```
Si, por alguna casualidad usted necesida que el sitio carge una imagen preterminada para el modo claro y otra para el modo oscuro puede arrojar ambos archivos en `static` y configurarlos de la siguiente manera:
```toml
[params]
	[params.header]
	avatar = "avatar.jpg"
	avatarDark = "avatarDark.jpg"
```
#### User Title
Puede configurar un nombre o titulo debajo del avatar mediante:
```toml
[params]
	[params.header]
	user = "Mi Title/Name"
```

#### Paragraph

Si desea configurar una frase, slogan o una simple descripción debajo del avatar puede hacerlo como se muestra a continuación:

```toml
[params]
	[params.header]
	paragraph = "this is a description"
```
##### Iconos

Puede mostrar enlaces en forma de iconos debajo si lo desea (aún no esta configurado completamente pero se encuentra en estado funcional) solo debe añadir la red social o plataforma de la que desee mostrar el icono y añadir , en algunos casos, el usuario, en otros debera proveer el enlace directo a su perfil.

```toml
    [params.header.social_bar]
        github = 'user'
        gitlab = 'user'
        facebook = 'user'
        instagram = 'user'
        x = 'user'
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
```

## [Pie de Pagina](#footer)
Puede elegir si mostrar o no el pie de pagina, basta con configurar un par de parametros en el archivo hugo.toml

```toml
[params]
	[params.footer]
	description = "this is a description"
	license = "MIT"
```
| Nota: si no configura la licencia se mostrara la licencia de LinkBox Preterminada, si tiene conocimientos de desarrollo web puede editar el archivo `linkbox/layouts/partials/footer.html``

## [Personsalización](#css)

LinkBox le permitira editar los archivos css desde el mismo hugo.toml. Puede personalizar (casí) todo con solo algunos parametros.

|Nota: todos lo parametros pueden ser configurados con las unidades de medidas permitidas por css. Para mas información sobre estas unidades puede consultar [aquí](https://developer.mozilla.org/es/docs/Learn/CSS/Building_blocks/Values_and_units)


#### Configuración de sitio
```toml
[params.style]
	# color de fondo
	backColor = "white"
	# color de fondo modo oscuro (opcional)
	backColorDark = "black"
	# imagen de fondo (recuerde que su carpeta raiz es 'statics')
	backImg = "background.jpg"
	# imagen fondo modo oscuro (opcional)
	backImgDark = "backgroundDark.jpg"
```
###### Background Image

Si establece una imagen de fondo he decidido permitir total control de las propiedades de la misma en css, puede controlar los siguientes parametros:

1. Repetir imagen: utilice `repeatImg = "valor"` , puede utilizar los valores permitido por css. [Aqui puede ver los valores y resultados de cada uno](https://developer.mozilla.org/es/docs/Web/CSS/background-repeat).
2. `attachmentImg`: puede utilizar los valores scroll, fixed o inherit. [Puede ver aqui el resultado de cada opción](https://developer.mozilla.org/en-US/docs/Web/CSS/background-attachment).
3. `positionImg`: Permite todos los valores de 'background-position'. [Puede ver los valores y resultados aqui](https://developer.mozilla.org/en-US/docs/Web/CSS/background-position).
4. `sizeImg`: puede utilizar los valores permitidos por css para 'background-size'. [Puede ver los valores y resultados aquí](https://developer.mozilla.org/en-US/docs/Web/CSS/background-size).

Puede que su archivo hugo.toml ya deba verse de esta forma:

```toml
baseURL = 'https://box.deltronik.net'
languageCode = 'es-es'
title = 'LinkBox'
enableRobotsTXT = true

[menu]
        [[menu.main]]
    	pre = "<i class='fa-brands fa-github'></i>"
        name = 'github'
        url = 'https://github.com/deltronik/linkbox'
        post = ""
    	weight = 1
        [[menu.main]]
        pre = ""
        name = 'licence'
        url = "https://github.com/deltronik/linkbox/LICENSE"
        post = "<i class='fa-solid fa-file-circle-check'></i>"
        weight = 2
[params]
        google_fonts = [["Josefin+Sans","300"]]
        local_fonts = [{name="Orbit", file="Orbit/Orbit-Regular.ttf"}]
    	[params.header]
        user = "LinkBox"
        paragraph = "Cuando los electrones se mueven las cosas suceden"
        avatar = "img/avatar/avatar.png"
        [params.header.icons]
        github = "deltronik"
        gitlab = "deltronik_"
        x = "deltronik_"
[params.footer]
    	description = "This is a description"
    	creator = true
		license ="MIT"
[params.style]
    	backImg = 'img/background/background.jpg'
		backImgDark = "img/background/background2.jpg"
    	backColor = "white"
    	repeatImg = "no-repeat"
    	attachmentImg = "fixed"
    	positionImg = "center"
    	sizeImg = "cover"
```
#### Peronsalizar Cabezera
Puede personalizar la cabecera, esto inluye imagen avatar/usuario, iconos, frace y titulo.

Recuerde que puede emplear cualquier valor permitido por css dependiendo el parametro que requiera personalizar (px,em,rgb(0,0,0),#fff,%..) para mas información [aquí](https://developer.mozilla.org/es/docs/Learn/CSS/Building_blocks/Values_and_units).

```toml
[params.style.user]
	# tamaño de la imagen (puede utilizar cualquier valor permitido por css)
	imgSize = "180px"
	# Radio de la imagen (puede utilizar cualquier valor permitido de css)
	imgRad = "50%"
	# Altura de la imagen (puede utilizar cualquier valor permitido por css)
	imgSeparate = "4em"
	# separación entre el titulo/nombre y la imagen
	titleSeparate = "15px"
	# tamaño del titulo/nombre(puede utilizar cualquier valor permitido por css)
	titleSize = "2em"
	# fuente tipografica del titulo
	titleFamily = "Orbit"
	# Color del titulo(puede utilizar cualqueir valor permitido por css)
	titleColor = "#fff"
	# Color del slogan/frase/descripción(puede utilizar cualquie valor permitido por css)
	textColor = "rgb(255, 255, 255)"
	# Separación entre el titulo y frase (puede usar cualquier valor permitido por css)
	textSeparate = "10px"
	# familia tipogramica para la frase/slogan
	textFamily = "Orbit"
	# tamaño del texto
	textSize = "1.1em"
[params.style.icons]
	# colores de los iconos(puede utilizar cualquier valor permitido por css)
	color = "black"
	# tamaño de los iconos (puede utlizar cualquier valor permitido por css)
	size = "1.5em"
```

#### Personalizar items del Menu

Puede personalizar tamaño, tipografia, y color de los items del menu a su gusto solo debe añadir los siguientes parametros en hugo.toml
```toml
 [params.style.menu]
		# color del texto
        textColor = "white"
		# tamaño del texto
        textSize = "2em"
		# familia tipografica del texto
        textFamily = "Josefin Sans"
		# color de fondo de los items
        itemColor = "black"
		# separación entre items del menu
        itemSeparate = "2em"
		# tamaño de los items
        itemSize = "3em"
		# ancho de los items
        itemWidth = "90%"
		# radio de los items
        itemRad = "15px"
```
| Nota: Recuerde que si requiere establecer colores para el modo oscuro solo debe agregar 'Dark' al final del parametro (en aquellos que se traten de colores) para establecer un valor. por ejemplo

```toml
[params.style.menu]
	itemColor = "black"
	itemColorDark = "white"
```

#### Personalice el pie de pagina
```toml
[params.style.footer]
		# color de fondo
        backColor = "black"
		# tamaño del pie de pagina (alto)
        footerSize = "auto"
		# tamaño del texto
        textSize = "14px"
		# color del texto
        textColor = "white"
		# ancho del pie de pagina
        footerWidth = "100%"
		# radio del pie de pagina
        rad = "0px"
```
