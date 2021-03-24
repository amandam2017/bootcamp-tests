function countAllFromTown(regNum,regFromTown){
  //console.log(regNum);
  //console.log(regFromTown);
  
      var fromTown = regNum.split(",");
      var carReg = fromTown.length;
      var fromStellies = [];
      var regCount = 0;
      for (var i = 0;i < fromTown.length; i++){
        const currentRegNum = fromTown[i].trim() ;
          if (currentRegNum.startsWith(regFromTown)){
             fromStellies.push(fromTown[i].trim());
            //console.log(fromStellies);
            regCount++;
          }
      }
      return regCount;

    }



// function countAllFromTown(registrationNumbers,regTown){
//   //console.log(regNum);
//   var regNumList = registrationNumbers.split(",");
//   var regNo = [];
//   let regCount = 0;
//   for (var i = 0; i < regNumList.length; i++){
//     var regNumTrim = regNumList[i].trim();
//     if (regNumTrim.startsWith(regTown)){
//       regNo.push(regNumTrim);
//       regCount++;
//     }
//   }
//   return regCount;
// }