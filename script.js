alert("Vamos iniciar um sistema de cálculo de dois números");

function calculator(firstNumber, secondNumber) {
    const sumNumbers = firstNumber + secondNumber;
    const subtractNumbers = firstNumber - secondNumber;
    const multiplyNumbers = firstNumber * secondNumber;
    const divideNumbers = firstNumber / secondNumber;
    const moduleNumbers = firstNumber % secondNumber;

    const isEqual = (firstNumber === secondNumber);
    let equalMessage = ""
    if(isEqual === true){
        equalMessage = `Os números digitados são iguais
        Primeiro número: ${firstNumber}
        Segundo número: ${secondNumber}
        `
    }else{
        equalMessage = `Os números digitados são diferentes
        Primeiro número: ${firstNumber}
        Segundo número: ${secondNumber}
        `
    }

    const sumModule2 = (sumNumbers % 2);
    let pairMessage = ""
    if(sumModule2 === 0){
        pairMessage = `A soma dos números digitados é PAR: ${sumNumbers}`
    }else{
        pairMessage = `A soma dos números digitados é IMPAR: ${sumNumbers}`
    }

    return alert(
            `
            ${firstNumber} + ${secondNumber} = ${sumNumbers}
            ${firstNumber} - ${secondNumber} = ${subtractNumbers}
            ${firstNumber} * ${secondNumber} = ${multiplyNumbers}
            ${firstNumber} / ${secondNumber} = ${divideNumbers}
            ${firstNumber} % ${secondNumber} = ${moduleNumbers}

            ${equalMessage}
            ${pairMessage}
            `
        );
}

const firstNumber = Number(prompt("Digite o primeiro número:"));
const secondNumber = Number(prompt("Digite o segundo número:"));

calculator(firstNumber, secondNumber);
