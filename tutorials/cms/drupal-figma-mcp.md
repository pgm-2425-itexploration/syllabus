---
title: "Automatische styling in Drupal met Figma en Copilot"
synopsis: "Leer hoe je automatisch Figma-componenten kunt omzetten naar werkende Drupal UI Patterns met behulp van GitHub Copilot en het MCP-protocol. Deze tutorial toont een moderne workflow die designers en developers verbindt."
date: 2025-08-25
author:
  name: "Witze Van der Straeten"
  avatarUrl: "/assets/avatars/witze.jpg"
  socials:
    website: "https://witzevds-portoflio.onrender.com"
    linkedin: "https://www.linkedin.com/in/witze-van-der-straeten-705731193/"
    github: "https://github.com/Witzevds"
thumbnailUrl: "/assets/tutorials/drupal-figma-mcp/drupal-figma-mcp-thumbnail.png"
head:
  - - meta
    - name: description
      content: "Automatiseer je Drupal development workflow door Figma designs direct om te zetten naar UI Patterns met AI-assistentie."
  - - meta
    - name: keywords
      content: "Drupal, Figma, MCP, Copilot, UI Patterns, AI, CMS, Design Systems"
sources:
  - title: "DDEV Documentation"
    url: "https://ddev.readthedocs.io/"
  - title: "Drupal UI Patterns"
    url: "https://www.drupal.org/project/ui_patterns"
  - title: "Model Context Protocol"
    url: "https://modelcontextprotocol.io/"
---

# Automatische styling in Drupal met Figma en Copilot

## Inleiding

Iedereen die met webontwikkeling bezig is, weet hoe frustrerend het kan zijn om een design dat in Figma gemaakt is één-op-één in een CMS zoals Drupal te krijgen. Vaak is het een proces van handmatig YAML-bestanden aanmaken, Twig-templates uitschrijven, CSS toevoegen, fouten testen en alles opnieuw proberen. Dat kost veel tijd en leidt snel tot inconsistenties: een knop ziet er hier net iets anders uit dan daar, of een heading is niet helemaal wat de designer had bedoeld.

Met de opkomst van AI-tools zoals GitHub Copilot en het nieuwe MCP-protocol (Model Context Protocol) is dat proces aan het veranderen. In deze tutorial toon ik hoe je automatisch Figma-componenten kan laten omzetten naar werkende Drupal UI Patterns, met hulp van Copilot. Het resultaat:

- **Designers** werken gewoon in Figma
- **Developers** maken één keer een basisstructuur
- **Copilot** genereert de Twig, CSS en YAML
- **Content-editors** kunnen alles invullen zonder code

Deze tutorial is geschreven voor developers, maar ook interessant voor designers die willen begrijpen hoe hun werk in Drupal terechtkomt. We combineren verschillende trends in de ICT-sector: no-code/low-code development, AI-assisted coding, design systems en headless CMS-architecturen.

## Stap 1: Drupal 11 opzetten met DDEV

Voor dit project gebruik ik DDEV, een tool die bovenop Docker draait. DDEV is een soort alles-in-één ontwikkelomgeving: het zorgt ervoor dat je zonder gedoe een werkende stack hebt met PHP, MySQL en Apache/Nginx. Je hoeft dus geen XAMPP, MAMP of losse servers te installeren.

### Waarom DDEV?

- **Consistente ontwikkelomgeving**: jouw project draait bij jou hetzelfde als bij je teamleden
- **Snelle setup**: in minder dan 5 minuten heb je een werkende Drupal-installatie
- **Flexibiliteit**: je kan meerdere projecten naast elkaar draaien

