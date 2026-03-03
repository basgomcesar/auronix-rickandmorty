const {Router} = require("express");
const { getCharactersAlive } = require("../controllers/character.controller");

const router = Router();
/**
 * @openapi
 * /api/characters/alive:
 *   get:
 *     summary: Obtiene personajes alive con nombre formateado
 *     responses:
 *       200:
 *         description: Lista de personajes alive
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 results:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id: { type: integer }
 *                       name: { type: string, example: Rick_Sanchez }
 *                       status: { type: string, example: Alive }
 *                       gender: { type: string, example: Male }
 *       500:
 *         description: Error interno
 */
router.get("/characters/alive", getCharactersAlive);

module.exports = router;