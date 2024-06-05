function pigLatin(text) {
    // Encontrando palavras e pontuações separadamente
    const wordsAndPunctuation = text.match(/\b\w+\b|[.,!?;:]/g);
    
    return wordsAndPunctuation.map(token => {
      // Se o token for pontuação, simplesmente retorne-o
      if (/^[.,!?;:]$/.test(token)) {
        return token;
      }
  
      // Encontre o índice da primeira vogal na palavra
      const firstVowelIndex = token.search(/[aeiouAEIOU]/);
      
      // Construindo a versão Pig Latin da palavra
      if (firstVowelIndex > 0) {
        // Consoante no início
        return token.substring(firstVowelIndex) + token.substring(0, firstVowelIndex) + "ay";
      } else if (firstVowelIndex === 0) {
        // Vogal no início
        return token + "ay";
      } else {
        // Nenhuma vogal encontrada, retornar a palavra original
        return token;
      }
    }).join(" ");
  }
  
  const phrases = [
    "Stop",
    "No littering",
    "No shirts, no shoes, no service",
    "No persons under 14 admitted",
    "Hey buddy, get away from my car!",
  ];
  
  const translatedPhrases = phrases.map(pigLatin);
  translatedPhrases.forEach(result => console.log(result));
  