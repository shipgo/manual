---
description: Cómo usar el mapa en vivo y gestionar incidencias
---

# Monitoreo en Tiempo Real — Mapa

La pantalla `/mapa` muestra la posición en vivo de toda la flota activa y permite actuar sobre incidencias desde el mismo lugar.

## Cómo Leer el Mapa

Cada ícono en el mapa representa un vehículo en ruta. Su color refleja el estado del viaje (ver [Conceptos Básicos](../introduccion/conceptos-basicos.md)):

- **Clic en un vehículo** → abre el panel lateral con el detalle del viaje: paradas completadas, pendientes y ETA estimado.
- Usá los filtros para mostrar solo flotas en estado 🔴 o 🟡.

## Acciones Disponibles desde el Mapa

Desde el detalle de un viaje podés:

- Ver la **hoja de ruta** completa del chofer
- **Reportar una incidencia** manualmente (si el chofer no puede hacerlo)
- **Desvincular al chofer** del viaje en casos de emergencia

## Qué Hacer ante una Incidencia (Vehículo en Rojo)

{% stepper %}
{% step %}
Identificá el viaje afectado en el mapa o en las alertas del [Dashboard](centro-de-accion.md).
{% endstep %}

{% step %}
Abrí el detalle del viaje y revisá la incidencia reportada.
{% endstep %}

{% step %}
Tomá acción: contactá al chofer, reasigná paradas a otro viaje, o escalá al administrador.
{% endstep %}

{% step %}
Una vez resuelta la situación, actualizá el estado desde el panel lateral del viaje.
{% endstep %}
{% endstepper %}
