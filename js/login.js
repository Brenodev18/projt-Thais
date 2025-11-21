
function login(){

    var logado = 0;
    var loginElem = document.getElementById('login');
    var senhaElem = document.getElementById('senha');

    var usuario = loginElem.value.trim();
    usuario = usuario.toLowerCase();
    var senha = senhaElem.value; // não forçar lowercase em senhas por segurança/precisão

    // credenciais de exemplo (somente para demonstração/local)
    if(usuario === "adm" && senha === "1234"){
        logado = 1;
        window.location = "Dash.html";
        return;
    }

    if(logado === 0){
        alert("Acesso negado! Usuário ou senha incorretos.");
    }

}
