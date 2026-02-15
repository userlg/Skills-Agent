# Contexto del Proyecto: Skill Agents

Sistema masivo de agentes de IA diseñado para la auto-evolución, gestión de conocimiento y automatización de tareas de desarrollo. Basado en el ecosistema personal de Userlg.

> [!IMPORTANT]
> **Regla de Oro**: Antes de cada sesión o al concluir una fase, el agente DEBE revisar este archivo para mantener contexto actualizado.

## Stack Tecnológico

- **Core**: Antigravity AI Agent Engine
- **Skills**: 620+ habilidades YAML-powered en `.agent/skills/`
- **Memoria**: Markdown files + Knowledge Items system
- **Utilerías**: Node.js, PowerShell, Python scripts

## Arquitectura del Proyecto

### Estructura de Skills
```
.agent/skills/
├── Document Skills (docx, pdf, pptx, xlsx) - Official Anthropic
├── Dev Tools (mcp-builder, webapp-testing, web-artifacts)
├── Learning Systems (continuous-learning-v2, eval-harness, verification-loop)
├── Creative (canvas-design, algorithmic-art)
├── 600+ community and custom skills
```

### Componentes Principales
- **analizador-repos-skills**: Analiza y fusiona repositorios externos
- **ui-ux-pro-max v2.0**: Design system generator con 67 estilos
- **Skills oficiales Anthropic**: docx, pdf, pptx, xlsx manipulation
- **Learning systems**: Instinct-based continuous learning

## Estado Actual (2026-02-08)

### ✅ Completado
- [x] Sistema de skills operativo con 613+ skills
- [x] Integración de repositorios externos (everything-claude-code, anthropics/skills)
- [x] Document manipulation skills (docx, pdf, pptx, xlsx)
- [x] ui-ux-pro-max actualizado a v2.0
- [x] unbound-dashboard skill añadida
- [x] MCP builder y testing tools integrados
- [x] Continuous learning v2 system
- [x] Verification loops y eval harness
- [x] Expansión basada en skills.sh (620+ skills totales)
- [x] Soporte para Next.js 15 y React 19 patrones

### 📊 Logros Recientes
- **13 skills de alto valor integradas** de repositorios oficiales
- **UI-UX Pro Max v2.0** con Design System Generator mejorado
- **Document Skills** production-ready de Anthropic
- **Learning & Verification** systems de everything-claude-code
- **Skills de Vanguardia**: TanStack Query v5, Convex, Better Auth, Mastra, Agent Browser
- **Next.js 15 Mastery**: Optimización para arquitectura Server-First y nuevos hooks

### 🎯 Capacidades Clave
- Creación/edición de documentos (Word, PDF, PowerPoint, Excel)
- Generación de servidores MCP
- Testing automático con Playwright
- Aprendizaje continuo basado en instincts
- Design systems profesionales
- 600+ skills especializadas

## Deployment

Para desplegar el ecosistema de skills en otros proyectos:
```powershell
.\deploy-skills.ps1 -TargetPath "d:\Projects\MiNuevoProyecto"
```

## Notas
- Personalidad implementada vía `personalidad-sarcasmo-negro`
- Monitor de pendientes activo en cada sesión
- Memoria global en `GLOBAL_LEARNINGS.md`
