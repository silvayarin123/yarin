const button = document.querySelector('#brand-motion');
const windowElement = document.querySelector('#brand-window');
const motion = window.matchMedia('(prefers-reduced-motion: reduce)');

function syncMotionPreference() {
  button.hidden = motion.matches;
}

button.addEventListener('click', () => {
  const paused = windowElement.classList.toggle('is-paused');
  button.textContent = paused ? 'Retomar logos' : 'Pausar logos';
});

motion.addEventListener('change', syncMotionPreference);
syncMotionPreference();
