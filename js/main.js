// Definindo a função toggleMenu globalmente para ser usada em qualquer página
function toggleMenu() {
  const navMenu = document.querySelector('nav ul');
  if (navMenu) {
    navMenu.classList.toggle('show');
  }
}

// Navegação suave ao clicar nos links do menu
document.addEventListener('DOMContentLoaded', function() {
  const navLinks = document.querySelectorAll('nav ul li a');
  navLinks.forEach(link => {
    link.addEventListener('click', function(event) {
      const targetHref = this.getAttribute('href');
      if (targetHref.startsWith('#')) {
        event.preventDefault();
        const targetId = targetHref.substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      } else if (targetHref.includes('index.html#')) {
        event.preventDefault();
        window.location.href = targetHref;
      }
    });
  });
});
