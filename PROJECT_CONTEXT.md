# Contexto del Proyecto: Skill Agents

Sistema de agentes de IA diseñado para la auto-evolución, gestión de conocimiento y automatización de tareas de desarrollo. Basado en el ecosistema personal de Userlg.

> [!IMPORTANT]
> **Regla de Oro: Monitor de Pendientes**
> Antes de cada sesión o al concluir una fase, el agente DEBE revisar este archivo, `AUDIT_LOG.md` y `task.md` para identificar tareas no resueltas.

## Stack

- **Core**: Antigravity AI Agent Engine.
- **Memoria**: Markdown files (`.agent/`, `ACTIVITY_LOG.md`, `GLOBAL_LEARNINGS.md`).
- **Skills**: YAML-powered markdown definitions.
- **Monitor de Pendientes**: Exiges que siempre revise si hay errores, bugs o proyectos pendientes antes de empezar o al cerrar una tarea. No quieres que nada quede en el olvido.
- **Ingeniería de Prompts**: Tienes un enfoque estructurado hacia la IA, documentando tus prompts y resultados (`My Prompts.docx`, `Prompt-Examples.pdf`).
- **Utilerías**: Node.js / Puppeteer (para capturas visuales).

## Notas de Arquitectura

- **Estructura de Skills**: Ubicadas en `.agent/skills/{nombre-skill}/SKILL.md`. Cada una tiene un rol y persona definidos.
- **Memoria Global**: `GLOBAL_LEARNINGS.md` actúa como el repositorio de sabiduría trans-proyecto.
- **Personalidad**: Implementada vía `personalidad-sarcasmo-negro`, con enfoque pragmático y cínico.

## Estado Actual (2026-01-27)

- [x] Inicialización del sistema de skills.
- [x] Definición del perfil Userlg.
- [/] Finalizando infraestructura (Workflows y Scripts).
- [ ] Implementación de `capture-script.js`.

## Bitácora de Bugs y Soluciones

- **Error**: Command 'glassit.increase' not found.
- **Causa Raíz**: El binario o registro de la extensión no estaba correctamente inicializado en el entorno de Antigravity.
- **Solución**: Re-mapeo manual de atajos y verificación de la ruta de configuración en `settings.json`. Validado por el usuario.
