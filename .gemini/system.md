---

<loaded_context>
<global_context>
--- Context from: ../../../../.gemini/GEMINI.md ---
<!-- SUPERPOWERS-CONTEXT-START -->
# Superpowers Configuration

You have been granted Superpowers. These are specialized skills located in `~/.gemini/skills` and agent definitions in `~/.gemini/agents`.

## Skill & Agent Discovery
- **ALWAYS** check for relevant skills before starting a task.
- If a skill applies (e.g., "brainstorming", "testing"), you **MUST** follow it.
- Use the `activate_skill` tool to load a skill. Use `/skills list` to see available skills.

## Terminology Mapping
The skills were originally written for Claude Code. Interpret as follows:
- **"Claude"** or **"Claude Code"** → **"Gemini"** (You).
- **"Task" tool** → Use sub-agents. Agent definitions are in `~/.gemini/agents/`.
- **"Skill" tool** → Use `activate_skill` tool with the skill name.
- **"TodoWrite"** → Write/update a task list (e.g., `task.md` or `plan.md`).
- File operations → `read_file`, `write_file`, `replace`
- Directory listing → `list_directory`
- Search → `grep_search`, `glob`
- Shell → `run_shell_command`
- Web fetch → `web_fetch`
- Web search → `google_web_search`

<!-- SUPERPOWERS-CONTEXT-END -->

## Gemini Added Memories
- Proyecto PicoClaw en Raspberry Pi 3. IP Local: 192.168.100.172, Usuario: rekk, Puerto Gateway: 18790. Ruta binario: /home/rekk/PicoClaw/build/picoclaw-linux-arm64. Workspace: /home/rekk/.picoclaw/workspace/. Configuración: Gemini-free (flash-latest) con soporte multimoneda (CLP, EUR, USD). Soul: Senior Financial Advisor & Auditor. Skills en Python para gestión de finanzas y reportes JSON.
- Repositorio de backup del proyecto PicoClaw Financial Advisor: IChrisRojas/picoclaw-financial-advisor-backup (Privado). Contiene la lógica sanitizada, scripts de Python, configuraciones de infraestructura y guía de restauración.
- Convención de etiquetas de trabajo: '(pico)' para el ecosistema backend/asistente en Raspberry Pi (PicoClaw), y '(app)' para la aplicación móvil en React Native.
- Conexión SSH a (pico) en agenteBro (192.168.100.172): Usuario 'rekk', clave SSH '~/.ssh/id_ed25519_picoclaw'. Rutas verificadas: /opt/picoclaw, /var/www/picoclaw/opt/picoclaw/workspace/data/finances.
--- End of Context from: ../../../../.gemini/GEMINI.md ---
</global_context>
</loaded_context>

---

<loaded_context>
<global_context>
--- Context from: ../../../../.gemini/GEMINI.md ---
<!-- SUPERPOWERS-CONTEXT-START -->
# Superpowers Configuration

You have been granted Superpowers. These are specialized skills located in `~/.gemini/skills` and agent definitions in `~/.gemini/agents`.

## Skill & Agent Discovery
- **ALWAYS** check for relevant skills before starting a task.
- If a skill applies (e.g., "brainstorming", "testing"), you **MUST** follow it.
- Use the `activate_skill` tool to load a skill. Use `/skills list` to see available skills.

## Terminology Mapping
The skills were originally written for Claude Code. Interpret as follows:
- **"Claude"** or **"Claude Code"** → **"Gemini"** (You).
- **"Task" tool** → Use sub-agents. Agent definitions are in `~/.gemini/agents/`.
- **"Skill" tool** → Use `activate_skill` tool with the skill name.
- **"TodoWrite"** → Write/update a task list (e.g., `task.md` or `plan.md`).
- File operations → `read_file`, `write_file`, `replace`
- Directory listing → `list_directory`
- Search → `grep_search`, `glob`
- Shell → `run_shell_command`
- Web fetch → `web_fetch`
- Web search → `google_web_search`

<!-- SUPERPOWERS-CONTEXT-END -->

## Gemini Added Memories
- Proyecto PicoClaw en Raspberry Pi 3. IP Local: 192.168.100.172, Usuario: rekk, Puerto Gateway: 18790. Ruta binario: /home/rekk/PicoClaw/build/picoclaw-linux-arm64. Workspace: /home/rekk/.picoclaw/workspace/. Configuración: Gemini-free (flash-latest) con soporte multimoneda (CLP, EUR, USD). Soul: Senior Financial Advisor & Auditor. Skills en Python para gestión de finanzas y reportes JSON.
- Repositorio de backup del proyecto PicoClaw Financial Advisor: IChrisRojas/picoclaw-financial-advisor-backup (Privado). Contiene la lógica sanitizada, scripts de Python, configuraciones de infraestructura y guía de restauración.
- Convención de etiquetas de trabajo: '(pico)' para el ecosistema backend/asistente en Raspberry Pi (PicoClaw), y '(app)' para la aplicación móvil en React Native.
- Conexión SSH a (pico) en agenteBro (192.168.100.172): Usuario 'rekk', clave SSH '~/.ssh/id_ed25519_picoclaw'. Rutas verificadas: /opt/picoclaw, /var/www/picoclaw, /opt/picoclaw/workspace/data/finances.
--- End of Context from: ../../../../.gemini/GEMINI.md ---
</global_context>
<project_context>
The following are instructions provided by the tool server 'engram':
---[start of server instructions]---
Engram provides persistent memory that survives across sessions and context compactions. Search these tools when you need to: save decisions, bugs, architecture choices, or discoveries to memory; recall or search past work from previous sessions; manage coding session lifecycle (start, end, summarize); recover context after compaction. Key tools: mem_save, mem_search, mem_context, mem_session_summary, mem_get_observation, mem_suggest_topic_key.
---[end of server instructions]---
</project_context>
</loaded_context>

