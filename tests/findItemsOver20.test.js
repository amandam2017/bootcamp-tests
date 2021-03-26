var itemList = findItemsOver20([
    {name : 'apples', qty : 10},
    {name : 'oranges', qty : 37},
    {name : 'mangos', qty : 27},
    {name : 'apples', qty : 3},
    {name : 'kiwi', qty : 32},

]);

describe('The find items over 20 function', function(){
    it('should be able to find items over the quantity 20', function() {
        assert.deepEqual([{name : 'pears', qty : 37}, {name : 'bananas', qty : 27}], itemList)
    });
    it('should be able to find items over the quantity 20', function() {
        assert.deepEqual([{name : 'oranges', qty : 37}, {name : 'mangos', qty : 27}, {name : 'kiwi', qty : 32}], itemList)
    })
});