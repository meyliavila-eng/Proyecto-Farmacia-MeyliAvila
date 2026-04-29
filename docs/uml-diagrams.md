#  Modelado UML del Sistema - FarmaControl

## 1. Diagrama de Casos de Uso
Representa las acciones que el Administrador puede realizar dentro del sistema farmacéutico.

```mermaid
graph LR
    Admin((Administrador))
    
    UC1(Gestionar Inventario)
    UC2(Realizar Venta con ISV)
    UC3(Filtrar por Categoría)
    UC4(Consultar Reportes)

    Admin --> UC1
    Admin --> UC2
    Admin --> UC3
    Admin --> UC4

  ```
  ----

  ## 2. Diagrama de Clases
Define la estructura de las entidades principales y sus relaciones dentro del código.
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
        +agregar(Medicamento)
        +editar(int id)
        +filtrar(string categoria)
    }
    
    class Factura {
        +list items
        +float isv_15
        +float total
        +calcularTotal()
    }
    
    Inventario "1" -- "*" Medicamento : contiene
    Factura "1" -- "*" Medicamento : incluye

  ```