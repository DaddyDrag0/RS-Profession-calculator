
// Rapid calculation with minimal overhead
document.getElementById('xp-form').addEventListener('submit', e => {
  e.preventDefault();
  const curL = +document.getElementById('currentLevel').value;
  const curX = +document.getElementById('currentXp').value;
  const tgtL = +document.getElementById('targetLevel').value;
  // Simple XP curve formula
  const xpNeeded = (tgtL - curL) * 1000 - curX;
  document.getElementById('results').innerHTML =
    `<p>You need <strong>${xpNeeded}</strong> XP.</p>`;
});
