(function () {
  const hamburger = document.getElementById('hamburger');
  const dropdown  = document.getElementById('dropdown');
  const overlay   = document.getElementById('overlay');
  const navbar    = document.getElementById('navbar');

  function toggleMenu(force) {
    const open = typeof force === 'boolean'
      ? force
      : !dropdown.classList.contains('open');

    dropdown.classList.toggle('open', open);
    hamburger.classList.toggle('active', open);
    overlay.classList.toggle('open', open);
    hamburger.setAttribute('aria-expanded', open);
    document.body.style.overflow = open ? 'hidden' : '';
  }

  hamburger.addEventListener('click', () => toggleMenu());
  overlay.addEventListener('click', () => toggleMenu(false));

  dropdown.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => toggleMenu(false));
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') toggleMenu(false);
  });

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 20);
  }, { passive: true });
})();