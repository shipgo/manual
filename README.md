# Manual de usuario — ShipGo!

Manual de usuario de **ShipGo!**, la plataforma de gestión logística de última milla. Está hecho con [Astro Starlight](https://starlight.astro.build) y se publica en GitHub Pages.

> Antes de esta versión el manual vivía en GitBook (`SUMMARY.md` y `.gitbook.yaml`). Se migró a Starlight y el contenido se reescribió y amplió respecto de la versión de GitBook.

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
├── app-mobile/
└── portal/            # portal del cliente y seguimiento público
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

**Slugs heredados:** algunos nombres de archivo (y por lo tanto de URL) no coinciden con el título actual, a propósito, para no romper links existentes. Por ejemplo: `gestion-envios-viajes` = Envíos, `centro-de-accion` = Dashboard, `monitoreo-tiempo-real` = Mapa en vivo, `ejecucion-entregas` = Entregas e `inicio-jornada` = Iniciar el viaje. Si renombrás uno, dejá una redirección.

**Títulos:** en mayúscula solo la primera palabra y los nombres propios.

Avisos: `:::note`, `:::tip`, `:::caution` y `:::danger` (cerrar con `:::`). Pasos: componente `<Steps>` con una lista numerada.

## Warning conocido del build

`Entry docs → 404 was not found` es esperable: Starlight inyecta su propia página 404 y agregar `src/content/docs/404.md` genera un conflicto de rutas (`/404` ya existe), así que se dejó el comportamiento por defecto.

## Publicación

El workflow `.github/workflows/deploy.yml` construye el sitio en cada pull request (sólo valida) y lo despliega a GitHub Pages en cada push a `main`. En el repo, en Settings → Pages, la fuente tiene que estar en "GitHub Actions".
