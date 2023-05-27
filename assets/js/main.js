function meuEscopo() {
    // Captura o que é colocado no formulário
    const form = document.querySelector('#form');

    // Adicionou um escutador do evento 'submit' que: previne o default, atribui as consts inputPeso e inputAltura ao que é colocado no forms 
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        const inputPeso = event.target.querySelector('#peso')
        const inputAltura = event.target.querySelector('#altura')

        // Atribui às variáveis peso e altura o valor do que é colocado no forms 
        const peso = Number(inputPeso.value);
        const altura = Number(inputAltura.value);

        //valida que o peso colocado é um número
        if (!peso) {
            setResultado('Peso inválido!', false);
            return;
        }

        //valida que a altura colocada é um número
        if (!altura) {
            setResultado('Altura inválida!', false);
            return;
        }

        // Atribui o resultado da função getImc (que faz o cálculo do IMC) à variável imc. O mesmo para o nível de IMC
        const imc = getImc(peso, altura);
        const nivelImc = getNivelImc(imc); 

        // Adiciona através da função msg, um parágrafo abaixo do botão de enviar com o resultado
        const msg = `Seu IMC é ${imc}: ${nivelImc}` 

        // Chama a função setResultado caso nenhum erro ocorra, chamando como parâmetros a mensagem final e o booleano true para validação
        setResultado(msg, true)
    });

    // Captura os valores de peso e altura e calcula o IMC
    function getImc(peso, altura) {
        const imc = peso / altura ** 2;
        return imc.toFixed(2);
    }

    // Seleciona em qual nível de IMC a pessoa está
    function getNivelImc (imc) {
        const nivel = ["Abaixo do peso", "Peso normal", "Sobrepeso", "Obesidade grau 1", "Obesidade grau 2", "Obesidade grau 3"];

        if (imc >= 39.9) return nivel[5];
        if (imc >= 34.9) return nivel[4];
        if (imc >= 29.9) return nivel[3];
        if (imc >= 24.9) return nivel[2];
        if (imc >= 18.5) return nivel[1];
        if (imc > 18.5) return nivel[0];
    }

    // Cria um parágrafo
    function criaP() {
        const p = document.createElement('p');
        return p;
    }

    function setResultado (msg, isValid) {
        const resultado = document.querySelector('#resultado');
        resultado.innerHTML = '';

        const p = criaP();

        if (isValid) {
            p.classList.add('paragrafo-resultado');
        }   else {
            p.classList.add('paragrafo-erro')
        }
        p.innerHTML = msg;
        resultado.appendChild(p);
    }
}

meuEscopo();

