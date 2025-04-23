function proximo() {
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

    if (data.error || data.erro) {
        return;
    }

    document.getElementById("logradouro").value = data.logradouro;
    document.getElementById("bairro").value = data.bairro;
    document.getElementById("cidade").value = data.localidade;
}