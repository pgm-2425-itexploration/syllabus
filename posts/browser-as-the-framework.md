---
title: 'De browser als framework: een nieuwe blik op webontwikkeling'
synopsis: 'Kan de browser zelf functioneren als framework? Deze prikkelende vraag stond centraal in een presentatie tijdens Fronteers BE. Hoewel het antwoord in de praktijk “nee” is, biedt de moderne browser verrassend veel mogelijkheden die in de buurt komen van wat frameworks tegenwoordig doen. Deze presentatie daagde het publiek uit om terug te keren naar de kern van webontwikkeling en de kracht van de browser te herontdekken.'
date: 2024-12-22
author:
  name: 'Colin Willems'
  avatarUrl: 
  socials:
    website: 
    linkedin: 'https://www.linkedin.com/in/colin-willems-2bb071292'
    github: 'https://https://github.com/pgm-coliwill'
thumbnailUrl: '/assets/posts/vanilla.jpg'
head:
  - - meta
    - name: description
      content: "Kan de browser zelf functioneren als framework? Deze prikkelende vraag stond centraal in een presentatie tijdens Fronteers BE. Hoewel het antwoord in de praktijk “nee” is, biedt de moderne browser verrassend veel mogelijkheden die in de buurt komen van wat frameworks tegenwoordig doen. Deze presentatie daagde het publiek uit om terug te keren naar de kern van webontwikkeling en de kracht van de browser te herontdekken."
  - - meta
    - name: keywords
      content: 'front-end, fronteers, vanilla, browser, javascript, html, css '
sources:
  - title: ''
    url: ''
  - title: ''
    url: ''
---

# De browser als framework: een nieuwe blik op webontwikkeling

Kan de browser zelf functioneren als framework? Deze prikkelende vraag stond centraal in een presentatie tijdens Fronteers BE. Hoewel het antwoord in de praktijk “nee” is, biedt de moderne browser verrassend veel mogelijkheden die in de buurt komen van wat frameworks tegenwoordig doen. Deze presentatie daagde het publiek uit om terug te keren naar de kern van webontwikkeling en de kracht van de browser te herontdekken.

Door frameworks, build tools en package managers volledig los te laten, werd er ingezoomd op wat mogelijk is met alleen HTML, CSS, JavaScript en een statische webserver. Deze minimalistische benadering liet zien hoe je met moderne browsers een solide basis kunt leggen voor webprojecten, zonder afhankelijk te zijn van complexe externe tools. Het doel was niet alleen om technische mogelijkheden te demonstreren, maar ook om ontwikkelaars opnieuw enthousiast te maken over de eenvoud en kracht van de webstandaarden.

Moderne browsers ondersteunen een breed scala aan functionaliteiten zoals HTTP/3, semantische HTML5-elementen, CSS-layoutsystemen als Flexbox en Grid, en JavaScript ES-modules. Deze features maken het mogelijk om taken als componentisering, state management en zelfs routing op te pakken, zonder externe dependencies. Hiermee kunnen ontwikkelaars sneller aan de slag en krijgen ze meer controle over hun projecten.

Toch werd benadrukt dat frameworks nog steeds een belangrijke rol spelen, vooral bij grotere of complexere projecten. Ze bieden een ontwikkelaarservaring en functionaliteiten die de browser nog niet volledig kan evenaren, zoals reactive templating of server-side rendering. Maar door eerst te kijken naar wat de browser zelf kan, wordt duidelijker wanneer frameworks echt nodig zijn en wanneer een eenvoudige aanpak voldoende is.

Deze presentatie bood een frisse kijk op webontwikkeling en liet zien dat de browser, met zijn ingebouwde tools en standaarden, een krachtig platform is dat steeds meer taken aankan. Het publiek werd uitgenodigd om te experimenteren en de mogelijkheden van een “vanilla” aanpak te verkennen. Het is een herontdekking van de basisprincipes die webontwikkeling zo veelzijdig en toegankelijk maken.

## De kracht van moderne browsers

Moderne browsers hebben de afgelopen jaren een enorme transformatie doorgemaakt. Ze bieden nu een breed scala aan ingebouwde functionaliteiten die ontwikkelaars steeds meer in staat stellen om zonder frameworks te werken. Waar frameworks vroeger essentieel waren om geavanceerde webapplicaties te ontwikkelen, hebben browsers hun rol stapsgewijs overgenomen door nieuwe webstandaarden te omarmen.

