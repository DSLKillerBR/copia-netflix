$('.owl-carousel').owlCarousel({
    loop: true, //efeito de loop (quando desativado, existe um limite no final)
    margin: 10, //margem entre os quadrados (imagens)
    nav: true, //botões de navegação
    responsive: { //quando o site se adapta ao tamanho da tela
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 5
        }
    }
})