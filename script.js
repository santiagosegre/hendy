const imagensDesktop = [
    "assets/imgs/banner-rotativo-1.png",
    "assets/imgs/banner-rotativo-2.png"
  ];

  const imagensMobile = [
    "assets/imgs/banner-rotativo-mobile-1.png",
    "assets/imgs/banner-rotativo-mobile-2.png"
  ];

  const tempoIntervalo = 8000; // 8 segundos
  let indiceAtual = 0;

  function alterarImagem() {
    if (window.innerWidth <= 768) {
      document.getElementById("banner").src = imagensMobile[indiceAtual];
    } else {
      document.getElementById("banner").src = imagensDesktop[indiceAtual];
    }

    indiceAtual = (indiceAtual + 1) % imagensDesktop.length;
  }

  setInterval(alterarImagem, tempoIntervalo);