Een van de belangrijkste ontwikkelingen is de adoptie van **HTTP/3**. Deze standaard zorgt voor snellere en betrouwbaardere verbindingen door over te schakelen van TCP naar UDP. Hierdoor worden traditionele beperkingen zoals "head-of-line blocking" geëlimineerd, wat betekent dat de prestaties van een applicatie niet meer negatief worden beïnvloed door een enkele trage request. Dit maakt het laden van meerdere bestanden tegelijkertijd efficiënter, zelfs zonder geavanceerde bundling-tools.

Daarnaast biedt **HTML5** een breed scala aan semantische elementen zoals `<header>`, `<main>` en `<footer>`, die niet alleen bijdragen aan een betere structuur en toegankelijkheid, maar ook helpen om pagina’s gemakkelijker te begrijpen voor zoekmachines. Bovendien zorgen nieuwe features zoals `<dialog>` en de ondersteuning van rijke formulierfunctionaliteit ervoor dat ontwikkelaars minder afhankelijk zijn van externe plugins of scripts voor basistaken.

Ook **CSS** heeft een enorme sprong voorwaarts gemaakt. Layoutsystemen zoals Flexbox en Grid maken het eenvoudig om complexe layouts te bouwen zonder dat er workarounds nodig zijn. **CSS-variabelen** (custom properties) bieden een dynamischere manier om stijlen te beheren en aanpassen, terwijl geavanceerde features zoals `calc()` en nieuwe kleurmodellen ontwikkelaars meer controle geven over het ontwerp. Deze mogelijkheden maken het gebruik van CSS-preprocessors zoals Sass minder noodzakelijk voor veel projecten.

Voor **JavaScript** hebben standaarden zoals ES6 en ES2020 krachtige nieuwe tools geïntroduceerd. ES-modules maken het mogelijk om code op te splitsen in kleinere, herbruikbare stukken, terwijl features zoals async/await en template literals zorgen voor leesbare en efficiënte code. Door gebruik te maken van import maps kunnen ontwikkelaars de structuur van een project overzichtelijk houden zonder ingewikkelde configuraties. Bovendien bieden moderne browsers ondersteuning voor dynamische imports, waardoor functionaliteiten alleen worden geladen wanneer ze nodig zijn—een functie die in frameworks vaak bekend staat als lazy loading.

Een opvallend voorbeeld van de mogelijkheden van moderne browsers is de ondersteuning voor **custom elements**, waarmee ontwikkelaars hun eigen HTML-tags kunnen definiëren. In combinatie met shadow DOM en HTML-templates kunnen deze elementen op een herbruikbare en geïsoleerde manier worden gebruikt, zonder dat er een framework zoals React of Vue nodig is. Dit opent de deur naar een meer modulaire en schaalbare manier van ontwikkelen.

Deze moderne standaarden elimineren niet alleen de noodzaak van frameworks voor veel basistaken, maar verminderen ook de afhankelijkheid van buildtools zoals Webpack of Vite. In plaats daarvan kunnen ontwikkelaars rechtstreeks met de browser werken, wat resulteert in eenvoudigere setups, snellere ontwikkelcycli en minder technische schuld.

Kortom, de moderne browser biedt een krachtig platform waarmee veel van de traditionele taken van frameworks kunnen worden overgenomen. Het stelt ontwikkelaars in staat om efficiënter, toegankelijker en duurzamer te werken door simpelweg gebruik te maken van de mogelijkheden die al ingebouwd zijn.

## Grenzen en uitdagingen van een frameworkloze aanpak

Hoewel moderne browsers een indrukwekkend arsenaal aan tools en standaarden bieden, zijn er ook duidelijke grenzen aan wat mogelijk is zonder frameworks. Deze beperkingen komen vooral naar voren bij complexere functionaliteiten zoals reactiviteit, server-side rendering en een gestroomlijnde developer experience.

Een van de grootste uitdagingen bij een frameworkloze aanpak is het ontbreken van **reactieve templating**. Frameworks zoals React en Vue blinken uit in het automatisch bijwerken van de gebruikersinterface wanneer de onderliggende data verandert. In de browser zijn zulke mechanismen niet ingebouwd. Het gebruik van vanilla JavaScript betekent dat ontwikkelaars handmatig moeten zorgen voor het updaten van de DOM wanneer er wijzigingen in de applicatiestatus plaatsvinden. Dit kan leiden tot uitgebreide boilerplate-code en een verhoogde kans op fouten.

