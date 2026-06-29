---
description: Cómo crear viajes y asignar envíos, choferes y vehículos
---

# Gestión de Viajes

La sección `/viajes` lista todos los viajes con su estado, progreso y chofer asignado.

## Crear un Nuevo Viaje

El flujo de creación sigue cuatro pasos en orden:

{% stepper %}
{% step %}
**Fecha y sucursal** — Seleccioná la fecha de ejecución y la sucursal de salida.
{% endstep %}

{% step %}
**Agregar envíos** — Elegí los paquetes pendientes que formarán parte de este viaje. El sistema sugiere un orden de paradas optimizado por ruta.
{% endstep %}

{% step %}
**Asignar recursos** — Seleccioná el vehículo disponible y el chofer que ejecutará el viaje.
{% endstep %}

{% step %}
**Confirmar** — El viaje queda creado y el chofer recibe la ruta en su app móvil automáticamente.
{% endstep %}
{% endstepper %}

## Acciones sobre un Viaje Activo

Desde el detalle del viaje (`/viajes/:id`) podés:

| Acción | Cuándo usarla |
|--------|---------------|
| **Ver hoja de ruta** | Para revisar el orden de paradas del chofer |
| **Reportar incidente** | Si el operador detecta un problema desde el panel |
| **Desvincular chofer** | En caso de emergencia o cambio de conductor |
| **Cancelar viaje** | Solo si el viaje aún no inició |

{% hint style="warning" %}
Cancelar un viaje devuelve todos sus envíos al estado "Pendiente de asignación".
{% endhint %}
