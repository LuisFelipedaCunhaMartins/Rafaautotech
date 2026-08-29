function agendarServico() {

    const telefone = "5511964715306";

    const mensagem =
        "Olá! Gostaria de agendar um serviço para o meu veículo na Rafa Auto Tech.";

    const app =
        `whatsapp://send?phone=${telefone}&text=${encodeURIComponent(mensagem)}`;

    const web =
        `https://web.whatsapp.com/send?phone=${telefone}&text=${encodeURIComponent(mensagem)}`;

    window.location.href = app;

    setTimeout(function() {
        window.location.href = web;
    }, 3000);
}


/* GOOGLE MAPS */

function comoChegar() {

    const endereco =
        "Rua dos Pássaros, 14, Montanhão, São Bernardo do Campo, SP, 09784-060";

    const url =
        `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(endereco)}`;

    window.open(url, "_blank");
}