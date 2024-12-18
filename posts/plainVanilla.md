---
title: "Eenvoud in Webontwikkeling: Bouw Snelle en Onderhoudbare Websites met de Plain Vanilla Web-Methode"
synopsis: "Ontdek de kracht van de Plain Vanilla Web-methode: een eenvoudige en efficiënte aanpak voor het bouwen van snelle, onderhoudbare en toegankelijke websites met standaard webtechnologieën zoals HTML, CSS, JavaScript en Web Components."
date: 2024-12-18
author:
  name: "Kevin Dworschak"
  avatarUrl: "/assets/avatars/kevin-dworschak.jpeg"
  socials:
    website: "https://portfolio-kevin-dworschak.onrender.com/"
    linkedin: "https://www.linkedin.com/in/kevindworschak/"
    github: "https://github.com/kefmaister"
thumbnailUrl: "/assets/posts/plainvanillaweb.png"
head:
  - - meta
    - name: description
      content: "Leer hoe de Plain Vanilla Web-methode een minimalistische en krachtige oplossing biedt voor webontwikkeling. Deze aanpak maakt gebruik van standaard webtechnologieën zoals HTML, CSS en JavaScript, gecombineerd met Web Components, om snelle, onderhoudbare en toekomstbestendige websites te bouwen."
  - - meta
    - name: keywords
      content: "Plain Vanilla Web, Web Components, HTML, CSS, JavaScript, front-end development, web development, performance, accessibility, modularity, custom elements, Shadow DOM, HTML templates, responsive design, minimalistic web development, scalable websites"
sources:
  - title: "State of JS 2024"
    url: "https://stateofjs.com/"
  - title: "Vanilla JavaScript vs React: Choosing the Right Tool for Web Development"
    url: "https://www.asynclabs.co/blog/software-development/vanilla-javascript-vs-react-choosing-the-right-tool-for-web-development/"
  - title: "Most used web frameworks among developers 2024 | Statista"
    url: "https://www.statista.com/statistics/1124699/worldwide-developer-survey-most-used-frameworks-web/"
  - title: "How fast are web components? - plainvanillaweb.com"
    url: "https://plainvanillaweb.com/blog/articles/2024-09-06-how-fast-are-web-components/"
  - title: "Why are Web Components not popular? Compared to front-end frameworks"
    url: "https://uploadcare.com/blog/web-components-adoption-challenges/"
  - title: "Vanilla JS Vs React JS: What To Choose For Your Development?"
    url: "https://taglineinfotech.com/react-js-vs-vanilla-js/"
  - title: "Web Components adoption guide: Overview, examples, and alternatives"
    url: "https://blog.logrocket.com/web-components-adoption-guide/"
  - title: "Web Components Usage Statistics - BuiltWith"
    url: "https://trends.builtwith.com/javascript/Web-Components"
  - title: "Vanilla JS vs React.JS: Find the Best JavaScript Technology"
    url: "https://flatlogic.com/blog/vanilla-js-vs-react-js-featured-based-comparison-to-find-the-best-javascript-technology/"
  - title: "The Future-Proof Choice: Web Components First Over JavaScript Frameworks"
    url: "https://southleft.com/insights/development/web-components-first-over-javascript-frameworks/"
  - title: "Vanilla JavaScript vs React: Choosing the Best Approach"
    url: "https://www.dhiwise.com/post/vanilla-javascript-vs-react-whats-right-for-developers"
  - title: "Netlify Report Reveals Increased Adoption of Composable Web Architecture"
    url: "https://www.netlify.com/press/netlify-report-reveals-increased-adoption-of-composable-web-architecture/"
  - title: "React v/s Vanilla JS - When to use what? - DEV Community"
    url: "https://dev.to/afrazchelsea/react-vs-vanilla-js-what-why-and-when-1jin"
  - title: "What happened to web components? - LogRocket Blog"
    url: "https://blog.logrocket.com/what-happened-to-web-components/"
  - title: "React vs. Vanilla JavaScript: A Comparative Analysis"
    url: "https://dev.to/kaludavid/react-vs-vanilla-javascript-a-comparative-analysis-5c2g"
  - title: "This.JavaScript: State of Frameworks- Polymer/Web Components Update"
    url: "https://medium.com/%40thisdotmedia/this-javascript-state-of-frameworks-polymer-web-components-update-1c094fc5e1ed"
  - title: "React vs Vanilla Javascript - Hackemist"
    url: "https://www.hackemist.com/react-vs-vanilla-javascript/"
  - title: "Top Web Development Stats You Can’t Ignore - PixelCrayons"
    url: "https://www.pixelcrayons.com/blog/software-development/web-development-stats/"
  - title: "GitHub - ffauchille/react-vs-vanilla: Demo to compare ReactJS performance over plain JS (or Vanilla JS)"
    url: "https://github.com/ffauchille/react-vs-vanilla"
  - title: "Plain Vanilla"
    url: "https://plainvanillaweb.com/"
  - title: "The Impact of Web Components on SEO and User Experiences"
    url: "https://cybertekmarketing.com/digital-marketing/the-impact-of-web-components-on-seo-and-user-experiences/"
  - title: "React Vs Vanilla Js | The Ultimate Comparison - webdotneo.com"
    url: "https://webdotneo.com/react-vs-vanilla-js/"
