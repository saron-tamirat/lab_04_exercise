function multiplication(){
    var multiple = 1;
    let numbers = new Array();
    let amountOfNumbers = prompt("how many numbers do you want to multiply?");
    for (let i = 0; i < parseInt(amountOfNumbers); i++) {
        numbers[i] = prompt("Enter the " + (i + 1)+ " number.");
    }
    numbers.forEach(function(value) {
        
         multiple = multiple * parseInt(value);
         
         
     });
     return multiple;
     
     

};
function addition(){
    var sum = 0;
    let numbers = new Array();
    let amountOfNumbers = prompt("how many numbers do you want to add?");
    for (let i = 0; i < parseInt(amountOfNumbers); i++) {
        numbers[i] = prompt("Enter the " + (i + 1)+ " number.");
    }
    numbers.forEach(function(value) {
        
         sum = sum + parseInt(value);
         
         
     });
     return sum;
     
     

};
function subtraction(){
    let num1 = prompt("Enter the 1st number ");
    let num2 = prompt("Enter the second number");
    return num1 - num2

};
function division(){
    let num1 = prompt("Enter the 1st number ");
    let num2 = prompt("Enter the second number");
    if (num2 == 0){
        num2=prompt("this number can't be zero.")
    }
    return num1/num2

};

(function() {
    choice=prompt("choose the operation u want to perform \n 1.Addition \n 2.subtraction\n3.multiplication\n4.Division")

      if (choice==1) {
         summation = addition();
         alert("The answer is "+ summation)
      } 
      else if(choice == 2){
          difference = subtraction()
          alert("The answer is " + difference)
      }      
      else if (choice==3) {
        multiples = multiplication();
        alert("The answer is "+ multiples)
     } 
     else{
         quotient = division();
         alert("The answer is "+ quotient)
     }
    
    


})();



