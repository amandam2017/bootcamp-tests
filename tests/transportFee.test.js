describe('this function returns the right price based on the shift you are working', function(){
    it('if I am working morning shift I will pay', function(){
        assert.equal("R20.00" ,totalPhoneBill("morning"));
    });
    it('if I am working afternoon shift I will pay', function(){
        assert.equal("R10.00" ,totalPhoneBill("afternoon"));
    });
    it('if I am working late shift I will pay nothing because work provides transport', function(){
        assert.equal("R0.00" ,totalPhoneBill("late"));
    })
})