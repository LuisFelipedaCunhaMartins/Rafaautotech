 function agendarServico() {

    const telefone = "5511964715306";
    const mensagem = "Olá! Gostaria de agendar um serviço para o meu veículo na Rafa Auto Tech.";

    const app = `whatsapp://send?phone=${telefone}&text=${encodeURIComponent(mensagem)}`;
    const web = `https://web.whatsapp.com/send?phone=${telefone}&text=${encodeURIComponent(mensagem)}`;

    // Tenta abrir o aplicativo
    window.location.href = app;

    // Se o aplicativo não abrir, vai para o navegador
    setTimeout(function() {
        window.location.href = app;
    }, 5000);
}