describe('this test a yearsAgo function', function(){
    it('calculates years difference between 2000 and 1976 and returns the difference', function(){
        assert.equal(2000, yearsAgo(21));
    })

    it('should return the current year if the year diff is added with 1976 which is yearAgo', function(){
        assert.equal(45, yearsAgo(1976));
    })

    //var currentYear = [2021];
    it('if yearsAgo subtracted to currentYear should return', function(){
        assert.equal(2000, yearsAgo(21));
    })
})