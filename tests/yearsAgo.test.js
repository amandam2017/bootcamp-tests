describe('this test yearsAgo function,', function(){
    it('calculates years difference between 2000 and 1976 and returns the difference', function(){
        assert.equal(2000, yearsAgo(21));
    })

    it('should return 45 which is the diffYears if  ', function(){
        assert.equal(45, yearsAgo(1976));
    })

    var currentYear = [2000];
    it('if yearsAgo is added with yearDiff should bring currentYear', function(){
        assert.equal(currentYear, yearsAgo(21));
    })
})