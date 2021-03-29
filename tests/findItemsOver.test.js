
describe('this function find Items that are Over from the itemList', function() {

    var itemList = [
        {name : 'apples', qty : 10},
        {name : 'oranges', qty : 37},
        {name : 'mangos', qty : 27},
        {name : 'apples', qty : 3},
    
    ];


    var itemList2 = [
        {name : 'apples', qty : 10},
        {name : 'apples', qty : 3},
    
    
    ];
    
    it('should return threshold over 20', function() {
        var threshold = 20;
        assert.deepEqual([{name : 'oranges', qty : 37},
        {name : 'mangos', qty : 27}], findItemsOver(itemList, threshold));
    })


     
    it('should return an empty array if there are not items over 20 ', function() {
        var threshold = 20;
        assert.deepEqual([], findItemsOver(itemList2, threshold));
    })
});