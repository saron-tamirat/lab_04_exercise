
let numbers = new Array();



function addition(){
    var sum = 0;
    let amountOfNumbers = prompt("how many numbers do you want to add?");
    for (let i = 0; i < parseInt(amountOfNumbers); i++) {
        numbers[i] = prompt("Enter the " + (i + 1)+ " number.");
    }
    numbers.forEach(function(value) {
        
         sum = sum + parseInt(value);
         
         
     });
     return sum;
     
     

};

(function() {
    choice=prompt("choose the operation u want to perform"+
                 "1.Addition" +
                 "2.subtraction"+
                 "3.multiplication"+
                 "4.Division")

      if (choice==1) {
         summation = addition();
         console.log("the answer is "+ summation)
      }       
    
    
    


})();



