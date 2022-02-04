const messageDecoder = require("./decoder");

describe("Tests for decoder funcion", () => {
    test("Should respond How are you", () => {
        const input1 = [
            "Hey good lawyer",
            "as I previously previewed",
            "yam does a soup",
        ];

        const messageDecoded = messageDecoder(input1);

        expect(messageDecoded).toBe("How are you");
    });

    test("Should respond Fine and you", () => {
        const input2 = [
            "First I give money to Teresa",
            "after I inform dad of",
            "your horrible soup",
        ];

        const messageDecoded = messageDecoder(input2);

        expect(messageDecoded).toBe("Fine and you");
    });

});
