describe('this test countAllPaarl', function(){
    it('should find all reg from paarl, counts them', function(){
        // var regStr = "CA 123, CY 123, CK 3122, CJ 23232, CJ 3232"
        assert.equal(2, countAllPaarl( "CA 123, CY 123, CK 3122, CJ 23232, CJ 3232"));
    })
    it('finding out if is there any other cars on the list from CJ and if theres none from CJ return 0', function(){
        assert.equal(0,  countAllPaarl("CA 123, CY 123, CK 3122, CK 23232, CY 3232"));
    })
    it('should return false if there carReg is not identified with its code', function(){
        assert.equal(false, countAllPaarl('Paarl'));
    })
})