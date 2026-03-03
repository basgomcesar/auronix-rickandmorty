const request = require("supertest");
const app = require("../src/app");
const { getCharacters } = require("../src/services/character.service");

jest.mock("../src/services/character.service");

describe("GET /api/characters", () => {

    beforeEach(() => {
        jest.clearAllMocks();
    });

    it("should return 200 and formatted characters", async () => {

        getCharacters.mockResolvedValue({
            results: [
                { id: 1, name: "Rick_Sanchez", status: "Alive", gender: "Male" }
            ]
        });

        const response = await request(app)
            .get("/api/characters")
            .expect(200);

        expect(response.body).toEqual({
            results: [
                { id: 1, name: "Rick_Sanchez", status: "Alive", gender: "Male" }
            ]
        });

        expect(getCharacters).toHaveBeenCalledTimes(1);
    });

    it("should return 500 if service fails", async () => {

        getCharacters.mockRejectedValue(new Error("Service error"));

        const response = await request(app)
            .get("/api/characters")
            .expect(500);

        expect(response.body).toEqual({
            success: false,
            message: "Service error"
        });
    });

});