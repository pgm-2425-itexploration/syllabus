---
title: 'Ontdekking van de Nieuwe .NET 9 Bibliotheken'
synopsis: '.NET 9 brengt krachtige nieuwe bibliotheken en verbeteringen voor ontwikkelaars, die zorgen voor hogere efficiëntie en eenvoud in applicatieontwikkeling.'
date: 2024-12-13
author:
  name: 'Klaas Cornette'
  avatarUrl: '/assets/avatars/klaas-cornette.png'
  socials: # Voeg links naar sociale media toe -> Als je er geen hebt, laat een lege string ''
    linkedin: 'https://www.linkedin.com/in/klaas-cornette-a0b188293/'
    github: 'https://github.com/Klaas-Cornette'
thumbnailUrl: '/assets/posts/discovery-of-dotnet9-libraries_img.png'
head:
  - - meta
    - name: description
      content: 'De nieuwste features in .NET 9 maken applicatieontwikkeling eenvoudiger en efficiënter. Ontdek de nieuwe bibliotheken en voordelen voor ontwikkelaars.'
  - - meta
    - name: keywords
      content: '.NET 9, webontwikkeling, programmeerbibliotheken, technologie'
sources:
  - title: 'Officiële .NET 9 documentatie'
    url: 'https://learn.microsoft.com/en-us/dotnet/core/whats-new/dotnet-9'
  - title: '.NET GitHub Repository'
    url: 'https://github.com/dotnet/'
  - title: 'Base64Url Encoding in .NET'
    url: 'https://learn.microsoft.com/en-us/dotnet/api/microsoft.azure.commands.attestation.models.base64url?view=az-ps-latest'
---

# Nieuwe bibliotheken in .NET 9

Met de komst van .NET 9 zijn er talloze nieuwe features en verbeteringen die het werken met dit platform nog efficiënter en gebruiksvriendelijker maken. Voor studenten en beginnende ontwikkelaars biedt deze versie van .NET niet alleen meer mogelijkheden, maar ook een uitstekende kans om nieuwe vaardigheden te ontwikkelen en meer inzicht te krijgen in de moderne softwareontwikkeling. In dit artikel bespreken we de nieuwe bibliotheken die met .NET 9 zijn geïntroduceerd en hoe deze bijdragen aan een vlottere en efficiëntere workflow voor ontwikkelaars. Daarnaast geven we een uitgebreide introductie tot het .NET-platform en de unieke ontwerprichtlijnen die het tot een krachtig ontwikkeltool maken.

Dit artikel is gebaseerd op mijn deelname aan de **.NET 9 Meetup** op 13 november, een inspirerend evenement waar ik samen met andere studenten en professionals de nieuwste ontwikkelingen in de wereld van .NET heb ontdekt. De sfeer was informeel en gemoedelijk, met pizza, drankjes en interessante gesprekken die het leren plezierig maakten. De sessie werd geleid door **Nico Vermeir**, een ervaren .NET-specialist, en richtte zich voornamelijk op de introductie van nieuwe bibliotheken in .NET 9 en hun voordelen in de praktijk. 

Als student vond ik het bijzonder waardevol om deze sessie bij te wonen. Het bood niet alleen inzicht in de nieuwste features van .NET, maar ook in hoe deze technologieën direct toepasbaar zijn in echte projecten. In dit artikel deel ik de inzichten die ik heb opgedaan tijdens de Meetup en leg ik uit hoe je als ontwikkelaar kunt profiteren van de verbeteringen in .NET 9. Dit perspectief biedt niet alleen een overzicht van de nieuwe mogelijkheden, maar helpt ook om een dieper begrip te krijgen van hoe je met .NET een solide basis kunt leggen voor je professionele carrière in softwareontwikkeling.


## **Wat is .NET?**

### **Inleiding tot .NET**

Als student softwareontwikkeling hoor ik vaak over de veelzijdigheid en kracht van .NET. Maar wat maakt dit platform zo speciaal? .NET is een gratis en open source ontwikkelaarsplatform dat door miljoenen ontwikkelaars wereldwijd wordt gebruikt voor het bouwen van allerlei soorten toepassingen. Het ondersteunt meerdere programmeertalen, zoals **C#**, **F#** en **Visual Basic**, wat het toegankelijk maakt voor een breed scala aan ontwikkelaars, ongeacht hun programmeertaalvoorkeur. 

