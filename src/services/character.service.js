//Bussines logic, calls to external APIs, database, etc.

async function getCharacters() {
    //TEST function, should call the external API and return the data
    return { message: "Hello from the characters service!" };
}

module.exports = { getCharacters };