let chai = require('chai')
let chaiHttp = require('chai-http')
let server = require('../app')

// Assertion Style
chai.should()

chai.use(chaiHttp);


describe('Martin-Robot Api', ()=>{
    
    // Test Get All Route
    describe("GET /martin-robot/get_all", () => {
        it("It should GET all martin-robot results", (done) => {
            chai.request(server)
                .get("/martin-robot/get_all")
                .end((err, response) => {
                    response.should.have.status(200);
                    response.body.data.should.be.a('array');
                done();
                });
        });

    })

    

})