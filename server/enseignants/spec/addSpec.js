const {ajouter} = require("../routes/ajouter");

describe("suite of add check:", function(){
 
    let req = {
        body: undefined
    };
    let res = {
        json: e => {
            res.data = e;
        }
    };
    beforeEach(() => {
        req = {
            body: undefined
        };
        res = {
            json: e => {
                res.data = e;
            }
        };
    });

    it("checks when empty data", async () => {
        req.body = undefined;
        await ajouter(req, res);
        expect(res.data).toEqual({ type: 'error', msg: 'no body to add' });
    });
    it("checks when data is currupted", async () => {
        req.body = {
            mail:"test",
            type:"admin"
        };
        await ajouter(req, res);
        expect(res.data).toEqual({ type: 'error', msg: 'Bad request.' });
    });
})