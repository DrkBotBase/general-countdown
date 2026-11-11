(function () {
  const TARGET_DATE = new Date('2026-12-18T00:00:00').getTime();
  const START_DATE  = new Date('2024-07-27T00:00:00').getTime();

  const elDays       = document.getElementById('days');
  const elHours      = document.getElementById('hours');
  const elMinutes    = document.getElementById('minutes');
  const elSeconds    = document.getElementById('seconds');
  const progressFill = document.getElementById('progressFill');
  const progressText = document.getElementById('progressText');

  const pad = (n) => String(n).padStart(2, '0');

  function updateCountdown() {
    const now = Date.now();
    const distance = TARGET_DATE - now;

    if (distance <= 0) {
      elDays.textContent = elHours.textContent =
      elMinutes.textContent = elSeconds.textContent = '00';
      progressFill.style.width = '100%';
      progressText.textContent = '¡El día ha llegado!';
      return;
    }

    const days    = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours   = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    elDays.textContent    = pad(days);
    elHours.textContent   = pad(hours);
    elMinutes.textContent = pad(minutes);
    elSeconds.textContent = pad(seconds);

    const total = TARGET_DATE - START_DATE;
    const transcurrido = now - START_DATE;
    let pct = (transcurrido / total) * 100;
    pct = Math.max(0, Math.min(100, pct));
    progressFill.style.width = pct.toFixed(1) + '%';
    progressText.textContent = 'Faltan ' + days + ' días para el estreno mundial';
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);
})();