---
description: Cómo crear, editar y gestionar envíos en el sistema
icon: box
---

# Gestión de Envíos

La sección `/envios` centraliza todos los paquetes del sistema, con su estado, destino y chofer asignado.

## Crear un Nuevo Envío

{% stepper %}
{% step %}
Ir a **Envíos → Crear** (`/envios/crear`).
{% endstep %}

{% step %}
Completar los datos de **origen**: sucursal y dirección de retiro.
{% endstep %}

{% step %}
Ingresar los datos de **carga**: descripción, peso y dimensiones.
{% endstep %}

{% step %}
Completar el **destino**: nombre del destinatario, dirección y teléfono de contacto.
{% endstep %}

{% step %}
Confirmar. El envío queda en estado **"Pendiente de asignación"** y aparece disponible para ser agregado a un viaje.
{% endstep %}
{% endstepper %}

## Otras Acciones sobre Envíos

Desde el listado o el detalle de un envío (`/envios/:id`) podés:

- **Editar** los datos del envío (mientras no esté en tránsito)
- **Localizar en mapa** para ver su posición en tiempo real
- **Reportar** una novedad sobre el paquete
- **Asignar a un viaje** directamente desde el detalle
- **Eliminar** el envío (solo si está pendiente)

{% hint style="info" %}
Los envíos ya asignados a un viaje activo no pueden editarse ni eliminarse hasta que el viaje finalice.
{% endhint %}
