# Guía de Uso del Ecosistema de Skills (SOP)

Has creado un "Arsenal Central" de inteligencia artificial. Aquí te explico cómo usarlo para dominar tus proyectos.

## 1. La Estrategia "Central Hub"

Mantén este proyecto (`d:\Projects\AI\Skill Agents`) como tu **Maestro**.

- Aquí mejoras las skills.
- Aquí creas nuevas skills.
- Aquí auditas las reglas globales.

**NO** edites skills en los proyectos destino a menos que sea una emergencia. Si mejoras algo en un proyecto X, tráelo de vuelta al Maestro.

## 2. El Protocolo de Infección (Despliegue)

Cuando inicies un nuevo proyecto o quieras actualizar uno viejo:

1.  Abre una terminal en este directorio (`d:\Projects\AI\Skill Agents`).
2.  Ejecuta el script de despliegue:

```powershell
.\deploy-skills.ps1 -TargetPath "d:\Projects\MiNuevoProyecto"
```

**Qué hace el script:**

- Copia toda la carpeta `.agent` (Skills, Workflows, Prompts).
- Crea el `ACTIVITY_LOG.md` obligatorio si no existe.
- Deja todo listo para operar.

## 3. El Ritual de Arranque (Bootstrapping)

Una vez en tu nuevo proyecto:

1.  Abre el proyecto en Antigravity.
2.  El agente detectará la carpeta `.agent`.
3.  Tu primera instrucción debe ser siempre invocar al **Gestor de Memoria**:
    > "Inicializa el contexto del proyecto siguiendo tus protocolos."
4.  El agente:
    - Leerá `SKILL.md` de `gestor-memoria-proyecto`.
    - Creará `PROJECT_CONTEXT.md`.
    - Activará el **Humor Negro** y el **Logging**.

## 4. Mantenimiento

- **Si una skill falla**: Usa `detective-debugging`.
- **Si una skill mejora**: Copia la carpeta de esa skill de vuelta a `d:\Projects\AI\Skill Agents\.agent\skills` para salvar la mejora.

---

> "La inteligencia no se crea, se distribuye."
