const healthService = require("../services/character.service");


async function getCharacters(req, res, next) {
  try {
    //TEST
    const data = await healthService.getCharacters();
    return res.json(data);
  } catch (err) {
    next(err);
  }
}

module.exports = { getCharacters };