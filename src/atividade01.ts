import leia from 'readline-sync'
export default function atividade01() {
    let diaria = leia.questionInt("Quantos dias vc ficou no hotel?");
    let idade = leia.questionInt("Quantos anos vc tem?");
    let money = 0;
    let desconto = 0;

    if (diaria <= 5) {
        money = 100;
        desconto = 100;
    } else if (diaria > 5 && diaria <= 10) { 
        money = 90;
        desconto = 90;
    } else if (diaria > 10) {
        money = 80;
        desconto = 80;
    }

   
    if (idade > 59) {
        let descontoIdoso = (money * 20) / 100; 
        money = money - descontoIdoso; 
    }

    console.log(`Sua diária ficou R$${money.toFixed(2)}`); 
}
