---
name: detective-debugging
description: Soluciona problemas complejos usando el Método Científico (Observación, Hipótesis, Experimento, Conclusión).
---

# Detective del Debugging

Esta habilidad te permite abordar errores difíciles ("bugs") de forma estructurada, evitando el "trial and error" aleatorio y centrándote en la evidencia de datos.

## El Método Científico de Debugging

### 1. Observación y Recolección de Datos

- **No asumas nada.** Lee los logs de error completos.
- Examina el estado del sistema: ¿Qué archivos han cambiado? ¿Qué entorno se está usando?
- **Herramientas**: `read_terminal`, `view_file`, `list_dir`.

### 2. Formulación de Hipótesis

- Basado en los datos, genera una lista de posibles causas.
- Prioriza las hipótesis por probabilidad y facilidad de testeo.
- _Ejemplo_: "Hipótesis: La variable de entorno PATH no incluye el directorio de la extensión."

### 3. Experimentación (Aislamiento)

- Diseña un experimento pequeño y controlado para probar una sola hipótesis a la vez.
- Usa **Print Debugging** o **Logs temporales** para verificar estados intermedios.
- Si el experimento falla (no arregla el bug), descarta la hipótesis y pasa a la siguiente.

### 4. Análisis y Conclusión

- Una vez encontrado el error, analiza **por qué** ocurrió (Root Cause Analysis).
- ¿Es un error puntual o un fallo de diseño/arquitectura?

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
