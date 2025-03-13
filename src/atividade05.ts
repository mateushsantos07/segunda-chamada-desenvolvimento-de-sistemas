export default function atividade05() {
    const roleta = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36];
    
    let verde = 0, vermelho = 0, preto = 0;

    for (let i = 0; i < roleta.length; i++) {
        if (roleta[i] === 0) {
            verde++;
        } else if (roleta[i] % 2 === 0) {
            preto++;
        } else {
            vermelho++;
        }
    }

    const total = roleta.length;
    const percentualVerde = (verde / total) * 100;
    const percentualVermelho = (vermelho / total) * 100;
    const percentualPreto = (preto / total) * 100;

    console.log(`Percentual de Verde: ${percentualVerde}%`);
    console.log(`Percentual de Vermelho: ${percentualVermelho}%`);
    console.log(`Percentual de Preto: ${percentualPreto}%`);

    if (percentualVerde > 40 || percentualVermelho > 40 || percentualPreto > 40) {
        console.log('A roleta pode estar viciada');
    } else {
        console.log('A roleta não está viciada');
    }
}

