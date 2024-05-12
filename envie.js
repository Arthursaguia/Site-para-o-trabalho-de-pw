function enviarMensagem() {
   
    document.getElementById("formContainer").style.display = "none";
    document.getElementById("obrigadoContainer").style.display = "block";
    return false; // Para evitar que o formulário seja enviado
}
function voltarParaHome() {
    // Redirecionamento para a tela home
    window.location.href = "Home com carousell.html"; // Substitua "home.html" pelo URL correto da sua tela inicial
}


