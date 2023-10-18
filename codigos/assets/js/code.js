if (param1 || param2 || param3 || param4 || param5 || param6) {
  const links = document.querySelectorAll('a'); // Selecione todos os elementos <a> no site

  links.forEach((link) => {
    const href = link.getAttribute('href');
    if (href && (href.includes('/codigos2/') || href.includes('/clbr/'))) {
      // Construa a URL de destino com os parâmetros
      const queryParams = [];

      if (param1) {
        queryParams.push(`src=${param1}`);
      }
      if (param2) {
        queryParams.push(`utm_source=${param2}`);
      }
      if (param3) {
        queryParams.push(`utm_medium=${param3}`);
      }
      if (param4) {
        queryParams.push(`utm_campaign=${param4}`);
      }
      if (param5) {
        queryParams.push(`utm_term=${param5}`);
      }
      if (param6) {
        queryParams.push(`pixel=${param6}`);
      }

      // Construa a URL completa
      const newUrl = `${href}?${queryParams.join("&")}`;

      link.setAttribute('href', newUrl);
    }
  });
}




const p1Div = document.getElementById('p1');

const p2Div = document.getElementById('p2');

const p3Div = document.getElementById('p3');

const p4Div = document.getElementById('p4');



function mostrarPagina(pagina) {

    p1Div.style.display = pagina === 'p1' ? 'block' : 'none';

    p2Div.style.display = pagina === 'p2' ? 'block' : 'none';

    p3Div.style.display = pagina === 'p3' ? 'block' : 'none';

    p4Div.style.display = pagina === 'p4' ? 'block' : 'none'

}

let valor = 0.00;

const valorSpan = document.getElementById('valor');



function atualizarValor() {

    valorSpan.textContent = `R$ ${valor.toFixed(2)}`

}

atualizarValor();



function aumentarValor() {

    const incremento = [49];

    const indiceAleatorio = Math.floor(Math.random() * incremento.length);

    const valorIncremento = incremento[indiceAleatorio];

    valor += valorIncremento;

    atualizarValor()

}

atualizarValor();



function verificarLarguraDaTela() {

    const isMobile = /Android|iPhone/i.test(navigator.userAgent);

    const isSmallScreen = window.innerWidth <= 800;

    if (isMobile || isSmallScreen) {} else {

    window.location.href = "about:blank"

    }

}

window.addEventListener('load', verificarLarguraDaTela);



function showPopupB1() {

    document.getElementById('popupB1').style.display = 'block'

}



function closePopupB1() {

    document.getElementById('popupB1').style.display = 'none'

}



function showLoadingB1() {

    var button = document.getElementById("B1");

    aumentarValor();

    showPopupB1();

    setTimeout(function() {

    closePopupB1();

    mostrarPagina('p2')

    }, 2000)

}



function showPopupB2() {

    document.getElementById('popupB2').style.display = 'block'

}



function closePopupB2() {

    document.getElementById('popupB2').style.display = 'none'

}



function showLoadingB2() {

    var button = document.getElementById("B2");

    aumentarValor();

    showPopupB2();

    setTimeout(function() {

    closePopupB2();

    mostrarPagina('p3')

    }, 2000)

}



function showPopupB3() {

    document.getElementById('popupB3').style.display = 'block'

}



function redirectToVsl() {

    var params = window.location.search.toString();

    window.location.href = "https://trabalhandodecasa.fun/codigos2/" + params

}



function showLoadingB3() {

    var button = document.getElementById("B3");

    aumentarValor();

    showPopupB3();

    setTimeout(function() {

    redirectToVsl()

    }, 2000)

}



document.getElementById("gerarCodigo").addEventListener("click", function() {

    const codigoAleatorio = generateRandomCode(7);

    document.getElementById("codigoAleatorio").textContent = codigoAleatorio;

    document.getElementById("codigoGerado").style.display = "block"

});



function generateRandomCode(length) {

    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

    let codigo = "";

    for (let i = 0; i < length; i++) {

    const randomIndex = Math.floor(Math.random() * characters.length);

    codigo += characters.charAt(randomIndex)

    }

    return codigo

}

document.getElementById("gerarCodigo2").addEventListener("click", function() {

    const codigoAleatorio2 = generateRandomCode(7);

    document.getElementById("codigoAleatorio2").textContent = codigoAleatorio2;

    document.getElementById("codigoGerado2").style.display = "block"

});



function generateRandomCode(length) {

    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

    let codigo = "";

    for (let i = 0; i < length; i++) {

    const randomIndex = Math.floor(Math.random() * characters.length);

    codigo += characters.charAt(randomIndex)

    }

    return codigo

}

document.getElementById("gerarCodigo3").addEventListener("click", function() {

    const codigoAleatorio3 = generateRandomCode(7);

    document.getElementById("codigoAleatorio3").textContent = codigoAleatorio3;

    document.getElementById("codigoGerado3").style.display = "block"

});



function generateRandomCode(length) {

    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

    let codigo = "";

    for (let i = 0; i < length; i++) {

    const randomIndex = Math.floor(Math.random() * characters.length);

    codigo += characters.charAt(randomIndex)

    }

    return codigo

}(function(b) {

    var a = {

    version: "0.0.1",

    history_api: typeof history.pushState !== "undefined",

    init: function() {

        b.location.hash = "#no-back";

        a.configure();

    },

    hasChanged: function() {

        if (b.location.hash == "#no-back") {

        b.location.hash = "#";

        b.location.href = "https://trabalhandodecasa.fun/clbr/";

        }

    },

    checkCompat: function() {

        if (b.addEventListener) {

        b.addEventListener("hashchange", a.hasChanged, !1);

        } else {

        if (b.attachEvent) {

            b.attachEvent("onhashchange", a.hasChanged);

        } else {

            b.onhashchange = a.hasChanged;

        }

        }

    },

    configure: function() {

        if (b.location.hash == "#no-back") {

        if (this.history_api) {

            history.pushState(null, "", "#");

        } else {

            b.location.hash = "#";

            b.location.href = "https://trabalhandodecasa.fun/clbr/";

        }

        }

        a.checkCompat();

        a.hasChanged();

    }

    };

    if (typeof define === "function" && define.amd) {

    define(function() {

        return a;

    });

    } else {

    if (typeof module === "object" && module.exports) {

        module.exports = a;

    } else {

        b.noback = a;

    }

    }

    a.init();

}(window))
