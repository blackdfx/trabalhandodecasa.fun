function verificarLarguraDaTela() {

    const isMobile = /Android|iPhone/i.test(navigator.userAgent);

    const isSmallScreen = window.innerWidth <= 800;

    if (isMobile || isSmallScreen) {} else {

    window.location.href = "about:blank"

    }

}

window.addEventListener('load', verificarLarguraDaTela)