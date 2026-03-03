function formatCharacter(character) {
  return {
    id: character.id,
    name: character.name.replace(/\s/g, "_"),
    status: character.status,
    gender: character.gender,
  };
}

function filterAlive(characters) {
  return characters.filter(c => c.status === "Alive");
}

module.exports = { formatCharacter, filterAlive };