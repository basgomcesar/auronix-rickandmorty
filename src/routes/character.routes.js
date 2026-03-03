const {Router} = require("express");
const { getCharactersAlive } = require("../controllers/character.controller");

const router = Router();
/**
 * @openapi
 * /api/characters/alive:
 *   get:
 *     summary: Obtiene personajes con status Alive y nombre formateado
 *     tags:
 *       - Characters
 *     responses:
 *       200:
 *         description: Lista de personajes vivos
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 results:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                       name:
 *                         type: string
 *                         example: Rick_Sanchez
 *                       status:
 *                         type: string
 *                         example: Alive
 *                       gender:
 *                         type: string
 *                         example: Male
 *       500:
 *         description: Error interno del servidor
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 message:
 *                   type: string
 *                   example: Internal Server Error
 */
router.get("/characters/alive", getCharactersAlive);

module.exports = router;