# C-Pocket – Pocki Virtual Assistant MCP

Microservicio desarrollado como prueba técnica para evaluar habilidades en desarrollo **Fullstack**, integración de **APIs**, uso de **IA con OpenAI**, arquitectura limpia y buenas prácticas utilizando **NestJS**.

---

# 📌 Descripción

Este proyecto implementa un **Microservice Control Point (MCP)** encargado de procesar mensajes provenientes de WhatsApp, enviarlos a **OpenAI**, generar una respuesta inteligente y almacenar el historial de la conversación en una base de datos.

El sistema permite:

- Recibir mensajes de usuarios
- Procesar el mensaje usando OpenAI
- Generar respuestas automáticas
- Guardar conversaciones en base de datos
- Exponer endpoints para interacción con el servicio

---

# 🛠 Tecnologías utilizadas

- Node.js
- NestJS
- TypeScript
- Prisma ORM
- SQLite
- OpenAI API
- Dotenv

---

# 📁 Estructura del proyecto

```
src
│
├── database
│   └── prisma.service.ts
│
├── mcp
│   └── mcp.service.ts
│
├── whatsapp
│   ├── whatsapp.controller.ts
│   └── whatsapp.service.ts
│
├── app.module.ts
└── main.ts
```

---

# ⚙️ Instalación

Clonar el repositorio:

```bash
git clone <repo-url>
cd PruebaTecnicaMCP
```

Instalar dependencias:

```bash
npm install
```

---

# 🔐 Variables de entorno

Crear un archivo `.env`

```
DATABASE_URL="file:./dev.db"
OPENAI_API_KEY=your_openai_api_key
PORT=3000
```

---

# 🗄 Base de datos

Generar cliente de Prisma:

```bash
npx prisma generate
```

Crear la base de datos:

```bash
npx prisma db push
```

---

# 🚀 Ejecutar el proyecto

```bash
npx ts-node src/main.ts
```

El servidor iniciará en:

```
http://localhost:3000
```

---

# 📡 Endpoint principal

### Enviar mensaje

```
POST /whatsapp/message
```

Body:

```json
{
  "phone": "3001234567",
  "message": "Hola, ¿qué puedes hacer?"
}
```

Respuesta esperada:

```json
{
  "response": "Hola, soy Pocki. ¿En qué puedo ayudarte?"
}
```

---

# 🧠 Flujo del sistema

1. Usuario envía mensaje
2. API recibe el mensaje
3. MCP procesa la solicitud
4. Se envía el prompt a OpenAI
5. OpenAI genera la respuesta
6. Se guarda la conversación en la base de datos
7. Se retorna la respuesta al usuario

---

# 🗄 Modelo de datos

El sistema almacena información de:

- Usuarios
- Conversaciones
- Mensajes
- Respuestas generadas por IA

Esto permite mantener historial de interacción con cada usuario.

---

# 🧪 Posibles mejoras

- Integración real con API de WhatsApp
- Autenticación JWT
- Manejo de sesiones de conversación
- Logs estructurados
- Manejo avanzado de prompts
- Uso de PostgreSQL en producción

---

# 👨‍💻 Autor

Julian Estiven Posso Cataño