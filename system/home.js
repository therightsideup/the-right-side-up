const cover = document.querySelector('.editorial-cover');
const allowsPointerMotion = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (cover && allowsPointerMotion && !prefersReducedMotion) {
  let frame;

  const setPointerPosition = (event) => {
    cancelAnimationFrame(frame);
    frame = requestAnimationFrame(() => {
      const bounds = cover.getBoundingClientRect();
      const x = ((event.clientX - bounds.left) / bounds.width - .5) * 2;
      const y = ((event.clientY - bounds.top) / bounds.height - .5) * 2;
      cover.style.setProperty('--pointer-x', x.toFixed(3));
      cover.style.setProperty('--pointer-y', y.toFixed(3));
    });
  };

  const resetPointerPosition = () => {
    cover.style.setProperty('--pointer-x', '0');
    cover.style.setProperty('--pointer-y', '0');
  };

  cover.addEventListener('pointermove', setPointerPosition, { passive: true });
  cover.addEventListener('pointerleave', resetPointerPosition, { passive: true });
}