---

**Inleiding**

In de moderne webontwikkeling streven ontwikkelaars naar efficiënte, onderhoudbare en toegankelijke websites. Een benadering die steeds meer aandacht krijgt, is het bouwen van webprojecten zonder afhankelijkheid van complexe buildtools of frameworks, ook wel bekend als de "Plain Vanilla Web"-methode. Deze aanpak benadrukt het gebruik van standaard webtechnologieën zoals HTML, CSS en JavaScript, en maakt gebruik van Web Components om herbruikbare en modulaire elementen te creëren.

Een belangrijke reden voor deze verschuiving is de behoefte aan eenvoud en betere prestaties. Frameworks zoals React en Angular bieden veel functionaliteit, maar brengen ook complexiteit en afhankelijkheden met zich mee. Met de Plain Vanilla Web-methode kunnen ontwikkelaars zich richten op de kern van hun projecten zonder extra ballast. Bovendien zorgt deze aanpak ervoor dat de resulterende websites sneller laden, minder onderhoud vergen en beter te begrijpen zijn voor teams van verschillende niveaus.

In dit artikel duiken we dieper in op het bouwen van een website met deze methode, inclusief praktische voorbeelden, statistieken en overwegingen voor ontwikkelaars.

---

**Statistieken en Trends**

Het gebruik van Web Components en de Plain Vanilla Web-methode is de afgelopen jaren aanzienlijk toegenomen. Hier zijn enkele relevante statistieken:

1. **Groei in adoptie van Web Components**:

   - Volgens de gegevens van de State of JS-enquêtes is de bekendheid en het gebruik van Web Components de afgelopen jaren gestegen. In de State of JS 2021-enquête werd Lit, een populaire library voor het bouwen van Web Components, genoemd onder de front-end frameworks, wat duidt op een groeiende interesse in Web Components.

   - Bedrijven zoals Salesforce en YouTube maken gebruik van Web Components voor schaalbare en modulaire oplossingen, wat de praktische toepasbaarheid en betrouwbaarheid van deze technologie benadrukt.

2. **Prestaties**:

   - Hoewel specifieke statistieken variëren per project, tonen benchmarks aan dat applicaties gebouwd met lichte frameworks of zonder frameworks (d.w.z. met de Plain Vanilla Web-methode) vaak betere prestaties leveren in termen van laadtijden en geheugenverbruik. Een analyse van JavaScript-frameworks laat zien dat lichtere oplossingen zoals Lit efficiënter kunnen zijn in vergelijking met zwaardere frameworks.

3. **Toepassingen**:

   - Web Components worden steeds vaker toegepast in microfrontend-architecturen, waarbij verschillende teams afzonderlijke delen van een website ontwikkelen. Dit bevordert onafhankelijkheid en herbruikbaarheid van code, wat leidt tot efficiëntere ontwikkelingsprocessen.

4. **Browsercompatibiliteit**:

   - Moderne browsers zoals Chrome, Firefox en Edge bieden volledige ondersteuning voor Web Components. Safari ondersteunt de meeste functionaliteiten, hoewel in sommige gevallen polyfills nodig kunnen zijn voor volledige compatibiliteit. Deze brede ondersteuning maakt Web Components een betrouwbare keuze voor cross-browser ontwikkeling.

De toename in adoptie en de voordelen op het gebied van prestaties en modulariteit maken Web Components en de Plain Vanilla Web-methode aantrekkelijke opties voor moderne webontwikkeling.

_Afbeelding_: Grafiek met de groei van Web Components in populaire projecten.

---

**Wat zijn Web Components?**

Web Components zijn een set van web-API's die het mogelijk maken om herbruikbare, geïsoleerde en op zichzelf staande HTML-elementen te maken. Ze bestaan uit drie hoofdtechnologieën:

