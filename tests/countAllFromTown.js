describe('this test countAllFromTown', function(){
    it('it should find all car registration from Stellies, count the and return the total of car registration found which is 3', function(){
        var fromStellies = countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL');
        //fromStellies should contains
        assert.deepEqual(fromStellies, 3)
    });

    it('finding out if is there any other cars from fromKraaifontein, should count them and return the total', function(){
        var fromStellies = countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CF');
        assert.equal(countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CF'), 0);
    });

    it('find if there are any cars from Paarl, should count and return total of  cars from CJ ', function(){
        var fromStellies = countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CJ');
        //fromStellies should contains
        assert.deepEqual(fromStellies, 1)
    })
})



