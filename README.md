
# Frontend Mentor - Advice generator app solution 🚀
 
Este é o meu projeto para o desafio do Frontend Mentor - Advice Generator App Solution. O objetivo deste projeto é criar uma aplicação que exiba conselhos e dicas de forma aleatória ao clicar em um botão. Além disso, utilizei uma API de tradução para traduzir os conselhos da API de advices para o português, tornando-os acessíveis aos falantes da língua portuguesa.🌟
  

## Funcionalidades✨


-   Exibição aleatória de conselhos ao clicar no botão "Novo Conselho".🎲
-   Tradução dos conselhos para o português utilizando a API de tradução.🗣️
-   Responsivo em diferentes dispositivos.📱
  
## Tecnologias Utilizadas🛠️


  -   HTML
-   CSS
-   JavaScript
-   [API de Advices](https://www.example.com/api/advices) - API que fornece conselhos em inglês.
-   [API de Tradução](https://www.example.com/api/translation) - API que traduz os conselhos para o português.
## Contribuição 🤝

Contribuições são bem-vindas! Se você encontrou algum bug ou deseja adicionar melhorias ao projeto, sinta-se à vontade para abrir uma issue ou enviar um pull request. 

### Links:link:


- Link para o repositório : [Repositório do GitHub](https://github.com/Nhewvys/advice)

- Visite o site: [Advice](https://nhewvys.github.io/advice)

  
### Oque aprendi 📚

  

Durante a realização deste projeto, eu aprendi a realizar consultas a APIs externas utilizando a API nativa do JavaScript, o `fetch`, em conjunto com o uso de funções assíncronas (`async/await`).
  

alguns trechos abaixo:



```js

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
```

  
 ```js
 function pesquisar() {
  search.classList.add('mexer', 'wait-cursor');
  fetch(url)
    .then(response => response.json())
    .then(async data => {
```

## Author👤

  
- Frontend Mentor - [Nhewvys](https://www.frontendmentor.io/profile/Nhewvys)

- Instagram - [https._nescau](https://www.instagram.com/https._nescau):smile:

