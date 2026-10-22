document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault();

    console.log('Formulário enviado!');

    const nomeCompleto = document.getElementById('nome_completo').value;

    console.log('Nome digitado:', nomeCompleto);
    console.log('Nome após trim:', nomeCompleto.trim());

    if (nomeCompleto.trim() === '') {
        alert('Por favor, preencha o campo nome completo.');
        return;
    }
    
    const cpf = document.getElementById('cpf').value;
    const cpfLimpo = cpf.replace(/[.-]/g, '');
    if (cpfLimpo.trim() === ''){
        alert('Por favor, preencha o campo CPF.');
        return;
    }

    if (cpfLimpo.length !== 11){
        alert('Por favor, insira um CPF válido com 11 dígitos.');
        return;
    }

    if (!/^\d+$/.test(cpfLimpo)) {
        alert('Por favor, insira apenas números no campo CPF.');
        return;
    }

    const dataNascimento = document.getElementById('data_de_nascimento').value;
    if (dataNascimento.trim() === '') {
        alert('Por favor, preencha o campo data de nascimento.');
        return;
    }

    const nascimento = new Date(dataNascimento);
    const dataHoje = new Date();

    dataHoje.setHours(0, 0, 0, 0);

    if (isNaN(nascimento.getTime())){
        alert('Por favor, insira uma data de nascimento válida.');
        return;
    }

    if (nascimento > dataHoje){
        alert('A data de nascimento não pode ser no futuro.');
        return;
    }

    if (nascimento< new Date('1900-01-01')){
        alert('A data de nascimento não pode ser anterior a 01/01/1900.');
        return;
    }




    const estado = document.getElementById('estado').value;
    if (estado.trim() === ''){
        alert('Por favor, selecione um estado.');
        return;
    }

    const cidade = document.getElementById('cidade').value;
    if (cidade.trim() === ''){
        alert('Por favor, preencha o campo cidade.');
        return;
    }
    const rua = document.getElementById('rua').value;
    if (rua.trim() === ''){
        alert('Por favor, preencha o campo rua.');
        return;
    }

    const dados = {
    nomeCompleto: nomeCompleto.trim(),
    cpf: cpfLimpo,
    dataNascimento: dataNascimento,
    estado: estado,
    cidade: cidade.trim(),
    rua: rua.trim()
};

console.log('Dados enviados:', dados);


fetch('http://localhost:3000/cadastro', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(dados)
})
.then(async function(response) {
    const resultado = await response.json();

    if (!response.ok) {
        throw new Error(
            resultado.mensagem || 'Erro ao enviar os dados.'
        );
    }

    return resultado;
})
.then(function(resultado) {
    alert(resultado.mensagem);
    document.getElementById('formulario').reset();
})
.catch(function(erro) {
    console.error('Erro ao enviar cadastro:', erro);
    alert(erro.message);
    });
});
