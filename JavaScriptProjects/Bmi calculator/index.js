function calculateBmi() {
    var weight = document.bmiForm.weight.value
    var height = document.bmiForm.height.value
    if (weight > 0 && height > 0) {
        var finalBmi = weight / (height / 100 * height / 100)
        console.log(finalBmi);
        document.bmiForm.bmi.value = finalBmi
        if (finalBmi < 18.5) {
            document.bmiForm.meaning.value = "That you are too thin."
            console.log( document.bmiForm.meaning.value)
        }
        if (finalBmi > 18.5 && finalBmi < 25) {
            document.bmiForm.meaning.value = "That you are healthy."
            console.log( document.bmiForm.meaning.value)
        }
        if (finalBmi > 25) {
            document.bmiForm.meaning.value = "That you have overweight."
            console.log( document.bmiForm.meaning.value)
        }
    }
    else {
        alert("Please Fill in everything correctly")
    }
}