var { checkPass } = require("../routes/loginRoute");
var Model = require("../DBModel");

describe("Login group:", function() {

    beforeAll(async function() {
        // add temp user to db if the connection is established
        this.model = new Model({
            login: "admin@test.com",
            password: "testPass"
        });
        this.user = await this.model.save();
    });

    it('check wrong email', async function(){
        expect(await checkPass("notadmin@test.com", "testPass")).toBe(false);
    });

    it('check wrong password', async function(){
        expect(await checkPass("admin@test.com", "wrongPass")).toBe(false);
    });

    it('check correct creds', async function(){
        expect(await checkPass("admin@test.com", "testPass")).not.toBe(false);
    });

    afterAll(async function() {
        // remove temp user
        if(this.user === this.model)
            this.model.deleteOne({login: this.user.login});
    });

})