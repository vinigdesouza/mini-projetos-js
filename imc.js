const calcular = document.querySelector("button#calcular")

const calcularImc = () => {
    const nome = document.querySelector("input#nome")
    const altura = document.getElementById("altura")
    const peso = document.querySelector("input#peso")
    const resultado = document.getElementById("resultado")

    if(nome.value == '' || altura.value == '' || peso.value == ''){
        alert("Preencha todos os dados")
        return
    }

    const heigth = Number(altura.value)
    const weight = Number(peso.value)
    const name = nome.value

    if(heigth <= 0){
        alert("A altura não pode ser negativo!!")
        return
    }

    if(weight <= 0){
        alert("O peso não pode ser negativo")
        return
    }

    let classificacao = ''

    const imc = (weight/(heigth*heigth)).toFixed(2)

    if(imc < 18.5){
        classificacao = 'abaixo do peso.'
    } else if(imc >= 18.50 && imc < 25) {
        classificacao = 'no peso ideal.'
    } else if(imc >= 25 && imc < 30) {
        classificacao = 'com sobrepeso.'
    } else if(imc >= 30 && imc < 35) {
        classificacao = 'com obesidade grau I.'
    } else if(imc >= 35 && imc < 40) {
        classificacao = 'com obesidade grau II.'
    } else {
        classificacao = 'com obesidade grau III.'
    }

    resultado.innerText = `${name} seu IMC é ${imc} e você está ${classificacao}`
}


calcular.addEventListener('click', calcularImc)