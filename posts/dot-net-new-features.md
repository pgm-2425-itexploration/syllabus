---
title: ".NET 9 nieuwe features"
synopsis: "Ontdek de nieuwe features in .NET 9 en hoe ze de ontwikkeling van applicaties eenvoudiger en efficiënter maken."
date: 2024-12-22
author:
  name: "Daria Habibi"
  avatarUrl: ""
  socials:
    linkedin: ""
    github: ""
thumbnailUrl: "/assets/posts/"
head:
  - - meta
    - name: description
      content: "Ontdek de nieuwe features in .NET 9 en hoe ze de ontwikkeling van applicaties eenvoudiger en efficiënter maken."
  - - meta
    - name: keywords
      content: ".NET, .NET 9, .NET features, .NET 9 features, .NET development, .NET 9 development"
---

# .NET 9 Nieuwe Features

De introductie van .NET 9 heeft veel nieuwe functies en verbeteringen gebracht die ontwikkelaars nog beter ondersteunen in hun werk. In dit artikel ga ik in op de nieuwste bibliotheken die in .NET 9 zijn geïntroduceerd en hoe deze bijdragen aan een soepelere en efficiëntere workflow. Daarnaast verken ik waarom .NET als platform zo krachtig is en welke ontwerpprincipes het onderscheidend maken

Mijn interesse in dit onderwerp is ontstaan na ik een web applicatie in .NET 4 had gemaakt en dan later wou ik in een recentere versie werken, dus .NET 9 kwam uit op een goed moment voor mij. Het evenement bracht studenten en professionals samen in een gezellige omgeving waarin we meer leerden over de laatste innovaties binnen .NET. Nico Vermeir, een doorgewinterde .NET-specialist, leidde de sessie en deelde zijn expertise over de nieuwste bibliotheken en hoe deze in de praktijk gebruikt kunnen worden. Thomas Van B. had het georganiseerd en klaar gezet. Na de bijeenkomst kregen we pizza, drankjes en de kans om te spreken met Nico, waardoor het niet alleen leerzaam maar ook erg leuk was om erbij te zijn

## Wat is .NET en waar wordt het voor gebruikt?

.NET is een gratis en open source framework dat super krachtig is voor bijna elke soort applicatie die je zou willen bouwen. Het kan geschreven worden in C#, F# of visual basic, maar de meest gebruikte momenteel is C#. De 3 talen zijn allemaal trouwens ook gemaakt door Microsoft.

De framework heeft extreem hoge prestaties als je het vergelijkt met andere talen, zoals javascript node.js of python django. Dit maakt het dus een heel handige keuze wanneer snelheid in je applicatie een prioriteit is.

Een van de redenen waarom .NET zo speciaal is, is omdat je er echt van alles mee kan doen.

1. **Webontwikkeling**
   1. ASP.NET Core: maak dynamische webapps.
   2. Blazor: bouw interactieve webapps met C# in plaats van Javascript
2. **Applicatieontwikkeling**
   1. Desktop apps: bouw windows applicaties met Windows Forms of WPF.
   2. Cross-platform apps: gebruik .NET Maui om apps te bouwen die ook op MacOS of iOS zullen werken.
3. **Gameontwikkeling**
   1. Unity: Maak 2D of 3D games met C#
   2. MonoGame: maak games voor meerdere platforms, zoals pc, mobile en consoles.
4. **API’s**
   1. Maak RESTful APIs met ASP.NET Core
5. **Artificial Intelligence en Machine Learning**
   1. ML.NET: bouw en train machine learning-modellen hiermee.
6. **Cloudontwikkeling**
   1. Je kan je apps hosten in de cloud met Azure App Services.
   2. Bouw serverloze functies met Azure Functions.
   3. Werk met databases zoals Azure cosmos DB en SQL Server.
7. **Internet of things ( IOT )**
   1. Je kan ook IoT oplossingen maken met .NET en integreer met apparaten zoals sensoren en camera’s.
8. **Dataverwerking**
   1. Je kan het Entity Framework Core gebruiken voor databasebeheer.
   2. Maak krachtige queries met LINQ.
   3. Verwerk grote datasets met parallelle programming en async taken.

## Maak een .NET project aan

Hier zal je leren hoe je een project in .NET kan maken.

### Installeer .NET SDK

Als je de officiële SDK nog niet hebt geïnstalleerd, volg dan deze stappen:

