/* SEARCH BAR */

// Fonction de recherche
function searchSet() {
    const input = document.getElementById('searchInput').value.toLowerCase().trim();
    if (!input) return;
  
    // Trouver les sets dans le DOM
    const sets = Array.from(document.querySelectorAll('.set'));
    let bestMatch = null;
    let bestScore = Infinity;
  
    sets.forEach(set => {
      const name = set.querySelector('h3 span').textContent.toLowerCase();
      const distance = levenshtein(input, name);
      if (distance < bestScore) {
        bestScore = distance;
        bestMatch = set;
      }
    });
  
    if (bestMatch) {
      // Scroll + Highlight
      bestMatch.scrollIntoView({ behavior: 'smooth', block: 'center' });
      bestMatch.classList.add('highlight');
      setTimeout(() => bestMatch.classList.remove('highlight'), 2000);
    }
}
  
// Fonction de distance de Levenshtein (algorithme d’approximation)
function levenshtein(a, b) {
    const dp = Array.from({ length: a.length + 1 }, () => Array(b.length + 1).fill(0));
  
    for (let i = 0; i <= a.length; i++) dp[i][0] = i;
    for (let j = 0; j <= b.length; j++) dp[0][j] = j;
  
    for (let i = 1; i <= a.length; i++) {
      for (let j = 1; j <= b.length; j++) {
        if (a[i - 1] === b[j - 1]) {
          dp[i][j] = dp[i - 1][j - 1];
        } else {
          dp[i][j] = Math.min(
            dp[i - 1][j] + 1,
            dp[i][j - 1] + 1,
            dp[i - 1][j - 1] + 1
          );
        }
      }
    }
    return dp[a.length][b.length];
}