1. **Custom Elements**: Hiermee kunnen ontwikkelaars hun eigen HTML-tags definiëren.
2. **Shadow DOM**: Biedt encapsulatie van de structuur, stijl en gedrag van een element, waardoor het geïsoleerd blijft van de rest van het document.
3. **HTML Templates**: Maakt het mogelijk om herbruikbare stukjes HTML te definiëren die pas worden gerenderd wanneer ze expliciet worden gebruikt.

Door deze technologieën te combineren, kunnen ontwikkelaars componenten maken die eenvoudig te integreren zijn in verschillende projecten zonder dat er externe afhankelijkheden nodig zijn.

**Toevoeging:** Een vergelijking met traditionele frameworks zoals React of Angular benadrukt dat Web Components geen runtime nodig hebben en direct in elke browser werken die moderne standaarden ondersteunt.

_Afbeelding_: Diagram van Web Components (Custom Elements, Shadow DOM en Templates).

---

**Voordelen van de Plain Vanilla Web-methode**

Het toepassen van de Plain Vanilla Web-methode biedt diverse voordelen die bijdragen aan efficiëntere en onderhoudbare webontwikkeling:

- **Verminderde Complexiteit**: Door af te zien van complexe buildtools en frameworks blijft de projectstructuur eenvoudig en overzichtelijk. Dit maakt het gemakkelijker voor ontwikkelaars om de code te begrijpen en aanpassingen door te voeren zonder afhankelijk te zijn van externe hulpmiddelen.

- **Betere Prestaties**: Het ontbreken van zware afhankelijkheden resulteert vaak in snellere laadtijden en een lager geheugenverbruik. Websites gebouwd met de Plain Vanilla Web-methode kunnen efficiënter functioneren, wat leidt tot een verbeterde gebruikerservaring.

- **Toegankelijkheid**: Door gebruik te maken van standaard webtechnologieën zoals HTML, CSS en JavaScript, wordt de website toegankelijker voor een breder publiek. Dit bevordert compatibiliteit met verschillende apparaten en zorgt voor een consistentere ervaring voor alle gebruikers.

- **Onderhoudbaarheid**: Eenvoudige codebases zonder complexe afhankelijkheden zijn gemakkelijker te onderhouden. Nieuwe ontwikkelaars kunnen sneller ingewerkt worden, en het risico op conflicten of verouderde libraries wordt geminimaliseerd.

- **Flexibiliteit en Controle**: Zonder de beperkingen van een framework hebben ontwikkelaars volledige controle over de code en kunnen ze maatwerkoplossingen implementeren die precies aansluiten bij de behoeften van het project.

- **Leren en Vaardigheden**: Werken met de Plain Vanilla Web-methode dwingt ontwikkelaars om de kernprincipes van webontwikkeling te beheersen, wat leidt tot een dieper begrip en verbeterde probleemoplossende vaardigheden.

**Statistieken:**

Uit een vergelijking tussen de Plain Vanilla Web-methode en frameworks zoals React blijkt dat Plain Vanilla Web gemiddeld 30% minder geheugen verbruikt bij het laden van eenvoudige applicaties. Daarnaast laden dergelijke websites tot 20% sneller, wat bijdraagt aan een verbeterde gebruikerservaring en hogere tevredenheid.

Door te kiezen voor de Plain Vanilla Web-methode kunnen ontwikkelaars profiteren van deze voordelen, wat resulteert in efficiëntere, snellere en beter onderhoudbare webprojecten.

_Afbeelding_: Tabel met voordelen Plain Vanilla Web vs. frameworks.

---

**Best Practices voor de Plain Vanilla Web-methode**

Om het maximale uit de Plain Vanilla Web-methode te halen en hoogwaardige, onderhoudbare webapplicaties te ontwikkelen, is het essentieel om de volgende best practices in acht te nemen:

- **Modulariteit**: Ontwerp elk Web Component met een duidelijke, afgebakende verantwoordelijkheid. Dit bevordert herbruikbaarheid en maakt het eenvoudiger om componenten onafhankelijk te testen en te onderhouden. Een modulaire aanpak draagt bij aan een flexibele en schaalbare codebase.

- **Documentatie**: Houd gedetailleerde documentatie bij over de functionaliteit, het gebruik en de interacties van elk component. Goede documentatie versnelt het inwerkproces van nieuwe teamleden en fungeert als naslagwerk bij toekomstige updates of foutopsporing.

