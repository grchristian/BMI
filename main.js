calcular = document.getElementById("calcular");
peso = document.getElementById("peso");
altura = document.getElementById("altura");
imc = document.getElementById("imc");
rango = document.getElementById("rango");
    
calcular.onclick = function()
{
    if(peso.value!="" && altura.value!="") {
        imc_calc = (peso.value/(altura.value* altura.value));
        imc.innerHTML = imc_calc.toFixed(2);
        console.log(imc_calc);

        if(imc_calc<=18.5) {
            rango.innerHTML = "BAJO DE PESO";
        }
        else if(imc_calc>18.5 && imc_calc<=24.9) {
            rango.innerHTML = "PESO SALUDABLE";
        }
        else if(imc_calc>=25 && imc_calc<=29.9) {
            rango.innerHTML = "SOBREPESO";
        }
        else if(imc_calc>=30 && imc_calc<=34.9) {
            rango.innerHTML = "OBESIDAD 1º";
        }
        else if(imc_calc>=35 && imc_calc<=39.9) {
            rango.innerHTML = "OBESIDAD 2º";
        }
        else if(imc_calc=40) {
            rango.innerHTML = "OBESIDAD MÓRBIDA";
        }
    }
    else {
        alert("INGRESA TUS DATOS")
    }
};


