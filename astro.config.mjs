// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://shipgo.github.io',
  base: '/manual',
  trailingSlash: 'always',
  integrations: [
    starlight({
      title: 'Manual de usuario — ShipGo!',
      description: 'Manual de usuario de ShipGo!, la plataforma de gestión logística de última milla.',
      defaultLocale: 'root',
      locales: {
        root: { label: 'Español', lang: 'es' },
      },
      favicon: '/favicon.svg',
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/shipgo/manual' },
      ],
      editLink: {
        baseUrl: 'https://github.com/shipgo/manual/edit/main/',
      },
      sidebar: [
        { label: '🚀 Introducción y Primeros Pasos', items: [{ autogenerate: { directory: 'introduccion' } }] },
        { label: '💻 Panel Web (Operador / Admin)', items: [{ autogenerate: { directory: 'panel-web' } }] },
        { label: '📱 App Mobile (Chofer)', items: [{ autogenerate: { directory: 'app-mobile' } }] },
      ],
    }),
  ],
});
