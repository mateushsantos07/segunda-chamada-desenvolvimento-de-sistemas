import leia from 'readline-sync'

export default function atividade02(){
    
    console.log("Qual unidade de medida deseja fazer");
var opcao = leia.keyInSelect(["Celsius => Fahrenheit", "Fahrenheit => Celsius", "Celsius => Kelvin", "Kelvin => Celsius", "Fahrenheit => Kelvin", "Kelvin => Fahrenheit"]) + 1;
var unidadeMedida;

function opcaoTemperatura() {
  var unidademMedida2 = leia.questionFloat("Informe a temperatura: ");
  return unidademMedida2;
}

switch(opcao) {
  case 1:
    unidadeMedida = (opcaoTemperatura() * 1.8) + 32;
    console.log(unidadeMedida);
    break;
  case 2:
    unidadeMedida = (opcaoTemperatura() - 32) * (5/9);
    console.log(unidadeMedida);
    break;
  case 3:
    unidadeMedida = opcaoTemperatura() + 273.15;
    console.log(unidadeMedida);
    break;
  case 4:
    unidadeMedida = opcaoTemperatura() - 273.15;
    console.log(unidadeMedida);
    break;
  case 5:
    unidadeMedida = (opcaoTemperatura() - 32) * (5/9) + 273.15;
    console.log(unidadeMedida);
    break;
  case 6:
    unidadeMedida = (opcaoTemperatura() - 273.15) * 1.8 + 32;
    console.log(unidadeMedida);
    break;
}


    
}