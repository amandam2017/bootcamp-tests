describe('this function  returns the number of registration numbers in the string', function(){
    it('this should return 3 which is the total regNumbers CA 182736,CY 523519,CJ 812328', function(){

       // var regCount = countRegNumber('CA 182736,CY 523519,CJ 812328')
        assert.equal(3, countRegNumber('CA 182736,CY 523519,CJ 812328'))
    });

    it('this should return 2 which is the total of regNumbers inside this function', function(){
        assert.equal(2, countRegNumber('CA 42665, AA 12 RT GP'));
    });
    it('this should return 5 which is the total of regNumbers inside this function', function(){
        assert.equal(5,countRegNumber('CA 42665, AA 12 RT GP, CA 182736,CY 523519,CJ 812328'));
    })
})



// describe('The count reg number function', function() {
//     it('should return 3 for reg numbers CY 0987, CA 3456, ND 2680', function() {
//         var regCount = countRegNumber('CY 0987, CA 3456, ND 24680');
//         assert.equal(3, regCount);
//     });
//     it('should return 5 for reg numbers CY 0987, CA 3456, ND 2680, CL 200, CA 390', function() {
//         var regCount = countRegNumber('CY 0987, CA 3456, ND 24680, CL 200, CA 390');
//         assert.equal(5, regCount);
//     });
// });