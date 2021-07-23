let chai = require('chai')
let chaiHttp = require('chai-http')
let server = require('../app')
let expect = chai.expect;

// Assertion Style
chai.should()

chai.use(chaiHttp);


describe('Martin-Robot Api', ()=>{
    
    // Test Run Route
    describe("POST /martin-robot/run", () => {
        it("It should process all the instructions of martin-robot", (done) => {
            const martianInput = '5 3\n1 1 E\nRFRFRFRF\n3 2 N\nFRRFLLFFRRFLL\n0 3 W\nLLFFFLFLFL'
            const martianExpectedOutput='1 1 E\n3 3 N LOST\n2 3 S\n'
            chai.request(server)
                .post("/martin-robot/run")
                .set('content-type', 'application/x-www-form-urlencoded')
                .send({input: martianInput})
                .end((err, response) => {
                    response.should.have.status(200);
                    response.body.data.should.have.property('input');
                    response.body.data.should.have.property('result');
                    expect(response.body.data.result).to.equal(martianExpectedOutput)
                done();
                });
        });

    })

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