describe('this function check if a registration number is for GP, L, EC, MP', function(){
    it('this function..........', function(){
        var isGP = regCheck('DV 23 NB GP', 'GP');
        assert.equal(regCheck,'DV 23 NB GP', 'GP' , true);
    });
    it('this function..........', function(){
        assert.equal();
    })
    it('this function..........', function(){
        assert.equal();
    })
})

var isGP = regCheck('DV 23 NB GP', 'GP');
var isMP = regCheck('DV 23 LP GP', 'MP');
var isBellville = isFrom('CY 189-012', 'CY');
var isDurban = isFrom('CY 189-012', 'ND');