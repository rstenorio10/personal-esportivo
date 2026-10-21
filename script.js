document.addEventListener('DOMContentLoaded', () => {

  // 1. Scroll do Header com Efeito Sticky
  const header = document.getElementById('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // 2. Menu Mobile Responsivo & Trava do Body Scroll
  const menuToggle = document.getElementById('menu-toggle');
  const btnCloseMenu = document.getElementById('btn-close-menu');
  const navMenu = document.getElementById('nav-menu');
  const menuBackdrop = document.getElementById('menu-backdrop');

  function openMenu() {
    navMenu.classList.add('active');
    menuBackdrop.classList.add('active');
    document.body.classList.add('menu-open');
  }

  function closeMenu() {
    navMenu.classList.remove('active');
    menuBackdrop.classList.remove('active');
    document.body.classList.remove('menu-open');
  }

  if (menuToggle) menuToggle.addEventListener('click', openMenu);
  if (btnCloseMenu) btnCloseMenu.addEventListener('click', closeMenu);
  if (menuBackdrop) menuBackdrop.addEventListener('click', closeMenu);

  document.querySelectorAll('.nav-link, .btn-cta-nav').forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  // 3. Modal Interativo com Dados Dinâmicos
  const modalData = {
    'modal-fundamentos': {
      title: 'Fundamentos & Controle de Bola',
      description: 'Metodologia focada no refinamento biomecânico de cada gesto técnico: qualidade no passe de curva e rasteiro, amortecimento orientado para tirar a bola da pressão do adversário e batida na bola para finalizações com precisão e força.'
    },
    'modal-fisico': {
      title: 'Preparação Física Específica',
      description: 'Sessões de treino funcional montadas estritamente com movimentos do futebol. Trabalhamos desaceleração para mudança de direção rápida, escada de agilidade, saltos e pliometria para ganho de arranque e prevenção de lesões articulares.'
    },
    'modal-tatico': {
      title: 'Leitura Tática & Cognição',
      description: 'Simulações de tomada de decisão com limitação de tempo e espaço. Enfatizamos a varredura visual (olhar antes de receber a bola), escolha rápida da melhor opção de passe e posicionamento do corpo antes de receber a bola.'
    },
    'modal-especifico': {
      title: 'Treinamento Específico por Posição',
      description: 'Treinos focados nas exigências reais da sua posição. Para atacantes: cabeceio, pivô e finalização de primeira. Para meio-campistas: giro rápido e passe filtrado. Para defensores: temporização, postura corporal e desarme limpo.'
    }
  };

  const modalOverlay = document.getElementById('modal-overlay');
  const modalBody = document.getElementById('modal-body');
  const modalClose = document.getElementById('modal-close');

  document.querySelectorAll('.card-metodo').forEach(card => {
    card.addEventListener('click', () => {
      const modalKey = card.getAttribute('data-modal');
      const data = modalData[modalKey];

      if (data) {
        modalBody.innerHTML = `
          <h3 style="color: var(--primary); font-size: 1.4rem; margin-bottom: 12px; font-weight: 800;">${data.title}</h3>
          <p style="color: var(--muted-text); font-size: 0.95rem; line-height: 1.6;">${data.description}</p>
        `;
        modalOverlay.classList.add('active');
        document.body.classList.add('menu-open');
      }
    });
  });

  function closeModal() {
    modalOverlay.classList.remove('active');
    document.body.classList.remove('menu-open');
  }

  if (modalClose) modalClose.addEventListener('click', closeModal);

  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) closeModal();
    });
  }

});
