---
title: "Conceptos básicos"
description: Los términos y estados clave para entender ShipGo!
sidebar:
  order: 3
---

## Envío y paquetes

Un **envío** es lo que se le entrega a un destinatario. Un mismo envío puede tener varios **paquetes** (bultos), cada uno con su categoría, peso y una descripción opcional.

Cada envío recibe un **código de seguimiento** único. Con ese código el cliente consulta el estado del envío, y el código viaja impreso en el QR de la [etiqueta](/manual/panel-web/etiqueta-envio/).

### Tipos de entrega

| Tipo | Qué significa |
|------|---------------|
| **Entrega a domicilio** | El chofer lleva el envío a la dirección del destinatario. |
| **Retiro en sucursal** | El destinatario retira el envío en una sucursal que se elige al crearlo. |

### Palabra de entrega

Es una clave de dos palabras (por ejemplo, `LUNA-PERRO`) que le llega por email al **remitente**, junto con el código de seguimiento. El remitente se la pasa a quien recibe el envío y, al momento de la entrega, quien recibe se la dicta al chofer o a quien registra la entrega. Ver [Palabra de entrega](/manual/panel-web/palabra-de-entrega/).

## Sucursal

Una **sucursal** es un punto físico de la empresa. Es el origen de los envíos y de los viajes, y también puede ser un punto de retiro o una parada intermedia.

## Viaje y parada

Un **viaje** agrupa los envíos que se reparten con un vehículo y uno o más choferes, con una fecha y hora de salida y de llegada planificadas.

Cada viaje se divide en **paradas**: una por cada destino (un domicilio o una sucursal). Una parada puede incluir varios envíos. El orden de las paradas es el orden de la ruta.

## Estados

### Envío

| Estado | Significado |
|--------|-------------|
| **Creado** | Recién registrado. |
| **En sucursal** | Está en una sucursal, disponible para sumarlo a un viaje o, si es de retiro, para que el destinatario lo busque. |
| **Asignado a viaje** | Forma parte de un viaje todavía no cargado. |
| **En vehículo** | Ya fue cargado en el vehículo. |
| **En camino** | El viaje salió y el envío está en reparto. |
| **Entregado** | Se entregó al destinatario. |
| **No entregado** | El intento de entrega falló. |

### Viaje

| Estado | Significado |
|--------|-------------|
| **Creado** | El viaje se ofreció a varios choferes y todavía nadie lo aceptó. En la app del chofer figura como **Pendiente de aceptar**. |
| **Planificado** | El viaje está armado, con chofer confirmado, y espera la carga. |
| **En carga** | Se están cargando los envíos en el vehículo. |
| **Listo para salir** | La carga está cerrada; el chofer puede iniciar el viaje. |
| **En camino** | El chofer inició el viaje. |
| **Con problemas** | Se reportó un incidente. Un administrador puede reanudarlo. |
| **Finalizado** | El viaje terminó. |
| **Cancelado** | El viaje se canceló antes de terminar. |

### Vehículo

| Estado | Significado |
|--------|-------------|
| **Disponible** | Se puede asignar a un viaje. |
| **Asignado a viaje** | Tiene un viaje por delante. |
| **En viaje** | Está en reparto. |
| **En service** | Está en mantenimiento. |
| **Fuera de servicio** | No se puede usar. |

### Estado en vivo en el mapa

En el [mapa en vivo](/manual/panel-web/monitoreo-tiempo-real/), cada viaje en camino muestra además una señal de salud calculada en el momento:

| Señal | Significado |
|-------|-------------|
| **A tiempo** (verde) | Llegan ubicaciones del vehículo y todavía no pasó la llegada planificada. |
| **Retrasado** (naranja) | Ya pasó la llegada planificada y el viaje sigue en curso. |
| **Sin señal** (gris) | No llegó ninguna ubicación en los últimos 5 minutos. |

## Fechas

En todo el panel, las fechas se muestran como **DD/MM/AAAA** y las horas en formato de **24 horas** (por ejemplo, 10/11/2026 14:03).
