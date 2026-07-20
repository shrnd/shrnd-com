const hero = document.querySelector<HTMLElement>('[data-hero]');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

if (hero && !reducedMotion.matches) {
  let frame = 0;

  const updatePosition = (event: PointerEvent) => {
    if (event.pointerType === 'touch') return;

    cancelAnimationFrame(frame);
    frame = requestAnimationFrame(() => {
      const bounds = hero.getBoundingClientRect();
      const x = (event.clientX - bounds.left) / bounds.width - 0.5;
      const y = (event.clientY - bounds.top) / bounds.height - 0.5;

      hero.style.setProperty('--field-x', `${(x * 12).toFixed(2)}px`);
      hero.style.setProperty('--field-y', `${(y * 12).toFixed(2)}px`);
    });
  };

  hero.addEventListener('pointermove', updatePosition, { passive: true });
  hero.addEventListener('pointerleave', () => {
    hero.style.setProperty('--field-x', '0px');
    hero.style.setProperty('--field-y', '0px');
  });
}
