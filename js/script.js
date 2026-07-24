// Live clock in the status bar, styled like a monitoring console timestamp
function updateClock() {
  const clockEl = document.getElementById('clock');
  if (!clockEl) return;
  const now = new Date();
  const hh = String(now.getHours()).padStart(2, '0');
  const mm = String(now.getMinutes()).padStart(2, '0');
  const ss = String(now.getSeconds()).padStart(2, '0');
  clockEl.textContent = `${hh}:${mm}:${ss}`;
}
updateClock();
setInterval(updateClock, 1000);

// Auto-fill current year in the footer
const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}
