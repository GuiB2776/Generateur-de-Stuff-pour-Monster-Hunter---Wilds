
// Simulation de dégâts
function simulateDamage(element, baseDmg = 100) {
  const resist = Object.values(selectedGear).reduce((sum, data) => sum + (data.stats[element] || 0), 0);
  const defense = Object.values(selectedGear).reduce((sum, data) => sum + data.stats.defense, 0);
  const dmgFactor = 1 + (resist < 0 ? Math.abs(resist) * 0.05 : 0);
  const reduced = baseDmg * dmgFactor - defense * 0.2;
  const result = Math.max(reduced, 1);
  document.getElementById("damage-result").textContent = `Dégâts subis estimés : ${result.toFixed(1)} pts`;
}
