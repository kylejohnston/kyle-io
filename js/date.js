const now = new Date();
const startOfYear = new Date(now.getFullYear(), 0, 0);
const diff = now - startOfYear;
const dayOfYear = Math.floor(diff / (1000 * 60 * 60 * 24));
document.getElementById("today").textContent = dayOfYear;