Het platform is ontworpen met een focus op **hoge prestaties**, **veiligheid** en **betrouwbaarheid**, wat betekent dat toepassingen die met .NET zijn gebouwd, niet alleen snel, maar ook stabiel en goed beschermd zijn tegen veelvoorkomende beveiligingsproblemen. Voor mij, als student, betekent dit dat ik kan leren programmeren met een technologie die ook in de professionele wereld veel wordt gebruikt.

Met .NET kun je toepassingen bouwen voor bijna elk type apparaat of platform. Enkele voorbeelden van waar je .NET voor kunt gebruiken zijn:

- **Webapplicaties**: Met ASP.NET Core kun je moderne, snelle en schaalbare webapplicaties bouwen. Dit is een van de gebieden waar ik persoonlijk erg geïnteresseerd in ben. 
- **Desktopapplicaties**: Voor traditionele desktopsoftware biedt .NET ondersteuning via Windows Forms en WPF, ideaal voor het bouwen van rijke gebruikersinterfaces.
- **Mobiele applicaties**: Dankzij Xamarin kun je native mobiele apps maken voor zowel iOS als Android met gedeelde code.
- **Cloudtoepassingen en microservices**: Voor wie zich wil verdiepen in cloudontwikkeling en gedistribueerde systemen, biedt .NET krachtige hulpmiddelen en integraties.
- **Spelontwikkeling**: Met Unity en .NET kun je games ontwikkelen, een interessante optie als je passie hebt voor gaming.
- **AI en machine learning**: ML.NET stelt je in staat om machine learning-modellen te integreren in je toepassingen, iets wat steeds belangrijker wordt in de hedendaagse software.

### **De kern van .NET**

.NET is opgebouwd rond drie belangrijke componenten die samen een solide basis vormen voor elke toepassing:

1. **Runtime**: Dit is het hart van .NET dat je toepassingscode uitvoert. Het zorgt ervoor dat je programma efficiënt wordt uitgevoerd, ongeacht het apparaat of platform waarop het draait.
2. **Bibliotheken**: .NET biedt een uitgebreide verzameling standaardbibliotheken die veelgebruikte functionaliteiten zoals JSON-parsering, cryptografie en netwerkcommunicatie ondersteunen. Dit bespaart je als ontwikkelaar veel tijd, omdat je geen wiel opnieuw hoeft uit te vinden.
3. **Compilers**: De compilers in .NET zetten je broncode om in uitvoerbare programma's. Dit proces maakt je code snel en efficiënt, wat essentieel is voor hoogwaardige software.

## **Hoe begin je aan een .NET-project?**

Of je nu een beginner bent of een ervaren ontwikkelaar, het starten van een project in .NET is eenvoudig. Hier is een uitgebreide gids:

### **1. Download en installeer .NET**

