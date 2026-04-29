# Modelado UML

## Diagrama de Clases (Dominio del Proyecto)
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