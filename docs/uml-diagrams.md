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