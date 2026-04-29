# Arquitectura del Sistema

## Decisiones de Diseño 
1. **Frontend:** Uso de **Vite + React** para garantizar una Single Page Application (SPA) rápida.
2. **Estética (UI/UX):** Implementación de **Tailwind CSS** con bordes ultra-redondeados (`rounded-[3rem]`) y sombras suaves para un look tipo "SaaS" moderno.
3. **Clean Code:** Aplicación del principio de Responsabilidad Única (SOLID), separando la lógica de facturación de la gestión de inventario.

## Tecnologías Utilizadas
* React (Hooks: useState, useEffect)
* Tailwind CSS (Diseño Responsivo)
* Lucid Icons (Simbología Médica)

## Patrones de Diseño Implementados
* **Strategy Pattern:** Utilizado en el cálculo de impuestos (15% ISV) permitiendo cambiar la lógica fiscal sin afectar el resto del sistema.
* **Singleton (Simulado):** Gestión de un único estado global para el inventario mediante LocalStorage.

## Diagrama de Capas
```mermaid
graph TD
  UI[Capa de Presentación: React Components] --> Logic[Capa de Negocio: Hooks/Context]
  Logic --> Data[Capa de Datos: LocalStorage API]