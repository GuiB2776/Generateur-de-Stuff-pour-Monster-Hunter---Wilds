// Amélioration de la recherche intelligente
function normalizeString(str) {
  return str.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function getMatchScore(input, target) {
  const a = normalizeString(input);
  const b = normalizeString(target);

  if (b.includes(a)) return 0; // priorité aux inclusions directes
  return levenshtein(a, b);
}

// Algorithme Levenshtein
function levenshtein(a, b) {
  const dp = Array.from({ length: a.length + 1 }, () => Array(b.length + 1).fill(0));
  for (let i = 0; i <= a.length; i++) dp[i][0] = i;
  for (let j = 0; j <= b.length; j++) dp[0][j] = j;
  for (let i = 1; i <= a.length; i++) {
    for (let j = 1; j <= b.length; j++) {
      dp[i][j] = a[i - 1] === b[j - 1]
        ? dp[i - 1][j - 1]
        : 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);
    }
  }
  return dp[a.length][b.length];
}

// Fonction de recherche
function searchSet() {
  const input = document.getElementById('searchInput').value.toLowerCase().trim();
  if (!input) return;

  const sets = Array.from(document.querySelectorAll('.set'));
  let bestMatch = null;
  let bestScore = Infinity;

  sets.forEach(set => {
    const name = set.querySelector('h3').textContent.toLowerCase();
    const score = getMatchScore(input, name);
    if (score < bestScore) {
      bestScore = score;
      bestMatch = set;
    }
  });

  if (bestMatch) {
    document.querySelectorAll('.set.open').forEach(el => el.classList.remove('open'));
    bestMatch.classList.add('open');
    bestMatch.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
}
