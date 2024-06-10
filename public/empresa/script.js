function registrarAlimento(nome, endereco, numero, bairro, cidade, cep, alimento, data, perecivel) {
    if (localStorage.getItem("doacoes") === null) {
        localStorage.setItem("doacoes", JSON.stringify([]));
    }
    if (localStorage.getItem(nome) !== null) {
        alert("Esse nome de doação já existe!");
        return false;
    }
    let doacoes = JSON.parse(localStorage.getItem("doacoes"));
    doacoes.push(nome);
    localStorage.setItem(nome, JSON.stringify({
        "nomeEmpresa": localStorage.getItem("userLogado"),
        "nomeDoacao": nome,
        "endereco": endereco,
        "numero": numero,
        "bairro": bairro,
        "cidade": cidade,
        "cep": cep,
        "alimento": alimento,
        "data": data,
        "perecivel": perecivel
    }))
    localStorage.setItem("doacoes", JSON.stringify(doacoes));
    return true;
}

let formAlimento = document.getElementById("formAlimento");

formAlimento.addEventListener("submit", (e) => {
    e.preventDefault();

    let nome = (document.getElementById("nome")).value;
    let endereco = (document.getElementById("endereco")).value;
    let numero = (document.getElementById("numero")).value;
    let bairro = (document.getElementById("bairro")).value;
    let cidade = (document.getElementById("cidade")).value;
    let cep = (document.getElementById("cep")).value;
    let alimento = (document.getElementById("alimento")).value;
    let data = (document.getElementById("data")).value;

    let perecivel = document.getElementById("perecivel").checked;
    if (perecivel == false) {
        perecivel = "Não";
    } else {
        perecivel = "Sim";
    }

    if (nome === "" || endereco === "" || numero === "" || bairro === "" || cidade === "" || cep === "" || alimento ===  "" || data  === "" || perecivel === "") {
        alert("ERRO! Campos Invalidos!");
        return;
    }

    if (registrarAlimento(nome, endereco, numero, bairro, cidade, cep, alimento, data, perecivel)) {
        alert("Alimento Adicionado!");
    }
})