---
title: 'Meetup verslag: verkenning van Umbraco v14 en Codecabin met Numble'
synopsis: 'De Numble-meetup belichtte de nieuwste ontwikkelingen in Umbraco, met inspirerende sessies over versie 14, CodeCabin en de kracht van community en samenwerking.'
date: 2024-10-17
author:
  name: 'Ella Jekale'
  avatarUrl: '/assets/avatars/ella-jekale.png'
  socials:
    linkedin: 'https://www.linkedin.com/in/ella-jekale/'
    github: 'https://github.com/pgm-ella'
thumbnailUrl: '/assets/posts/umbraco.png'
head:
  - - meta
    - name: description
  - - meta
    - name: keywords
      content: 'front-end framework'
---

# Meetup verslag: verkenning van Umbraco v14 en Codecabin met Numble

Onlangs nam ik deel aan een inspirerende en informatieve meetup georganiseerd door Numble, een digitaal bureau dat zich richt op webontwikkeling en content management. De bijeenkomst stond volledig in het teken van Umbraco, een veelgebruikt open-source CMS, en omvatte presentaties van ervaren ontwikkelaars binnen de Umbraco-community. Deze werd gehost door Joke Van Hamme.
Starten deden we met een stukje pizza en een moment om op een rustige open manier de werknemers te leren kennen. Daarna bood de agenda niet alleen ruimte om te socializen, maar bevatte ook boeiende sessies over CodeCabin en Umbraco V14 & een sneakpeak op de nog niet uitgebrachte Umbraco V15. 
Dit artikel biedt een diepgaand overzicht van de besproken onderwerpen, met name de ervaring van Yari Marien met CodeCabin en de technische details van de nieuwste versie van Umbraco, gepresenteerd door Sven Geussens.
Met behulp van praktische codevoorbeelden en nuttige inzichten over Umbraco V14, zal dit artikel niet alleen een samenvatting geven van de meetup, maar ook een waardevolle bron vormen voor ontwikkelaars die meer willen weten over de nieuwste ontwikkelingen binnen Umbraco.

## Wat is Umbraco?

Voordat we in de details van de meetup duiken, is het nuttig om even stil te staan bij wat Umbraco precies is. Umbraco is een open-source Content Management Systeem (CMS) dat in eerste instantie werd ontwikkeld met flexibiliteit en gebruiksvriendelijkheid in het achterhoofd. Het CMS wordt vaak geprezen om zijn intuïtieve gebruikersinterface voor content editors en zijn robuuste backend die ontwikkelaars veel vrijheid biedt.

**Belangrijkste kenmerken van Umbraco zijn onder meer:**
- Open-source: Umbraco is volledig open-source, wat betekent dat ontwikkelaars volledige toegang hebben tot de broncode en de mogelijkheid om het CMS aan te passen aan hun specifieke behoeften.
- Flexibiliteit: Umbraco biedt ontwikkelaars de vrijheid om aangepaste contenttypen, templates en functionaliteiten te maken die naadloos integreren met de backend van het CMS.
- Gebruiksvriendelijkheid: Umbraco is ontworpen met het oog op gebruiksgemak, met een intuïtieve interface die het gemakkelijk maakt voor content editors om nieuwe content toe te voegen, te bewerken en te publiceren.
- Community: Umbraco heeft een actieve en betrokken community van ontwikkelaars, ontwerpers en content editors die samenwerken om het CMS te verbeteren en nieuwe functionaliteiten te ontwikkelen.

Umbraco is inmiddels een populaire keuze geworden voor zowel kleine bedrijven als grote ondernemingen, vanwege zijn schaalbaarheid, krachtige functionaliteiten en de mogelijkheid om complexe websites en applicaties te bouwen.

## Inleiding: Socializen en Verbinden

