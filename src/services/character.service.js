const { getAllCharacters } = require("../client/rickAndMorty.client");

async function getCharacters() {
  const characters = await getAllCharacters();

  const aliveCharacters = characters
    .filter(character => character.status === "Alive")
    .map(character => ({
      id: character.id,
      name: character.name.replace(/\s+/g, "_"),
      status: character.status,
      gender: character.gender
    }));

  return {
    results: aliveCharacters
  };
}

module.exports = { getCharacters };