Ga naar de [officiële .NET-downloadpagina](https://dotnet.microsoft.com/download) en kies de juiste versie voor jouw besturingssysteem. De meestgebruikte versie is de .NET SDK, waarmee je alle benodigde tools krijgt om applicaties te bouwen.

#### **Installatie-instructies**:

- Voor **Windows**: Download de installer en volg de stappen.

- Voor **macOS**: Gebruik `brew` of download de installer.

- Voor **Linux**: Gebruik `apt`, `dnf` of `zypper`, afhankelijk van je distributie.

### **2. Controleer de installatie**

Na installatie kun je in een terminal het volgende commando uitvoeren:

```bash

dotnet --version

```

Hiermee controleer je of .NET correct is geïnstalleerd en welke versie actief is.

### **3. Creëer je eerste project**

Met het `dotnet new`-commando kun je snel een basisproject aanmaken:

```bash

dotnet new console -n MijnEersteApp

```

Dit genereert een eenvoudige console-applicatie in de map `MijnEersteApp`. Het bestand `Program.cs` bevat een eenvoudige "Hello, World!"-toepassing.

### **4. Voer je project uit**

Navigeer naar de map van je project:

```bash

cd MijnEersteApp

```

En voer de applicatie uit met:

```bash

dotnet run

```

Je ziet dan de output "Hello, World!" in de terminal.

### **5. Gebruik een IDE of editor**

Hoewel je eenvoudig met een teksteditor kunt werken, raden we aan om een krachtige IDE te gebruiken zoals **Visual Studio** of **Visual Studio Code**. Deze bieden functies zoals debugging, IntelliSense en geïntegreerde terminalondersteuning.

## **Base64Url: Een betere manier van encoderen**

### **Waarom Base64Url?**

Base64 wordt vaak gebruikt om binaire gegevens om te zetten in tekst. Hoewel dit handig is, brengt het enkele problemen met zich mee bij gebruik in URLs. Tekens zoals `+` en `/` hebben speciale betekenissen in URLs, wat tot fouten kan leiden.

Base64Url is een variant van Base64 die deze problemen oplost door:

- `+` te vervangen door `-`

- `/` te vervangen door `_`

### **Toepassingen van Base64Url**

- **API-tokens:** Veilig encoderen van gegevens voor gebruik in webservices.

- **Query strings:** Vermijden van conflicten in URL-parameters.

### **Codevoorbeeld**

#### **Encoderen**

```csharp

ReadOnlySpan<byte> data = new byte[] { 1, 2, 3, 4 };

string encoded = Base64Url.EncodeToString(data);

Console.WriteLine($"Base64Url Encoded: {encoded}");

```

#### **Decoderen**

```csharp

byte[] decoded = Base64Url.Decode(encoded);

Console.WriteLine($"Decoded Data: {BitConverter.ToString(decoded)}");

```

## **Verbeteringen in collecties**

### **1. OrderedDictionary**

Dit nieuwe generieke type biedt een eenvoudige manier om key-value pairs op te slaan terwijl de invoegvolgorde behouden blijft. Dit is vooral handig voor scenario's waarin de volgorde van items van belang is, zoals configuratiebestanden of UI-elementen.

**Voordelen:**

- Type-safe.

- Snelle toegang tot gesorteerde data.

#### **Codevoorbeeld**

```csharp

OrderedDictionary<string, int> dict = new()

{

["a"] = 1,

["b"] = 2,

["c"] = 3,

};

dict.Insert(0, "x", 42);

dict.RemoveAt(1);

foreach (var item in dict)

{

Console.WriteLine($"{item.Key}: {item.Value}");

}

```

### **2. PriorityQueue.Remove**

PriorityQueue is uitgebreid met een nieuwe methode waarmee je eenvoudig items kunt verwijderen of de prioriteit van een item kunt bijwerken. Dit is bijzonder nuttig in grafen en algoritmen zoals Dijkstra.

#### **Codevoorbeeld**

```csharp

PriorityQueue<string, int> queue = new();

queue.Enqueue("Item1", 1);

queue.Enqueue("Item2", 2);

queue.Enqueue("Item3", 3);

queue.Remove("Item2", out _, out _);

while (queue.TryDequeue(out string? item, out int priority))

{

Console.WriteLine($"{item} with priority {priority}");

}

```

## **Cryptografie: Veiligheid en snelheid**

### **CryptographicOperations.HashData**

Met deze nieuwe API kun je eenvoudig gegevens hashen zonder de overhead van complexe instellingen. Dit is ideaal voor toepassingen zoals API-authenticatie of het beveiligen van gegevens.

#### **Codevoorbeeld**

```csharp

byte[] data = new byte[] { 1, 2, 3 };

HashAlgorithmName algorithm = HashAlgorithmName.SHA256;

byte[] hash = CryptographicOperations.HashData(algorithm, data);

Console.WriteLine(BitConverter.ToString(hash));

```

## **Voordelen van .NET**

### **1. Platformoverschrijdend**

Een van de grootste voordelen van .NET is dat het een **cross-platform framework** is. Dit betekent dat je toepassingen kunt bouwen die werken op **Windows**, **Linux**, **macOS**, en mobiele platformen zoals **iOS** en **Android**. Dit is vooral handig als je, zoals ik, geïnteresseerd bent in mobiele en webontwikkeling en de veelzijdigheid van één codebase wilt benutten.

### **2. Hoge prestaties**

De runtime van .NET is geoptimaliseerd voor snelheid en schaalbaarheid. Dit is cruciaal voor het bouwen van moderne toepassingen zoals webservices, cloudtoepassingen of zelfs games. Dankzij technieken zoals **just-in-time compilatie (JIT)** en **ahead-of-time compilatie (AOT)** krijg je hoge prestaties zonder veel extra optimalisatiewerk, wat je als student veel tijd bespaart.

### **3. Rijke bibliotheken en frameworks**

Het uitgebreide aanbod van bibliotheken en frameworks in .NET maakt het ontwikkelen van toepassingen eenvoudiger. Een paar die ik persoonlijk nuttig vind zijn:

- **System.Text.Json**: Voor veilige en snelle JSON-parsering.
- **Entity Framework Core**: Voor eenvoudig data- en databasebeheer.
- **System.Net.Http**: Voor netwerkcommunicatie.
- **ML.NET**: Voor wie zich wil verdiepen in AI en machine learning.
- **ASP.NET Core**: Een favoriet voor het bouwen van webapplicaties en API's.

Deze tools bieden veel functionaliteit en besparen je tijd, waardoor je meer focus kunt leggen op de unieke aspecten van je project.

### **4. Ondersteuning voor moderne programmeerconcepten**

.NET ondersteunt moderne programmeertechnieken zoals **asynchrone programmering**, **generics**, **pattern matching** en **records**. Deze tools helpen je om schone, overzichtelijke en onderhoudbare code te schrijven. Als student vind ik dit erg belangrijk, omdat het je aanmoedigt om goede programmeerpraktijken te ontwikkelen.

### **5. Open source en community-gedreven**

.NET is volledig open source, wat betekent dat iedereen kan bijdragen aan de ontwikkeling ervan. Dit open karakter zorgt ervoor dat er een enorme hoeveelheid documentatie, tutorials en open source-projecten beschikbaar is. Dit is perfect voor studenten zoals ik, omdat je gemakkelijk kunt leren en hulp kunt krijgen van de wereldwijde community.

### **6. Eenvoudige integratie met cloud-oplossingen**

Voor wie zich wil richten op cloudontwikkeling, is .NET een uitstekende keuze. Met tools zoals Azure SDK's kun je eenvoudig cloudtoepassingen bouwen, implementeren en beheren. Hoewel het is geoptimaliseerd voor gebruik met Microsoft Azure, werkt het ook goed met andere cloudplatformen.

Voor mij als student is .NET niet alleen een krachtig platform, maar ook een geweldige manier om te leren hoe je professionele en veelzijdige toepassingen kunt bouwen. Het combineert moderne technologie met gebruiksvriendelijke tools en een ondersteunende community, wat het een ideale keuze maakt om je vaardigheden te ontwikkelen en je carrière een stevige basis te geven.

## **Conclusie**

De nieuwe bibliotheken in .NET 9 maken het leven van ontwikkelaars aanzienlijk eenvoudiger en productiever. De .NET 9 Meetup liet ons kennismaken met talloze verbeteringen die zowel beginners als ervaren ontwikkelaars ten goede komen. De sessie benadrukte vooral hoe ontwikkelaars kunnen profiteren van Base64Url-encodering, de verbeteringen in collecties en de krachtige cryptografische tools.

Daarnaast biedt .NET 9 niet alleen technische voordelen, maar ook gebruiksvriendelijke functies zoals verbeterde cross-platform ondersteuning en krachtige hulpmiddelen voor moderne programmering. Deze innovaties maken het bouwen van betrouwbare, schaalbare en veilige toepassingen eenvoudiger dan ooit.

De bijeenkomst was ook een herinnering aan hoe waardevol het is om kennis en ervaringen te delen binnen een gemeenschap. Of het nu ging om technische vragen, tips voor productiviteit, of simpelweg het genieten van pizza en drankjes, de sfeer onderstreepte dat leren en samenwerken hand in hand gaan.

Kortom, .NET 9 biedt een rijk ecosysteem dat klaar is voor de uitdagingen van de toekomst. Het is een perfecte keuze voor elke ontwikkelaar die op zoek is naar een robuust en flexibel platform. Mis deze kans niet om je vaardigheden te verbeteren en de kracht van .NET 9 te benutten.

## **Bronnen**

- [Microsoft .NET 9 documentatie](https://learn.microsoft.com/)

- Voorbeelden en uitleg van de meetup

- [Officiële GitHub-repository van .NET](https://github.com/dotnet/)

- Taal verbetering chat-gpt  