---

<loaded_context>
<global_context>
--- Context from: ../../../../.gemini/GEMINI.md ---
<!-- SUPERPOWERS-CONTEXT-START -->
# Superpowers Configuration

You have been granted Superpowers. These are specialized skills located in `~/.gemini/skills` and agent definitions in `~/.gemini/agents`.

## Skill & Agent Discovery
- **ALWAYS** check for relevant skills before starting a task.
- If a skill applies (e.g., "brainstorming", "testing"), you **MUST** follow it.
- Use the `activate_skill` tool to load a skill. Use `/skills list` to see available skills.

## Terminology Mapping
The skills were originally written for Claude Code. Interpret as follows:
- **"Claude"** or **"Claude Code"** → **"Gemini"** (You).
- **"Task" tool** → Use sub-agents. Agent definitions are in `~/.gemini/agents/`.
- **"Skill" tool** → Use `activate_skill` tool with the skill name.
- **"TodoWrite"** → Write/update a task list (e.g., `task.md` or `plan.md`).
- File operations → `read_file`, `write_file`, `replace`
- Directory listing → `list_directory`
- Search → `grep_search`, `glob`
- Shell → `run_shell_command`
- Web fetch → `web_fetch`
- Web search → `google_web_search`

<!-- SUPERPOWERS-CONTEXT-END -->

## Gemini Added Memories
- Proyecto PicoClaw en Raspberry Pi 3. IP Local: 192.168.100.172, Usuario: rekk, Puerto Gateway: 18790. Ruta binario: /home/rekk/PicoClaw/build/picoclaw-linux-arm64. Workspace: /home/rekk/.picoclaw/workspace/. Configuración: Gemini-free (flash-latest) con soporte multimoneda (CLP, EUR, USD). Soul: Senior Financial Advisor & Auditor. Skills en Python para gestión de finanzas y reportes JSON.
- Repositorio de backup del proyecto PicoClaw Financial Advisor: IChrisRojas/picoclaw-financial-advisor-backup (Privado). Contiene la lógica sanitizada, scripts de Python, configuraciones de infraestructura y guía de restauración.
- Convención de etiquetas de trabajo: '(pico)' para el ecosistema backend/asistente en Raspberry Pi (PicoClaw), y '(app)' para la aplicación móvil en React Native.
- Conexión SSH a (pico) en agenteBro (192.168.100.172): Usuario 'rekk', clave SSH '~/.ssh/id_ed25519_picoclaw'. Rutas verificadas: /opt/picoclaw, /var/www/picoclaw, /opt/picoclaw/workspace/data/finances.
--- End of Context from: ../../../../.gemini/GEMINI.md ---
</global_context>
<project_context>
The following are instructions provided by the tool server 'engram':
---[start of server instructions]---
Engram provides persistent memory that survives across sessions and context compactions. Search these tools when you need to: save decisions, bugs, architecture choices, or discoveries to memory; recall or search past work from previous sessions; manage coding session lifecycle (start, end, summarize); recover context after compaction. Key tools: mem_save, mem_search, mem_context, mem_session_summary, mem_get_observation, mem_suggest_topic_key.
---[end of server instructions]---
</project_context>
</loaded_context>

---

<loaded_context>
<global_context>
--- Context from: ../../../../.gemini/GEMINI.md ---
<!-- SUPERPOWERS-CONTEXT-START -->
# Superpowers Configuration

You have been granted Superpowers. These are specialized skills located in `~/.gemini/skills` and agent definitions in `~/.gemini/agents`.

## Skill & Agent Discovery
- **ALWAYS** check for relevant skills before starting a task.
- If a skill applies (e.g., "brainstorming", "testing"), you **MUST** follow it.
- Use the `activate_skill` tool to load a skill. Use `/skills list` to see available skills.

## Terminology Mapping
The skills were originally written for Claude Code. Interpret as follows:
- **"Claude"** or **"Claude Code"** → **"Gemini"** (You).
- **"Task" tool** → Use sub-agents. Agent definitions are in `~/.gemini/agents/`.
- **"Skill" tool** → Use `activate_skill` tool with the skill name.
- **"TodoWrite"** → Write/update a task list (e.g., `task.md` or `plan.md`).
- File operations → `read_file`, `write_file`, `replace`
- Directory listing → `list_directory`
- Search → `grep_search`, `glob`
- Shell → `run_shell_command`
- Web fetch → `web_fetch`
- Web search → `google_web_search`

