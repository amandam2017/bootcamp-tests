// NB! In some functions I will have to declare my own variables and call them with
// eg var names = ["amanda", "maarma", "asanda"];

describe('this test isFromBellville', function(){
    it('should find if are they any cars from Bellville and return true if theres any', function(){
         assert.equal(false, isFromBellville('CJ 45875'));
    });
    it('should wrong identity supposed to use car registration', function(){
        //The below is false because I have named the place instead of using its registration number to identify
        assert.equal(false, isFromBellville('CK 8765'));
   });
   it('should find if are they any cars from Bellville and return true if theres any', function(){
    assert.equal(true, isFromBellville('CY 44566'));
   //  assert.equal('this car if from Bellville, CJ', isFromBellville('CY'));
})
})

