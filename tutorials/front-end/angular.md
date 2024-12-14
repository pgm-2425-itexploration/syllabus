---
title: 'Angular'
synopsis: |
  Angular is een krachtig, open-source front-end webapplicatieframework ontwikkeld door Google. Het is ontworpen om dynamische single-page applicaties (SPA's) te bouwen met de nadruk op modulariteit, schaalbaarheid en onderhoudbaarheid. Angular maakt gebruik van TypeScript en biedt ingebouwde tools voor routing, formulierverwerking, HTTP-verzoeken en dependency injection. De component-gebaseerde architectuur maakt herbruikbare en modulaire code mogelijk, wat het beheer van complexe applicaties vergemakkelijkt. Angular wordt veel gebruikt voor het bouwen van high-performance webapps en heeft een sterk ecosysteem en gemeenschapssteun.
date: '2024-12-14'
author:
  name: 'Kevin Dworschak'
  avatarUrl: '/assets/avatars/kevin-dworschak.png'
  socials: 
    website: ''
    linkedin: 'https://www.linkedin.com/in/kevindworschak/'
    github: 'https://github.com/kefmaister'
thumbnailUrl: '/assets/tutorials/angular/angular_logo.png'
head:
  - - meta
    - name: description
      content: 'This is a tutorial for building a web application using Angular. It covers the fundamentals of Angular, from setting up the development environment to building scalable components.'
  - - meta
    - name: keywords
      content: 'Angular tutorial web application front-end TypeScript components routing services'
---

## Table of Contents
- [**Deel 1: Het Opzetten van de Ontwikkelomgeving**](#deel-1-het-opzetten-van-de-ontwikkelomgeving)
      - [Vereisten\*\*:\*\*](#vereisten)
      - [Installatie\*\*:\*\*](#installatie)
- [**Deel 2: De Structuur van een Angular Project**](#deel-2-de-structuur-van-een-angular-project)
- [**Deel 3: testing**](#deel-3-testing)
- [**Deel 4: De HomeComponent maken**](#deel-4-de-homecomponent-maken)
- [**Deel 5: De HousingLocation toevoegen**](#deel-5-de-housinglocation-toevoegen)
- [**Deel 6: Interfaces**](#deel-6-interfaces)
  - [**Wat zijn interfaces**](#wat-zijn-interfaces)
- [**Deel 7: input decorators en property bindings**](#deel-7-input-decorators-en-property-bindings)
- [**Deel 8: services**](#deel-8-services)
- [**Deel 9: Routing en details**](#deel-9-routing-en-details)
- [**Deel 10: Creeren van de detail pagina**](#deel-10-creeren-van-de-detail-pagina)



## **Introductie: Je Eerste Angular-app - Een Platform voor Huizenverhuur**

Welkom bij deze Angular-tutorial, speciaal ontworpen voor developers die een van de krachtigste front-end frameworks willen leren gebruiken. Of je nu nieuw bent met Angular of je kennis wilt verdiepen, deze stapsgewijze handleiding helpt je bij het bouwen van een praktische toepassing: een platform voor het weergeven van huizen te huur.

In deze tutorial bouwen we een Angular-app die een lijst toont van beschikbare huurwoningen en gedetailleerde informatie biedt over individuele huizen. Deze app maakt gebruik van veelvoorkomende Angular-functionaliteiten, zoals:

- **Component-gebaseerde ontwikkeling:** Het opdelen van de app in herbruikbare en modulaire onderdelen.
- **Routing:** Navigeren tussen pagina’s zoals de huizenlijst en de detailweergave.
- **Services:** Het ophalen en beheren van gegevens in verschillende componenten.
- **Templates en Directives:** Het maken van responsieve, gebruiksvriendelijke interfaces.
- **Dependency Injection:** Het efficiënt beheren van services met Angular's krachtige DI-systeem.

Aan het einde van deze tutorial heb je niet alleen een volledig functionele app, maar ook een goed begrip van hoe je Angular-concepten kunt toepassen om schaalbare en onderhoudbare webapplicaties te bouwen.

## **Waarom Angular?**

Angular, ontwikkeld door Google, is een robuust framework voor het bouwen van dynamische single-page applicaties (SPA’s). Het biedt een gestructureerde aanpak met ingebouwde tools voor routing, state management en dependency injection. Met een groot ecosysteem en sterke community-ondersteuning is Angular een uitstekende keuze voor developers die complexe, high-performance applicaties willen maken. Hieronder zie je een mooie weergave van de meest gebruikte frameworks

![](/assets/tutorials/angular/Aspose.Words.7dac8eeb-3ea3-4917-91de-d284d340c3aa.002.png)[^1]

**Toepassingen van Angular door Vooraanstaande Bedrijven**

Angular wordt ingezet door diverse toonaangevende bedrijven in verschillende sectoren:

- **Google:** Als de ontwikkelaar van Angular gebruikt Google het framework in verschillende producten, zoals de Google Cloud Console, om efficiënte en responsieve gebruikerservaringen te bieden.
- **Microsoft:** Microsoft past Angular toe in webapplicaties zoals Office 365, wat zorgt voor een naadloze en responsieve ervaring op verschillende apparaten.
- **Gmail:** De populaire e-maildienst van Google maakt gebruik van Angular om een single-page applicatie-ervaring te bieden, waarbij nieuwe berichten verschijnen zonder de pagina te herladen.
- **PayPal:** Deze wereldwijde online betaaldienst gebruikt Angular voor zowel de website als de mobiele apps, wat resulteert in efficiënte verwerking van realtime transacties.
- **Forbes:** Het gerenommeerde zakenmagazine heeft zijn website gebouwd met Angular, wat zorgt voor een professionele en responsieve gebruikersinterface.

**Industrieadoptie van Webframeworks![](/assets/tutorials/angular/Aspose.Words.7dac8eeb-3ea3-4917-91de-d284d340c3aa.003.png)**

Webframeworks spelen een cruciale rol in moderne softwareontwikkeling, waarbij verschillende tools inspelen op uiteenlopende behoeften in de industrie. **Laravel**, een PHP-framework, wordt veel gebruikt in de **technologiesector**, met name voor web- en softwareontwikkeling, en is ook populair in **digitale marketing**, **e-commerce** en **media**. **Vue.js**, een progressief JavaScript-framework, blinkt uit in **e-commerce** en **media** en heeft een sterke aanwezigheid in de **technologiesector** dankzij de eenvoud en flexibiliteit.

**Angular**, is favoriet in **financiën** en **technologie**, en biedt robuuste oplossingen voor complexe, zakelijke applicaties. **Next.js**, een op React gebaseerd framework, wordt veel gebruikt in **e-commerce** en **media**, dankzij server-side rendering en schaalbaarheid. Tot slot wint **Remix**, een relatief nieuwe speler, aan populariteit in **technologie** en **e-commerce**, met de nadruk op prestaties en ontwikkelaarsgemak.

Elk framework brengt unieke sterke punten met zich mee, wat hun adoptie in verschillende sectoren vormgeeft en de dynamische wereld van webontwikkeling benadrukt.

## **Voorwaarden**

Voordat je begint, zorg ervoor dat je het volgende hebt:

- **Basiskennis van JavaScript, HTML en CSS:** Angular bouwt voort op deze fundamentele webtechnologieën.
- **Node.js en npm geïnstalleerd:** Angular vereist Node.js om de ontwikkelserver te draaien en afhankelijkheden te beheren.
- **Een code-editor (bijv. VS Code):** Een efficiënte editor met Angular-extensies versnelt je ontwikkelproces.

# **Deel 1: Het Opzetten van de Ontwikkelomgeving**

#### **Vereisten**

1. **Node.js**: Angular vereist Node.js voor het uitvoeren van de ontwikkelserver en het beheren van pakketten.
1. **Angular CLI**: De command-line interface (CLI) maakt het eenvoudig om nieuwe Angular-projecten te maken en te beheren.

#### **Installatie**

1. **Installeer Node.js**: Download en installeer Node.js vanaf [nodejs.org](https://nodejs.org/). Controleer de installatie met:

![](/assets/tutorials/angular/Aspose.Words.7dac8eeb-3ea3-4917-91de-d284d340c3aa.004.png)

1. **Installeer Angular CLI**: Gebruik npm om de Angular CLI te installeren:

Controleer de installatie met:

![](/assets/tutorials/angular/Aspose.Words.7dac8eeb-3ea3-4917-91de-d284d340c3aa.006.png)

1. **Creëer een Nieuw Angular Project**: Maak een nieuw project genaamd rental-app:

![](/assets/tutorials/angular/Aspose.Words.7dac8eeb-3ea3-4917-91de-d284d340c3aa.007.png)

1. Kies **Yes** voor Angular Routing.
1. Selecteer **SCSS** als stylesheet-indeling.
1. **Start de Ontwikkelserver**: Ga naar de projectmap en start de server:

![](/assets/tutorials/angular/Aspose.Words.7dac8eeb-3ea3-4917-91de-d284d340c3aa.008.png)

Open je browser en navigeer naar [http://localhost:4200](http://localhost:4200/).

# **Deel 2: De Structuur van een Angular Project**

Een nieuw Angular-project bevat de volgende mappen en bestanden:

- **src/app/**: Bevat de belangrijkste app-componenten.
- **src/assets/**: Voor statische middelen zoals afbeeldingen.
- **angular.json**: Projectconfiguratie.
- **package.json**: Beheert projectafhankelijkheden.

Angular volgt een component-gebaseerde structuur waarbij elke functie van je app in een eigen component is ondergebracht.

# **Deel 3: testing**

1. Open rental-app/src/index.html
1. In de index.html verander de <title> tag met deze code om de titel van de app up te daten.

   ![](/assets/tutorials/angular/Aspose.Words.7dac8eeb-3ea3-4917-91de-d284d340c3aa.009.png)

1. Vervolgens open rental-app/src/app/app.component.ts en verander de template binnen de @component met volgende code.

   ![](/assets/tutorials/angular/Aspose.Words.7dac8eeb-3ea3-4917-91de-d284d340c3aa.010.png)

1. Binnen hetzelfde bestand pas de AppComponent class aan. Verander de titel

   ![](/assets/tutorials/angular/Aspose.Words.7dac8eeb-3ea3-4917-91de-d284d340c3aa.011.png)

1. Sla de veranderingen op en bekijk het resultaat.

# **Deel 4: De HomeComponent maken**

1. Zorg dat je via de terminal in de juiste directory zit van rental-app. Gebruik de volgende commando om een component te maken.

   ![](/assets/tutorials/angular/Aspose.Words.7dac8eeb-3ea3-4917-91de-d284d340c3aa.012.png)

1. Controleer of er geen fouten zijn en alles zichtbaar is. Normaal mag er niks veranderd zijn.
1. In app.component.ts importeer de HomeComponent door middle van:

   ![](/assets/tutorials/angular/Aspose.Words.7dac8eeb-3ea3-4917-91de-d284d340c3aa.013.png)

1. Nog steeds in hetzelfde bestand in @Component verbeter de imports array en voeg de HomeComponent toe.

   ![](/assets/tutorials/angular/Aspose.Words.7dac8eeb-3ea3-4917-91de-d284d340c3aa.014.png)

1. Laten we nu HTML toevoegen aan onze template. Vergeet de backtics niet ``.

   ![](/assets/tutorials/angular/Aspose.Words.7dac8eeb-3ea3-4917-91de-d284d340c3aa.015.png)

1. Sla alles op. Laten we nu features toevoegen. Weet je nog de HomeComponent? Open dit bestand. We gaan de template updaten.

   ![](/assets/tutorials/angular/Aspose.Words.7dac8eeb-3ea3-4917-91de-d284d340c3aa.016.png)

1. Laten we wat styling geven aan onze home component. Open home.component.css en voeg de volgende code toe. Je mag altijd custom css schrijven.

   ![](/assets/tutorials/angular/Aspose.Words.7dac8eeb-3ea3-4917-91de-d284d340c3aa.017.png)

1. Controleer of alles werkt en vergeet niet op te slaan.

# **Deel 5: De HousingLocation toevoegen**

1. Laten we nog eens herhalen hoe je een component maar dan voor housingLocation.

   ![](/assets/tutorials/angular/Aspose.Words.7dac8eeb-3ea3-4917-91de-d284d340c3aa.018.png)

1. Indien de server niet meer aan staat. Gebruik **ng serve**.
1. Open home.component.ts en importeer de HousingLocationComponent.

   ![](/assets/tutorials/angular/Aspose.Words.7dac8eeb-3ea3-4917-91de-d284d340c3aa.019.png)

1. Laten we de metadata aanpassen van de @component in het home.component.ts bestand. Hier zien we de volledige component.

   ![](/assets/tutorials/angular/Aspose.Words.7dac8eeb-3ea3-4917-91de-d284d340c3aa.020.png)

1. Hierboven zien we ook dat de template is aangepast met de tag <app-housing-location>

1. Laten we wat css magie toevoegen.
   In housing-location.component.css

   ![](/assets/tutorials/angular/Aspose.Words.7dac8eeb-3ea3-4917-91de-d284d340c3aa.021.png)

# **Deel 6: Interfaces**

## **Wat zijn interfaces**

Een interface is een TypeScript-functie waarmee je de structuur van een object kunt definiëren. Het bepaalt welke eigenschappen en typen een object moet hebben. Denk aan een interface als een contract waaraan objecten moeten voldoen.

In Angular kunnen **interfaces** worden gebruikt om de structuur van objecten te definiëren. Ze zorgen ervoor dat de data in je applicatie een consistente vorm heeft. Dit is vooral nuttig bij het werken met TypeScript, omdat je hiermee typefouten kunt voorkomen en de leesbaarheid van je code verbetert.

Laten we onze eigen interface starten.

1. Zoals gewoonlijk gaan we onze commando geven om de interface te genereren.

   ![](/assets/tutorials/angular/Aspose.Words.7dac8eeb-3ea3-4917-91de-d284d340c3aa.022.png)

1. Laten we properties toevoegen. Open de housingLocation.ts en verander de default met volgende code.

   ![](/assets/tutorials/angular/Aspose.Words.7dac8eeb-3ea3-4917-91de-d284d340c3aa.023.png)

1. Laten we eens een test doen. We hebben een interface maar gebruiken deze nog niet. Importeer de HousingLocation in de homeComponent.
1. Verander de lege export class Homecomponent met volgende code

   ![](/assets/tutorials/angular/Aspose.Words.7dac8eeb-3ea3-4917-91de-d284d340c3aa.024.png)

1. Wanneer je alles goed gedaan hebt dan zou je het volgende moeten zien.

   ![browser frame of homes-app displaying logo, filter text input box and search button and the message 'housing-location works!'](/assets/tutorials/angular/Aspose.Words.7dac8eeb-3ea3-4917-91de-d284d340c3aa.025.png)

# **Deel 7: input decorators en property bindings**

1. Ga naar housing-location.component.ts en update de imports met Inputs en HousingLocation.

   ![](/assets/tutorials/angular/Aspose.Words.7dac8eeb-3ea3-4917-91de-d284d340c3aa.026.png)

1. In hetzelfde bestand voeg volgende property toe aan de export class van housingLocationComponent.

   ![](/assets/tutorials/angular/Aspose.Words.7dac8eeb-3ea3-4917-91de-d284d340c3aa.027.png)

1. Ga naar de home.component.ts in de template van @component

   ![](/assets/tutorials/angular/Aspose.Words.7dac8eeb-3ea3-4917-91de-d284d340c3aa.028.png)

1. Ga terug naar de housing-location.component.ts en vervang de bestaande template met het volgende.

   ![](/assets/tutorials/angular/Aspose.Words.7dac8eeb-3ea3-4917-91de-d284d340c3aa.029.png)

1. Als alles goed is zie je nu je eerste home card verschijnen.

1. We gaan nu de Home.component.ts updaten zodat deze housingLocationList property heeft. Merk op dat er in de template nu \*ngFor staat. Dit zorgt voor een dynamische herhaling van de data.

   ![](/assets/tutorials/angular/Aspose.Words.7dac8eeb-3ea3-4917-91de-d284d340c3aa.030.png)

1. Maak nu in dezelfde component een lijst met nieuwe huizen. Je kan jezelf baseren op de volgende code.

   ![](/assets/tutorials/angular/Aspose.Words.7dac8eeb-3ea3-4917-91de-d284d340c3aa.031.png)

# **Deel 8: services**

1. In de hoofd directory gebruik de volgende commando in je terminal

   ![](/assets/tutorials/angular/Aspose.Words.7dac8eeb-3ea3-4917-91de-d284d340c3aa.032.png)

1. Laten we nu statische data toevoegen aan de service. Kopieer de housingLocationList van Home.component.ts naar housing.service.ts

   ![](/assets/tutorials/angular/Aspose.Words.7dac8eeb-3ea3-4917-91de-d284d340c3aa.033.png)

1. Voeg nu de volgende functies toe

   ![](/assets/tutorials/angular/Aspose.Words.7dac8eeb-3ea3-4917-91de-d284d340c3aa.034.png)

1. In home.component.ts importeer inject bij @angular/core. Importeer ook HousingService in hetzelfde component.
1. Verwijder HousingLocationList array en geef het de value van een lege array.

   ![](/assets/tutorials/angular/Aspose.Words.7dac8eeb-3ea3-4917-91de-d284d340c3aa.035.png)

1. Je ziet hier ook dat er een constructor is toegevoegd. Dat is de eerste functie die start wanneer het component wordt aangemaakt.

# **Deel 9: Routing en details**

1. Terminal time

   ![](/assets/tutorials/angular/Aspose.Words.7dac8eeb-3ea3-4917-91de-d284d340c3aa.036.png)

1. In de src/app directory maak een nieuw bestand genaamd routes.ts hier gaan we onze routes aanmaken.

1. In main.ts voeg de volgende updates toe:

   1. Importeer provideRouter van @angular/router alsook routeConfig van ./app/routes
   1. Update de bootstrapApplication

      ![](/assets/tutorials/angular/Aspose.Words.7dac8eeb-3ea3-4917-91de-d284d340c3aa.037.png)

1. Laten we nu routing toevoegen aan de app.component.ts. Eerst importeer RouterModule van @angular/router. Voeg deze module ook toe aan de imports van @component.
1. Nu gaan we de templates updaten

   ![](/assets/tutorials/angular/Aspose.Words.7dac8eeb-3ea3-4917-91de-d284d340c3aa.038.png)

1. Voeg de volgende imports toe aan Routes.ts

   ![](/assets/tutorials/angular/Aspose.Words.7dac8eeb-3ea3-4917-91de-d284d340c3aa.039.png)

1. Voeg een nieuwe variabele toe met de naam routeConfig.

   ![](/assets/tutorials/angular/Aspose.Words.7dac8eeb-3ea3-4917-91de-d284d340c3aa.040.png)

1. Vergeet niet alles op te slaan

# **Deel 10: Creeren van de detail pagina**

1. In housing-location.component.ts voeg een anchor tag toe met routerLink.

   ![](/assets/tutorials/angular/Aspose.Words.7dac8eeb-3ea3-4917-91de-d284d340c3aa.041.png)

1. Open details.component.ts en update de imports.

   ![](/assets/tutorials/angular/Aspose.Words.7dac8eeb-3ea3-4917-91de-d284d340c3aa.042.png)

1. Update de template

![](/assets/tutorials/angular/Aspose.Words.7dac8eeb-3ea3-4917-91de-d284d340c3aa.043.png)

1. Als laatste gaan we de body van de detailsComponent aanpassen

   ![](/assets/tutorials/angular/Aspose.Words.7dac8eeb-3ea3-4917-91de-d284d340c3aa.044.png)

1. Op de volgende pagina vindt je een voorbeeld van de css voor detail.component.css

   ![](/assets/tutorials/angular/Aspose.Words.7dac8eeb-3ea3-4917-91de-d284d340c3aa.045.png)

1. Het laatste wat er nu nog moet gebeuren is is in Appcomponent de template aanpassen.

   ![](/assets/tutorials/angular/Aspose.Words.7dac8eeb-3ea3-4917-91de-d284d340c3aa.046.png)
