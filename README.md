# Auronix Rick and Morty API

API en **Node.js + Express** que consume la API pública de Rick & Morty, transforma la data y expone un endpoint REST.
---

## Requisitos

- Node.js
- npm

---

## Instalación

```bash
npm install
```

---

## Variables de entorno

Crea un archivo `.env` en la raíz (o exporta variables en tu entorno):

```env
PORT=3000
EXTERNAL_API_URL=https://rickandmortyapi.com/api/character/alive
```

> `EXTERNAL_API_URL` es requerida. Si no está definida, la app lanzará un error al iniciar.


---

## Ejecutar el proyecto

### Desarrollo (con nodemon)

```bash
npm run dev
```

### Producción

```bash
npm start
```

Servidor por defecto: `http://localhost:3000`

---

## Endpoints

### `GET /api/characters/alive`

Obtiene personajes desde la API externa, aplica transformaciones y devuelve solo los que están **Alive**.


## Estructura del proyecto

- `src/app.js`: inicializa Express (middlewares, rutas, errorHandler) y **exporta `app`**.
- `src/server.js`: inicia el servidor (`app.listen`).
- `src/routes/character.routes.js`: define rutas.
- `src/controllers/character.controller.js`: controller HTTP.
- `src/services/character.service.js`: lógica de negocio (mapea y filtra).
- `src/client/rickAndMorty.client.js`: integración con API externa.
- `src/utils/character.utils.js`: funciones puras (formateo y filtros).
- `src/middlewares/error.middleware.js`: manejo centralizado de errores.
- `tests/`: pruebas.