Hoewel er voorstellen zijn om reactieve functionaliteit aan webstandaarden toe te voegen, zoals het integreren van signalen (een concept dat populair is in frameworks zoals SolidJS), zijn deze nog niet breed beschikbaar. Voorlopig blijft reactiviteit een van de grootste redenen om voor een framework te kiezen, vooral in applicaties waar veel dynamische interacties plaatsvinden.

Een ander significant gemis is het ontbreken van een standaardmethode voor **server-side rendering (SSR)** in de browser. SSR speelt een cruciale rol bij het verbeteren van de prestaties en SEO van webapplicaties door de initiële HTML-server te renderen voordat deze naar de browser wordt gestuurd. Zonder een gestandaardiseerde aanpak in vanilla projecten, moeten ontwikkelaars vaak terugvallen op maatwerk of externe tools, wat de eenvoud van een frameworkloze workflow ondermijnt.

Naast technische beperkingen is de **developer experience** (DX) vaak een struikelblok. Frameworks bieden een breed scala aan hulpprogramma's, syntactische verbeteringen en duidelijke conventies die het ontwikkelproces versnellen en vereenvoudigen. Zonder deze hulpmiddelen moeten ontwikkelaars meer tijd besteden aan het opzetten van basisfunctionaliteiten zoals routing, state management en lazy loading. Hoewel het mogelijk is om deze functionaliteiten handmatig te implementeren, vereist dit een diepgaande kennis van webstandaarden en meer onderhoud op lange termijn.

Bovendien zijn er nog steeds enkele beperkingen op het gebied van **toegankelijkheid**. Shadow DOM, een essentieel onderdeel van custom elements, heeft bijvoorbeeld uitdagingen met betrekking tot screenreaders en de implementatie van visuele semantiek. Daarnaast biedt de browser nog geen gestandaardiseerde ondersteuning voor complexe CSS-functionaliteiten zoals scoping buiten het shadow DOM of gestroomlijnde oplossingen voor dynamische styling.

Ten slotte speelt het ecosysteem van externe bibliotheken en tools een rol. Veel populaire bibliotheken zijn ontworpen met frameworks in gedachten en vereisen buildtools zoals Webpack of Vite om goed te functioneren. Dit maakt het moeilijker om deze tools te gebruiken in een volledig frameworkloze omgeving. Hoewel er initiatieven zijn om bibliotheken compatibel te maken met no-build workflows, blijven deze beperkt in functionaliteit en adoptie.

Ondanks deze uitdagingen biedt een frameworkloze aanpak een leerzame en verfrissende blik op webontwikkeling. Het vereist echter een bewuste afweging: terwijl het ideaal is voor eenvoudige projecten en experimentele toepassingen, blijft het gebruik van frameworks waardevol voor grootschalige applicaties met complexe eisen.

## De rol van frameworks naast de browser

Hoewel moderne browsers steeds meer taken van frameworks overnemen, is het belangrijk om te erkennen dat frameworks nog altijd een cruciale rol spelen in webontwikkeling. Ze bieden oplossingen voor complexe uitdagingen en verbeteren de efficiëntie van ontwikkelteams, vooral bij grootschalige projecten. Het is dus geen kwestie van de browser tegenover frameworks plaatsen, maar eerder van het benutten van hun unieke sterktes in combinatie.

Een van de belangrijkste voordelen van frameworks is de **developer experience** (DX). Frameworks zoals React, Vue en Angular bieden gestructureerde workflows, duidelijke conventies en geïntegreerde tools die ontwikkelaars helpen snel en effectief te werken. Zo maakt React gebruik van declaratieve componenten en een virtuele DOM om veranderingen efficiënt door te voeren, terwijl Vue een flexibele en intuïtieve aanpak biedt voor het beheren van state en interacties. Deze gestroomlijnde DX is moeilijk te evenaren met een frameworkloze aanpak, waar ontwikkelaars vaak zelf de benodigde infrastructuur moeten bouwen.

