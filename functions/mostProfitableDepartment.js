//write two function one most profitabledepartment and most profitableday
//STEPS TO FIND which department is most profitable below:
//loop through salesData
//We know the total sales per department, so we need to get it STEPS ends here.
//Now we want to get the total cost per dpt

function mostProfitableDepartment(salesData){
    //console.log(salesData.length);
    
    var dataMap = {};
    
    //create an empty variable to store each department cost
    //looping over salesData 
    for(var i=0; i<salesData.length; i++){
      //Now we want to get the total cost per dpt
        const data = salesData[i];
      //console.log(data);
  
      dataMap[data.department] = 0; //this is assigning 0 to all the three departments
      //console.log(dataMap);
    }
    
     //looping through the same   
    for(var i=0; i<salesData.length; i++){
        const data = salesData[i];
      //getting the total of my current department
      var currentDepartmentTotal = dataMap[data.department];
      //add sales to the current department
      currentDepartmentTotal += data.sales;
      //storing total to the dataMap
      dataMap[data.department] = currentDepartmentTotal;
    }
    //console.log(dataMap);
    
    var mostSales = 0;//i have used 0 because I am looking for a number
    var mostSalesDpt = '';//empty string
    //looping thought to find the one that makes more sales
    for(const data in dataMap){
      
        //console.log(dataDepartment)//this should bring all departments in the objects list (the keys)
      //console.log(dataMap[dataDepartment]);//should bring each department and its total below
      const currentDataDepartmentSales = dataMap[data];
      //looping through dataMap with the total values to find the department with the most sales.
      if(currentDataDepartmentSales > mostSales ){
        //check if currentDataDepartmentSales is more 0 (which is mostSales)
        mostSales = currentDataDepartmentSales;
        //
        mostSalesDpt = data;
      }
    }
    console.log(mostSales);
    console.log(mostSalesDpt);
    return mostSalesDpt;
  
  }
  
  
  //FUNCTION-2
  function mostProfitableDay(salesData){
    var dataMap = {};
      for(var i=0; i<salesData.length; i++){
          const data = salesData[i];//getting total cost per dpt
        //console.log(data);
        dataMap[data.day] = 0;
        //console.log(dataMap);
      }
    
    for(var i=0; i<salesData.length; i++){
        const data = salesData[i];
      //getting the total of my current department
      var currentDayTotal = dataMap[data.day];
      //add sales to the current department
      currentDayTotal += data.sales;
      //storing total to the dataMap
      dataMap[data.day] = currentDayTotal;
    }
    //console.log(dataMap);
      var mostSales = 0;
        var mostSalesDay = '';
    //looping thought to find the one that makes more sales
    for(const data in dataMap){
      
        //console.log(dataDepartment)//this should bring all departments in the objects list (the keys)
      //console.log(dataMap[dataDepartment]);//should bring each department and its total below
      const currentDataDaySales = dataMap[data];
      //looping through dataMap with the total values to find the department with the most sales.
      if(currentDataDaySales > mostSales ){
        //check if currentDataDepartmentSales is more 0 (which is mostSales)
        mostSales = currentDataDaySales;
        //
        mostSalesDay = data;
      }
    }
    console.log(mostSales);
    console.log(mostSalesDay);
    return mostSalesDay;
  }