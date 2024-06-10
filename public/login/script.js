function logarUsuario(nome, senha) {
    if (localStorage.getItem("userLogado") === null) {
        localStorage.setItem("userLogado", "");
    }
    const usuario = JSON.parse(localStorage.getItem(nome));
    if (usuario && usuario.senha === senha) {
        localStorage.setItem("userLogado", nome);
        if (usuario.empresa === "on") {
            window.location.href = "../empresa/index.html";
        } else {
            window.location.href = "../consumidor/index.html";
        }
        return true;
    }
    alert("Usuario ou senha invalida!");
    return false;
}

let loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let nome = (document.getElementById("usuario")).value;
    let senha = (document.getElementById("senha")).value;
    logarUsuario(nome, senha)
})