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
│		 └── default.md
├── assets
│		├── css
│		└── js
├── content
│	 └── index.md
├── layouts
│		 ├── _default
│		 └── partials
├── static
		 ├── image
		 │		 ├── avatar
		 │		 ├── background
		 │		 └── favicon
		 └── fonts
```

Como todos los temas de hugo linkbox utiliza el tipico arbol de archivo, siendo la carpeta `static` a carpeta raiz de su pagina, algunas carpetas como `fonts/` ya estan pre-establecidas en la configuración del sitio, otras como `avatar/` pueden llegar a ser opcionales. Pero no se preocupe esto iremos viendolo poco a poco mientras configuramos el sitio.

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

luego realice un `hugo server` para comprobar su sitio web