- **Browsercompatibiliteit**: Test je Web Components regelmatig in diverse moderne browsers om consistente functionaliteit en weergave te garanderen. Let op eventuele afwijkingen en pas je code aan om een uniforme gebruikerservaring te bieden, ongeacht het gebruikte platform.

- **Toegankelijkheid**: Integreer ARIA-attributen en volg toegankelijkheidsrichtlijnen om je componenten bruikbaar te maken voor mensen met beperkingen. Dit vergroot de inclusiviteit van je applicatie en zorgt voor naleving van webstandaarden.

- **Gebruik van Native APIs**: Maak optimaal gebruik van de ingebouwde mogelijkheden van de browser en vermijd onnodige polyfills of externe libraries. Dit resulteert in efficiëntere, snellere en beter onderhoudbare code.

- **Eenvoud en Leesbaarheid**: Schrijf duidelijke en beknopte code door complexe constructies te vermijden. Eenvoudige code is gemakkelijker te begrijpen, te debuggen en te onderhouden, wat bijdraagt aan de algehele kwaliteit van het project.

- **Versiebeheer en Samenwerking**: Maak gebruik van versiebeheersystemen zoals Git om samenwerking te faciliteren en een historisch overzicht van codewijzigingen te behouden. Dit ondersteunt efficiënte teamwerking en maakt het mogelijk om eerdere versies van de code te herstellen indien nodig.

Door deze best practices te implementeren, leg je een solide basis voor succesvolle projecten met de Plain Vanilla Web-methode, wat resulteert in efficiënte, toegankelijke en duurzame webapplicaties.

_Afbeelding_: Screenshot van een Web Component met ARIA-attributen in browsertools.

---

**Stappenplan voor het bouwen van een website met de Plain Vanilla Web-methode**

1. **Projectstructuur Opzetten**

Begin met het creëren van een duidelijke en logische mapstructuur. Een mogelijke indeling kan zijn:

- `/public`: Bevat statische bestanden zoals afbeeldingen en fonts.
- `/components`: Bevat JavaScript-bestanden voor custom elements.
- `/styles`: Bevat CSS-bestanden voor styling.
- `/pages`: Bevat HTML-bestanden voor de verschillende pagina's.

Deze structuur helpt bij het organiseren van de code en maakt het project schaalbaar.

_Afbeelding_: Voorbeeld van een projectstructuur met een directoryboom.

2. **Web Components Ontwikkelen**

In de map `/components` kunnen we beginnen met het definiëren van custom elements. Hier is een eenvoudig voorbeeld van een custom element genaamd `<my-button>`:

```javascript
// Bestand: /components/MyButton.js
class MyButton extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    const button = document.createElement("button");
    button.textContent = this.getAttribute("label") || "Klik hier";
    shadow.appendChild(button);
  }
}

customElements.define("my-button", MyButton);
```

**Uitleg:** Dit script definieert een knop die een tekstlabel accepteert via een HTML-attribuut genaamd `label`. Door gebruik te maken van Shadow DOM blijven de stijlen en de structuur van de knop geïsoleerd van de rest van de pagina.

_Afbeelding_: Screenshot van een werkend Web Component in de browser met developer tools.

3. **Styling Toepassen**

In de map `/styles` kunnen we een CSS-bestand aanmaken voor algemene stijlen. Bijvoorbeeld:

```css
/* Bestand: /styles/main.css */
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f4f4f4;
}

h1 {
  color: #333;
}
```

**Uitleg:** Deze stijlen zorgen voor een schone, consistente basislayout voor je project. De stijlen worden toegepast op de hele website, terwijl component-specifieke stijlen afzonderlijk worden gedefinieerd.

Voor component-specifieke stijlen kunnen we deze direct in het component definiëren:

```javascript
// Vervolg van MyButton.js
const style = document.createElement("style");
style.textContent = `
  button {
    background-color: #008cba;
    color: white;
    border: none;
    padding: 10px 20px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    border-radius: 4px;
  }
`;
shadow.appendChild(style);
```

**Uitleg:** De stijlen binnen het component zorgen ervoor dat de knop een unieke opmaak heeft die niet wordt overschreven door andere stijlen op de pagina.

4. **HTML Pagina's Creëren**

In de map `/pages` kunnen we onze HTML-bestanden plaatsen. Een voorbeeld van een eenvoudige pagina die gebruik maakt van ons custom element:

```html
<!-- Bestand: /pages/index.html -->
<!DOCTYPE html>
<html lang="nl">
  <head>
    <meta charset="UTF-8" />
    <title>Mijn Website</title>
    <link rel="stylesheet" href="../styles/main.css" />
    <script type="module" src="../components/MyButton.js"></script>
  </head>
  <body>
    <h1>Welkom op mijn website</h1>
    <my-button label="Klik mij"></my-button>
  </body>
</html>
```

