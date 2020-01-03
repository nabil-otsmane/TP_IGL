const { ajouter } = require("../routes/ajouter");

describe("tests d'ajout d'un etudiant", () => {
    let req = {
    };
    let res = {
        data: "",
        json: e => {
            res.data=e;
        }
    }
    
    it("checks when no data passed",async function() {
        await ajouter(req, res);
        expect(res.data).toEqual({ type: 'error', msg: 'Bad request.' });
    });
    it("checks when data corrupt", async () => {
        req.body = {
            nom: "testNom",
            prenom: "testPrenom",
            email: "testMail@test.css",
            password: "testPass",
            groupe: "testGroupe"
        };
        await ajouter(req, res);
        expect(res.data).toEqual({ type: 'error', msg: 'Bad request.' });
    });
});