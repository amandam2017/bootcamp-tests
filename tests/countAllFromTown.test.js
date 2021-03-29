describe('this test countAllFromTown function,', function(){
    it('should find all car registration from Stellies, count them and return the total of car registration found', function(){
        var fromStellies = countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL');
        //fromStellies should contains
        assert.deepEqual(fromStellies, 3)
    });

    it('finding out if is there any other cars from fromKraaifontein, should count them and return the total', function(){
        var fromKraaifontein = countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CF');
        assert.equal(fromKraaifontein, 0);
    });

    it('find if theres are any car/s from Paarl, should count and return total of  cars from CJ ', function(){
        var fromPaarl = countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CJ');
        //fromStellies should contains
        assert.deepEqual(fromPaarl, 1)
    })
})



