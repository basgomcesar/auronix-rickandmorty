const {Router} = require("express");
const { getCharactersAlive } = require("../controllers/character.controller");

const router = Router();

router.get("/characters/alive", getCharactersAlive);

module.exports = router;