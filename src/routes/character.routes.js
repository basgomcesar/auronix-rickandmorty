const {Router} = require("express");
const { getCharacters } = require("../controllers/character.controller");

const router = Router();

router.get("/characters", getCharacters);

module.exports = router;