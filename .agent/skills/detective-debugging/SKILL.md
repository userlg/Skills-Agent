---
name: detective-debugging
description: Soluciona problemas complejos usando el Método Científico (Observación, Hipótesis, Experimento, Conclusión).
---

# Detective del Debugging

Esta habilidad te permite abordar errores difíciles ("bugs") de forma estructurada, evitando el "trial and error" aleatorio y centrándote en la evidencia de datos.

## Las Semanas de Debugging

Random fixes waste time and create new bugs. Quick patches mask underlying issues.

### 🔴 La Ley de Hierro

> **NO HAY SOLUCIONES SIN INVESTIGACIÓN DE CAUSA RAÍZ PRIMERO.**

Si no has completado la Fase 1, no puedes proponer arreglos.

## Fase 1: Investigación de Causa Raíz

Antes de intentar cualquier arreglo:

1. **Lee los Mensajes de Error con Cuidado**: No los ignores. A menudo contienen la solución exacta. Anota líneas, rutas y códigos de error.
2. **Reproduce de forma Consistente**: ¿Puedes activarlo de forma fiable? ¿Cuáles son los pasos exactos?
3. **Verifica Cambios Recientes**: ¿Qué ha cambiado (git diff, dependencias, config)?
4. **Instrumentación de Diagnóstico**: En sistemas multi-componente, añade logs en cada frontera de componente para ver DÓNDE se rompe exactamente.
5. **Rastreo de Flujo de Datos**: Sigue el rastro del valor incorrecto hacia atrás en el stack hasta encontrar el origen. Arregla en el origen, no en el síntoma.

### 5. Persistencia del Conocimiento (User-Triggered Closure)

Vaya sorpresa: el jefe manda. No asumas que has arreglado nada hasta que el usuario te lo confirme. Una vez que el usuario te haga saber que el problema ha sido solucionado:

- Invoca la skill **[gestor-memoria-proyecto](file:///d:/Projects/AI/Skill%20Agents/skills/gestor-memoria-proyecto/SKILL.md)**.
- **Registro Dual Obligatorio**: Debes registrar el binomio (Problema/Solución) en dos niveles:
  1. **Local**: En el `PROJECT_CONTEXT.md` del proyecto actual.
  2. **Global**: En **[GLOBAL_LEARNINGS.md](file:///d:/Projects/AI/Skill%20Agents/.agent/GLOBAL_LEARNINGS.md)**.
- **Validación del Usuario**: El registro debe mencionar explícitamente que la solución fue validada por el usuario. No te lleves el crédito tú solo, aunque todos sepamos quién hizo el trabajo pesado.
- Este par (Problema/Solución) es la base de nuestra sabiduría acumulada. Nunca registres solo la solución sin el contexto del error inicial.

## Directrices para el Agente

- **Mantén la Calma**: Ante un error recurrente, detente y vuelve al paso 1 (Observación).
- **Documenta el Proceso**: Explica al usuario qué estás probando y por qué. "Estoy probando X porque vi el error Y en los logs".
- **Limpieza**: Asegúrate de eliminar cualquier código de debugging temporal (`console.log`, `print`, etc.) una vez resuelto el problema.
- **Post-Solution Evolution**: Una vez documentada la solución, invoca a **[arquitecto-agents-skills](file:///d:/Projects/AI/Skill%20Agents/.agent/skills/arquitecto-agents-skills/SKILL.md)** para ver si esta solución abre una oportunidad de mejorar alguna skill técnica o de automatizar una prevención futura.

## Casos de Uso

- Errores de "Command not found".
- Comportamientos inesperados en la UI o lógica de negocio.
- Fallos en el build o despliegue del proyecto.
