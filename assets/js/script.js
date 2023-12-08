//menu hamburguer//

//indico qual elemento quero selecionar pelo id
const btnMobile = document.getElementById('btn-mobile');

//funcão 
function toggleMenu(event) {
if(event.type === 'touchstart') event.preventDefault()
  const nav = document.getElementById('nav');
  nav.classList.toggle('active');
  const active = nav.classList.contains('active');
  event.currentTarget.setAtribute('aria-expanded', active);
  if(active) { event.currentTarget.setAtribute('aria-label', 'fechar menu');
} else{
    Event.CURRENTtARGET.setAtribute('aria-label', 'Fechar Menu');
}

}

//adiciono o evento de click dentro do btn-mobile (elemento selecionado pelo id anteriormente)
btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);



// SCROLL SUAVE
// 1 - Identificar o clique no menu
// 2 - Verificar o item que foi clicado e fazer referência com o alvo
// 3 - Verificar a distância entre o alvo e o topo
// 4 - Animar o scroll até o alvo

// 1 - Identificar o clique no menu
const menuItens = document.querySelectorAll('.menu-nav a[href^="#"]');
const cardsServicos = document.querySelectorAll('.cards-servicos a');



// 2 - Verificar o item que foi clicado e fazer referência com o alvo
menuItens.forEach(item => {
    item.addEventListener('click', scrollToIdOnClick);
});

cardsServicos.forEach(card => {
    card.addEventListener('click', scrollToIdOnClick);
});

// Adicione um evento de clique ao link "Serviços" no menu
servicosLink.addEventListener('click', scrollToIdOnClick);

// 3 - Verificar a distância entre o alvo e o topo
function scrollToIdOnClick(event) {
    event.preventDefault();
    const element = event.currentTarget;
    const id = element.getAttribute('href');
    const targetElement = document.querySelector(id);
    
    // Verifica se o elemento alvo existe
    if (targetElement) {
        const to = targetElement.offsetTop;

        // 4 - Animar o scroll até o alvo
        window.scroll({
            top: to ,
            behavior: "smooth"
        });
    }
}

