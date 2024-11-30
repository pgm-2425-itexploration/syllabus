---
title: "React Storybook"
synopsis: "Storybook is een front-end ontwikkelingstool waar componenten buiten je development omgeving kan lopen en testen"
date: 2024-30-11
author:
    name: "Stijn Walravens"
    avatarUrl: "/assets/avatars/stijn-walravens.png"
    socials:
        website: ""
        linkedin: "https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile"
        github: "https://github.com/pgm-stijwalr"
thumbnailUrl: "/assets/tutorials/react-sb-thumb.png"
head:
    - - meta
      - name: description
        content: "Informatie over React Storybook"
    - - meta
      - name: keywords
        content: "react storybook front-end"
---

## Introductie:

Storybook is een krachtige en flexibele tool die speciaal is ontworpen voor frontend-ontwikkeling, en het is uitgegroeid tot een essentiële oplossing voor teams en individuele ontwikkelaars die hoogwaardige UI-componenten willen maken. Met Storybook kun je componenten in een geïsoleerde omgeving ontwikkelen, testen, documenteren en optimaliseren, zonder dat dit invloed heeft op je hoofdsysteem of applicatie. Dit maakt het een onmisbaar hulpmiddel, vooral in grotere projecten met complexe componentarchitecturen. Laten we dieper ingaan op de voordelen en mogelijkheden van Storybook en hoe het je ontwikkelproces kan verbeteren.

### **Wat is Storybook en waarom is het belangrijk?**

Storybook is een open-source tool waarmee ontwikkelaars componenten kunnen bouwen en testen in een sandbox-omgeving. In plaats van componenten in het grotere geheel van je applicatie te ontwikkelen, kun je ze in Storybook isoleren. Hierdoor kun je je concentreren op het gedrag, de stijl en de functionaliteit van individuele componenten zonder dat je te maken krijgt met context- of state-problemen die inherent zijn aan je applicatie.

De belangrijkste voordelen van Storybook zijn:

1. **Componentisolatie**: Ontwikkel componenten los van je applicatie, waardoor je bugs sneller kunt opsporen en oplossen.
2. **Visuele controle**: Bekijk componenten in verschillende configuraties en test hun gedrag in real-time.
3. **Betere samenwerking**: Designers, ontwikkelaars en stakeholders kunnen gemakkelijk toegang krijgen tot componenten en feedback geven.
4. **Documentatie**: Automatiseer de documentatie van componenten, zodat ze makkelijk te begrijpen en herbruikbaar zijn.
5. **Testing**: Test visuele regressies, interacties en edge cases van componenten.
6. **Add-ons**: Breid Storybook uit met krachtige plugins om functies zoals accessibility checks, theming en responsieve weergave te ondersteunen.

## Installatie:

Voordat we aan de slag gaan met Storybook, moeten we enkele basisstappen volgen om de tool te installeren en te configureren. Hier is hoe je Storybook kunt installeren in je project:

1. **Maak een nieuwe React-app aan**

    Als je nog geen React-app hebt, begin dan door een nieuwe applicatie te maken met behulp van Create React App. Dit kun je doen door het volgende commando in je terminal in te voeren:

    ```bash
    npx create-react-app <naam van je app>

    ```

    Dit maakt een nieuwe React-app voor je aan, compleet met alle noodzakelijke dependencies.

2. **Installeer Storybook**

    De volgende stap is om Storybook toe te voegen aan je project. Dit kun je doen door het onderstaande commando uit te voeren in de root directory van je project:

    ```bash
    npx storybook@latest init

    ```

    Dit zorgt ervoor dat de laatste versie van Storybook wordt geïnstalleerd en configureert Storybook automatisch voor je project. Na de installatie zie je twee nieuwe mappen in je projectstructuur:

    - **.storybook**: Deze map bevat de configuratiebestanden `main.js` en `preview.js`. Hier kun je Storybook instellen, zoals het toevoegen van addons, thema's, en globale configuraties.
    - **src/stories**: Dit is de map waar je de "stories" van je componenten plaatst. Deze stories isoleren je componenten en documenteren ze zodat je ze kunt testen in Storybook.

Na de installatie kun je Storybook starten door het volgende commando uit te voeren:

```bash
npm run storybook

```

