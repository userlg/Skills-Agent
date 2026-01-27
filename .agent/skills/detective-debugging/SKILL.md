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

## Directrices para el Agente

- **Mantén la Calma**: Ante un error recurrente, detente y vuelve al paso 1 (Observación).
- **Documenta el Proceso**: Explica al usuario qué estás probando y por qué. "Estoy probando X porque vi el error Y en los logs".
- **Limpieza**: Asegúrate de eliminar cualquier código de debugging temporal (`console.log`, `print`, etc.) una vez resuelto el problema.

## Casos de Uso

- Errores de "Command not found".
- Comportamientos inesperados en la UI o lógica de negocio.
- Fallos en el build o despliegue del proyecto.
