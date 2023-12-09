function processTransaction() {
    // Obter os valores do formulário
    var amount = parseFloat(document.getElementById('amount').value);
    var type = document.getElementById('type').value;

    // Validar o valor
    if (isNaN(amount) || amount <= 0) {
        document.getElementById('result').innerHTML = '<p>Por favor, informe um valor válido.</p>';
        return;
    }

    // Realizar a operação de débito ou crédito
    var resultMessage = '';
    if (type === 'debit') {
        resultMessage = 'Débito de $' + amount.toFixed(2) + ' realizado com sucesso.';
    } else {
        resultMessage = 'Crédito de $' + amount.toFixed(2) + ' adicionado com sucesso.';
    }

    // Exibir o resultado
    document.getElementById('result').innerHTML = '<p>' + resultMessage + '</p>';
}
