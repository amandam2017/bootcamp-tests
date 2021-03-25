describe('The from where function', function() {
    it('should be able return bellvile for CY', function() {
        var reg = fromWhere('CY');
        assert.equal('Bellville', reg);

    });
    it('should be able to return paarl for CJ', function() {
        var regTwo = fromWhere('CJ');
        assert.equal('Paarl', regTwo);
    });
    it('should be able to return Cape Town for CA', function() {
        var regThree = fromWhere('CA');
        assert.equal('Cape Town', regThree);
    });
    it('should be able to return a default statement for some other place', function() {
        var statement = fromWhere('ND');
        assert.equal('Some other place!', statement); 
    });
});


function shoppingList(list){
    //first I have to check how many times does an item appear
          var total = 0;
      //looping through the list 
      for(var i=0; i<list.length; i++){
        //on the list I need to get a price using the dotnotation .price
        //so that the currentList returns the prices not the objects
          var currentList = list[i].price;
        //console.log(currentList);
        //adding the prices of the current list
          total += currentList;
        //console.log(currentList)
      }
     return total
    }