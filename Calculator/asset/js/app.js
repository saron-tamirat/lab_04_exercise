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
function max(){
   
    let numbers = new Array();
    let amountOfNumbers = prompt("how many numbers do you want to compare?");
    for (let i = 0; i < parseInt(amountOfNumbers); i++) {
        numbers[i] = prompt("Enter the " + (i + 1)+ " number.");
    }
    numbers.forEach(function(value) {
         maxi = parseInt(value)
        if (parseInt(value) >= maxi){
            maxi = parseInt(value)
        }
         
         
     });
     return maxi;
     
     

};
function min(){
   
    let numbers = new Array();
    let amountOfNumbers = prompt("how many numbers do you want to compare?");
    for (let i = 0; i < parseInt(amountOfNumbers); i++) {
        numbers[i] = prompt("Enter the " + (i + 1)+ " number.");
    }
    numbers.forEach(function(value) {
         mini = parseInt(value)
        if (parseInt(value) <= mini){
            mini = parseInt(value)
        }
         
         
     });
     return mini;
     
     

};
function squ(){
    let number =  prompt("Enter the value of the number. ");
   return number*number;
};
function avr(){
    average = 0;
    let numbers = new Array();
    let amountOfNumbers = prompt("how many numbers do you want to do the average?");
    for (let i = 0; i < parseInt(amountOfNumbers); i++) {
        numbers[i] = prompt("Enter the " + (i + 1)+ " number.");
    }
    numbers.forEach(function(value) {
        
        average = average + parseInt(value);
        
        
    });
    return average/amountOfNumbers;
    
}


(function() {
    choice=prompt("choose the operation u want to perform \n 1.Addition \n 2.subtraction\n3.multiplication\n4.Division\n5.maximum number\n6.minimum number\n7.square\n8.average")

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
     else if (choice == 4){
         quotient = division();
         alert("The answer is "+ quotient)
     }
     else if (choice == 5){
         maximum = max();
        alert("The maximum number is" + maximum)
     }
     else if (choice == 6){
        minimum = min();
       alert("The minimum number is" + minimum)
    }
    else if (choice == 7){
        square = squ();
        alert("The square of the number is "+ square)
    }
    else if (choice == 8){
         average = avr();
         alert("The average result is" + average)
    }
    
    


})();



