const { getAllCharacters } = require("../client/rickAndMorty.client");
const { formatCharacter, filterAlive } = require("../utils/character.utils");

async function getCharactersAlive() {
    const characters = await getAllCharacters();
    const formattedCharacters = characters.map(formatCharacter);
    const aliveCharacters = filterAlive(formattedCharacters);
    return { results: aliveCharacters };
}

module.exports = { getCharactersAlive };