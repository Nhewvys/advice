const search = document.getElementById('search');
const url = 'https://api.adviceslip.com/advice';
const urlTranslate = 'https://api.mymemory.translated.net/get';

async function translateText(text, sourceLang, targetLang) {
  const encodedText = encodeURIComponent(text);
  const apiUrl = `${urlTranslate}?q=${encodedText}&langpair=${sourceLang}|${targetLang}`;
  const response = await fetch(apiUrl);
  const data = await response.json();
  if (data && data.responseData && data.responseData.translatedText) {
    return data.responseData.translatedText;
  } else {
    throw new Error('Erro na tradução');
  }
}

function pesquisar() {
  search.classList.add('mexer', 'wait-cursor');
  fetch(url)
    .then(response => response.json())
    .then(async data => {
      const textToTranslate = data.slip.advice;
      const sourceLanguage = 'en'; // Defina o idioma original do texto (inglês)
      const targetLanguage = 'pt-br'; // Defina o idioma de destino (português)

      try {
        const translatedText = await translateText(textToTranslate, sourceLanguage, targetLanguage);
        console.log(`Texto original: ${textToTranslate}`);
        console.log(`Texto traduzido: ${translatedText}`);
        search.classList.remove('mexer', 'wait-cursor');
        adviceId.innerHTML = data.slip.id;
        res.innerHTML = `"${translatedText}"`; // Usar o texto traduzido
      } catch (error) {
        console.error("Erro na tradução:", error);
        search.classList.remove('mexer', 'wait-cursor');
      }
    })
    .catch(error => {
      console.error("Erro ao obter a frase:", error);
    });
}

search.addEventListener('click', pesquisar);
