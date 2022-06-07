
function Compara(a,b){
    if(!a || !b) return 'Defina dois números';
    const frase1 = criaFrase1(a,b)
    const frase2 = criaFrase2(a,b)
    soma = a + b;

    return `${frase1} ${frase2}`
  
    
}

function criaFrase1(a,b){
    let saoIguais = '';
    if(a!==b){
        saoIguais = 'não'
    }

    return `Os números ${a} e ${b} ${saoIguais} são iguais.`
}

function criaFrase2(a,b){
    const soma = a + b;

    let resultado10 = 'menor';
    let resultado20 = 'menor';
    const compara10 = soma > 10;
    const compara20 = soma > 20;

    if(compara10){
        resultado10 = 'maior';
    }
    if(compara20){
        resultado20 = 'maior'
    }

    return `Sua soma é ${soma}, que é ${resultado10} que 10 e ${resultado20} que 20.`

}

console.log(Compara(1,1))