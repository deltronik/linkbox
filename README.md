<h1 style="text-aligb:center">LinkBox</h1>
![LinkBox Preview](https://github.com/deltronik/linkbox/blob/main/images/tn.png)

---

Linkbox es un tema diseñado para [hugo](https://gohugo.io) e inspirado en LinkTree. Es una web rapida y sencilla construida con HTML y CSS que permitira organizar tus enlaces en un solo lugar.

#### Indice

* [requisitos](#requisitos)
* [Instalación](#instalación)
* [Configuración básica](#config)
* [Enlaces](#enlaces)
* [Etiquetas metas](#metas)
* [Perfil](#user)

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
	post = "<i class='fa-brands fa-github'></i>
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