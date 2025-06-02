const h1 = document.querySelector("article h1");
const h2 = document.querySelector("article h2");
const h3 = document.querySelector("article h3");
const p = document.querySelector("article p");
const brazilianFlag = document.querySelector("#brasil-flag")
const englandFlag = document.querySelector("#england-flag")
const btnTheme = document.querySelector("#btn-theme")
const root = document.querySelector(":root")
let modo = "";

const h1PortugueseTitle = "QUAIS SÃO AS CIDADES MAIS INTELIGENTES DO BRASIL?";
const h1EnglishTitle = "WHAT ARE THE SMARTEST CITIES IN BRAZIL?";
const h2PortugueseTitle =
  "Paula Faria, CEO da Necta e idealizadora do Connected Smart Cities, foi entrevistada pela Revista Prefeitos & Gestões e comentou acerca da Plataforma CSCM e dos desafios encontrados nas cidades";
const h2EnglishTitle =
  "Paula Faria, CEO of Necta and creator of Connected Smart Cities, was interviewed by Revista Prefeitos & Gestões and commented on the CSCM Platform and the challenges encountered in cities";

const h3PortugueseTitle = "Assim, em 2021, o Ranking CSC ficou desta maneira:";
const h3EnglishTitle = "So, in 2021, the CSC Ranking looked like this:";

const portugueseText =
  "Em meio ao contexto de evolução da “inteligência” dos municípios, surgiu o Connected Smart Cities, uma plataforma multidimensional que acelera o processo de desenvolvimento das cidades inteligentes. O objetivo da plataforma é reunir os atores do ecossistema, com o propósito de proporcionar espaços para integração e estimular a inovação. Assim, através de cinco canais de conexão – portal, eventos, ranking, prêmio e cursos – o Connected Smart Cities aproxima empresas, entidades, academia e governo para a troca de experiência. Por meio desta plataforma, foi criado o Ranking Connected Smart Cities, que considera o “Conceito de Conectividade” como a relação existente entre os diversos setores analisados. O critério foi estabelecido por haver diversos conceitos de Cidades Inteligentes, desde os que estão mais apoiados em tecnologia, até aqueles que estão mais relacionados ao meio ambiente e a sustentabilidade. É o que explica a CEO da Necta e idealizadora do Connected Smart Cities, Paula Faria. “O Ranking Connected Smart Cities é composto por 75 indicadores em 11 eixos temáticos: mobilidade, urbanismo, meio ambiente, tecnologia e inovação, empreendedorismo, educação, saúde, segurança, energia, governança e economia”, detalha.";
const englishText =
  "In the context of the evolution of the “intelligence” of municipalities, Connected Smart Cities emerged, a multidimensional platform that accelerates the process of developing smart cities. The objective of the platform is to bring together the actors of the ecosystem, with the purpose of providing spaces for integration and stimulating innovation. Thus, through five connection channels – portal, events, ranking, award and courses – Connected Smart Cities brings together companies, entities, academia and government to exchange experiences. Through this platform, the Connected Smart Cities Ranking was created, which considers the “Concept of Connectivity” as the existing relationship between the various sectors analyzed. The criterion was established because there are several concepts of Smart Cities, from those that are more supported by technology, to those that are more related to the environment and sustainability. This is what the CEO of Necta and creator of Connected Smart Cities, Paula Faria, explains. “The Connected Smart Cities Ranking is composed of 75 indicators in 11 thematic axes: mobility, urbanism, environment, technology and innovation, entrepreneurship, education, health, security, energy, governance and economy”, he details.";

h1.textContent = localStorage.getItem("h1")
h2.textContent = localStorage.getItem("h2")
p.textContent = localStorage.getItem("p")
h3.textContent = localStorage.getItem("h3")
btnTheme.src = localStorage.getItem("theme")
modo = localStorage.getItem("modo")

const headerFooter = localStorage.getItem('bg-color-header-footer');
const bodyText = localStorage.getItem("--body-text-color")
const bodyColor = localStorage.getItem("--body-bg-color")
if (headerFooter) {
  root.style.setProperty('--bg-color-header-footer', headerFooter);
  root.style.setProperty('--body-text-color', bodyText);
  root.style.setProperty('--body-bg-color', bodyColor);
}

brazilianFlag.addEventListener("click", function () {
  localStorage.setItem("h1", h1.textContent = h1PortugueseTitle)
  localStorage.setItem("h2", h2.textContent = h2PortugueseTitle)
  localStorage.setItem("p", p.textContent = portugueseText)
  localStorage.setItem("h3",
    h3.textContent = h3PortugueseTitle)
})

englandFlag.addEventListener("click", function () {
  localStorage.setItem("h1", h1.textContent = h1EnglishTitle)
  localStorage.setItem("h2", h2.textContent = h2EnglishTitle)
  localStorage.setItem("p", p.textContent = englishText)
  localStorage.setItem("h3",
    h3.textContent = h3EnglishTitle)
})

btnTheme.addEventListener("click", function () {
  if (modo === "light") {
    localStorage.setItem("theme", btnTheme.src = "assets/moon.svg")
    localStorage.setItem("modo", modo = "dark")
    root.style.setProperty('--bg-color-header-footer', 'grey')
    root.style.setProperty('--body-text-color', 'white')
    root.style.setProperty('--body-bg-color', 'black')
    localStorage.setItem('bg-color-header-footer', root.style.getPropertyValue('--bg-color-header-footer'));
    localStorage.setItem('--body-text-color', root.style.getPropertyValue('--body-text-color'));
    localStorage.setItem('--body-bg-color', root.style.getPropertyValue('--body-bg-color'));
    return

  } else {
    localStorage.setItem("theme", btnTheme.src = "assets/sun.svg")
    localStorage.setItem("modo", modo = "light")
    root.style.setProperty('--bg-color-header-footer', 'purple')
    root.style.setProperty('--body-text-color', 'black')
    root.style.setProperty('--body-bg-color', 'white')
    localStorage.setItem('bg-color-header-footer', root.style.getPropertyValue('--bg-color-header-footer'));
    localStorage.setItem('--body-text-color', root.style.getPropertyValue('--body-text-color'));
    localStorage.setItem('--body-bg-color', root.style.getPropertyValue('--body-bg-color'));
    return
  }
})