1. Ga naar de Microsoft .NET website ( dotnet.microsoft.com )
2. Ga naar de download pagina en installeer de meest recente versie.
3. Dan na het installeren, kan je controlleren of dit gelukt is met de command in je commando.

```bash
dotnet –version
```

4. Als je dan je versie ziet, zou het succesvol geweest moeten zijn.

### Maak een project aan

1. Open je commando en navigeer naar het pad waar je een project wil aanmaken.
2. Maak een nieuw project aan, voor een console-app gebruik je

```bash
dotnet new console -n PROJECT NAAM
```

3. Ga nu naar je project map door dit in te voeren in je commando.

```bash
cd PROJECT AAM
```

### Projectstructuur

Het project bevat de standaardbestanden, nu ligt het aan jou om verder te werken! Dit kan je doen door Visual Studio of Visual Studio Code te gebruiken, dit zijn gratis editors. Ook bestaan enkele andere die gratis zijn voor studenten, zoals Rider.

- Program.cs is je hoofdcode van de applicatie.
- xxx.csproj is het configuratiebestand van je project.

Moest je nog geen teksteditor hebben, download dan een van de opgesomde opties van hun officiële website. Visual Studio of Visual Studio Code zijn aangeraden voor beginners.

### Code schrijven

Open de program.cs in je editor en voeg de volgende code toe:

```c#
using System;

class Program

{

static void Main(string\[\] args)

{

Console.WriteLine("Hallo, wereld!");

}

}
```

Met deze code maak je je eerste print naar de console in .NET!

### Je project draaien

Om je code uit te voeren typ je in je commando

```bash
dotnet run
```

Je zou nu Hallo, wereld! In je console moeten zien.

### Extra bestanden toevoegen

Wil je nog iets extra uittesten? Maka een nieuwe .cs file in je projectmap en voeg de volgende code toe:

```c#
public class NieuwBestand

{

public string GetMessage()

{

return "Dit is een bericht uit een ander bestand!";

}

}
```

In Program.cs kun je dit bestand gebruiken:

```c#
var nieuw = new NieuwBestand();

Console.WriteLine(nieuw.GetMessage());
```

Als je nu opnieuw runt, zal je “ Dit is een bericht uit een ander bestand! “ moeten zien.

## Nieuwe features

### Functies aan of uit te zetten

.NET 9 laat je methodes maken die je kunt “aan” of “ uit ” zetten. Dit kan handig zijn als je je programma kleiner wil maken.

```c#
\[assembly: FeatureSwitchDefinition("NieuweFunctie", IsEnabledByDefault = false)\]

public _class_ MijnKlasse

{

\[FeatureGuard("NieuweFunctie")\]

public void NieuweFunctie()

{

// Iets nieuws

}

}
```

Uitleg: Hier hebben we een functie (NieuweFunctie) die alleen in je programma komt als je “NieuweFunctie” aan zet .

### JSON ondersteuning werd verbeterd

Met JSON kan je gegevens opslaan (je data dus). Nu kan je er makkelijk een schema voor maken.

```c#
public _class_ Persoon

{

public string Naam { get; set; } = string.Empty;

public int Leeftijd { get; set; }

}

_var_ schema = JsonSchema.FromType&lt;Persoon&gt;();
```

Uitleg: Hier maken we een schema dat laat zien hoe een persoon er uitziet in JSON. Dit is handig voor APIs.

### Betere / Slimmere zoekmethodes voor LINQ

.NET heeft nieuwe manieren toegevoegd om dingen te tellen of samen te voegen.

```c#
_var_ woorden = new\[\] { "appel", "appel", "banaan" };

_var_ telling = woorden.CountBy(_w_ _\=>_ _w_);

```

Uitleg: Dit telt hoe vaak elk woord voorkomt in de lijst.

### Betere wachtrij ( priorityqueue )

.NET 9 laat je nu dingen uit een wachtrij verwijderen.

```c#
_var_ queue = new PriorityQueue<_string_, int>();

queue.Enqueue("Taak1", 1);

queue.Remove("Taak1", 1);
```

Uitleg: Je voegt een taak toe met Enqueue en haalt hem eruit met Remove.

### Tijd eenvoudiger maken (TimeSpan)

Je kunt nu makkelijk een tijdsduur maken.

```c#
_var_ duur = TimeSpan.FromSeconds(30);

```