Storybook wordt op een lokale server gedraaid en je kunt het openen in je browser via [http://localhost:6006](http://localhost:6006/).

### Storybook UI

Wanneer je Storybook opstart, zal de Storybook UI automatisch openen in je browser. Als dit niet automatisch gebeurt, kun je naar de URL [http://localhost:6006](http://localhost:6006/) gaan om het Storybook-dashboard te openen.

In de Storybook UI zie je verschillende navigatie- en configuratieopties die je helpen je componenten te testen en te visualiseren. Bovenaan de pagina, naast het Storybook-logo, zie je een tandwielpictogram dat toegang biedt tot de instellingen van de UI. Hier kun je de layout aanpassen naar jouw voorkeuren, de weergave-instellingen configureren, en aanvullende functionaliteiten inschakelen.

Verder is er een navigatiebalk boven de componentenweergave, waarmee je eenvoudig kunt navigeren tussen de verschillende componenten en hun verhalen. Hier kun je ook de zoominstellingen beheren en de weergave-instellingen resetten als je terug wilt naar de oorspronkelijke staat.

Laten we nu enkele van de belangrijkste iconen en functies in de Storybook UI bespreken:

### 1. **Image Icon (Lichtmodus en Donker Modus)**

Het **Image icon** in de Storybook UI maakt het mogelijk om snel te schakelen tussen lichtmodus en donker modus. Dit is handig omdat moderne applicaties vaak het systeemvoorkeur van de gebruiker volgen (licht- of donkermodus). Tijdens het ontwikkelen van je componenten kun je dus snel zien of ze goed functioneren in zowel de lichtmodus als de donkermodus.

### 2. **Grid Icon (Grids voor Structuur)**

Door op het **Grid icon** te klikken, wordt een grid-overlay toegevoegd aan de Storybook-weergave. Dit kan handig zijn wanneer je componenten maakt die afhankelijk zijn van een specifieke lay-out of structuur, zoals knoppen, kaarten of andere UI-elementen. Het grid helpt je visueel te controleren of je componenten goed zijn uitgelijnd en of ze de juiste dimensies hebben.

### 3. **Viewports (Testen op Verschillende Apparaten)**

Het **Viewport icon** in Storybook stelt je in staat om te testen hoe je componenten eruitzien op verschillende schermformaten. Standaard kun je kiezen tussen verschillende viewports, zoals kleine mobiele telefoons, grote mobiele telefoons en tablets. Het is belangrijk om te controleren hoe je componenten reageren op verschillende schermgroottes, vooral als je werk maakt voor een breed scala aan apparaten.

Er is ook een optie om de viewport-instellingen aan te passen, zoals de breedte en hoogte, zodat je de weergave kunt testen op op maat gemaakte afmetingen. Je kunt altijd terugkeren naar de desktopweergave door de optie **"Reset viewport"** te selecteren.

### 4. **Measure (Meten van Elementen)**

De **Measure tool** in Storybook is een handige functie waarmee je de afmetingen van je componenten kunt controleren. Wanneer je de meettool inschakelt, kun je de muis over een specifiek element binnen je component bewegen om de breedte en hoogte (in pixels) van dat element te zien. Dit helpt bij het snel verifiëren van de afmetingen en zorgt ervoor dat je componenten de juiste grootte hebben.

### 5. **Outline (Duidelijke Dimensies Weergeven)**

De **Outline** optie is een handige manier om de grenzen van elk element in je component te visualiseren. Dit wordt weergegeven als een blauw outline rond elk element, wat het makkelijker maakt om te zien hoe de elementen zich in de ruimte bevinden en welke afmetingen ze precies hebben. Dit kan vooral nuttig zijn bij het testen van de lay-out van je componenten en het oplossen van eventuele layoutproblemen.

### Geavanceerde Functies en Addons

Naast de standaardfunctionaliteiten van Storybook, zijn er talloze addons beschikbaar die je verder kunnen helpen bij het ontwikkelen en testen van je componenten. Addons kunnen extra functionaliteit bieden zoals het aanpassen van achtergronden, het toevoegen van interactie logs, en het beheren van thema's. In de volgende sectie van deze tutorial zullen we enkele van de populairste addons onderzoeken die je kunt gebruiken om je componenten nog verder te verbeteren.

Door Storybook te gebruiken en addons toe te voegen, kun je je componenten in een gecontroleerde omgeving testen en ervoor zorgen dat ze werken zoals verwacht voordat je ze in je hoofdapplicatie gebruikt. Dit verbetert de kwaliteit van je code, verhoogt de snelheid van ontwikkeling, en zorgt voor betere samenwerking met je team.

## BasisFunctionaliteit

We gaan nu een herbruikbare button component aanmaken met verschillende variaties van grootte. Het betreft een props validation via PropTypes om zeker te zijn dat onze component het juiste types ontvangt. Onze button heeft ook dynamische styling met onze props, zoals size en backgroundColor.

In onze src/components maken we een bestand button.js aan:

(als deze er niet staat maak het maar aan)

### Stap 1 import and setup.

In de component wordt **PropTypes** geïmporteerd voor runtime type-checking van de props. De **Button** component wordt geconfigureerd met dynamische styling gebaseerd op de ontvangen props in deze workshop maken we gebruik van bijvoorbeeld `backgroundColor`, `size`, en `handleClick`.

```
import PropTypes from "prop-types";

function Button() {
    return (
        <div>
            {label}
        </div>
    );
}

export default Button;
```

### Stap 2 Props vaststellen

Onze button accepteerd volgende props:

label: Een string dat onze button text laat tonen

backgroundColor: het achtergrond kleur van onze knop staat op default “`red`”

`size`: Door middel van onze padding aan te passen, zal het grote van onze knop worden aangepast naar `“sm”, “md”` en `“lg”` default zal “md” zijn in onze geval.

handleClick: een function dat wordt opgeroepen waaneer onze knop wordt gedrukt.

```
Button.propTypes = {
    label: PropTypes.string,
    backgroundColor: PropTypes.string,
    size: PropTypes.oneOf(["sm", "md", "lg"]),
    handleClick: PropTypes.func,
};
```

### Stap 3 Dynamic Styling

Onze style object zal dynamisch the knop appearance aanpasssen aan de hand van onze props dat we gaan meegeven.

-   **`backgroundColor`**: Stelt onze achtergrond kleur vast
-   **`padding`**: Het aanpassen van onze `scale` variable aan de hand van onze `size` prop.
-   **`border`**, **`borderRadius`**, en **`boxShadow`**: Extra toevoeging die niet er in moet maar in deze geval is het puur voor onze knop, mooi te doen lijken.
-   **`width`**: Onze breedt heeft `"fit-content"` zodat onze knop kan worden aangepasten aan de hand van onze text
-   **`color`**: Om het tekst kleur aan te passen en in deze workshop gaan we het simpel houden dus gaan we deze in het zwart zetten

-   De `scale` variable zal onze knop proportioneel schalen
    -   `"sm"`: Schaalt onze knop kleiner tot 75% van onze default size.
    -   `"lg"`: Schaalt onze knop groter tot 125% van onze default size..
    -   `"md"`: Gebruikt default scale van `1`.

```jsx
let scale = 1;
if (size === "sm") scale = 0.75;
if (size === "lg") scale = 1.5;
const style = {
    backgroundColor,
    padding: `${scale * 0.5}rem ${scale * 1}rem`,
    border: "none",
    borderRadius: `0.5rem`,
    boxShadow: "0 0 0.5rem rgba(0, 0, 0, 0.1)",
    width: "fit-content",
    color: "black",
};
```

### 4. **Event Handling**

-   Het `onClick`-event is gekoppeld aan het `<div>`-element. Dit event activeert de functie `handleClick`, die wordt meegegeven als prop, telkens wanneer op de knop wordt geklikt.

```
    return (
        <div onClick={handleClick} style={style}>
            {label}
        </div>
    );
```

### 5. **Validatie van Props**

-   Het object `propTypes` definieert de types en mogelijke waarden voor elke prop:

    -   **`label`**: Moet een string zijn.
    -   **`backgroundColor`**: Moet een string zijn (optioneel).
    -   **`size`**: Moet één van `"sm"`, `"md"` of `"lg"` zijn.
    -   **`handleClick`**: Moet een functie zijn.

    ```
    function Button({ label, backgroundColor = "red", size = "md", handleClick }) {
        let scale = 1;
        if (size === "sm") scale = 0.75;
        if (size === "lg") scale = 1.5;
        const style = {
            backgroundColor,
            padding: `${scale * 0.5}rem ${scale * 1}rem`,
            border: "none",
            borderRadius: `0.5rem`,
            boxShadow: "0 0 0.5rem rgba(0, 0, 0, 0.1)",
            width: "fit-content",
            color: "black",
        };
        return (
            <div onClick={handleClick} style={style}>
                {label}
            </div>
        );
    }

    ```

### 6. **Standaard Export**

-   De `Button`component wordt geëxporteerd met `export default Button`, waardoor deze beschikbaar is om te importeren in andere bestanden.

### Nu in onze src/stories maken we een folder Button.stories.js aan.

---

### 1. **Component Importeren**

-   De `Button`component wordt geïmporteerd vanuit de `components`map. Dit is de component die je in Storybook wilt tonen en testen.

```
import Button from "../components/Button";

export default {
};
```

### 2. **Metadata Definitie**

-   **`title`**: Bepaalt hoe de `Button`component in Storybook wordt georganiseerd. Het zal verschijnen onder de categorie **"Components"** met de naam **"Button"**.
-   **`component`**: Verwijst naar de `Button`component die wordt gebruikt in de verhalen.
-   **`argTypes`**: Specificeert welke eigenschappen interactief zijn in Storybook:
    -   `handleClick`: Dit voegt een actie toe die het klikken van de knop logt in de **Actions-tab** van Storybook.

```jsx
import Button from "../components/Button";

export default {
    title: "Components/Button",
    component: Button,
    argTypes: { handleClick: { action: "handleClick" } },
};

// Each story now directly exports an object with args in CSF3 syntax
export const Card = {
    args: {
        backgroundColor: "#ffffff",
        label: "Press Me",
        size: "md",
    },
};
```

### Voorbeeld:

-   **Story Naam**: Button is de naam van deze specifieke story.
-   **`args`**: Specificeert de waarden van de props die worden doorgegeven aan de `Button`component:
    -   **`backgroundColor`**: Stelt de achtergrondkleur in op wit.
    -   **`label`**: Toont de tekst "Press Me" op de knop.
    -   **`size`**: Stelt de grootte van de knop in op medium (**"md"**).

Zo moet je beide folders er nu uit zien

```jsx
// src/components/Button.js

import PropTypes from "prop-types";

function Button({ label, backgroundColor = "red", size = "md", handleClick }) {
    let scale = 1;
    if (size === "sm") scale = 0.75;
    if (size === "lg") scale = 1.5;
    const style = {
        backgroundColor,
        padding: `${scale * 0.5}rem ${scale * 1}rem`,
        border: "none",
        borderRadius: `0.5rem`,
        boxShadow: "0 0 0.5rem rgba(0, 0, 0, 0.1)",
        width: "fit-content",
        color: "black",
    };
    return (
        <div onClick={handleClick} style={style}>
            {label}
        </div>
    );
}

Button.propTypes = {
    label: PropTypes.string,
    backgroundColor: PropTypes.string,
    size: PropTypes.oneOf(["sm", "md", "lg"]),
    handleClick: PropTypes.func,
};

export default Button;
```

```jsx
// src/stories/Button.stories.js

import Button from "../components/Button";

export default {
    title: "Components/Button",
    component: Button,
    argTypes: { handleClick: { action: "handleClick" } },
};

export const Card = {
    args: {
        backgroundColor: "#ffffff",
        label: "Press Me",
        size: "md",
    },
};

export const Green = {
    args: {
        backgroundColor: "green",
        label: "Press Me",
        size: "md",
    },
};

export const Small = {
    args: {
        backgroundColor: "red",
        label: "Press Me",
        size: "sm",
    },
};

export const Large = {
    args: {
        backgroundColor: "red",
        label: "Press Me",
        size: "lg",
    },
};

export const LongLabel = {
    args: {
        backgroundColor: "red",
        label: "Press Me adsf asdf asdf asdfasdfasd fasd fasd fasd",
        size: "md",
    },
};
```

## Geavanceerde functionaliteiten in Storybook

Storybook biedt een krachtige set van geavanceerde functionaliteiten waarmee je de kwaliteit van je componenten verder kunt verbeteren en de gebruikerservaring van je ontwikkelproces kunt optimaliseren. Naast de basisfunctionaliteit voor het ontwikkelen en testen van componenten, kunnen addons een grote rol spelen in het verrijken van de ervaring. Addons voegen extra functies toe die de Storybook UI veelzijdiger maken en nog meer op maat van je behoeften laten aansluiten. Laten we eens kijken naar enkele van de belangrijkste addons die we kunnen installeren en hoe ze je ontwikkelproces kunnen verbeteren.

### Installeren van Addons

Voordat we de geavanceerde functies kunnen gebruiken, moeten we enkele addons installeren die specifiek gericht zijn op het verbeteren van je ervaring met Storybook. Deze addons worden vaak aangeduid als "Essential addons" vanwege hun nuttige functionaliteit, die het gebruik van Storybook nog krachtiger maakt.

De eerste stap is om de benodigde dependencies via npm te installeren. Dit kan eenvoudig worden gedaan door het volgende commando in je terminal uit te voeren:

```bash
npm i @storybook/addon-themes
```

Zodra je de basis-addon hebt geïnstalleerd, kun je verder gaan met de installatie van de aanvullende addons die Storybook nog veelzijdiger maken. Hier is een overzicht van enkele populaire en nuttige addons:

### 1. `@storybook/addon-viewport`

Een van de meest waardevolle addons voor frontend-ontwikkelaars is de **`@storybook/addon-viewport`**. Deze addon maakt het mogelijk om de weergave van je componenten te testen in verschillende schermformaten en resoluties. Dit is van essentieel belang voor het ontwikkelen van responsieve componenten die goed werken op zowel desktop- als mobiele apparaten.

De **viewport**-addon biedt vooraf gedefinieerde schermformaten, zoals populaire smartphones en tablets (bijvoorbeeld iPhone, iPad, en desktop), zodat je kunt zien hoe je componenten eruitzien op verschillende apparaten. Dit helpt je niet alleen bij het testen van de visuele weergave van je componenten, maar ook bij het identificeren van problemen die specifiek zijn voor bepaalde schermformaten.

Bijvoorbeeld, je kunt de Storybook UI aanpassen en simuleren hoe een knop of een formulier eruitziet op een klein mobiel scherm versus een groot desktop-scherm. Dit zorgt ervoor dat je componenten goed schalen en functionele gebruikerservaringen bieden voor gebruikers op verschillende apparaten.

Om deze addon te installeren, gebruik je de volgende npm-opdracht:

```bash
npm i -D @storybook/addon-viewport
```

```jsx
// .storybook/main.js
addons: [
				"@storybook/preset-create-react-app",
        "@storybook/addon-onboarding",
        "@storybook/addon-essentials",
        "@chromatic-com/storybook",
        "@storybook/addon-interactions",
        "@storybook/addon-viewport",   // add this
    ],

// .storybook/preview.js
// voeg dit toe boven aan je pagina onder @type
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import path from "path";

const preview ={
parameters: {
        viewport: {
            viewports: INITIAL_VIEWPORTS,
            defaultViewport: "ipad",        // choose default according to your preference
        }, }
```

### 2. `@storybook/addon-backgrounds`

Als je componenten ontwikkelt, is het belangrijk om ervoor te zorgen dat ze goed werken op verschillende achtergrondkleuren. De **`@storybook/addon-backgrounds`** addon biedt de mogelijkheid om de achtergrondkleur van je verhalen in Storybook te wijzigen, zodat je kunt testen hoe je componenten eruitzien tegen verschillende achtergronden. Dit is met name handig wanneer je componenten hebt die afhankelijk zijn van de achtergrondkleur voor hun visuele aantrekkingskracht, zoals knoppen, kaarten of modale vensters.

Met deze addon kun je de kleuren eenvoudig aanpassen en testen om te zien hoe je componenten zich gedragen in verschillende kleurenschema's. Het stelt je in staat om een breder scala aan visuele scenario's te simuleren zonder dat je je code telkens hoeft aan te passen.

Om deze addon te installeren, voer je het volgende commando uit:

```bash
npm i -D @storybook/addon-backgrounds
```

```jsx
// .storybook/main.js
addons: [
				// previous addons
				"@storybook/addon-viewport",
        "@storybook/addon-backgrounds",
    ],

// .storybook/preview.js
parameters: {
        viewport: {
            viewports: INITIAL_VIEWPORTS,
            defaultViewport: "ipad",        // choose default according to your preference
        },
        backgrounds: {
            values: [
                // 👇 Default values
                { name: "Dark", value: "#333" },
                { name: "Light", value: "#F7F9F2" },
                // 👇 Add your own
                { name: "Maroon", value: "#400" },
            ],
            // 👇 Specify which background is shown by default
            default: "Light",
        },
```

### 3. `@storybook/addon-storysource`

De **`@storybook/addon-storysource`** is een addon die bijzonder handig is voor documentatie- en ontwikkelingsdoeleinden. Het toont de broncode van je verhalen direct in de Storybook-interface, zodat je niet alleen de componenten zelf kunt zien, maar ook de daadwerkelijke code die gebruikt wordt om de componenten weer te geven.

Dit is een uitstekende manier om andere ontwikkelaars inzicht te geven in hoe de componenten zijn opgebouwd en zorgt ervoor dat de documentatie synchroon loopt met de daadwerkelijke implementatie. De addon maakt het mogelijk om gemakkelijk de structuur van de componenten te begrijpen en hoe de props worden doorgegeven, zonder dat je door verschillende bestanden hoeft te navigeren.

Om de addon te installeren, gebruik je de volgende opdracht:

```bash
npm i @storybook/addon-storysource --dev
```

```jsx
addons: [
				// previous addons
				"@storybook/addon-viewport",
        "@storybook/addon-backgrounds",
    ],

// .storybook/preview.js
parameters: {

			//

       controls: {
            matchers: {
                color: /(background|color)$/i,    // this is in by default
                date: /Date$/i,
            },
        },

       addons: [
            {
                name: "@storybook/addon-storysource",
                options: {
                    rule: {
                        // test: [/\.stories\.jsx?$/], This is default
                        include: [
                            path.resolve(
                                __dirname,
                                "../src/stories/**/*.stories.js"
                            ),
                        ],
                    },
                    loaderOptions: {
                        prettierConfig: { printWidth: 80, singleQuote: false },
                    },
                },
            },
        ],
```

### 4. `@storybook/addon-actions`

De **`@storybook/addon-actions`** is een van de populairste addons in Storybook, vooral voor het testen van interacties. Deze addon registreert acties zoals klikgebeurtenissen, zodat je kunt zien hoe je componenten reageren op interacties binnen de Storybook UI. Dit is nuttig voor het testen van knoppen, formulieren en andere interactieve elementen die gebruikersacties vereisen.

Wanneer je bijvoorbeeld op een knop klikt, kun je in de Actions-tab zien welke functies worden aangeroepen en met welke gegevens. Dit maakt het gemakkelijk om te testen of je componenten correct reageren op gebruikersinvoer en biedt waardevolle feedback tijdens de ontwikkeling.

Om de addon toe te voegen aan je project, voer je het volgende uit:

```bash
npm i -D @storybook/addon-actions
```

### 5. `@storybook/addon-links`

De **`@storybook/addon-links`** is een handige addon die het mogelijk maakt om componenten met elkaar te koppelen binnen Storybook. Dit is vooral nuttig wanneer je bijvoorbeeld verschillende staten van een component wilt tonen of een flow wilt testen die meerdere componenten met elkaar verbindt. Met deze addon kun je eenvoudig door je componenten navigeren en de interacties tussen verschillende delen van je UI visualiseren.

Het gebruik van **links** helpt om je componenten te testen in het context van de grotere applicatie, zodat je kunt zien hoe ze samenwerken.

De installatie van de **`@storybook/addon-links`** addon gaat als volgt:

```bash
npm i -D @storybook/addon-links
```

### Samenvatting

Door het gebruik van Storybook addons kun je je componenten niet alleen testen op verschillende schermformaten en resoluties, maar kun je ook de broncode documenteren, de interactie met componenten loggen en de visuele elementen aanpassen aan verschillende achtergronden en thema's. Deze krachtige functionaliteiten verbeteren je ontwikkelervaring aanzienlijk en zorgen ervoor dat je componenten consistent en goed gedocumenteerd zijn.

Het installeren van deze addons kan eenvoudig via npm en na installatie kunnen ze direct worden gebruikt in je Storybook-configuratie. Elk van deze addons voegt een nieuwe laag van functionaliteit toe die essentieel kunnen zijn, vooral naarmate je project groter wordt en de behoeften complexer worden.

Momenteel hebben onze main.js:

```
/** @type { import('@storybook/react-webpack5').StorybookConfig } */
const config = {
    stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
    addons: [
        "@storybook/preset-create-react-app",
        "@storybook/addon-onboarding",
        "@storybook/addon-essentials",
        "@chromatic-com/storybook",
        "@storybook/addon-interactions",
        "@storybook/addon-viewport",
        "@storybook/addon-backgrounds",
        "@storybook/addon-storysource",
    ],
    framework: {
        name: "@storybook/react-webpack5",
        options: {},
    },
    staticDirs: ["../public"],
};
export default config;

```

in onze preview.js

```
/** @type { import('@storybook/react').Preview } */
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import path from "path"; // Import the 'path' module

const preview = {
    parameters: {
        viewport: {
            viewports: INITIAL_VIEWPORTS,
            defaultViewport: "ipad",
        },
        backgrounds: {
            values: [
                // 👇 Default values
                { name: "Dark", value: "#333" },
                { name: "Light", value: "#F7F9F2" },
                // 👇 Add your own
                { name: "Maroon", value: "#400" },
            ],
            // 👇 Specify which background is shown by default
            default: "Light",
        },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
        addons: [
            {
                name: "@storybook/addon-storysource",
                options: {
                    rule: {
                        // test: [/\.stories\.jsx?$/], This is default
                        include: [
                            path.resolve(
                                __dirname,
                                "../src/stories/**/*.stories.js"
                            ),
                        ],
                    },
                    loaderOptions: {
                        prettierConfig: { printWidth: 80, singleQuote: false },
                    },
                },
            },
        ],
    },
};

export default preview;

```

## Best Practices

Na het opzetten van deze Storybook-workshop kunnen de volgende best practices worden afgeleid om ervoor te zorgen dat je effectief met Storybook werkt in je projecten:

### 1. **Modulariteit en Herbruikbaarheid**

-   **Component-gebaseerde benadering**: Ontwikkel altijd je componenten op een manier die herbruikbaar is in verschillende delen van je applicatie. Gebruik Storybook om deze componenten te testen en ervoor te zorgen dat ze robuust zijn.
-   **Props validatie**: Zorg ervoor dat je props altijd valideert met behulp van `PropTypes` (of TypeScript als je dat gebruikt) om fouten te voorkomen en om te zorgen dat de componenten correct worden gebruikt. Dit helpt bij de leesbaarheid en onderhoudbaarheid van je code.

### 2. **Gebruik van Addons**

-   **@storybook/addon-viewport**: Het is een best practice om de verschillende viewports te testen zodat je componenten goed reageren op verschillende schermgroottes, zoals mobiel, tablet en desktop.
-   **@storybook/addon-backgrounds**: Test je componenten op verschillende achtergronden en thema's. Dit helpt om ervoor te zorgen dat de UI consistent is, ongeacht de achtergrondkleuren die mogelijk worden gebruikt in je applicatie.
-   **@storybook/addon-actions**: Gebruik deze addon om interacties zoals klikacties en hover-effecten te loggen en visualiseren in de Storybook UI. Dit is handig voor het testen van de dynamische interacties van je componenten.
-   **@storybook/addon-storysource**: Gebruik deze addon om de broncode van je componenten direct in de Storybook-interface te bekijken. Dit helpt bij documentatie en zorgt ervoor dat anderen snel begrijpen hoe een component is opgebouwd.

### 3. **Story Structuur en Organisatie**

-   **Gebruik CSF3 (Component Story Format versie 3)**: Het is de aanbevolen manier om verhalen te schrijven, omdat het eenvoudiger te onderhouden is en beter past bij de evolutie van Storybook. Hiermee kun je gemakkelijker dynamische verhalen creëren en interacties testen.
-   **Verhalen groeperen**: Organiseer je verhalen logisch. Bijvoorbeeld, je kunt ze groeperen op componenttype (zoals knoppen, formuliervelden, kaarten), en dit maakt het gemakkelijker om door je Storybook-voorstellingen te navigeren.

### 4. **Interactiviteit en Statebeheer**

-   Zorg ervoor dat je componenten interactief zijn in Storybook. Dit betekent dat je acties kunt uitvoeren (zoals klikken) en dat je de status van de componenten kunt wijzigen (zoals in/uitgeschakeld, hoveren, etc.). Dit verhoogt de bruikbaarheid van je verhalen.
-   Gebruik **args** om de status van je componenten dynamisch te beheren en zorg ervoor dat ze gemakkelijk kunnen worden aangepast zonder de code opnieuw te hoeven schrijven.

### 5. **Documentatie en Toegankelijkheid**

-   **Storybook als documentatie**: Gebruik Storybook niet alleen als een testtool, maar ook als documentatie voor je componenten. Voeg duidelijke beschrijvingen en voorbeelden toe, zodat andere ontwikkelaars snel begrijpen hoe de componenten werken en hoe ze moeten worden gebruikt.
-   **Toegankelijkheid**: Test je componenten op toegankelijkheid. Storybook heeft enkele ingebouwde hulpmiddelen en addons (zoals **@storybook/addon-a11y**) die je kunnen helpen om ervoor te zorgen dat je componenten toegankelijk zijn voor gebruikers met een beperking.

### 6. **Consistentie in Styling**

-   Gebruik dynamische styling op basis van props om de componenten flexibel te houden, maar houd altijd rekening met de algehele consistentie van je UI/UX. Storybook helpt om deze visuele consistentie te testen.
-   Zorg ervoor dat componenten niet te veel afhankelijk zijn van specifieke stijlen. Geef ze eerder een set generieke stijlen die kunnen worden aangepast door middel van props.

### 7. **Tests en Validatie**

-   **Visuele tests**: Integreer Storybook met visuele regressietests (bijv. **Percy**, **Chromatic**) om ervoor te zorgen dat visuele veranderingen in componenten geen onbedoelde gevolgen hebben voor de interface.
-   **Unit en integration tests**: Hoewel Storybook geweldig is voor visuele tests, is het ook belangrijk om je componenten te testen met unit- en integratietests (bijv. **Jest**, **React Testing Library**) om ervoor te zorgen dat ze functioneel correct zijn.

### 8. **Versiebeheer**

-   Zorg ervoor dat Storybook altijd up-to-date is met de laatste versie. Dit is belangrijk om te profiteren van nieuwe functies, verbeteringen en bugfixes. Pas op want sommige addons kunnen ook niet up to date zijn

### 9. **Maak je componenten interactief in Storybook**

-   Storybook biedt verschillende manieren om componenten interactief te maken, bijvoorbeeld door het toevoegen van knoppen of formulierwaarden die de componentstatus dynamisch veranderen. Dit kan vooral handig zijn voor het testen van complexere interacties en de gebruikerservaring.

Door deze best practices te volgen, kun je Storybook effectief gebruiken als onderdeel van je frontend ontwikkelproces, wat leidt tot meer robuuste, herbruikbare en goed gedocumenteerde componenten.

## Toekomstige Updates

Wat staat er op de planning voor 2024?

Na een intensief jaar in 2023, waarin het Storybook-team veel aandacht besteedde aan het onderhoud van hun ontwikkeltool en het verbeteren van bestaande functionaliteiten, hebben ze hun focus in 2024 verlegd naar nieuwe productgebieden. Het komende jaar staat in het teken van innovatie, uitbreiding en versterking van de kernmogelijkheden van Storybook, met drie belangrijke focuspunten die de koers bepalen.

### Applicatieontwikkeling

De grootste investering voor 2024 is gericht op applicatieontwikkeling. Storybook staat al lang bekend als een krachtige tool voor geïsoleerde componentontwikkeling en het opzetten van design systemen, maar het potentieel reikt veel verder. In 2024 wordt er sterk ingezet op het ondersteunen van complexe applicaties, waaronder verbonden componenten en zelfs volledige full-stack applicaties.

De nadruk ligt op het verbeteren van testmogelijkheden binnen Storybook, zodat ontwikkelaars niet alleen losse componenten, maar ook complete gebruikersstromen betrouwbaar en snel kunnen testen in een geïsoleerde omgeving. Dit biedt enorme voordelen voor teams die streven naar een gestroomlijnd ontwikkelproces en consistente eindresultaten. Storybook zal zich ontwikkelen tot een onmisbare tool voor teams die applicaties bouwen met een hoog niveau van complexiteit.

### Ondersteuning voor niet-React-frameworks

Hoewel React nog steeds een belangrijke pijler is binnen de Storybook-community, blijft het team in 2024 ook fors investeren in het ondersteunen van niet-React-frameworks. Ze begrijpen dat ontwikkelaars steeds vaker frameworks zoals Angular en Svelte gebruiken, en ze willen ervoor zorgen dat Storybook perfect aansluit bij de behoeften van deze groeiende gemeenschappen.

-   **Angular**: Het Storybook-team werkt nauw samen met het Angular Core-team om compatibiliteit bij grote versie-updates te waarborgen. In 2024 staat een integratie met Angular's nieuwe high-performance build-systeem op de planning. Dit zal ontwikkelaars een snellere, efficiëntere en meer geïntegreerde ervaring bieden.
-   **Svelte**: Voor Svelte heeft het team al grote stappen gezet, waaronder samenwerking met Svelte-ontwikkelaars om volledige ondersteuning voor SvelteKit te realiseren. In 2024 wordt de ondersteuning nog verder uitgebreid met officiële ondersteuning voor Svelte Component Story Format (CSF) en andere belangrijke verbeteringen, waardoor Svelte-gebruikers Storybook nog effectiever kunnen inzetten in hun workflow.

Met deze inspanningen laat het Storybook-team zien dat ze zich inzetten voor een inclusieve toekomst waarin ontwikkelaars ongeacht hun voorkeursframework de voordelen van Storybook kunnen benutten.

### Storygeneratie

Een ander veelbelovend gebied waar het team in 2024 op inzet, is **storygeneratie**. Ze streven ernaar om het proces van het schrijven van stories voor componenten eenvoudiger, sneller en toegankelijker te maken.

Een van de meest opwindende ontwikkelingen op dit gebied was in 2023 de introductie van **StorybookGPT**. Deze tool maakt gebruik van AI om automatisch stories te genereren voor je componenten, wat een enorme tijdsbesparing oplevert en de drempel verlaagt voor nieuwe gebruikers. In 2024 wordt deze functionaliteit verder ontwikkeld, met de mogelijkheid om de gegenereerde stories aan te passen aan de unieke behoeften van verschillende frameworks en gebruikssituaties. Hierdoor wordt Storybook een nog krachtiger hulpmiddel voor teams die willen profiteren van geavanceerde AI-technologie in hun ontwikkelproces.

### Doe Mee en Maak Samen een Verschil

Storybook wordt onderhouden door een dynamische en diverse gemeenschap van meer dan 1.800 open source-bijdragers. De leiding ligt bij een betrokken stuurgroep die continu werkt aan het verbeteren van de tool en het uitbreiden van de mogelijkheden. Wil jij een steentje bijdragen aan dit open source-project? Dat kan op verschillende manieren:

-   **Via GitHub**: Dien een issue in om problemen te melden of een pull request om verbeteringen aan te dragen.
-   **Doneren**: Ondersteun de ontwikkeling financieel via Open Collective en help Storybook om te blijven groeien.
-   **Communicatie**: Neem deel aan gesprekken met de community op Discord, volg de laatste updates via Twitter, en abonneer je op de nieuwsbrief om op de hoogte te blijven van nieuwe ontwikkelingen.

Storybook blijft groeien en evolueren dankzij de passie en inzet van zijn gemeenschap. Of je nu een beginnende ontwikkelaar bent of een ervaren professional, er is altijd ruimte om deel uit te maken van dit inspirerende project. Laten we samen 2024 tot een succesvol jaar maken voor Storybook en de ontwikkelaarsgemeenschap wereldwijd!

## Bronvermelding

StoryBook doc: https://storybook.js.org/tutorials/intro-to-storybook/react/en/get-started/

Storybook with React (complete tutorial): https://www.youtube.com/watch?v=dwtmz5PHWDg&t=447s

[S](https://storybook.js.org/blog/future-of-storybook-2024/#:~:text=Our%20next%20major%20release%2C%20Storybook,performance%20improvements%20for%20every%20project.&text=We%20plan%20to%20release%20Storybook,out%20the%20full%20release%20timeline)torybook 8: [https://storybook.js.org/blog/future-of-storybook-2024/#:~:text=Our next major release%2C Storybook,performance improvements for every project.&text=We plan to release Storybook,out the full release timeline](https://storybook.js.org/blog/future-of-storybook-2024/#:~:text=Our%20next%20major%20release%2C%20Storybook,performance%20improvements%20for%20every%20project.&text=We%20plan%20to%20release%20Storybook,out%20the%20full%20release%20timeline).

Addons:

-   https://github.com/storybookjs/storybook?tab=readme-ov-file#addons
-   https://storybook.js.org/addons

## Github Repo

https://github.com/pgm-stijwalr/storybook-workshop
