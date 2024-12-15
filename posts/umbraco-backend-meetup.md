---
title: 'Meetup verslag: verkenning van Umbraco v14'
synopsis: 'Backoffice-verbeteringen in Umbraco v14: Een gids voor ontwikkelaars'
date: 2024-10-17
author:
  name: 'Bergmans Jordan'
  avatarUrl: ''
  socials:
    linkedin: 'https://www.linkedin.com/in/jordan-bergmans-991a51292/'
    github: 'https://github.com/Bergmansjordan'
thumbnailUrl: '/assets/posts/umbraco-Logo.png'
head:
  - - meta
    - name: description
  - - meta
    - name: keywords
      content: 'front-end framework'
---

# Backoffice-verbeteringen in Umbraco v14: Een gids voor ontwikkelaars

## Inleiding

Met de release van Umbraco v14 zijn er aanzienlijke backoffice-verbeteringen doorgevoerd die zijn ontworpen om ontwikkelingsworkflows te stroomlijnen, de onderhoudbaarheid van systemen te verbeteren en de schaalbaarheid te vergroten. Dit artikel gaat dieper in op deze backend-verbeteringen, met een focus op de Management API, gedetailleerde rechten en andere innovaties. Deze verbeteringen maken het ontwikkelproces niet alleen eenvoudiger, maar ook voorspelbaarder en veiliger.

---

## Waarom backend-verbeteringen belangrijk zijn

Moderne CMS-platformen vereisen robuuste backend-functionaliteiten om uiteenlopende toepassingen aan te kunnen, van contentrijke websites tot complexe bedrijfsintegraties. De updates in Umbraco v14 pakken lang bestaande uitdagingen aan en maken het platform gebruiksvriendelijker en schaalbaarder. Belangrijke doelen van deze verbeteringen zijn onder andere:

1. **Schonere, modulaire code**: Het opsplitsen van monolithische controllers en services in beheersbare, testbare componenten.
2. **Verbeterde beveiliging**: Introductie van OAuth-gebaseerde authenticatie en gedetailleerde rechten.
3. **Toekomstbestendigheid**: Gebruik van moderne .NET-functies voor betere prestaties en uitbreidbaarheid.

---

## De Management API: Een nieuw tijdperk van flexibiliteit

### Overzicht

De Management API is een REST-gebaseerde interface die volledige controle biedt over content, media en gebruikersbeheer binnen Umbraco. Het vervangt oudere, minder voorspelbare methoden door een gestandaardiseerde aanpak die voldoet aan RESTful-principes.

### Kenmerken

- **Meer dan 50 silo's**: Elk vertegenwoordigt een afzonderlijke entiteit, zoals documenten, media of datatype.
- **392 eindpunten**: Biedt gedetailleerde controle over de backend-operaties van Umbraco.
- **Consistente foutafhandeling**: Maakt gebruik van het `Attempt`-patroon voor voorspelbare reacties.
- **Swagger-integratie**: Maakt API-verkenning en -testen rechtstreeks vanuit de browser mogelijk.

### Voorbeeld: Content maken met de Management API

```csharp
var contentService = new ContentEditingService();
var createAttempt = contentService.Create(
    new ContentModel
    {
        Name = "Nieuw artikel",
        ContentTypeAlias = "article",
        ParentId = -1, // Root
        Properties = new Dictionary<string, object>
        {
            { "title", "Een voorbeeldtitel" },
            { "bodyText", "Dit is een voorbeeldtekst." }
        }
    }
);

if (createAttempt.Success)
{
    Console.WriteLine("Content succesvol aangemaakt: " + createAttempt.Result.Id);
}
else
{
    Console.WriteLine("Mislukt om content aan te maken: " + createAttempt.Exception.Message);
}
```

### Voordelen voor ontwikkelaars

- **Voorspelbaarheid**: Het RESTful ontwerp zorgt voor consistente en begrijpelijke eindpunten.
- **Schaalbaarheid**: Gestroomlijnde API's verminderen overhead, waardoor ze geschikt zijn voor grootschalige projecten.
- **Aanpasbaarheid**: Ontwikkelaars kunnen API-gedrag uitbreiden of overschrijven om aan specifieke behoeften te voldoen.

---

## Gedetailleerde rechten: Fijnafstemming van toegangsbeheer

### Het probleem

