const characterService = require("../services/character.service");


async function getCharactersAlive(req, res, next) {
  try {
    
    const data = await characterService.getCharactersAlive();
    return res.json(data);
  } catch (err) {
    next(err);
  }
}

module.exports = { getCharactersAlive };