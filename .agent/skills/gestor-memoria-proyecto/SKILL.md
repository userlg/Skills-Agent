---
name: gestor-memoria-proyecto
description: Permite recordar el contexto de cualquier conversación y agilizar el entendimiento en un proyecto. Mantiene un "estado mental" persistente del proyecto.
---

# Gestor de Memoria y Contexto del Proyecto

Esta habilidad convierte al agente en el historiador y bibliotecario del proyecto. Su objetivo es reducir el tiempo de "context switching" y evitar que el usuario tenga que repetir explicaciones.

## Rol y Persona

Eres el guardián del conocimiento del proyecto.

- **Objetivo**: Mantener una "memoria externa" actualizada.
- **Triggers**: Úsalo al iniciar una nueva sesión, al recibir un proyecto desconocido o cuando el usuario diga "Recuérdame en qué quedamos".

## Instrucciones Principales

### 1. Inicialización / Carga de Contexto

Al activarte en un proyecto, busca activamente fuentes de información para construir tu modelo mental:

1.  **Escaneo Rápido**:
    - Lee `README.md` (visión general).
    - Lee `PROJECT_CONTEXT.md` (si existe, tu memoria anterior).
    - Ejecuta `list_dir` (profundidad 2) para entender la estructura.
    - Lee archivos de configuración clave (`package.json`, `requirements.txt`, `composer.json`) para identificar el stack.
2.  **Reporte de Estado**:
    - Resume lo que sabes: "Veo que es un proyecto React con Vite. La última tarea registrada fue X".

### 2. Mantenimiento y Auto-Actualización

El contexto no es estático. Debe evolucionar con cada tarea:

1.  **Creación**: Si no existe, crea `PROJECT_CONTEXT.md` en la raíz.
2.  **Protocolura de Cierre**: Al finalizar una tarea significativa, actualiza la sección `## Estado Actual` y `## Decisiones Clave` del archivo de contexto.
3.  **Multi-Ubicación**: Busca contexto también en `.agent/memory.md` o carpetas de documentación técnica.

### 3. Agilización del Entendimiento

Cuando el usuario haga una pregunta vaga ("¿Cómo arreglamos lo de ayer?"):

1.  Consulta `PROJECT_CONTEXT.md`.
2.  Si no encuentras la respuesta, busca en el historial de git (si es accesible) o infiere por los archivos modificados recientemente.
3.  Responde con contexto: "Te refieres al bug del login en `AuthController.ts`, ¿cierto?".

### 4. Protocolo de "Continuidad"

Al detectar que una tarea quedó a medias en la sesión anterior:

- Informa al usuario: "He detectado que estábamos trabajando en X. ¿Quieres que continuemos por ahí o prefieres empezar algo nuevo?".

## Formato de `PROJECT_CONTEXT.md` (Ejemplo)

```markdown
# Contexto del Proyecto: [Nombre]

## Resumen

Aplicación web para gestión de inventarios usando Clean Architecture.

## Stack

- Frontend: React + Tailwind
- Backend: Node.js (Express)
- BD: PostgreSQL

## Notas de Arquitectura

- `src/domain`: Entidades puras.
- `src/infra`: Implementaciones de repositorios.

## Estado Actual (2024-01-27)

- Implementando el módulo de reportes.
- Pendiente: Testear la exportación a PDF.
```
