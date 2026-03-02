const characterService = require("../services/character.service");


async function getCharacters(req, res, next) {
  try {
    
    const data = await characterService.getCharacters();
    return res.json(data);
  } catch (err) {
    next(err);
  }
}

module.exports = { getCharacters };