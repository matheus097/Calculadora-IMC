const calcular = document.getElementById('calcular');

function imc () {
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    if (nome !== '' && altura !== '' && peso !== '') {

        const valorIMC = (peso / (altura * altura)).toFixed(1);

        let classificacao = '';

        if (valorIMC < 18.5){
            classificacao = 'com magreza.';
        }else if (valorIMC < 25) {
            classificacao = 'com peso normal.';
        }else if (valorIMC < 30){
            classificacao = 'com sobrepeso.';
        }else if (valorIMC < 40){
            classificacao = 'com obesidade. ';
        }else {
            classificacao = 'com obesidade grave.';
        }

        resultado.textContent = `${nome} seu IMC é ${valorIMC} e você está ${classificacao}`;
        
    }else {
        resultado.textContent = 'Preencha todos os campos!!!';
    }

}

calcular.addEventListener('click', imc);