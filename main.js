calcular = document.getElementById("calcular");
peso = document.getElementById("peso");
altura = document.getElementById("altura");
imc = document.getElementById("imc");
rango = document.getElementById("rango");
    
calcular.onclick = function()
{
    if(peso.value!="" && altura.value!="") {
        imc_calc = (peso.value/(altura.value* altura.value));

        if(imc_calc<=18.5) {
            alert("BMI = " + imc_calc.toFixed(2) + "\nUnder weight");
        }
        else if(imc_calc>18.5 && imc_calc<=24.9) {
            alert("BMI = " + imc_calc.toFixed(2) + "\nHealthy weight");
        }
        else if(imc_calc>=25 && imc_calc<=29.9) {
            alert("BMI = " + imc_calc.toFixed(2) + "\nOverweight");
        }
        else if(imc_calc>=30 && imc_calc<=34.9) {
            alert("BMI = " + imc_calc.toFixed(2) + "\nObesity 1º");
        }
        else if(imc_calc>=35 && imc_calc<=39.9) {
            alert("BMI = " + imc_calc.toFixed(2) + "\nbesity 2º");
        }
        else if(imc_calc=40) {
            alert("BMI = " + imc_calc.toFixed(2) + "\nMorbid obesity");
        }
    }
    else {
        alert("Enter your data")
    }
};


