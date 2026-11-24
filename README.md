# Manual de usuario — ShipGo!

Manual de usuario de **ShipGo!**, la plataforma de gestión logística de última milla. Está hecho con [Astro Starlight](https://starlight.astro.build) y se publica en GitHub Pages.

> Antes de esta versión el manual vivía en GitBook (`SUMMARY.md` y `.gitbook.yaml`). Se migró a Starlight; el contenido es el mismo.

Publicado en: https://shipgo.github.io/manual/

## Cómo correrlo

Requiere Node 24 y pnpm.

```bash
pnpm install
pnpm dev       # servidor local en http://localhost:4321/manual/
pnpm build     # build de producción en dist/ (incluye el índice de búsqueda Pagefind)
pnpm preview   # sirve el build generado
```

## Estructura

```
astro.config.mjs        # configuración de Starlight (sitio, base, sidebar, editLink)
src/content/docs/
├── index.mdx           # portada
├── introduccion/
├── panel-web/
└── app-mobile/
src/assets/             # imágenes usadas desde las páginas
public/                 # archivos estáticos (favicon)
.github/workflows/      # deploy a GitHub Pages
```

## Cómo agregar una página

1. Creá un archivo `.md` (o `.mdx` si usa componentes como `Steps` o `Tabs`) dentro de la carpeta de la sección que corresponda en `src/content/docs/`.
2. Agregá el frontmatter:

   ```md
   ---
   title: Título de la página
   description: Resumen corto
   sidebar:
     order: 4
   ---
   ```

3. Listo: el sidebar se genera solo (`autogenerate`) y se ordena por `sidebar.order`. No hace falta tocar `astro.config.mjs`.

Los links internos deben incluir el base: `/manual/panel-web/centro-de-accion/`.

Avisos: `:::note`, `:::tip`, `:::caution` y `:::danger` (cerrar con `:::`). Pasos: componente `<Steps>` con una lista numerada.

## Publicación

El workflow `.github/workflows/deploy.yml` construye el sitio en cada pull request (sólo valida) y lo despliega a GitHub Pages en cada push a `main`. En el repo, en Settings → Pages, la fuente tiene que estar en "GitHub Actions".
