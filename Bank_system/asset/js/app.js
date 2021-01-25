function deposit(newBalance){
    var balance  = 1000000;
    balance = balance + parseInt(newBalance);
    alert("you have succesfully deposited birr "+ newBalance +" your current balance is "+ balance);


}
function withdraw(newBalance){
    var balance  = 1000000;
    balance = balance - parseInt(newBalance);
    alert("you have succesfully withdrawted birr "+ newBalance + "your current balance is" + balance);

}
function transfer(account , newBalance){
    var balance = 1000000;
    balance = balance - newBalance;
    alert("you have succesfully transfered " + newBalance + "to account number" + account + ".your current balance is" + balance)
}
function balance(){
    var balance = 1000000;
    alert("your current balance is " + balance)
}


(function(){ 

choice = prompt("choose which of the followoing you want to perform \n 1.Deposit \n 2.withdraw \n3.transfer \n4.balance")
if(choice == 1){
    var newBalance = prompt("Enter the amount of money you want to add. ");
    deposit(newBalance);
}
 else if (choice == 2){
    var newBalance = prompt("Enter the amount of money you want to withdroaw. ");
    if( newBalance >= 50000 || newBalance <= 50){
        alert("you cant withdraw this amount of money. ")
    }
    else{
        withdraw(newBalance);
    }
   
}
else if (choice == 3){
    var account = prompt("Enter the account you want to transfer your money to. ");
    var newBalance = prompt("Enter the amount of money you want to transfer. ");
     transfer(account,newBalance);
}
else{
    balance();
}




})();