function proximo() {
    if (!validarPrimeiroBloco()) {
        alert("Preencha corretamente todos os campos antes de prosseguir!");
        return;
    }

    const parte1 = document.getElementById("parte-1");
    const parte2 = document.getElementById("parte-2");

    parte1.style.display = "none";
    parte2.style.display = "block";
}

function anterior() {
    const parte1 = document.getElementById("parte-1");
    const parte2 = document.getElementById("parte-2");

    parte1.style.display = "block";
    parte2.style.display = "none";
}

async function buscaCEP() {
    const cep = document.getElementById("cep").value.replace(/\D/g, '');

    const response = await fetch(`http://localhost:8080/api/cep/${cep}`);
    const data = await response.json();
    
    const cepValidacao = document.getElementById('cep-validacao')
    if (data.error || data.erro) {
        cepValidacao.textContent = "CEP inexistente!"
        cepValidacao.classList.add('invalido')
        return;
    }

    cepValidacao.textContent = ""
    cepValidacao.classList.remove('invalido')

    document.getElementById("logradouro").value = data.logradouro;
    document.getElementById("bairro").value = data.bairro;
    document.getElementById("cidade").value = data.localidade;
}

function somenteNumeros(input) {
    input.value = input.value.replace(/\D/g, '');
}

function semNumeros(input) {
    input.value = input.value.replace(/[^a-zA-ZÁ-ÿ ]/g, '');
}

//POST PARA API
document.getElementById('form-cadastro').addEventListener('submit', async (event) => {
    event.preventDefault();
    if (document.getElementById('cep-validacao').classList.contains('invalido')) {
        alert("Preencha os dados corretamente!")
        return
    }

    const form = document.getElementById('form-cadastro')

    const formData = new FormData(form);
    const dados = {};

    formData.forEach((value, key) => {
        dados[key] = value;
    });

    try {
        const response = await fetch('http://localhost:8080/api/usuario', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dados)
        });
        if (response.status == 200) {
            alert("Cliente cadastrado com sucesso!")
            window.location.href = "http://localhost:8080/dados"
        }

    } catch (error) {
        alert("Erro ao cadastrar!")
    }
});

function validarSenha(input) {
    const senha = input.value;

    // Seleciona os parágrafos
    const caracteres = document.getElementById('numero-de-caracteres');
    const numeros = document.getElementById('numeros');
    const maiusculas = document.getElementById('maiusculas');
    const simbolos = document.getElementById('simbolos');

    // Valida cada critério
    if (senha.length >= 6 && senha.length <= 30) {
        caracteres.classList.add('validado');
        caracteres.classList.remove('invalido');
    } else {
        caracteres.classList.add('invalido');
        caracteres.classList.remove('validado');
    }

    if (/\d/.test(senha)) {
        numeros.classList.add('validado');
        numeros.classList.remove('invalido');
    } else {
        numeros.classList.add('invalido');
        numeros.classList.remove('validado');
    }

    if (/[A-Z]/.test(senha)) {
        maiusculas.classList.add('validado');
        maiusculas.classList.remove('invalido');
    } else {
        maiusculas.classList.add('invalido');
        maiusculas.classList.remove('validado');
    }

    if (/[!@#$%^&*(),.?":{}|<>_]/.test(senha)) {
        simbolos.classList.add('validado');
        simbolos.classList.remove('invalido');
    } else {
        simbolos.classList.add('invalido');
        simbolos.classList.remove('validado');
    }
}

function validarPrimeiroBloco() {
    const senha = document.getElementById('senha').value;
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const emailValidacao = document.getElementById('email-validacao')

    const temCaracteres = senha.length >= 6 && senha.length <= 30;
    const temNumero = /\d/.test(senha);
    const temMaiuscula = /[A-Z]/.test(senha);
    const temSimbolo = /[!@#$%^&*(),.?":{}|<>_]/.test(senha);

    const nomeCorreto = nome.length >= 3 && /(?!\d)/.test(nome)
    const emailCorreto = email.length >= 13 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    const emailNaoCadastrado = emailValidacao.classList.contains('validado')

    return temCaracteres && temNumero && temMaiuscula && temSimbolo && nomeCorreto && emailCorreto && emailNaoCadastrado;
}

async function emailJaExistente(input) {
    const email = input.value;
    const resposta = document.getElementById('email-validacao');

    try {
        const response = await fetch(`http://localhost:8080/api/usuario/email/${email}`, {
            method: 'GET',
        });
        if (response.status == 200) {
            resposta.classList.add('invalido')
            resposta.classList.remove('validado')
            resposta.textContent = "Email já cadastrado!"
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            resposta.classList.add('invalido')
            resposta.classList.remove('validado')
            resposta.textContent = "Email inválido!"
        }
        else {
            resposta.classList.add('validado')
            resposta.classList.remove('invalido')
            resposta.textContent = "Email válido!"
        }

    } catch (error) {
        alert("Erro ao buscar!")
    }
}