// Makes each cheat-sheet row clickable (and keyboard-accessible),
// opening its GitHub source in a new tab.
document.querySelectorAll('.sheet-item').forEach((item) => {
  const url = item.getAttribute('data-url');
  if (!url) return;

  item.setAttribute('tabindex', '0');
  item.setAttribute('role', 'link');

  const open = () => window.open(url, '_blank', 'noopener');

  item.addEventListener('click', open);
  item.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      open();
    }
  });
});
