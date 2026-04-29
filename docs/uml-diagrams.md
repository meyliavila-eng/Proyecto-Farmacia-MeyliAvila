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
   ----

  ## 3. Diagrama de Secuencia (Proceso de Venta)
Muestra la interacción entre los componentes del sistema cuando se realiza una transacción.
```mermaid
sequenceDiagram
    participant C as Cajero
    participant S as Sistema
    participant I as Inventario
    participant F as Factura

    C->>S: Selecciona Medicamento
    S->>I: Verificar Stock Disponible
    I-->>S: Stock Confirmado
    S->>F: Agregar Item y Calcular ISV (15%)
    F-->>S: Total Actualizado
    S-->>C: Mostrar Resumen de Factura
    C->>S: Confirmar Venta
    S->>I: Actualizar Stock (Descontar)
    I-->>S: Cambio Guardado en LocalStorage

  ```
    ----

  ## 4. Diagrama de Estado (Ciclo del Pedido)
Ciclo de vida de una orden desde su creación hasta el despacho.
```mermaid
stateDiagram-v2
    [*] --> Pendiente: Generar Factura
    Pendiente --> Pagado: Procesar Pago
    Pagado --> Despachado: Actualizar Inventario
    Pendiente --> Cancelado: Anulación
    Despachado --> [*]
  ```