::: tip DDEV Installatie
Als je DDEV nog niet hebt, volg je best de [officiële handleiding](https://ddev.readthedocs.io/en/stable/users/install/).
:::

### Project aanmaken

Open je terminal en voer deze stappen uit:

```bash
# Maak een nieuwe map en ga erin
mkdir drupal-mcp-demo
cd drupal-mcp-demo

# Maak een standaard Drupal-project
composer create-project drupal/recommended-project .

# Initialiseer DDEV
ddev config --project-type=drupal --docroot=web --create-docroot

# Start de containers
ddev start
```

Wanneer je `ddev start` uitvoert, start DDEV automatisch de containers. Je krijgt een URL zoals:

**https://drupal-mcp-demo.ddev.site**

Open die URL in je browser en je krijgt de Drupal-installatiewizard. Volg de stappen (taal kiezen, databasegegevens — die zijn door DDEV al ingevuld) en in een paar minuten heb je een verse Drupal 11-site draaien. 🎉

::: warning Troubleshooting
- **Krijg je een error "port already in use"?** Dan draait er al een andere service op je computer (bv. MySQL). Sluit die of wijzig de poort in `.ddev/config.yaml`.
- **Zie je "command not found"?** Controleer of DDEV correct is geïnstalleerd en aan je PATH is toegevoegd.
:::

## Stap 2: Extra tools installeren

Naast Drupal hebben we twee cruciale tools nodig:

### 1. Figma

Figma is ons startpunt. Hier maken we de designs. Straks schakelen we in Figma de Dev Mode MCP Server in zodat VS Code en Copilot die designs kunnen uitlezen. Zorg dat je een account hebt en installeer de desktop-app (werkt sneller dan alleen de browser).

### 2. Visual Studio Code met Copilot

We gebruiken VS Code als editor omdat het één van de eerste editors is die MCP volledig ondersteunt. Copilot draait er naadloos in en kan via MCP direct praten met Figma.

::: warning Editor Ondersteuning
Editors zoals Sublime Text of Atom hebben (nog) geen ondersteuning voor MCP. Daarom gebruiken we hier expliciet VS Code.
:::

### Optioneel: GitHub-integratie

Omdat dit project later sowieso via GitHub Classrooms moet ingediend worden, raad ik aan meteen een Git-repository te initialiseren:

```bash
git init
git add .
git commit -m "Start project with Drupal 11 and DDEV"
```

## Stap 3: Modules installeren

Drupal werkt modulair: de core is redelijk kaal, en bijna alles wordt via modules toegevoegd. Voor ons project hebben we de volgende modules nodig:

```bash
ddev composer require drush/drush
ddev composer require 'drupal/classy:^2.0'
ddev composer require 'drupal/ui_patterns:^2.0'
ddev composer require 'drupal/admin_toolbar:^3.6'
```

### Wat doen deze modules?

| Module | Beschrijving |
|--------|-------------|
| **Drush** | Een command line tool voor Drupal. Hiermee kan je cache legen, modules inschakelen, updates draaien, … sneller dan via de interface. |
| **Classy** | Een minimalistisch theme dat we als basis gebruiken. Het heeft nauwelijks styling, waardoor we maximale controle hebben. |
| **UI Patterns** | Hiermee definieer je componenten (via YAML). Het is de brug tussen design en implementatie. |
| **UI Patterns Blocks** | Maakt het mogelijk om UI Patterns te gebruiken als blokken die je kan slepen in de Layout Builder. |
| **UI Patterns Library** | Een centrale plek waar je een overzicht krijgt van al je componenten. Handig om te testen. |
| **Layout Builder** | Geeft je een visuele manier om pagina's samen te stellen met secties en componenten. |
| **Admin Toolbar** | Vervangt de standaard toolbar door een snellere versie met dropdown-menu's. Bespaart enorm veel klikken. |

### Modules inschakelen

1. Ga in je Drupal admin naar de bovenste toolbar en klik op **Extend**
2. Zoek de modules en vink aan:
   - UI Patterns
   - UI Patterns Blocks
   - UI Patterns Library
   - Layout Builder
   - Admin Toolbar
3. Klik onderaan op **Install**

::: tip Drush Commando
Gebruik Drush om modules sneller in te schakelen:

```bash
ddev drush en ui_patterns ui_patterns_blocks ui_patterns_library layout_builder admin_toolbar -y
```
:::

## Stap 4: Classy theme activeren

Nu activeren we het Classy-theme.

1. Ga in de Drupal admin naar **Appearance**
2. Zoek naar **Classy**
3. Klik op **Install and set as default**

::: tip Waarom Classy?
Je site ziet er nu kaal uit, zonder styling. Dat lijkt misschien vreemd, maar dit is precies wat we willen: een neutrale basis waar onze Figma-styling straks bovenop komt.

**Waarom niet Bartik, Claro of Olivero?** Die themes hebben al veel ingebouwde CSS. Dat maakt het moeilijker om exact de Figma-styling door te voeren. Classy is dus ideaal: lichtgewicht en flexibel.
:::

## Stap 5: Component folder maken

Nu gaan we de basisstructuur voor onze componenten aanmaken.

1. Open je project in VS Code
2. Navigeer naar: `web/themes/classy`
3. Maak hier een nieuwe map `components` ⚠️ De naam is belangrijk, anders werkt UI Patterns niet
4. In `components/` maak je een map `structuur`
5. Voeg daarin twee bestanden toe:
   - `structuur.component.yml`
   - `structuur.twig` (mag leeg zijn, anders klaagt Drupal)

### Inhoud van structuur.component.yml

```yaml
$schema: https://git.drupalcode.org/project/drupal/-/raw/HEAD/core/assets/schemas/v1/metadata.schema.json

name: Test Figma
status: experimental
description: Component gebaseerd op Figma design (node 288:32)
group: Figma

variants:
  default:
    title: Default
    description: Standaard variant

props:
  type: object
  properties:
    title:
      type: string
      title: Titel
      description: Titel van het blok
    description:
      type: string
      title: Beschrijving
      description: Korte beschrijving (HTML toegestaan)
    image_url:
      type: string
      title: Afbeelding
      description: URL naar afbeelding (optioneel)
    button_text:
      type: string
      title: Button tekst
      description: Tekst voor de knop
    button_url:
      type: string
      title: Button URL
      description: Link voor de knop
```

::: tip Component Structuur
Dit bestand beschrijft de structuur van het component:

- **name**: interne naam
- **props**: de eigenschappen die je in Drupal kan instellen
- **title, description, image_url, button_text, button_url**: velden die we later vullen met data

**Waarom dit belangrijk is:** Dit bestand leert Copilot hoe een component eruit moet zien. Als je dit eenmaal goed definieert, kan Copilot nieuwe componenten genereren die dezelfde structuur volgen.
:::

## Deel 2 – Van Figma naar VS Code via MCP

## Stap 6: Een Figma component maken

Nu onze Drupal-setup klaarstaat en we een eerste YAML-structuur hebben, is het tijd om de brug te slaan naar Figma. Figma is in dit proces ons "design system" waarin we de visuele elementen bouwen die later automatisch vertaald worden naar componenten in Drupal.

### Waarom Figma?

- **Design-first workflow**: designers maken eerst een pixel-perfect ontwerp in Figma. Developers hoeven dit niet meer blind over te typen.
- **Design tokens**: kleuren, typografie en spacing die je in Figma definieert, kunnen straks doorgegeven worden aan Copilot en omgezet naar CSS.
- **Dev Mode**: Figma heeft sinds kort een Developer Mode, waarmee je makkelijk code-snippets en properties uit designs kan halen. In combinatie met MCP wordt dit nóg krachtiger.

### Voorbeeld: Hero-component

Om het simpel te houden maken we één van de meest klassieke onderdelen van een website: een Hero. Dit is meestal het bovenste blok op een pagina, met een titel, subtitel, een afbeelding of achtergrond, en één of meerdere knoppen.

1. Open Figma en maak een nieuw bestand
2. Voeg een Frame toe (bijv. 1440x600 px)
3. Plaats een titel (`<h1>`), een subtitel (`<p>`) en twee knoppen ("Get Started" en "Learn More")
4. Voeg eventueel een achtergrondafbeelding of kleur toe

::: tip Element Naming
Geef je elementen duidelijke namen, zoals **Hero Title**, **Hero Button Primary**, **Hero Button Secondary**. Dit helpt later enorm, want Copilot herkent deze labels via MCP en kan ze direct omzetten naar YAML-properties.
:::

**Resultaat**: je hebt nu een visueel Hero-component dat je straks automatisch laat genereren in Drupal.

::: info Screenshot
Hier zou je in de tutorial een screenshot plaatsen van jouw Figma Hero met titels en knoppen
:::

## Stap 7: Figma MCP activeren

Nu komt een cruciale stap: de Dev Mode MCP Server aanzetten in Figma. Zonder dit kan VS Code geen verbinding maken met Figma.

1. Klik linksboven in Figma op het Figma-logo
2. Ga naar **Preferences**
3. Scroll naar beneden en zoek naar **Enable Dev Mode MCP Server**
4. Vink dit aan

**Vanaf nu draait er lokaal een MCP-server die je Figma-design toegankelijk maakt voor andere tools (zoals VS Code).**

### Wat is MCP eigenlijk?

MCP staat voor **Model Context Protocol**. Het is een protocol waarmee AI-tools zoals Copilot extra context kunnen ophalen. In dit geval: het uitlezen van properties van jouw Figma-design.

- **Zonder MCP**: ziet Copilot alleen je code
- **Met MCP**: kan hij ook Figma lezen
- **Resultaat**: Copilot begrijpt het hele plaatje (design + code)

::: warning Dev Mode Vereist
MCP werkt voorlopig alleen in Developer Mode van Figma. Je hebt dus een Figma-account nodig met toegang tot Dev Mode (gratis voor studenten en kleine teams, betaald in grote organisaties).
:::

## Stap 8: VS Code configureren voor MCP

Nu Figma klaarstaat, schakelen we over naar Visual Studio Code.

### Waarom VS Code?

Zoals eerder gezegd, ondersteunen niet alle editors MCP. VS Code wel, en het is bovendien de standaardomgeving voor Copilot.

### Settings openen

1. Open VS Code
2. Klik linksonder op het tandwiel-icoon → **Settings**
3. Zoek in de zoekbalk naar **MCP**
4. Klik op **Edit in settings.json**

### Configuratie toevoegen

Voeg de volgende regels toe:

```json
{
  "chat.mcp.discovery.enabled": true,
  "chat.mcp.servers": [
    {
      "name": "local-sint-coleta",
      "transport": { 
        "type": "sse", 
        "url": "http://127.0.0.1:3845/mcp" 
      }
    }
  ],
  "chat.agent.enabled": true
}
```

### Wat betekent dit?

| Instelling | Beschrijving |
|------------|-------------|
| `"chat.mcp.discovery.enabled": true` | Hiermee staat VS Code toe om actief naar MCP-servers te zoeken |
| `"chat.mcp.servers": [...]` | Hier definiëren we de MCP-server. In dit geval draait die lokaal (127.0.0.1) op poort 3845, zoals Figma heeft ingesteld |
| `"chat.agent.enabled": true` | Zonder dit kan Copilot niet echt communiceren met de server. Dit is dus de schakelaar die de integratie activeert |

::: tip Server Naming
Geef je server een herkenbare naam. In dit voorbeeld "local-sint-coleta", maar je kan ook gewoon "figma-devmode" gebruiken.
:::

### Debugging

Als je merkt dat VS Code geen verbinding maakt:

- Controleer of de MCP-server in Figma écht aanstaat
- Kijk in je terminal of poort 3845 niet al in gebruik is
- Probeer VS Code opnieuw op te starten na het wijzigen van settings.json

## Stap 9: Figma component koppelen aan VS Code

Nu alles klaarstaat, maken we de eerste echte connectie tussen Figma en VS Code.

### Dev Mode Link kopiëren

1. Selecteer in Figma je Hero-component
2. Klik rechtsboven op **Share**
3. Kies **Copy Dev Mode Link**

Dit genereert een URL die verwijst naar jouw specifieke component in Dev Mode.

### Link naar Copilot sturen

1. Ga terug naar VS Code
2. Open Copilot Chat via `CMD + SHIFT + I` (Mac) of `CTRL + SHIFT + I` (Windows)
3. Plak je link en typ bijvoorbeeld:

```
Kan je dit Figma-component bekijken via deze link: [plak hier je Dev Mode link]?
```

**Als alles goed is ingesteld, zie je dat Copilot nu verbinding maakt met de MCP-server.** Je kan hem zelfs vragen:

```
Welke properties zie je in dit component?
```

En Copilot zal antwoorden met iets als:

- Title: Hero Title
- Subtitle: Hero Subtitle
- Button1: Get Started
- Button2: Learn More

### Wat gebeurt er hier precies?

1. **Copilot haalt via MCP de metadata uit Figma**
2. **Deze metadata wordt in context gezet met jouw bestaande YAML-structuur**
3. **Copilot kan nu direct suggesties doen om YAML, Twig en CSS te genereren die overeenkomen met het Figma-design**

::: tip Voordelen
- Geen handmatig "spieken" in Figma en overschrijven
- Minder kans op typos of inconsistenties
- Directe koppeling tussen design en implementatie
:::

### Extra verdieping: Waarom dit baanbrekend is

Tot nu toe bestond er altijd een kloof tussen designers en developers. Designers leverden Figma-bestanden, developers moesten die interpreteren en omzetten. Vaak ging daar veel informatie verloren.

Met MCP en Copilot verandert dit fundamenteel:

- **Design is data**: Figma levert niet alleen pixels, maar ook properties (namen, structuren, componentvarianten)
- **AI begrijpt beide kanten**: Copilot kan zowel code schrijven als design-informatie lezen
- **Sneller itereren**: Als de designer een knop toevoegt in Figma, kan je die dezelfde dag nog in Drupal laten verschijnen, zonder dat iemand er manueel code voor schrijft

**Dit sluit aan bij grotere trends in de sector:**

- Design-to-code tools zoals Anima, Locofy en Framer
- Low-code CMS waarbij non-developers pagina's kunnen samenstellen
- AI-assisted development, waarbij developers meer curatoren worden dan codekloppers

### Vooruitblik naar Stap 10

Nu Copilot jouw Figma-component kan zien, is het tijd om hem écht werk te laten doen. In de volgende stap gaan we de YAML die we eerder maakten combineren met de Figma-data, en Copilot de rest laten genereren:

- Een complete `.component.yml`
- Een `.twig` bestand voor de markup
- Een `.css` bestand met styling

**Kortom: de échte automatisatie.** 🚀

## Deel 3 – YAML naar Copilot en testen in Drupal

## Stap 10: YAML aan Copilot geven

Tot nu toe hebben we drie dingen klaarstaan:

1. **Een Drupal 11 project** met DDEV, modules en het Classy theme
2. **Een Figma-component** (de Hero) dat klaar is in Dev Mode
3. **Een basis YAML-structuur** (`structuur.component.yml`) die Copilot kan gebruiken als voorbeeld

Nu is het tijd om de echte AI-magie te laten gebeuren.

### Waarom YAML eerst?

Je kan Copilot natuurlijk meteen vragen: *"Maak een Drupal-component voor dit Figma-design"*. Maar dat levert vaak rommel op: de AI moet dan gokken welke structuur Drupal verwacht.

Door eerst een voorbeeld-YAML te geven, zeg je eigenlijk tegen Copilot:
**"Dit is hoe ik wil dat jij werkt. Hou je exact aan dit patroon."**

Dat maakt de kans op fouten veel kleiner, en Copilot zal de volgende componenten volgens diezelfde logica opbouwen.

### Het YAML-bestand aan Copilot geven

1. Ga in VS Code naar je map `web/themes/classy/components/structuur/`
2. Sleep het bestand `structuur.component.yml` naar het Copilot chatvenster
3. Copilot herkent automatisch dat dit YAML is. Je ziet vaak een melding zoals:
   *"I see this is a Drupal UI Patterns component definition in YAML."*

### De prompt voor Copilot

Hier komt het belangrijke stuk. Je wil Copilot niet gewoon "laten raden", maar hem een duidelijke taak geven. Hieronder staat een prompt die je letterlijk kan copy-pasten in je tutorial.

```
Hey Copilot, ik heb een component in YAML dat ik gebruik met Drupal UI Patterns.  
Bestudeer dit bestand en gebruik het als basis.  

Wanneer ik je een component geef (via YAML of via een Figma Dev Mode link), wil ik dat jij automatisch een complete setup maakt met:  
1. Het `.component.yml` bestand met alle properties die in Figma aanwezig zijn (bv. titel, beschrijving, knoppen, afbeeldingen, …).  
2. Een `.twig` bestand waarin die properties correct worden weergegeven.  
3. Een `.css` bestand waarin de styling gebeurt, zoveel mogelijk gelijkend op het Figma-design.  
4. Alles samen in een eigen map per component (bv. `/components/[component-naam]/`).  

⚠️ Belangrijk:  
- Als er in Figma meerdere varianten of meerdere knoppen zijn, voeg dan ook meerdere properties toe (bv. `button1_text`, `button2_text`, …).  
- Zorg dat de Twig alleen iets toont als de property ingevuld is.  
- Gebruik semantische HTML en nette CSS-classes (bv. `.hero-buttons`).  
- Zet knoppen en varianten netjes naast elkaar met flexbox of grid, zodat het design overeenkomt met Figma.  

Hou je altijd aan de Drupal UI Patterns structuur:  
- `[component].component.yml`  
- `[component].twig`  
- `[component].css`
```

### Wat doet Copilot nu?

Stel dat je Hero in Figma de volgende properties heeft:

- **Title**: "Welkom bij onze site"
- **Subtitle**: "Bouwen met AI en design systems"
- **Button1**: "Get Started" (link: `/start`)
- **Button2**: "Learn More" (link: `/docs`)
- **Image**: een achtergrondfoto

Copilot zal dan het volgende doen:

#### Hero.component.yml uitbreiden:
- Properties toevoegen voor `title`, `subtitle`, `image`, `button1_text`, `button1_url`, `button2_text`, `button2_url`
- Een "default variant" behouden

#### Hero.twig genereren:
- HTML markup maken die de properties netjes weergeeft
- Bijvoorbeeld: titel in `<h1>`, subtitel in `<p>`, knoppen in `<a>`-tags
- Enkel tonen wat ingevuld is (geen lege knoppen)

#### Hero.css genereren:
- Styling toevoegen met flexbox voor de knoppen
- Knoppen stijlen volgens Figma (primair = blauw, secundair = wit met rand)
- Responsieve layout voorzien

**Resultaat**: een complete Hero-component die 1-op-1 aansluit bij je Figma-design.

### Best practices bij Copilot-prompts

Uit ervaring werken deze tips goed:

- **Geef Copilot kleine taken**: Vraag hem eerst alleen om YAML + Twig, daarna pas CSS. Zo hou je meer controle
- **Wees expliciet over Drupal**: Soms denkt Copilot dat je in React of Vue werkt. Zet er altijd bij: "Dit is voor Drupal UI Patterns"
- **Vraag om uitleg**: Laat Copilot zijn keuzes toelichten. Zo snap je beter waarom hij bepaalde properties of classes toevoegt
- **Gebruik voorbeelden**: Je kan zeggen: "Volg dezelfde stijl als in mijn structuur.component.yml"

### Voorbeeld output

Dit zou Copilot kunnen teruggeven (ingekort voorbeeld):

#### hero.component.yml

```yaml
name: Hero
status: experimental
description: Hero component gebaseerd op Figma design
group: Figma

variants:
  default:
    title: Default

props:
  type: object
  properties:
    title:
      type: string
      title: Titel
    subtitle:
      type: string
      title: Subtitel
    image_url:
      type: string
      title: Achtergrondafbeelding
    button1_text:
      type: string
      title: Primaire knop tekst
    button1_url:
      type: string
      title: Primaire knop link
    button2_text:
      type: string
      title: Secundaire knop tekst
    button2_url:
      type: string
      title: Secundaire knop link
```

#### hero.twig

```twig
<section class="hero" style="background-image: url('{{ image_url }}')">
  <div class="hero-content">
    {% if title %}
      <h1>{{ title }}</h1>
    {% endif %}
    {% if subtitle %}
      <p>{{ subtitle }}</p>
    {% endif %}
    <div class="hero-buttons">
      {% if button1_text and button1_url %}
        <a href="{{ button1_url }}" class="btn btn-primary">{{ button1_text }}</a>
      {% endif %}
      {% if button2_text and button2_url %}
        <a href="{{ button2_url }}" class="btn btn-secondary">{{ button2_text }}</a>
      {% endif %}
    </div>
  </div>
</section>
```

#### hero.css

```css
.hero {
  background-size: cover;
  background-position: center;
  padding: 80px 40px;
  text-align: center;
}

.hero h1 {
  font-size: 3rem;
  margin-bottom: 20px;
}

.hero-buttons {
  display: flex;
  gap: 16px;
  justify-content: center;
}

.btn-primary {
  background: #007bff;
  color: #fff;
  padding: 12px 24px;
  border-radius: 6px;
  text-decoration: none;
}

.btn-secondary {
  background: #fff;
  color: #000;
  border: 1px solid #ccc;
  padding: 12px 24px;
  border-radius: 6px;
  text-decoration: none;
}
```

**Met één prompt heb je dus een volledig werkend component.** 🚀

## Stap 11: Testen in Drupal

Oké, we hebben nu een componentmap met drie bestanden (`.yml`, `.twig`, `.css`). Tijd om dit zichtbaar te maken in Drupal.

### Cache legen met Drush

In je terminal:

```bash
ddev drush cr
```

#### Wat dit doet:

- **"cr"** = cache rebuild
- Drupal bewaart enorm veel in cache om sneller te laden. Nieuwe componenten verschijnen pas nadat je de cache wist

::: tip Cache Management
Dit ga je vaak doen tijdens development. Onthoud dus: **"Als ik iets niet zie, eerst drush cr draaien."**
:::

### Je component terugvinden

1. Ga naar je Drupal site in de browser
2. Hover in de bovenbalk over **Appearance**
3. Klik op **UI Patterns → Components**

Hier zie je nu een lijst met alle beschikbare componenten. Als alles goed ging, staat daar jouw Hero-component.

::: warning Styling
Het zal nog kaal ogen — waarschijnlijk zonder de Figma-styling. Dat is normaal. De CSS is er wel, maar je moet hem nog goed koppelen en gebruiken in een pagina-layout.
:::

### Debugging

| Probleem | Oplossing |
|----------|-----------|
| **Zie je de Hero niet?** | Check of je mapnaam correct is. Moet `components/hero/` zijn |
| **Foutmelding over Twig?** | Misschien een typo in je `.twig`-bestand (controleer syntax) |
| **Lege velden?** | Mogelijk heten je properties anders in YAML en Twig. Zorg dat die 1-op-1 overeenkomen |

### Waarom dit belangrijk is

Op dit punt is de cirkel bijna rond:

- ✅ Je hebt een design in Figma
- ✅ Je hebt YAML + Twig + CSS automatisch laten genereren
- ✅ Je ziet het component verschijnen in Drupal

**Dit is iets waar bedrijven normaal dagen werk aan kwijt zijn. Jij hebt het in minder dan een uur staan.** 🤯

### Vooruitblik naar volgende stappen

Nu wordt het pas echt interessant: we gaan niet alleen componenten zien, maar ook koppelen aan Drupal Content Types en de Layout Builder. Daarmee kan je content editors (mensen zonder technische kennis) laten kiezen welke tekst, knoppen en afbeeldingen in jouw component komen — zonder dat ze ooit code zien.

## Deel 4 – Content Types koppelen en Layout Builder gebruiken

Tot nu toe hebben we een werkende Hero-component in Drupal: YAML + Twig + CSS, netjes gegenereerd via Copilot, en zichtbaar in de UI Patterns Library. Dat is al een mijlpaal, maar in de praktijk wil je natuurlijk meer: je wil dat editors zonder technische kennis zelf de tekst, knoppen en afbeeldingen van dat component kunnen aanpassen via het CMS.

Dat is waar Content Types en de Layout Builder in Drupal om de hoek komen kijken. Deze twee systemen zorgen ervoor dat je componenten niet enkel "mooi" zijn, maar ook functioneel en bewerkbaar.

### Content Types in Drupal – wat en waarom?

Een Content Type is de bouwsteen van Drupal. Zie het als een sjabloon voor een bepaald soort inhoud.

**Voorbeelden:**
- Een "Blogpost" heeft meestal velden als titel, body, auteur, datum
- Een "Product" heeft misschien naam, prijs, afbeelding, beschrijving
- Een "Hero" (in ons geval) heeft titel, subtitel, knoptekst, knoplink, achtergrondafbeelding

**Door een Content Type aan te maken, kan je editors de juiste velden geven, zodat ze content invoeren zonder HTML of CSS aan te raken. Drupal vult dan automatisch jouw component met die velden.**

## Stap 12.1: Een Content Type aanmaken

1. Log in op je Drupal-site
2. Hover in de admin-balk bovenaan naar **Structure**
3. Klik op **Content types**
4. Klik op **Add content type**

Je komt nu op een pagina waar je een nieuwe content type kan definiëren.

- **Name**: geef de naam van je component, bv. "Hero"
- **Description**: iets als "Een hero-component met titel, subtitel, afbeelding en knoppen, gekoppeld aan UI Patterns"
- Klik op **Save and manage fields**

## Stap 12.2: Velden toevoegen

Nu zie je een scherm "Manage fields". Dit is de plek waar je de velden definieert die nodig zijn voor jouw component. Denk terug aan je YAML-structuur (die Copilot genereerde). Daar hadden we:

- `title`
- `subtitle`
- `image_url`
- `button1_text`
- `button1_url`
- `button2_text`
- `button2_url`

**Voor elk van deze maak je een veld aan.**

**Voorbeeld:**
1. Klik **Add field** → kies **Text (plain)** → noem dit "Title"
2. Voeg een ander veld toe: **Text (plain)** → noem dit "Subtitle"
3. Voeg een veld toe: **Image** → noem dit "Background image"
4. Voeg twee velden toe: **Text (plain)** voor `button1_text` en `button2_text`
5. Voeg twee velden toe: **Link** voor `button1_url` en `button2_url`

Na elk veld klik je op **Save and continue** en stel je indien nodig de maximumlengte in.

::: tip Waarom dit belangrijk is
Door velden toe te voegen, maak je een brug tussen redactie en component.

- **De editor** ziet gewoon velden om tekst en afbeeldingen in te vullen
- **De developer** (jij) weet dat die velden automatisch naar het juiste Twig-property gaan

Dit betekent: geen copy-paste meer van content naar code. Alles loopt via de CMS-interface.
:::

## Stap 12.3: Content toevoegen en testen

1. Ga naar de bovenbalk en klik op **Content → Add content → Hero**
2. Je krijgt nu een formulier met alle velden die je net gemaakt hebt. Vul bijvoorbeeld dit in:
   - **Title**: "Welkom bij mijn site"
   - **Subtitle**: "AI en design werken hier samen"
   - **Background image**: upload een afbeelding van Unsplash
   - **Button1_text**: "Get Started"
   - **Button1_url**: `/start`
   - **Button2_text**: "Learn More"
   - **Button2_url**: `/docs`
3. Klik op **Save**

Je hebt nu een stuk content dat alle data bevat voor jouw Hero-component. Maar hoe koppel je dat nu aan je YAML/Twig/CSS-bestanden? Dat doen we met de Layout Builder.

### Layout Builder – de visuele lijm

De Layout Builder is een van de krachtigste features van Drupal. Het laat je toe om pagina's visueel op te bouwen met secties, kolommen en blokken — vergelijkbaar met tools zoals Elementor (WordPress) of Webflow.

Maar het verschil is: **Layout Builder werkt diep geïntegreerd met Drupal's entity- en field-systeem. Daardoor kan je UI Patterns-componenten koppelen aan Content Types.**

## Stap 12.4: Layout Builder activeren voor Hero

1. Ga naar **Structure → Content types → Hero**
2. Klik op **Manage display**
3. Onderaan zie je een sectie **Layout options**. Zet een vinkje bij **Use Layout Builder**
4. Klik **Save**

Nu is Layout Builder ingeschakeld voor het Hero Content Type.

## Stap 12.5: Layout aanpassen

1. Klik in dezelfde pagina op **Manage layout**
2. Je komt nu in de Layout Builder-interface:
   - Je ziet één of meerdere standaardsecties
   - Binnen die secties zie je de velden die je zonet gemaakt hebt (title, subtitle, buttons, image)

**Maar dat is nog niet hoe wij het willen: wij willen die velden koppelen aan ons Hero-component dat Copilot gemaakt heeft.**

## Stap 12.6: Velden koppelen aan UI Patterns

1. Klik rechtsboven op **Add section**. Kies bijvoorbeeld een **1 column layout**
2. Geef de sectie een naam: "Hero"
3. Klik op **Add block** in die sectie
4. Scroll helemaal naar beneden in de lijst van blokken. Daar zie je een sectie **UI Patterns**
5. Kies je **Hero-component**

Nu opent een configuratievenster voor je component. Je ziet daar alle props die Copilot in je YAML heeft gezet (`title`, `subtitle`, `image_url`, `button1_text`, `button1_url`, `button2_text`, `button2_url`).

### De magische stap: Source koppelen

Voor elke prop kies je een **source**. Dat betekent: welk Drupal-veld moet hieraan gekoppeld worden?

**Voorbeeld:**
- `title` → Source: `[entity]` → Field: **Title** → `[field item]` → **Text value**
- `subtitle` → Source: `[entity]` → Field: **Subtitle** → `[field item]` → **Text value**
- `image_url` → Source: `[entity]` → Field: **Background image** → `[field item]` → **File URL**
- `button1_text` → Source: `[entity]` → Field: **Button 1 text** → `[field item]` → **Text value**
- `button1_url` → Source: `[entity]` → Field: **Button 1 link** → `[field item]` → **URL**
- `button2_text` → Source: `[entity]` → Field: **Button 2 text** → `[field item]` → **Text value**
- `button2_url` → Source: `[entity]` → Field: **Button 2 link** → `[field item]` → **URL**

6. Klik op **Save layout**

### Wat gebeurt er nu?

Drupal weet:
- **De data** komt uit een Content Type (ingevoerd door een editor)
- **Die data** wordt doorgestuurd naar de properties van je Hero-component
- **De component renderen** gebeurt via jouw Twig + CSS

**Resultaat: de Hero die je in Figma ontworpen hebt, verschijnt nu in Drupal — maar volledig gevuld met content die uit de CMS-velden komt.**

### Waarom dit een gamechanger is

Normaal zou je als developer hardcoded HTML moeten schrijven telkens als de content verandert. Dat kost tijd, en editors kunnen zelf niets aanpassen.

**Nu werkt het zo:**
1. **Designer** maakt een Figma-component
2. **Developer** koppelt het één keer via YAML + Copilot
3. **Editor** vult de velden in Drupal
4. **Iedereen** doet waar hij goed in is. En Drupal + Copilot doen het saaie werk.

## Best practices

### Naming conventions
- Hou je YAML-namen (bv. `button1_text`) simpel en duidelijk
- Gebruik underscores, geen spaties
- Zorg voor consistentie tussen YAML en Drupal veldnamen

### Documentatie
- Documenteer je mapping: noteer ergens welke Drupal-velden bij welke props horen
- Dit helpt nieuwe teamleden en jezelf later

### Versiebeheer
- Commit elk component apart in Git
- Gebruik duidelijke commit messages zoals `feat(hero): add YAML, twig, css`

### Herbruikbaarheid
- Denk vooruit. Misschien heb je later nog een "Card" of "Feature List"
- Gebruik dezelfde structuur zodat Copilot sneller leert

## Dankwoord

Tijdens mijn stage bij Calibrate heb ik de kans gekregen om te experimenteren met nieuwe technologieën en workflows binnen Drupal. Het idee om Figma te koppelen met Drupal via MCP en Copilot heb ik daar voor het eerst ontdekt. Dankzij de vrijheid en begeleiding op mijn stage kon ik dit concept verder uitwerken en toepassen in een realistisch project.

Een speciale dank aan mijn stagebegeleiders en het hele team van Calibrate voor hun steun en de ruimte om te leren. Zonder die ervaring had ik dit experiment en deze tutorial nooit zo concreet kunnen maken.