Frameworks blinken ook uit in **state management**, een essentieel aspect van moderne webapplicaties. Terwijl vanilla JavaScript eenvoudige oplossingen biedt, zoals custom events en contextprotocollen, zijn frameworks ontworpen om state efficiënt te beheren in complexe scenario's. Tools zoals Redux, Vuex en MobX maken het mogelijk om state centraal op te slaan en consistent te houden, zelfs in applicaties met tientallen of honderden componenten. Voor ontwikkelaars die werken aan interactieve gebruikersinterfaces of applicaties met veel datamanipulatie, blijven frameworks daarom een waardevolle keuze.

Daarnaast spelen frameworks een grote rol bij **server-side rendering (SSR)** en **SEO-optimalisatie**. Frameworks zoals Next.js en Nuxt bieden ingebouwde ondersteuning voor SSR, wat cruciaal is voor prestaties en vindbaarheid van content. Deze tools maken het mogelijk om HTML vooraf te renderen op de server, zodat zoekmachines en gebruikers sneller toegang hebben tot de inhoud. Zonder frameworks vergt het implementeren van SSR vaak maatwerk, wat de ontwikkelcyclus vertraagt en de complexiteit verhoogt.

Een ander gebied waar frameworks een voorsprong hebben, is **toegankelijkheid**. Hoewel moderne browsers semantische HTML-elementen ondersteunen, bieden frameworks vaak extra hulpmiddelen en plugins om ervoor te zorgen dat applicaties voldoen aan de WCAG-richtlijnen. Dit is vooral belangrijk bij het bouwen van applicaties voor een breed publiek, waar inclusiviteit een prioriteit is.

Tot slot helpen frameworks bij het **schaalbaar houden van projecten**. In grotere teams zorgen frameworks voor uniformiteit en eenvoud in samenwerking. Ze bieden tooling voor code-splitting, lazy loading en bundeling, waardoor applicaties sneller laden en beter presteren. Bovendien profiteren ontwikkelaars van de uitgebreide community's en ecosystemen die frameworks ondersteunen, met duizenden kant-en-klare componenten en bibliotheken.

Hoewel de browser steeds krachtiger wordt, blijven frameworks een onmisbaar onderdeel van het webontwikkelingslandschap. Ze vullen de hiaten op die de browser nog niet volledig kan dichten en bieden de efficiëntie, schaalbaarheid en ondersteuning die nodig zijn voor complexe projecten. De toekomst van webontwikkeling ligt niet in het kiezen tussen frameworks en de browser, maar in het slim combineren van beide om een optimale workflow en gebruikerservaring te bereiken.

## Conclusie

De moderne browser heeft een indrukwekkende evolutie doorgemaakt en biedt vandaag de dag een krachtige basis voor webontwikkeling. Dankzij de ondersteuning voor standaarden zoals HTTP/3, semantische HTML5-elementen, CSS-layoutsystemen en JavaScript ES-modules kunnen veel taken die traditioneel aan frameworks werden toevertrouwd, nu rechtstreeks in de browser worden uitgevoerd. Deze vooruitgang opent de deur naar een minimalistische, frameworkloze aanpak die eenvoud en controle terugbrengt in het ontwikkelproces.

Toch zijn er grenzen aan wat de browser alleen kan. Voor complexere functionaliteiten, zoals reactieve templating, server-side rendering en schaalbaar state management, blijven frameworks een waardevolle aanvulling. Ze bieden niet alleen oplossingen voor technische uitdagingen, maar ook een gestroomlijnde developer experience en ondersteuning voor grootschalige projecten. Het is daarom belangrijk om frameworks niet te zien als concurrenten van de browser, maar als complementaire tools die de mogelijkheden van het web verder uitbreiden.

Wat deze presentatie en het bijbehorende experiment vooral laten zien, is de waarde van een hernieuwde blik op de fundamenten van webontwikkeling. Door eerst de mogelijkheden van de browser zelf te verkennen, kunnen ontwikkelaars bewustere keuzes maken over wanneer en hoe frameworks worden ingezet. Het gaat niet om het volledig vervangen van frameworks, maar om een balans te vinden die de eenvoud van de browser combineert met de kracht van frameworks.

In een tijd waarin de complexiteit van webontwikkeling steeds groter lijkt te worden, is het terugkeren naar de basis een waardevolle oefening. De browser is misschien nog geen volwaardig framework, maar het biedt een solide fundament waarop webontwikkelaars kunnen bouwen. Het is een uitnodiging om te experimenteren, te leren en opnieuw de kern van het web te omarmen.
