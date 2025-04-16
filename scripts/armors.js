const armorData = {
  "Espoir": {
    image: "",
    parts: {
      "Tête":     { defense: 2, feu: 1, eau: 0, foudre: 1, glace: 0, dragon: 0 },
      "Plastron": { defense: 2, feu: 1, eau: 0, foudre: 1, glace: 0, dragon: 0 },
      "Gants":    { defense: 2, feu: 1, eau: 0, foudre: 1, glace: 0, dragon: 0 },
      "Tassette": { defense: 2, feu: 1, eau: 0, foudre: 1, glace: 0, dragon: 0 },
      "Grèves":   { defense: 2, feu: 1, eau: 0, foudre: 1, glace: 0, dragon: 0 }
    }
  },
  "Cuir": {
    image: "",
    parts: {
      "Tête":     { defense: 2, feu: 2, eau: 0, foudre: 0, glace: 0, dragon: 0 },
      "Plastron": { defense: 2, feu: 2, eau: 0, foudre: 0, glace: 0, dragon: 0 },
      "Gants":    { defense: 2, feu: 2, eau: 0, foudre: 0, glace: 0, dragon: 0 },
      "Tassette": { defense: 2, feu: 2, eau: 0, foudre: 0, glace: 0, dragon: 0 },
      "Grèves":   { defense: 2, feu: 2, eau: 0, foudre: 0, glace: 0, dragon: 0 }
    }
  },
  "Mailles": {
    image: "",
    parts: {
      "Tête":     { defense: 2, feu: 0, eau: 2, foudre: 0, glace: 0, dragon: 0 },
      "Plastron": { defense: 2, feu: 0, eau: 2, foudre: 0, glace: 0, dragon: 0 },
      "Gants":    { defense: 2, feu: 0, eau: 2, foudre: 0, glace: 0, dragon: 0 },
      "Tassette": { defense: 2, feu: 0, eau: 2, foudre: 0, glace: 0, dragon: 0 },
      "Grèves":   { defense: 2, feu: 0, eau: 2, foudre: 0, glace: 0, dragon: 0 }
    }
  },
  "Os": {
    image: "",
    parts: {
      "Tête":     { defense: 4, feu: 2, eau: 0, foudre: 2, glace: 0, dragon: 2 },
      "Plastron": { defense: 4, feu: 2, eau: 0, foudre: 2, glace: 0, dragon: 2 },
      "Gants":    { defense: 4, feu: 2, eau: 0, foudre: 2, glace: 0, dragon: 2 },
      "Tassette": { defense: 4, feu: 2, eau: 0, foudre: 2, glace: 0, dragon: 2 },
      "Grèves":   { defense: 4, feu: 2, eau: 0, foudre: 2, glace: 0, dragon: 2 }
    }
  },
  "Bulaqchi": {
    image: "",
    parts: {
      "Tête":     { defense: 4, feu: -4, eau: 1, foudre: 1, glace: -2, dragon: 4 }
    }
  },
  "Talioth": {
    image: "",
    parts: {
      "Gants":    { defense: 4, feu: 4, eau: -2, foudre: -2, glace: -2, dragon: 2 }
    }
  },
  "Chatacabra": {
    image: "",
    parts: {
      "Tête":     { defense: 6, feu: 1, eau: 2, foudre: -3, glace: -1, dragon: 1 },
      "Plastron": { defense: 6, feu: 1, eau: 2, foudre: -3, glace: -1, dragon: 1 },
      "Gants":    { defense: 6, feu: 1, eau: 2, foudre: -3, glace: -1, dragon: 1 },
      "Tassette": { defense: 6, feu: 1, eau: 2, foudre: -3, glace: -1, dragon: 1 },
      "Grèves":   { defense: 6, feu: 1, eau: 2, foudre: -3, glace: -1, dragon: 1 }
    }
  },
  "Quematrice": {
    image: "",
    parts: {
      "Tête":     { defense: 6, feu: 2, eau: -3, foudre: 0, glace: -1, dragon: 0 },
      "Plastron": { defense: 6, feu: 2, eau: -3, foudre: 0, glace: -1, dragon: 0 },
      "Gants":    { defense: 6, feu: 2, eau: -3, foudre: 0, glace: -1, dragon: 0 },
      "Tassette": { defense: 6, feu: 2, eau: -3, foudre: 0, glace: -1, dragon: 0 },
      "Grèves":   { defense: 6, feu: 2, eau: -3, foudre: 0, glace: -1, dragon: 0 }
    }
  },
  "Alliage": {
    image: "",
    parts: {
      "Tête":     { defense: 6, feu: -2, eau: 1, foudre: -2, glace: -2, dragon: 1 },
      "Plastron": { defense: 6, feu: -2, eau: 1, foudre: -2, glace: -2, dragon: 1 },
      "Gants":    { defense: 6, feu: -2, eau: 1, foudre: -2, glace: -2, dragon: 1 },
      "Tassette": { defense: 6, feu: -2, eau: 1, foudre: -2, glace: -2, dragon: 1 },
      "Grèves":   { defense: 6, feu: -2, eau: 1, foudre: -2, glace: -2, dragon: 1 }
    }
  },
  "Piragill": {
    image: "",
    parts: {
      "Grèves":   { defense: 4, feu: -3, eau: 4, foudre: -3, glace: 1, dragon: 1 }
    }
  },
  "Lala Barina": {
    image: "",
    parts: {
      "Tête":     { defense: 8, feu: -3, eau: 3, foudre: 0, glace: 0, dragon: 3 },
      "Plastron": { defense: 8, feu: -3, eau: 3, foudre: 0, glace: 0, dragon: 3 },
      "Gants":    { defense: 8, feu: -3, eau: 3, foudre: 0, glace: 0, dragon: 3 },
      "Tassette": { defense: 8, feu: -3, eau: 3, foudre: 0, glace: 0, dragon: 3 },
      "Grèves":   { defense: 8, feu: -3, eau: 3, foudre: 0, glace: 0, dragon: 3 }
    }
  },
  "Conga": {
    image: "",
    parts: {
      "Tête":     { defense: 8, feu: -3, eau: 1, foudre: 1, glace: -1, dragon: 2 },
      "Plastron": { defense: 8, feu: -3, eau: 1, foudre: 1, glace: -1, dragon: 2 },
      "Gants":    { defense: 8, feu: -3, eau: 1, foudre: 1, glace: -1, dragon: 2 },
      "Tassette": { defense: 8, feu: -3, eau: 1, foudre: 1, glace: -1, dragon: 2 },
      "Grèves":   { defense: 8, feu: -3, eau: 1, foudre: 1, glace: -1, dragon: 2 }
    }
  },
  "Balahara": {
    image: "",
    parts: {
      "Tête":     { defense: 12, feu: -1, eau: 2, foudre: -3, glace: 1, dragon: 1 },
      "Plastron": { defense: 12, feu: -1, eau: 2, foudre: -3, glace: 1, dragon: 1 },
      "Gants":    { defense: 12, feu: -1, eau: 2, foudre: -3, glace: 1, dragon: 1 },
      "Tassette": { defense: 12, feu: -1, eau: 2, foudre: -3, glace: 1, dragon: 1 },
      "Grèves":   { defense: 12, feu: -1, eau: 2, foudre: -3, glace: 1, dragon: 1 }
    }
  },
  "Doshaguma": {
    image: "",
    parts: {
      "Tête":     { defense: 16, feu: -3, eau: 2, foudre: -1, glace: -1, dragon: 4 },
      "Plastron": { defense: 16, feu: -3, eau: 2, foudre: -1, glace: -1, dragon: 4 },
      "Gants":    { defense: 16, feu: -3, eau: 2, foudre: -1, glace: -1, dragon: 4 },
      "Tassette": { defense: 16, feu: -3, eau: 2, foudre: -1, glace: -1, dragon: 4 },
      "Grèves":   { defense: 16, feu: -3, eau: 2, foudre: -1, glace: -1, dragon: 4 }
    }
  },
  "Lingot": {
    image: "",
    parts: {
      "Tête":     { defense: 16, feu: -2, eau: 0, foudre: 3, glace: -1, dragon: 0 },
      "Plastron": { defense: 16, feu: -2, eau: 0, foudre: 3, glace: -1, dragon: 0 },
      "Gants":    { defense: 16, feu: -2, eau: 0, foudre: 3, glace: -1, dragon: 0 },
      "Tassette": { defense: 16, feu: -2, eau: 0, foudre: 3, glace: -1, dragon: 0 },
      "Grèves":   { defense: 16, feu: -2, eau: 0, foudre: 3, glace: -1, dragon: 0 }
    }
  },
  "Kranodath": {
    image: "",
    parts: {
      "Plastron": { defense: 16, feu: 4, eau: -2, foudre: 0, glace: -2, dragon: 0 }
    }
  },
  "Rompopolo": {
    image: "",
    parts: {
      "Tête":     { defense: 18, feu: 0, eau: -3, foudre: 0, glace: 0, dragon: 1 },
      "Plastron": { defense: 18, feu: 0, eau: -3, foudre: 0, glace: 0, dragon: 1 },
      "Gants":    { defense: 18, feu: 0, eau: -3, foudre: 0, glace: 0, dragon: 1 },
      "Tassette": { defense: 18, feu: 0, eau: -3, foudre: 0, glace: 0, dragon: 1 },
      "Grèves":   { defense: 18, feu: 0, eau: -3, foudre: 0, glace: 0, dragon: 1 }
    }
  },
  "Nerscylla": {
    image: "",
    parts: {
      "Tête":     { defense: 20, feu: -2, eau: 2, foudre: -2, glace: 1, dragon: 2 },
      "Plastron": { defense: 20, feu: -2, eau: 2, foudre: -2, glace: 1, dragon: 2 },
      "Gants":    { defense: 20, feu: -2, eau: 2, foudre: -2, glace: 1, dragon: 2 },
      "Tassette": { defense: 20, feu: -2, eau: 2, foudre: -2, glace: 1, dragon: 2 },
      "Grèves":   { defense: 20, feu: -2, eau: 2, foudre: -2, glace: 1, dragon: 2 }
    }
  },
  "Hirabami": {
    image: "",
    parts: {
      "Tête":     { defense: 22, feu: -3, eau: 2, foudre: -2, glace: 3, dragon: 0 },
      "Plastron": { defense: 22, feu: -3, eau: 2, foudre: -2, glace: 3, dragon: 0 },
      "Gants":    { defense: 22, feu: -3, eau: 2, foudre: -2, glace: 3, dragon: 0 },
      "Tassette": { defense: 22, feu: -3, eau: 2, foudre: -2, glace: 3, dragon: 0 },
      "Grèves":   { defense: 22, feu: -3, eau: 2, foudre: -2, glace: 3, dragon: 0 }
    }
  },
  "Ajarakan": {
    image: "",
    parts: {
      "Tête":     { defense: 26, feu: 0, eau: -2, foudre: 4, glace: -3, dragon: 0 },
      "Plastron": { defense: 26, feu: 0, eau: -2, foudre: 4, glace: -3, dragon: 0 },
      "Gants":    { defense: 26, feu: 0, eau: -2, foudre: 4, glace: -3, dragon: 0 },
      "Tassette": { defense: 26, feu: 0, eau: -2, foudre: 4, glace: -3, dragon: 0 },
      "Grèves":   { defense: 26, feu: 0, eau: -2, foudre: 4, glace: -3, dragon: 0 }
    }
  },
  "Uth Duna": {
    image: "",
    parts: {
      "Tête":     { defense: 26, feu: -1, eau: 4, foudre: -3, glace: 0, dragon: 0 },
      "Plastron": { defense: 26, feu: -1, eau: 4, foudre: -3, glace: 0, dragon: 0 },
      "Gants":    { defense: 26, feu: -1, eau: 4, foudre: -3, glace: 0, dragon: 0 },
      "Tassette": { defense: 26, feu: -1, eau: 4, foudre: -3, glace: 0, dragon: 0 },
      "Grèves":   { defense: 26, feu: -1, eau: 4, foudre: -3, glace: 0, dragon: 0 }
    }
  }
};