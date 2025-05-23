// Alterna o tema e salva no localStorage
function alternarTema() {
  document.body.classList.toggle('darkmode');

  const temaAtual = document.body.classList.contains('darkmode') ? 'dark' : 'light';
  localStorage.setItem('tema', temaAtual);
}

// Marcar a pagina selecionada
document.addEventListener('DOMContentLoaded', function() {
  const sidebarLinks = document.querySelectorAll('.sidebar nav ul li a');

  sidebarLinks.forEach(link => {
    link.addEventListener('click', function(event) {
      // Remove a classe 'active' de todos os links
      sidebarLinks.forEach(otherLink => {
        otherLink.classList.remove('active');
      });
      // Adiciona a classe 'active' ao link clicado
      this.classList.add('active');
    });
  });

  // Se você quiser que a página inicial (Início) já comece marcada,
  // você pode adicionar a classe 'active' ao primeiro link aqui:
  if (window.location.pathname.includes("index.html") || window.location.pathname === "/") {
    const inicioLink = document.querySelector('.sidebar nav ul li a[href="index.html"]');
    if (inicioLink) {
      inicioLink.classList.add('active');
    }
  } else {
    // Marca o link correspondente à página atual ao carregar
    sidebarLinks.forEach(link => {
      if (window.location.pathname.includes(link.getAttribute('href'))) {
        link.classList.add('active');
      }
    });
  }
});

document.addEventListener('DOMContentLoaded', function() {
  const sidebarLinks = document.querySelectorAll('.sidebar nav ul li a');
  let currentIndex = -1; // Para rastrear o índice do item ativo

  function setActiveLink(index) {
    // Remove a classe 'active' de todos os links
    sidebarLinks.forEach(link => {
      link.classList.remove('active');
    });

    if (index >= 0 && index < sidebarLinks.length) {
      sidebarLinks[index].classList.add('active');
      currentIndex = index;
    }
  }

  // Marca o link ativo com base na página carregada inicialmente
  sidebarLinks.forEach((link, index) => {
    if (window.location.pathname.includes(link.getAttribute('href'))) {
      setActiveLink(index);
    } else if ((window.location.pathname === "/" || window.location.pathname.includes("index.html")) && index === 0) {
      setActiveLink(0); // Marca "Início" por padrão na página inicial
    }
  });

  // Adiciona funcionalidade de clique para atualizar o estado ativo
  sidebarLinks.forEach((link, index) => {
    link.addEventListener('click', function(event) {
      setActiveLink(index);
    });
  });

  document.addEventListener('keydown', function(event) {
    const keyPressed = parseInt(event.key);
    // Verifica se o foco NÃO está em um input ou textarea
    if (!isNaN(keyPressed) && keyPressed > 0 && keyPressed <= sidebarLinks.length &&
        document.activeElement.tagName !== 'INPUT' && document.activeElement.tagName !== 'TEXTAREA') {
      const indexToActivate = keyPressed - 1; // Ajusta para o índice baseado em 0
      // Simula o clique no link correspondente
      sidebarLinks[indexToActivate].click();
      // Opcional: Se você não quiser a navegação imediata, apenas a marcação:
      // setActiveLink(indexToActivate);
    }
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const temaAlternarBotao = document.querySelector('.topbar button'); // Seleciona o botão de alternar tema

  // Função para alternar o tema (a mesma que você já tem)
  function alternarTema() {
    document.body.classList.toggle('darkmode');
    const temaAtual = document.body.classList.contains('darkmode') ? 'dark' : 'light';
    localStorage.setItem('tema', temaAtual);
  }

  document.addEventListener('keydown', function(event) {
    if (event.key === '5') {
      alternarTema();
    }
  });

  // Código para marcar o item da sidebar (mantendo a funcionalidade anterior)
  const sidebarLinks = document.querySelectorAll('.sidebar nav ul li a');

  function setActiveLink(index) {
    sidebarLinks.forEach(link => {
      link.classList.remove('active');
    });
    if (index >= 0 && index < sidebarLinks.length) {
      sidebarLinks[index].classList.add('active');
    }
  }

  sidebarLinks.forEach((link, index) => {
    if (window.location.pathname.includes(link.getAttribute('href'))) {
      setActiveLink(index);
    } else if ((window.location.pathname === "/" || window.location.pathname.includes("index.html")) && index === 0) {
      setActiveLink(0);
    }

    link.addEventListener('click', function(event) {
      setActiveLink(index);
    });
  });
});
