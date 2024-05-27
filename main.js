document.getElementById('calcForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário

    // Captura os valores dos inputs
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operation = document.getElementById('operation').value;

    let result;

    // Realiza a operação com base no valor do input de operação
    switch(operation) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 !== 0) {
                result = num1 / num2;
            } else {
                alert('Divisão por zero não é permitida!');
                return;
            }
            break;
        default:
            alert('Operação inválida!');
            return;
    }

    // Exibe o resultado em um alert
    alert(`O resultado da operação é: ${result}`);
});
