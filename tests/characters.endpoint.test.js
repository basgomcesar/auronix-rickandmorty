const request = require("supertest");
const app = require("../src/app");
const { getCharactersAlive } = require("../src/services/character.service");

jest.mock("../src/services/character.service");

describe("GET /api/characters/alive", () => {

    beforeEach(() => {
        jest.clearAllMocks();
    });

    it("should return 200 and formatted characters", async () => {

        getCharactersAlive.mockResolvedValue({
            results: [
                { id: 1, name: "Rick_Sanchez", status: "Alive", gender: "Male" }
            ]
        });

        const response = await request(app)
            .get("/api/characters/alive")
            .expect(200);

        expect(response.body).toEqual({
            results: [
                { id: 1, name: "Rick_Sanchez", status: "Alive", gender: "Male" }
            ]
        });

        expect(getCharactersAlive).toHaveBeenCalledTimes(1);
    });

    it("should return 500 if service fails", async () => {

        getCharactersAlive.mockRejectedValue(new Error("Service error"));

        const response = await request(app)
            .get("/api/characters/alive")
            .expect(500);

        expect(response.body).toEqual({
            success: false,
            message: "Service error"
        });
    });

});