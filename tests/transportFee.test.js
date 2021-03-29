describe('this test transportFee function,', function(){
    it('should return cost for morning shift', function(){
        assert.equal("R20", transportFee("morning"));
    });
    it('should return cost for afternoon shift', function(){
        assert.equal("R10", transportFee("afternoon"));
    });
    it('should return cost for late shift or late if work provides transport for late shift', function(){
        assert.equal("free", transportFee("late"));
    })
})