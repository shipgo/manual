---
title: "Administración"
description: Gestión de usuarios, flota y sucursales (solo Administrador)
sidebar:
  order: 6
---

Esta sección es exclusiva del rol **Administrador** y agrupa la configuración del sistema.

:::caution
Los Operadores Logísticos no tienen acceso a estas pantallas.
:::

## Usuarios (`/usuarios`)

Desde esta pantalla podés:

- Ver el listado de todos los usuarios del sistema con su rol asignado
- **Crear un nuevo usuario**: completar nombre, email, contraseña y rol (Administrador, Operador, Chofer)

## Vehículos (`/vehiculos`)

Lista la flota completa con el estado operativo de cada vehículo:

| Estado | Significado |
|--------|-------------|
| **Operativo** | Disponible para ser asignado a un viaje |
| **En taller** | Fuera de servicio temporalmente — no aparece en el selector de viajes |

## Sucursales (`/sucursales`)

Listado de las sucursales habilitadas en el sistema. Las sucursales son el punto de origen de los viajes y envíos, y se usan como filtro en el dashboard y los reportes.