Voorheen werden gebruikersrechten in Umbraco gedefinieerd met behulp van ondoorzichtige codes van één teken, waardoor het moeilijk was om toegangsbeheer aan te passen of problemen op te sporen.

### De oplossing

Gedetailleerde rechten bieden een gestructureerd en uitbreidbaar framework voor het beheren van gebruikersrechten. Rechten worden gedefinieerd in termen van:

- **Context**: Waarop het recht van toepassing is (bijv. content, media).
- **Acties**: Specifieke toegestane acties (bijv. aanmaken, lezen, bijwerken).
- **Scopes**: Het niveau waarop het recht van toepassing is (bijv. specifieke knooppunten of volledige bomen).

### Voorbeeld: Aangepaste rechten

```csharp
var permissionService = new PermissionService();
permissionService.SetPermissions(
    userGroupId: 5,
    permissions: new List<Permission>
    {
        new Permission
        {
            Context = "content",
            Action = "read",
            Scope = "/site/home"
        },
        new Permission
        {
            Context = "media",
            Action = "create",
            Scope = "/media-library"
        }
    }
);
```

### Voordelen

- **Transparantie**: Heldere definities vervangen cryptische codes van één teken.
- **Flexibiliteit**: Aangepaste rechtenmodellen kunnen worden afgestemd op complexe organisaties.
- **Beveiliging**: Minimaliseert het risico op onbedoelde te ruime rechten.

---

## Gebruikersdata: Gepersonaliseerde backend-ervaringen

### Overzicht

Gebruikersdata introduceert een manier om willekeurige sleutel-waardeparen op te slaan die zijn gekoppeld aan individuele gebruikers. Deze functie stelt ontwikkelaars in staat om gepersonaliseerde ervaringen te creëren, zoals het opslaan van gebruikersvoorkeuren of voortgang in tutorials.

### Voorbeeld: Gebruikersvoorkeuren opslaan en ophalen

#### Voorkeuren opslaan

```csharp
var userDataService = new UserDataService();
userDataService.Save(
    userId: currentUser.Id,
    group: "preferences",
    key: "theme",
    value: "dark-mode"
);
```

#### Voorkeuren ophalen

```csharp
var preferences = userDataService.GetByGroup(currentUser.Id, "preferences");
var theme = preferences["theme"];
Console.WriteLine("Gebruikersthema: " + theme);
```

### Voordelen

- **Eenvoudig statusbeheer**: Geen externe opslagoplossingen nodig voor gebruikersspecifieke data.
- **Verbeterde UX**: Pas backend-gedrag aan op basis van gebruikersvoorkeuren.
- **Schaalbaarheid**: Data is gekoppeld aan gebruikers, waardoor globale conflicten worden voorkomen.

---

## Migratietips

Upgraden naar Umbraco v14 vereist enige planning, vooral als er aangepaste backend-logica of API's worden gebruikt. Volg deze stappen om een soepele overgang te garanderen:

1. **Controleer aanpassingen**: Identificeer alle gebieden waar aangepaste controllers of services worden gebruikt.
2. **Test de Management API**: Vervang oudere, directe database-interacties door API-aanroepen waar mogelijk.
3. **Implementeer gedetailleerde rechten**: Migreer bestaande gebruikersgroepsrechten naar het nieuwe framework.
4. **Maak gebruik van gebruikersdata**: Gebruik de User Data API voor elk gebruikersspecifiek statusbeheer.

---

## Conclusie

De backend-verbeteringen in Umbraco v14 markeren een belangrijke stap vooruit, waarbij lang bestaande pijnpunten worden aangepakt en moderne ontwikkelpraktijken worden geïntroduceerd. Of je nu aangepaste API's maakt, complexe rechten beheert of gebruikerservaringen verbetert, deze functies bieden een solide basis voor innovatie.

Begin vandaag nog met het verkennen van deze functies om het volledige potentieel van de backend-mogelijkheden van Umbraco v14 te benutten. Voor meer bronnen, bekijk de [officiële documentatie](https://umbraco.com/documentation) en ga in gesprek met de levendige community om best practices te leren en te delen.

---

### Referenties

1. Officiële Umbraco-documentatie: [https://umbraco.com/documentation](https://umbraco.com/documentation)
2. Meetup-aantekeningen: "Backend Improvements in v14"
3. Bijdragen uit de community: GitHub-voorbeelden en forums