<!-- SUPERPOWERS-CONTEXT-END -->

## Gemini Added Memories
- Proyecto PicoClaw en Raspberry Pi 3. IP Local: 192.168.100.172, Usuario: rekk, Puerto Gateway: 18790. Ruta binario: /home/rekk/PicoClaw/build/picoclaw-linux-arm64. Workspace: /home/rekk/.picoclaw/workspace/. Configuración: Gemini-free (flash-latest) con soporte multimoneda (CLP, EUR, USD). Soul: Senior Financial Advisor & Auditor. Skills en Python para gestión de finanzas y reportes JSON.
- Repositorio de backup del proyecto PicoClaw Financial Advisor: IChrisRojas/picoclaw-financial-advisor-backup (Privado). Contiene la lógica sanitizada, scripts de Python, configuraciones de infraestructura y guía de restauración.
- Convención de etiquetas de trabajo: '(pico)' para el ecosistema backend/asistente en Raspberry Pi (PicoClaw), y '(app)' para la aplicación móvil en React Native.
- Conexión SSH a (pico) en agenteBro (192.168.100.172): Usuario 'rekk', clave SSH '~/.ssh/id_ed25519_picoclaw'. Rutas verificadas: /opt/picoclaw, /var/www/picoclaw, /opt/picoclaw/workspace/data/finances.
--- End of Context from: ../../../../.gemini/GEMINI.md ---
</global_context>
<project_context>
The following are instructions provided by the tool server 'engram':
---[start of server instructions]---
Engram provides persistent memory that survives across sessions and context compactions. Search these tools when you need to: save decisions, bugs, architecture choices, or discoveries to memory; recall or search past work from previous sessions; manage coding session lifecycle (start, end, summarize); recover context after compaction. Key tools: mem_save, mem_search, mem_context, mem_session_summary, mem_get_observation, mem_suggest_topic_key.
---[end of server instructions]---
</project_context>
</loaded_context>

---

<loaded_context>
<global_context>
--- Context from: ../../../../.gemini/GEMINI.md ---
<!-- SUPERPOWERS-CONTEXT-START -->
# Superpowers Configuration

You have been granted Superpowers. These are specialized skills located in `~/.gemini/skills` and agent definitions in `~/.gemini/agents`.

## Skill & Agent Discovery
- **ALWAYS** check for relevant skills before starting a task.
- If a skill applies (e.g., "brainstorming", "testing"), you **MUST** follow it.
- Use the `activate_skill` tool to load a skill. Use `/skills list` to see available skills.

## Terminology Mapping
The skills were originally written for Claude Code. Interpret as follows:
- **"Claude"** or **"Claude Code"** → **"Gemini"** (You).
- **"Task" tool** → Use sub-agents. Agent definitions are in `~/.gemini/agents/`.
- **"Skill" tool** → Use `activate_skill` tool with the skill name.
- **"TodoWrite"** → Write/update a task list (e.g., `task.md` or `plan.md`).
- File operations → `read_file`, `write_file`, `replace`
- Directory listing → `list_directory`
- Search → `grep_search`, `glob`
- Shell → `run_shell_command`
- Web fetch → `web_fetch`
- Web search → `google_web_search`

<!-- SUPERPOWERS-CONTEXT-END -->

## Gemini Added Memories
- Proyecto PicoClaw en Raspberry Pi 3. IP Local: 192.168.100.172, Usuario: rekk, Puerto Gateway: 18790. Ruta binario: /home/rekk/PicoClaw/build/picoclaw-linux-arm64. Workspace: /home/rekk/.picoclaw/workspace/. Configuración: Gemini-free (flash-latest) con soporte multimoneda (CLP, EUR, USD). Soul: Senior Financial Advisor & Auditor. Skills en Python para gestión de finanzas y reportes JSON.
- Repositorio de backup del proyecto PicoClaw Financial Advisor: IChrisRojas/picoclaw-financial-advisor-backup (Privado). Contiene la lógica sanitizada, scripts de Python, configuraciones de infraestructura y guía de restauración.
- Convención de etiquetas de trabajo: '(pico)' para el ecosistema backend/asistente en Raspberry Pi (PicoClaw), y '(app)' para la aplicación móvil en React Native.
- Conexión SSH a (pico) en agenteBro (192.168.100.172): Usuario 'rekk', clave SSH '~/.ssh/id_ed25519_picoclaw'. Rutas verificadas: /opt/picoclaw, /var/www/picoclaw, /opt/picoclaw/workspace/data/finances.
--- End of Context from: ../../../../.gemini/GEMINI.md ---
</global_context>
<project_context>
The following are instructions provided by the tool server 'engram':
---[start of server instructions]---
Engram provides persistent memory that survives across sessions and context compactions. Search these tools when you need to: save decisions, bugs, architecture choices, or discoveries to memory; recall or search past work from previous sessions; manage coding session lifecycle (start, end, summarize); recover context after compaction. Key tools: mem_save, mem_search, mem_context, mem_session_summary, mem_get_observation, mem_suggest_topic_key.
---[end of server instructions]---
</project_context>
</loaded_context>