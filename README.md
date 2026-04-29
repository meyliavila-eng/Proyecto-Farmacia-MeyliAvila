# FarmaControl - Sistema de Gestión Farmacéutica
**Proyecto Examen - Ingeniería de Software**

Sistema profesional diseñado para la administración de inventarios y facturación en clínicas médicas de Honduras.

## Diagrama de Estado 
Representación del flujo lógico del sistema:

```mermaid
stateDiagram-v2
    [*] --> Login: Acceso al Sistema
    Login --> Inventario: Autenticación OK
    Inventario --> Facturacion: Gestión de Venta
    Facturacion --> Carrito: Selección de Medicamentos
    Carrito --> Inventario: Confirmación (Ajuste de Stock)
    Inventario --> [*]: Cerrar Sesión