De avond begon met een informele netwerkfase, waar de aanwezige ontwikkelaars en professionals de gelegenheid kregen om elkaar te ontmoeten en te praten over hun ervaringen met Umbraco en andere technologieën. Dit moment werd al snel een platform voor het delen van ideeën, het bespreken van technische uitdagingen, en het opdoen van nieuwe contacten binnen de Umbraco-community. Voor velen was dit een waardevol onderdeel van de avond, aangezien persoonlijke interacties en netwerkopbouw in de ontwikkelaarswereld vaak net zo belangrijk zijn als technische kennis.

Na deze kennismaking werd de officiële bijeenkomst geopend met een korte inleiding, waarin het doel van de avond en de sprekers werden geïntroduceerd. De sessie begon met een presentatie door Yari Marien, een 24-jarige teamleider bij Numble, die zijn ervaringen deelde met CodeCabin, gevolgd door een diepgaande technische sessie over Umbraco V14 door Sven Geussens.

## CodeCabin: De ervaring van Yari Marien

Een van de meest opvallende en inspirerende onderdelen van de meetup was de presentatie van Yari Marien over zijn ervaring bij CodeCabin. CodeCabin is een jaarlijks evenement dat specifiek gericht is op Umbraco-ontwikkelaars. Het is een intensieve, intieme retreat waarbij een beperkte groep deelnemers zich enkele dagen terugtrekt om diepgaande workshops te volgen, ervaringen te delen en samen te werken aan Umbraco-gerelateerde projecten.

### Wat maakt CodeCabin uniek?

Volgens Yari is wat CodeCabin uniek maakt de kleinschaligheid en focus op samenwerking. In tegenstelling tot traditionele conferenties, waar honderden of zelfs duizenden mensen aanwezig zijn, biedt CodeCabin een meer persoonlijke ervaring waarbij iedereen de kans krijgt om direct bij te dragen aan discussies en hands-on sessies. De sfeer is ontspannen en informeel, maar de inhoud is technisch en diepgaand.

**Yari deelde enkele belangrijke inzichten die hij had opgedaan tijdens zijn tijd bij CodeCabin, waaronder:**
- 1. Samenwerken met de beste in het vak: Omdat CodeCabin zo kleinschalig is, krijg je de kans om intensief samen te werken met enkele van de beste Umbraco-ontwikkelaars in de wereld. Dit biedt een unieke gelegenheid om diepgaande technische kennis op te doen en nieuwe perspectieven te krijgen op complexe uitdagingen.
- 2. Focus op community en samenwerking: Een ander belangrijk aspect van CodeCabin is de sterke nadruk op community en samenwerking. Het gaat niet alleen om leren, maar ook om het versterken van de relaties binnen de Umbraco-community. Dit zorgt ervoor dat de opgedane kennis breed wordt gedeeld, en er blijft een sterk netwerk van professionals bestaan om op terug te vallen.
- 3. Praktische, hands-on workshops: De workshops bij CodeCabin zijn zeer praktisch en gericht op het direct toepassen van nieuwe technologieën en concepten. Dit biedt deelnemers de kans om de nieuwste tools en frameworks binnen Umbraco te testen en te implementeren in een omgeving die ruimte biedt voor experimentatie.

Yari gaf aan dat zijn deelname aan CodeCabin hem heeft geholpen om niet alleen zijn technische vaardigheden te verbeteren, maar ook om zijn vermogen om met andere ontwikkelaars samen te werken te versterken. Hij moedigde iedereen in de zaal aan om soortgelijke evenementen bij te wonen en actief deel te nemen aan de Umbraco-community.

## Diepgaande Presentatie van Umbraco V14 door Sven Geussens

Na de inspirerende presentatie van Yari, was het tijd voor een meer technische sessie geleid door Sven Geussens. Sven, een senior ontwikkelaar bij Numble, nam ons mee in de nieuwe functies en verbeteringen van Umbraco V14. Hij legde uit dat deze versie niet alleen gericht is op het verbeteren van de prestaties en gebruiksvriendelijkheid, maar ook enkele belangrijke nieuwe functies introduceert die vooral voor ontwikkelaars interessant zijn. De presentatie werd gekenmerkt door een duidelijke uitleg en praktische voorbeelden, waardoor de aanwezigen een goed begrip kregen van de nieuwe mogelijkheden.

