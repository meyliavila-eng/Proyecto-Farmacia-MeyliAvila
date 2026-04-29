# Modelado UML del Sistema

## 1. Diagrama de Casos de Uso
```mermaid
useCaseDiagram
  actor Admin
  Admin --> (Gestionar Inventario)
  Admin --> (Realizar Venta con ISV)
  Admin --> (Filtrar por Categoría)
```
----
## Diagrama de Clases 
```mermaid
classDiagram
    class Medicamento {
        +int id
        +string nombre
        +float precio
        +int stock
        +string categoria
    }
    class Inventario {
        +list productos
        +agregar()
        +editar()
        +filtrar()
    }
    class Factura {
        +list items
        +float isv_15
        +calcularTotal()
    }
    Inventario "1" -- "*" Medicamento : contiene

    sequenceDiagram
  Cajero->>Sistema: Selecciona Producto
  Sistema->>Inventario: Verificar Stock
  Inventario-->>Sistema: Stock OK
  Sistema->>Factura: Calcular Total + 15% ISV
  Sistema-->>Cajero: Mostrar Factura
  ```
  ---
  ## Diagrama de Secuencias
```mermaid
sequenceDiagram
  Cajero->>Sistema: Selecciona Producto
  Sistema->>Inventario: Verificar Stock
  Inventario-->>Sistema: Stock OK
  Sistema->>Factura: Calcular Total + 15% ISV
  Sistema-->>Cajero: Mostrar Factura
  ```