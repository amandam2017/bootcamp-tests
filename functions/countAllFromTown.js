function countAllFromTown(regNum,regFromTown){
  //console.log(regNum);
  //console.log(regFromTown);
  
      var fromTown = regNum.split(",");
      var carReg = fromTown.length;
      var fromStellies = [];
      for (var i = 0;i < fromTown.length; i++){
        const currentRegNum = fromTown[i].trim() ;
          if (currentRegNum.startsWith(regFromTown)){
             fromStellies.push(fromTown[i].trim());
            //console.log(fromStellies);
          }
      }
      return fromStellies.length;
}