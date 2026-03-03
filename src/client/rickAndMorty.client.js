const EXTERNAL_API_URL = process.env.EXTERNAL_API_URL;


async function getAllCharacters() {
  if (!EXTERNAL_API_URL) {
  throw new Error("EXTERNAL_API_URL is not defined");
}

  const response = await fetch(EXTERNAL_API_URL);

  if (!response.ok) {
    throw new Error(
      `External API error: ${response.status} ${response.statusText}`
    );
  }

  let data;

  try {
    data = await response.json();
  } catch {
    throw new Error("Invalid JSON received from external API");
  }

  if (!data || !Array.isArray(data.results)) {
    throw new Error("Unexpected API response structure");
  }

  return data.results;
}

module.exports = {
  getAllCharacters,
};