# FarmaControl - Sistema de Gestión Farmacéutica
**Proyecto Examen - Ingeniería de Software**

Sistema profesional diseñado para la administración de inventarios y facturación en clínicas médicas de Honduras.

## Diagrama de Estado 
Representación del flujo lógico del sistema:

```mermaid
stateDiagram-v2
    [*] --> Pendiente: Creación de Factura
    Pendiente --> Pagado: Procesar Pago
    Pagado --> Entregado: Actualizar Stock
    Pendiente --> Cancelado: Error/Anulación
    Entregado --> [*]