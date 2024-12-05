const form = document.getElementById('form-agenda');
const pessoas = [];
const numeros = [];


let linhas = '';

document.getElementById('nome-pessoa').addEventListener('input', function(e) {
    const regex = /[^a-zA-Z\s]/g;
    e.target.value = e.target.value.replace(regex, '');
});


document.getElementById('numero-pessoa').addEventListener('input', function(e) {
    const regex = /[^0-9]/g; 
    e.target.value = e.target.value.replace(regex, '');
});

form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
});

function adicionaLinha(){
    const inputNomePessoa = document.getElementById('nome-pessoa');
    const inputNumeroPessoa = document.getElementById('numero-pessoa');  

    

    pessoas.push(inputNomePessoa.value);
    numeros.push(inputNumeroPessoa.value);

    let linha = '<tr>';
    linha += `<td>${inputNomePessoa.value}`;
    linha += `<td>${inputNumeroPessoa.value}`;
    linha += '</tr>';

    linhas += linha;



    inputNomePessoa.value = '';
    inputNumeroPessoa.value = '';
}

function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas; 
}
