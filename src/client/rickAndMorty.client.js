const EXTERNAL_API_URL = process.env.EXTERNAL_API_URL;

async function getAllCharacters() {
    console.log(`Fetching characters from ${EXTERNAL_API_URL}`);
  const response = await fetch(EXTERNAL_API_URL);

  if (!response.ok) {
    throw new Error("Failed to fetch characters");
  }

  const data = await response.json();
  return data.results;
}

module.exports = {
  getAllCharacters,
};