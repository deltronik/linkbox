<h1 align='center'>LinkBox</h1> 
Linkbox es un tema simple y sencillo para [HUGO](https://gohugo.io/) inspirado en linktree que te permitira organizar tus enlaces en un solo lugar

![LinkBox Template for HUGO](https://github.com/deltronik/linkbox/blob/main/images/tn.png)

## Feature (#feature)

Exeptuando el framework mismo, LinkBox no necesita ninguna dependencia. Usted podria simplemente clonar este repositorio y configurarlo a su gusto desde el archivo `hugo.toml`. 
LinkBox es relativamente facil de modificar, ya sea desde el archivo de configuración o directamente su codigo fuente:

- Utiliza HTML, CSS y JS puros
- font-awesome
- google fonts and local fonts



## Instalación

[Instalación](#instalacion)

Para utilizar el proyecto y configurarlo de forma local, sigue estos pasos:

1. Instala Hugo.
2. Inicie un nuevo proyecto medianto `hugo new site my-new-site`
3. Clona el repositorio de Linkbox en tu computadora.
4. Copie la carpeta LinkBox dentro de la carpeta 'theme'
5. indique el tema mediante `theme= 'linkbox'` en su archivo de configuración
6. inicie un servidor local para comprobar el funcionamientos con `hugo server`

Para utilizar el proyecto y configurarlo de forma remota, sigue estos pasos:

1. Clone este repositorio
2. Inicie github actions o despliegue desde netlify. El repositorio contiene el archivo para el despliege de github page `.github/workflows/hugo.yaml` y el archivo `netlify.toml` que le permitiran desplegar desde la plataforma de su elección

## Uso

[Uso](#uso)

Para usar el proyecto, sigue estos pasos:

1. Personaliza el template para que se adapte a tus necesidades.
2. Carga el template en tu servidor web.

### 1. Personalice el tema a sus necesidades

Las siguientes instrucciones son para construir el sitio desde el archivo `hugo.toml`, LinkBox puede configurarse y editarse desde este mismo sin necesidad de alterar su codigo fuente. Si usted tiene conocimientos en desarrollo web es bienvenido a revizar el codigo, LinkBox es realmente simple que no necesitaria grandes conocimientos para modificarlo desde el codigo fuente

#### Configuración basica

En su archibo `hugo.toml` escriba lo siguiente:

```toml
	 languageCode = 'es-Es'
	 title = 'mi-title'
```
Luego inicie un servidor local para comprobar la funcionalidad de su nueva pagina mediante `$ hugo server`. Con esto sera mas que suficiente para iniciar el sitio con el tema LinkBox

#### Link Menu

Para agregar enlaces LinkBox respeta la sintaxis de cualquier menu de hugo. Por ejemplo:

```toml
[menu]
        [[menu.main]]
        name = 'githut'
        url = 'https://github.com/deltronik/linkbox'
        weight = 1
        [[menu.main]]
        name = 'Licence'
        url = 'https://gitub.com/deltronik/linkbox/LICENSE'
        weight = 2
```
Usten puede agregar tantos enlaces como necesite y ordenarlos a su gusto mediante `weight`

###### Link Menu Pre / Post

Opcionalmente, si usted prefiere puede agreagar instrucciones o iconos antes o despues del nombre del enlace. Por ejemplo:

```toml
[menu]
        [[menu.main]]
        pre = '<i class="fa-brands fa-github>'
        name = 'githut'
        url = 'https://github.com/deltronik/linkbox'
        weight = 1
        [[menu.main]]
        name = 'Licence'
        url = 'https://gitub.com/deltronik/linkbox/LICENSE'
        weight = 2
        post = '<i class="fa-brands fa-github">'
```
## Contributing

[Contributing](#contributing)

Si deseas contribuir al proyecto, puedes abrir un issue o enviar un pull request.

## Contacto

[Contacto](#contacto)

Si tienes alguna pregunta, puedes contactarme a través de mi correo electrónico o mi perfil de GitHub.
