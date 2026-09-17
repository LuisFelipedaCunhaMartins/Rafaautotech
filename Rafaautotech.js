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

const fotos = document.getElementById("fotos");
const imagens = document.querySelectorAll("#fotos img");

let indiceAtual = 0;

// Verifica quantas fotos aparecem por vez
function fotosPorTela() {
    return window.innerWidth <= 700 ? 1 : 3;
}

// Muda a posição do carrossel
function mudarFoto(direcao) {

    const quantidade = fotosPorTela();
    const maxIndice = Math.max(0, imagens.length - quantidade);

    indiceAtual += direcao;

    if (indiceAtual < 0) {
        indiceAtual = maxIndice;
    }

    if (indiceAtual > maxIndice) {
        indiceAtual = 0;
    }

    const larguraFoto = imagens[0].offsetWidth;
    const gap = window.innerWidth <= 700 ? 0 : 20;

    const deslocamento = indiceAtual * (larguraFoto + gap);

    fotos.style.transform =
        `translateX(-${deslocamento}px)`;
}

// Recalcula a posição ao redimensionar a janela
window.addEventListener("resize", () => {

    const quantidade = fotosPorTela();
    const maxIndice = Math.max(0, imagens.length - quantidade);

    indiceAtual = Math.min(indiceAtual, maxIndice);

    if (imagens.length > 0) {

        const larguraFoto = imagens[0].offsetWidth;
        const gap = window.innerWidth <= 700 ? 0 : 20;

        fotos.style.transform =
            `translateX(-${indiceAtual * (larguraFoto + gap)}px)`;

    }

});

// =========================
// SWIPE NO CELULAR
// =========================

let inicioToqueX = 0;
let fimToqueX = 0;

fotos.addEventListener("touchstart", (evento) => {

    inicioToqueX = evento.touches[0].clientX;

}, { passive: true });

fotos.addEventListener("touchend", (evento) => {

    fimToqueX = evento.changedTouches[0].clientX;

    const distancia = inicioToqueX - fimToqueX;

    if (Math.abs(distancia) > 50) {

        if (distancia > 0) {
            mudarFoto(1);
        } else {
            mudarFoto(-1);
        }

    }

}, { passive: true });

// =========================
// IMAGEM AMPLIADA
// =========================

function abrirImagem(imagem) {

    const modal = document.getElementById("modalImagem");
    const imagemAmpliada = document.getElementById("imagemAmpliada");

    imagemAmpliada.src = imagem.src;
    imagemAmpliada.alt = imagem.alt;

    modal.classList.add("ativo");

    document.body.style.overflow = "hidden";

}

function fecharModal() {

    const modal = document.getElementById("modalImagem");

    modal.classList.remove("ativo");

    document.body.style.overflow = "";

}

function fecharImagem(evento) {

    if (evento.target.id === "modalImagem") {
        fecharModal();
    }

}

// Fechar com a tecla ESC
document.addEventListener("keydown", (evento) => {

    if (evento.key === "Escape") {
        fecharModal();
    }

});
