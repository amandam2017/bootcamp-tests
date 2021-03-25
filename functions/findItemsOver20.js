//--these steps helped me to pass findItemsOver20--//
//first loop through the list
//find the items quantity on the list using dotnotation .qty
//then after I have found them I need to store them (in a new variable)
//use condition to find if there are qty's that are higher than 20
//then keep on looking for others that have a quantity that is greater than 20
//then I created an empty variable that I am goint to psh all the itemsOver 20
//then push them there

function findItemsOver20(itemList){
	//console.log(itemList)
  //going to push my list here
  var itemsOver20 = [];
 //Looping through the list 
  for(var i=0; i<itemList.length; i++){
 
    //find the items quantity on the list using dotnotation .qty and store them on listQuantities
	var listQuantities = itemList[i];
    //console.log(listQuantities)
    
    if(listQuantities.qty >20){
      console.log(listQuantities);
      itemsOver20.push(listQuantities);
      
    };
	}
  return itemsOver20;
}