**1. Headless CMS-mogelijkheden**

Een van de belangrijkste updates in Umbraco V14 is de verbeterde ondersteuning voor headless CMS. Een headless CMS scheidt de backend, waar de content wordt beheerd, van de frontend, waar de content wordt weergegeven. Dit biedt ontwikkelaars meer flexibiliteit om inhoud via API's te leveren aan verschillende platforms, zoals websites, mobiele apps en zelfs IoT-apparaten.
In Umbraco V14 is de Content Delivery API geoptimaliseerd voor betere prestaties en schaalbaarheid. Deze API maakt het mogelijk om dynamische inhoud op te halen en te presenteren in verschillende formaten, afhankelijk van het platform dat je gebruikt. Door de verbeteringen kunnen ontwikkelaars nu sneller en eenvoudiger content integreren in hun applicaties, wat resulteert in een naadloze gebruikerservaring.

### codevoorbeeld
```csharp
```
 Install the Umbraco.Headless.Client nuget package to get started
using Umbraco.Headless.Client.Net;
 
public class ContentApiExample
{
    public async Task GetContentAsync()
    {
        var client = new ContentDeliveryClient("your-project-alias", "your-api-key");
        
        // Retrieve content by ID
        var content = await client.Content.GetByIdAsync("content-id");
        
        Console.WriteLine($"Content name: {content.Name}");
        Console.WriteLine($"Content body: {content.Properties["bodyText"].Value}");
    }
};

```
```

Deze code laat zien hoe je de Content Delivery API kunt gebruiken om content op te halen op basis van een unieke ID. Dit is een eenvoudige manier om inhoud dynamisch te laden, wat vooral nuttig is voor projecten die content via meerdere kanalen moeten verspreiden.

**2. Verbeterde Workflow en Governance**

Een andere belangrijke verbetering in Umbraco V14 is de nieuwe workflow-engine. Deze engine is ontworpen om de processen rondom contentbeheer en publicatie te verbeteren, vooral voor grotere teams die werken met meerdere beheerders en redacteuren. Met de nieuwe workflow-functionaliteiten kunnen organisaties hun goedkeuringsprocessen beter stroomlijnen en beheren wie welke acties mag ondernemen.
De nieuwe workflow-engine biedt niet alleen meer controle, maar is ook gebruiksvriendelijker. Hierdoor kunnen contentbeheerders eenvoudig zien welke stappen er nog nodig zijn voordat content kan worden gepubliceerd en welke teamleden goedkeuring moeten geven. Dit verhoogt de efficiëntie van het team en minimaliseert de kans op miscommunicatie, waardoor de kwaliteit van de content aanzienlijk verbetert.
Daarnaast kan de workflow-engine worden aangepast aan de specifieke behoeften van een organisatie. Dit maakt het mogelijk om unieke goedkeuringsprocessen en verantwoordelijkheden in te richten, zodat ieder team lid duidelijk weet wat er van hem of haar wordt verwacht. Deze flexibiliteit is cruciaal in een wereld waar teams vaak op afstand werken en waar heldere communicatie van groot belang is.

**3. Ondersteuning voor .NET 6 en .NET 7**

Een andere belangrijke update in Umbraco V14 is de volledige ondersteuning voor .NET 6 en .NET 7. Dit betekent dat ontwikkelaars kunnen profiteren van de nieuwste features en verbeteringen in het .NET-framework, zoals verbeterde prestaties, snellere opstarttijden en verbeterde garbage collection. De upgrade naar .NET 6 zorgt ervoor dat applicaties die draaien op Umbraco V14 sneller en efficiënter presteren, vooral bij grotere websites met veel verkeer. Dit maakt Umbraco V14 niet alleen toekomstbestendig, maar ook geschikt voor grootschalige toepassingen.