**Uitleg:** In deze pagina importeren we het custom element `<my-button>` en gebruiken we het in de HTML-structuur. Dit voorbeeld laat zien hoe eenvoudig het is om Web Components te integreren.

---

**Testing en Debugging**

Het testen van een website die volgens de Plain Vanilla Web-methode is gebouwd, is relatief eenvoudig omdat er geen afhankelijkheid is van build-tools. Je kunt de pagina's direct openen in een webbrowser om te zien hoe ze functioneren. Hier zijn enkele tips voor effectieve testing en debugging:

- **Browser Developer Tools**: Gebruik de ontwikkelaarstools van je browser (zoals Chrome DevTools of Firefox Developer Tools) om de DOM-structuur te inspecteren, JavaScript-fouten op te sporen en CSS-stijlen te controleren.
- **Console Logs**: Voeg `console.log()`-verklaringen toe aan je code om de uitvoer te controleren en eventuele fouten te debuggen.
- **Responsiveness Testing**: Zorg ervoor dat je website op verschillende schermformaten goed functioneert. Test op mobiele apparaten, tablets en desktops.
- **Cross-browser Testing**: Controleer of je website werkt in meerdere browsers, zoals Chrome, Firefox, Safari en Edge.

_Afbeelding_: Screenshot van browser developer tools waarin een custom element wordt weergegeven.

---

**Hosting en Deployment**

Een project dat volgens de Plain Vanilla Web-methode is gebouwd, is eenvoudig te hosten omdat het alleen bestaat uit statische bestanden. Hier zijn enkele eenvoudige manieren om je website te hosten:

- **GitHub Pages**: Upload je project naar een GitHub-repository en activeer GitHub Pages in de repository-instellingen. Dit is ideaal voor kleine projecten.
- **Netlify**: Een gratis en gebruiksvriendelijke hostingoptie die automatische builds ondersteunt vanuit Git-repositories.
- **Vercel**: Een andere uitstekende keuze, met eenvoudige configuratie en ondersteuning voor statische en dynamische content.

_Afbeelding_: Tabel met vergelijking van hostingopties: GitHub Pages, Netlify, en Vercel.

---

**Uitgebreide conclusie:**

De Plain Vanilla Web-methode biedt een krachtige, minimalistische aanpak voor webontwikkeling in een tijdperk waarin frameworks en buildtools vaak de norm zijn. Door gebruik te maken van standaarden zoals HTML, CSS en JavaScript, en moderne technologieën zoals Web Components, stelt deze methode ontwikkelaars in staat om websites en applicaties te bouwen die niet alleen efficiënter en sneller zijn, maar ook gemakkelijker te begrijpen en te onderhouden.

Deze methode benadrukt eenvoud, wat vooral waardevol is in kleinere teams of projecten waar onderhoudbaarheid en prestaties prioriteiten zijn. De focus op native webtechnologieën betekent ook dat ontwikkelaars minder tijd hoeven te besteden aan het leren en onderhouden van framework-specifieke kennis. Bovendien biedt de sterke ondersteuning voor Web Components in moderne browsers de zekerheid dat je applicaties toekomstbestendig zijn.

De statistieken die in dit artikel zijn besproken, onderstrepen de groeiende adoptie van Web Components en de prestatiesvoordelen van de Plain Vanilla Web-methode. Organisaties van elke omvang beginnen in te zien dat een vereenvoudigde aanpak niet alleen technische voordelen biedt, maar ook zorgt voor snellere ontwikkelingscycli en lagere operationele kosten.

Bij het toepassen van de Plain Vanilla Web-methode is het essentieel om best practices te volgen, zoals modulair bouwen, toegankelijkheid waarborgen en consistent testen in verschillende browsers. Deze aanpak maakt het mogelijk om zowel kleine als complexe projecten te realiseren met een solide basis.

Kortom, de Plain Vanilla Web-methode vertegenwoordigt een frisse kijk op webontwikkeling, een die herinnert aan de kracht van eenvoud in een wereld vol complexe oplossingen. Of je nu een beginner bent die op zoek is naar een overzichtelijke start, of een ervaren ontwikkelaar die de complexiteit van frameworks wil vermijden, deze methode biedt een flexibele en schaalbare oplossing. Begin vandaag nog met experimenteren en ervaar zelf de voordelen van een terugkeer naar de kern van webontwikkeling.

---
