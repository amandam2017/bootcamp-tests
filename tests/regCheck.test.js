describe('this function check if a registration number is for GP, L, EC, MP', function(){
    it('this function will return true if the is a car from GP', function(){
        //var isGP = regCheck('DV 23 NB GP', 'GP');
        assert.equal(regCheck('DV 23 NB GP', 'GP'), true);
    });
    it('this checking if we have cars from Mpumalanga ', function(){
        //var isMP = regCheck('DV 23 LP GP', 'MP');
        assert.equal(regCheck('DV 23 LP GP', 'MP'), false);
    })
    it('this checks if theres regCode at the end of the car registration', function(){
       // var isBellville = isFrom('CY 189-012', 'CY');
        assert.equal(regCheck('CY 189-012 CY', 'CY'), true);
    })
    it('this checks if theres regCode of Durban at the end of the car registration and this is going to fail because there is no regCode which is ND', function(){
         //var isDurban = isFrom('CY 189-012', 'ND');
         assert.equal(regCheck('CY 189-012', 'ND'), false);
     })
})

// var isGP = regCheck('DV 23 NB GP', 'GP');
// var isMP = regCheck('DV 23 LP GP', 'MP');
// var isBellville = isFrom('CY 189-012', 'CY');
// var isDurban = isFrom('CY 189-012', 'ND');