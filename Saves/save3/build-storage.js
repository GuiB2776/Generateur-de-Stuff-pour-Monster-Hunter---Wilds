
// Export / Import de build
function saveBuild() {
  const data = JSON.stringify(selectedGear);
  const blob = new Blob([data], { type: 'application/json' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'build-monster-hunter.json';
  a.click();
}

function loadBuildFromFile(file) {
  const reader = new FileReader();
  reader.onload = function (e) {
    try {
      const loaded = JSON.parse(e.target.result);
      Object.assign(selectedGear, loaded);
      updateSelected();
    } catch (err) {
      alert("Fichier invalide.");
    }
  };
  reader.readAsText(file);
}
