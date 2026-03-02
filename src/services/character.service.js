const { getAllCharacters } = require("../client/rickAndMorty.client");
async function getCharacters() {
    return await getAllCharacters();
}

module.exports = { getCharacters };