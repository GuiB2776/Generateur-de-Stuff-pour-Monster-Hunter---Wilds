
// Affichage des composants nécessaires
function displayComponents() {
  const compoZone = document.getElementById("components-display");
  compoZone.innerHTML = "";
  const compoMap = {};

  Object.entries(selectedGear).forEach(([part, data]) => {
    const item = armorData[data.set].parts[part];
    if (item.components) {
      Object.entries(item.components).forEach(([name, qty]) => {
        compoMap[name] = (compoMap[name] || 0) + qty;
      });
    }
  });

  if (Object.keys(compoMap).length === 0) {
    compoZone.innerHTML = "<p>Aucun composant disponible pour ces pièces.</p>";
    return;
  }

  const ul = document.createElement("ul");
  for (const [name, qty] of Object.entries(compoMap)) {
    const li = document.createElement("li");
    li.textContent = `${name} × ${qty}`;
    ul.appendChild(li);
  }
  compoZone.appendChild(ul);
}
