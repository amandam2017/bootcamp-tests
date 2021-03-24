describe('this test isWeekday', function(){
    it('should return true if day is a weekday then return false if not', function(){
        assert.equal(false, isWeekday('Saturday'));
    });
    it('should return true if day if the date date is the currentDate', function(){
        assert.equal(true, isWeekday('Monday'));
    });
    it('should return true if day is between Monday to Friday', function(){
        assert.equal(true, isWeekday('Tuesday'));
    });
});