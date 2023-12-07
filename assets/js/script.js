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



//SCROLL SUAVE//
// 1 - Identificar o clique no menu
// 2 - Verificar o item que foi clicado e fazer referência com o alvo
// 3 - Verificar a distãncia entre o alvo e o topo
// 4 - Animar o scroll até o alvo



// 1 - Identificar o clique no menu
const menuItens = document.querySelectorAll ('.menu-nav a[href^="#"]');


//2 - Verificar o item que foi clicado e fazer referência com o alvo

menuItens.forEach(item =>  {
    item.addEventListener('click', scrollToIdOnClick);
})

// 3 - Verificar a distãncia entre o alvo e o topo

function scrollToIdOnClick(event) {
    event.preventDefault();
    const element = event.target;
    const id = element.getAttribute('href');
    const to = document.querySelector(id).offsetTop;
    
// 4 - Animar o scroll até o alvo

    window.scroll({
        top: to -40,
        behavior:"smooth"

    });
}

