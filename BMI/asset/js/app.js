let personalProfile = {
    weight: "",
    height: "",
    calcBmi: function(){
        let bmi = this.weight/(this.height*this.height);
        bmi = Number(bmi.toFixed(1));

        console.log("Your Bmi is : " + bmi);
        if (bmi < 18.5)
            console.log("Your are : Underweight");
        else if (bmi >= 18.5 && bmi <= 24.9)
            console.log("Your are : Normal");
        else if (bmi >= 25.0 && bmi <= 29.9)
            console.log("Your are : Overweight");
        else if (bmi >= 30.0)
            console.log("Your are : Obese");

    }
};
personalProfile.weight = prompt(" Enter your Weight in Kg.   ");
personalProfile.height = prompt("Enter your Height in meters.  ");

(function(){
    personalProfile.calcBmi();

})();
