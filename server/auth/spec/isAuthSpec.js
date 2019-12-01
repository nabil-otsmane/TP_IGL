var isAuthRouter = require("../routes/isAuthRoute");
var jwt = require("jsonwebtoken");

describe("suite of Authentication check: ", function() {

    it("checking empty case", function(){
        expect(isAuthRouter.check(undefined)).toBe(false);
    })

    it("checking empty object", function(){
        expect(isAuthRouter.check({})).toBe(false);
    })

    it("checking with false token", function(){
        expect(isAuthRouter.check({jwt_token: "test"})).toBe(false);
    })

    it("checking with another false token", function(){
        expect(isAuthRouter.check({
            jwt_token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwidHlwZSI6ImFkbWluIiwiaWF0IjoxNTE2MjM5MDIyfQ.7leGQ_Qr3r-fI2lG2grYSpxmWCTI6zhTb_jrDrMhx8g"
        })).toBe(false);
    })

    it("checking another false token", function(){
        expect(isAuthRouter.check({
            jwt_token: jwt.sign({type: "user"}, "wrong_secret")
        })).toBe(false);
    })

    it("checking another false token", function(){
        expect(isAuthRouter.check({
            jwt_token: jwt.sign({type: "user"}, process.env.SECRET)
        })).toBe(false);
    })

    it("checking valid case", function(){
        expect(isAuthRouter.check({
            jwt_token: jwt.sign({type: "admin"}, process.env.SECRET, {algorithm: "HS256"})
        })).toBe(true);
    })
    
    it("checking another valid token", function(){
        expect(isAuthRouter.check({
            jwt_token: jwt.sign({type: "admin"}, process.env.SECRET)
        })).toBe(true);

    });

});