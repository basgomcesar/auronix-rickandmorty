const { getCharacters } = require("../../src/services/character.service");
const { getAllCharacters } = require("../../src/client/rickAndMorty.client");

jest.mock("../../src/client/rickAndMorty.client");

describe("getCharacters service", () => {

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should return only alive characters with formatted names", async () => {

    getAllCharacters.mockResolvedValue([
      { id: 1, name: "Rick Sanchez", status: "Alive", gender: "Male" },
      { id: 2, name: "Morty Smith", status: "Alive", gender: "Male" },
      { id: 3, name: "Bird Person", status: "Dead", gender: "Male" }
    ]);

    const result = await getCharacters();

    expect(result).toEqual({
      results: [
        { id: 1, name: "Rick_Sanchez", status: "Alive", gender: "Male" },
        { id: 2, name: "Morty_Smith", status: "Alive", gender: "Male" }
      ]
    });

    expect(getAllCharacters).toHaveBeenCalledTimes(1);
  });

});