### codevoorbeeld

```csharp
``` 
using Microsoft.AspNetCore.Mvc;
using Umbraco.Cms.Web.Common.Controllers;
 
namespace MyProject.Controllers
{
    public class MyApiController : UmbracoApiController
    {
        [HttpGet]
        public IActionResult GetData()
        {
            // Business logic here
            return Ok(new { message = "Hello from Umbraco V14!" });
        }
    }
}
```
```

Dit voorbeeld toont een basiscontroller die gebruikmaakt van de nieuwe mogelijkheden van Umbraco V14 binnen het .NET 6-ecosysteem. Het laat zien hoe eenvoudig het is om RESTful API-endpoints te creëren die kunnen communiceren met de frontend van de applicatie. Hierdoor kunnen ontwikkelaars krachtige applicaties bouwen die gebruikmaken van de nieuwste technologieën en best practices.

## Conclusie
De meetup georganiseerd door Numble bood een waardevolle gelegenheid om de nieuwste ontwikkelingen binnen de Umbraco-gemeenschap te verkennen, met een sterke focus op Umbraco V14 en de ervaringen van ontwikkelaars tijdens CodeCabin. Sven Geussens’ presentatie over Umbraco V14 was bijzonder informatief en gedetailleerd. Het toonde de indrukwekkende vooruitgang van dit populaire open-source content management systeem. De nieuwe mogelijkheden, zoals de verbeterde headless CMS-ondersteuning, geavanceerde workflow-engine en volledige compatibiliteit met .NET 6 en .NET 7, maken het platform niet alleen gebruiksvriendelijker, maar ook krachtiger voor ontwikkelaars.
De verbeteringen in de Content Delivery API en de nieuwe workflow-engine bieden een solide basis voor organisaties die contentbeheer willen optimaliseren en hun teams efficiënter willen laten samenwerken. Dit maakt Umbraco V14 een uitstekende keuze voor zowel kleine als grote bedrijven die op zoek zijn naar een flexibele en schaalbare oplossing voor hun webprojecten. Ook was het leuk dat we al een klein voorproefje kregen van wat V15 te bieden zal hebben.
De interactieve sfeer van de meetup, samen met de gelegenheid om te socializen en ervaringen te delen, droeg bij aan een sterk gevoel van gemeenschap binnen de werknemers van Numble. De presentatie van Yari Marien over zijn deelname aan CodeCabin benadrukte het belang van samenwerking en kennisdeling binnen deze gemeenschap. Het unieke, kleinschalige karakter van CodeCabin biedt ontwikkelaars de kans om zich te verdiepen in technische uitdagingen en nieuwe inzichten op te doen in een ondersteunende omgeving.
Al met al onderstreept de meetup de waarde van persoonlijke interactie en samenwerking in de tech-gemeenschap, wat leidt tot nieuwe oplossingen. Voor ontwikkelaars die hun vaardigheden willen verbeteren en deel willen uitmaken van de Umbraco-gemeenschap, zijn evenementen zoals deze en retreats als CodeCabin heel waardevol. De toekomst van Umbraco ziet er enorm bloeiend uit, en het is duidelijk dat de gemeenschap rond dit platform sterker wordt met nieuwe versie die wordt uitgebracht.

## Referentielijst
- Umbraco. (z.d.). Umbraco CMS. Geraadpleegd op https://umbraco.com.
- CodeCabin. (z.d.). CodeCabin: Het jaarlijkse retreat voor Umbraco-ontwikkelaars. Geraadpleegd op https://codecabin.org.
- Numble. (z.d.). Over Numble: Digitale expertise in webontwikkeling. Geraadpleegd op https://numble.be.
- Microsoft. (z.d.). .NET Framework: Technische specificaties en updates. Geraadpleegd op https://dotnet.microsoft.com.
Umbraco. (z.d.). Umbraco V14: Release notes en nieuwe functies. Geraadpleegd op https://umbraco.com