Uitleg: Dit maakt een tijdsduur van 30 seconden.

### Handige tests

Je kunt nu tests voor je programma sneller uitvoeren.

```bash
dotnet test --parallel

```

Uitleg: Dit laat je tests tegelijk draaien, zodat ze sneller klaar zijn.

### Mooie webapps met Blazor

Blazor maakt webapps. Nu kan Blazor zelf bepalen hoe een stukje van je app moet werken.

```c#
<_Component_ RenderMode="Auto" />
```

Uitleg: Blazor kiest automatisch de beste manier om de component te tonen.

### Slimme AI in je programma

.NET 9 heeft nu ingebouwde AI.

```c#
_var_ aiService = services.AddAIService(_options_ _\=>_

{

_options_.ApiKey = "jouw_api_sleutel";

});
```

Uitleg: Dit voegt AI toe aan je programma. Met AI kun je bijvoorbeeld tekst begrijpen of voorspellingen maken.

### OpenAPI: makkelijk je API uitleggen

OpenAPI maakt een handleiding voor je API.

```c#
app.MapGet("/api", () _\=>_ "Hallo!")

.WithOpenApi();
```

Uitleg: Je API krijgt automatisch een beschrijving, zodat anderen weten hoe ze het kunnen gebruiken.

### Verbeterde prestaties met dynamische Server GC

De garbage collector past zich automatisch aan om het geheugenbeheer te optimaliseren.

```c#
GCSettings.LatencyMode = GCLatencyMode.Batch;

```

Uitleg: Met de Server GC-modus kan .NET slim geheugen vrijmaken, afhankelijk van je programma’s belasting. Dus dit is beter voor performance.

### Nieuwe functies in C# 13

Je kunt nu collecties direct gebruiken met het params-sleutelwoord.

```c#
public void VoegToe(params List&lt;int&gt;\[\] collecties)

{

foreach (var lijst in collecties)

{

// Verwerk de lijsten

}

}

VoegToe(new List&lt;int&gt; { 1, 2 }, new List&lt;int&gt; { 3, 4 });
```

Uitleg: Met params kun je meerdere lijsten doorgeven zonder extra syntax.

### Conclusie

.NET 9 brengt veel handige verbeteringen die het programmeren makkelijker en efficiënter maken, maar het is geen noodzaak om weg te stappen van .NET 7 of .NET 8 omdat dit maar kleine aanpassingen zijn. Daarom is het niet per se een nood om naar .NET 9 te stappen, tenzij je echt een van die specifieke aanpassingen nodig hebt.

Ook, uit persoonlijk ervaring, omdat .NET 9 nog maar net publiek is, ervaar ik enkele bugs die heel tijd consumerend zijn. Bv. mijn hot reload werkt niet zoals het moet en breekt elke 2-3 keer als ik CSS files aanpas.  
Na verloop van tijd zouden deze problemen wel opgelost moeten geraken.

Een van de meest belangrijke nieuwe features is de introductie van feature switches. Met deze nieuwe functie kun je delen van je code conditioneel opnemen of uitsluiten. Dit is vooral handig als je je applicatie klein wil houden door niet essentiële functies uit te schakelen tijdens het builden van een release versie. Bv. voor mobile apps kan dit downloadgrootte besparen.

Ook het werken met JSON is verbeterd. Door de nieuwe tool kan je automatisch JSON schemas genereren. Dit is heel nuttig voor APIs en systemen die gegevens uitwisselen, omdat JSON schema een duidelijke beschrijving geeft van hoe de data eruit ziet. Hierdoor maken we minder fouten.

Linq heeft ook nieuwe methodes gekregen, waaronder de opvallende CountBy. Hiermee kun je sneller data groeperen en tellen, bv. om te zien hoe vaak waarden in een lijst voorkomen.

Daarnaast is de ondersteuning voor PriorityQueue uitgebreid. Je kunt nu eenvoudig items verwijderen, wat nuttig is bij toepassingen waar taken in een specifieke volgorde moeten worden uitgevoerd, zoals bij planners of takenlijsten. Dit maakt het beheren van wachtrijen flexibel.

Een andere kleine maar nuttige toevoeging is de verbetering in TimeSpan-methodes. Met de nieuwe From\*-methoden kun je eenvoudig tijdsduren maken, zoals seconden, minuten of uren. Dit vermindert het risico op fouten en maakt de code beter leesbaar.
