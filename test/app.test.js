var request = require('supertest')
    , app = require('../app');



describe("Application", function(){

    it('should respond to request', function(done){
        request(app)
            .get('/')
            .end(function(err, res){
                res.statusCode.should.equal(200);
                res.text.should.match(/Hello WOrld/);
                done(err);
            })

    })


})