(function () {
  const modal    = document.getElementById('videoModal');
  const wrapper  = document.getElementById('videoWrapper');
  const openBtn  = document.getElementById('openTrailer');
  const closeBtn = document.getElementById('closeTrailer');

  const VIDEO_ID = openBtn.dataset.videoId || 'dQw4w9WgXcQ';
  const YT_PARAMS = 'autoplay=1&rel=0&modestbranding=1&playsinline=1';

  function openModal() {
    if (!wrapper.querySelector('iframe')) {
      const iframe = document.createElement('iframe');
      iframe.src = `https://www.youtube-nocookie.com/embed/${VIDEO_ID}?${YT_PARAMS}`;
      iframe.title = 'Tráiler de Avengers: Doomsday';
      iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
      iframe.allowFullscreen = true;
      iframe.loading = 'lazy';
      wrapper.appendChild(iframe);
    }

    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    wrapper.innerHTML = '';
  }

  openBtn.addEventListener('click', openModal);
  closeBtn.addEventListener('click', closeModal);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('open')) {
      closeModal();
    }
  });
})();