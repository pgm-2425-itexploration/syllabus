---
title: "Meteor + React"
synopsis: "Meteor is een krachtig framework voor het bouwen van moderne real-time webapps, en React maakt het mogelijk om interactieve en dynamische gebruikersinterfaces te creëren."
date: 2024-12-10
author:
  name: "Klaas Cornette"
  avatarUrl: "/assets/avatars/klaas-cornette.png"
  socials: # Voeg links naar sociale media toe -> Als je er geen hebt, laat een lege string ''
    website: ""
    linkedin: "https://www.linkedin.com/in/klaas-cornette-a0b188293/"
    github: "https://github.com/klaas-cornette"
thumbnailUrl: "/assets/tutorials/MeteorJS.jpg"
head:
  - - meta
    - name: description
      content: "Meteor is een krachtig framework voor het bouwen van moderne real-time webapps, en React maakt het mogelijk om interactieve en dynamische gebruikersinterfaces te creëren. Samen bieden ze een efficiënte stack voor full-stack ontwikkeling."
  - - meta
    - name: keywords
      content: "Meteor React JavaScript real-time webapps full-stack ontwikkeling MongoDB Tailwind CSS chatapplicatie publish/subscribe systeem component-gebaseerde UI tutorial"
---


# Tutorial: Een Chatsysteem Bouwen met Meteor

## Inleiding

In deze tutorial leer je een eenvoudig chatsysteem bouwen met **Meteor** (de server- en databasekant), **React** (de voorkant van de applicatie die de gebruiker ziet), en **Tailwind CSS** (de styling voor een mooi en modern ontwerp). Het doel is om je te laten zien hoe deze tools samenwerken en je helpen een applicatie te maken waar gebruikers berichten kunnen sturen, registreren, en inloggen.

## Benodigde Kennis

Deze tutorial is ontworpen voor ontwikkelaars met enige voorkennis van **JavaScript** en **React**. Het is handig als je weet hoe componenten en props werken in React, en hoe JavaScript omgaat met functies en variabelen. Maak je echter geen zorgen als je nog niet veel ervaring hebt; ik leg elk onderdeel stap voor stap uit en geef voorbeelden om je te begeleiden.

Wat betreft styling is een basiskennis van **CSS** voldoende. Tailwind CSS maakt het eenvoudig om stijlvolle ontwerpen te creëren door gebruik te maken van vooraf gedefinieerde klassen. Hierdoor kun je je meer richten op het leren van de logica achter je applicatie in plaats van ingewikkelde stylesheets te schrijven.

Of je nu een beginner bent die zijn vaardigheden wil uitbreiden, of een meer ervaren ontwikkelaar die een solide basis zoekt in Meteor, React, en Tailwind CSS, deze tutorial is een geweldige manier om hands-on ervaring op te doen met moderne technologieën!

# Waarom Meteor?

Meteor is een handige tool voor beginners en gevorderden om snel applicaties te bouwen. Voor een chatapplicatie biedt Meteor veel voordelen:

- **Automatische Synchronisatie**: Meteor synchroniseert gegevens tussen de server en de gebruikers (clients). Voor een chatapplicatie betekent dit dat berichten direct bij iedereen zichtbaar zijn.
- **Gebruikersbeheer**: Meteor heeft ingebouwde functies voor het beheren van gebruikers, inclusief wachtwoord- en e-mailverificatie. Dit maakt het veilig en makkelijk om een inlog- en registratiesysteem toe te voegen.
- **Snel Prototypen**: Omdat Meteor al veel dingen voor je regelt, kun je snel een werkende versie van je idee maken en testen.
- **Realtime Updates**: Meteor biedt native ondersteuning voor realtime data, waardoor wijzigingen zoals nieuwe berichten in je chatapplicatie direct zichtbaar zijn zonder dat je extra code voor websockets hoeft te schrijven.
- **React Integratie**: Meteor werkt naadloos samen met React, wat betekent dat je kunt profiteren van de component-gebaseerde structuur en krachtige state management van React terwijl Meteor zorgt voor de backend-functionaliteit.
- **Eenvoudig Databasebeheer**: Meteor integreert goed met MongoDB, wat ideaal is voor chatapplicaties dankzij het flexibele schema en de mogelijkheid om snel wijzigingen in de database door te voeren.
- **Community Pakketten**: Meteor heeft een grote verzameling community-pakketten die je direct kunt gebruiken, zoals extra authenticatiemethoden of tools voor betere gebruikerservaring.
- **Eén Codebase**: Omdat Meteor zowel de frontend als de backend ondersteunt, hoef je niet te schakelen tussen meerdere technologieën. Dit maakt het eenvoudiger om consistente updates en onderhoud te doen.

## Stap 1: Installeren van Nodige Pakketten

1. **Open visual studio code.**

Visual Studio Code (VS Code) is een populaire code-editor voor ontwikkelaars. Het biedt ondersteuning voor veel programmeertalen en tools die handig zijn voor projecten zoals deze. Zorg ervoor dat je het geïnstalleerd hebt op je computer.

1. **Open een map voor het project**.

Het openen van een map is essentieel omdat je een vaste locatie nodig hebt om alle bestanden en mappen van je project georganiseerd op te slaan. In VS Code kun je dit doen door:

- **File > Open Folder** te selecteren.
- Blader naar de map waarin je je project wilt bewaren. Maak eventueel een nieuwe map aan als je dat nog niet hebt gedaan.

1. **Open de terminal**.

De terminal in VS Code is een geïntegreerd hulpmiddel waarmee je commando's kunt uitvoeren zonder een aparte terminalapp te openen.

- Klik in de menubalk bovenaan op **Terminal > New Terminal**. De terminal verschijnt onderaan in het venster van VS Code.

1. **Controleer of de juiste versie van node.js is geïnstalleerd**.

Node.js is vereist om JavaScript-code uit te voeren op de server.

- Typ in de terminal het commando:
  
```bash
npm -v
```

- Als de versie lager is dan **10.8.3**, download en installeer dan een recentere versie vanaf [Node.js website](https://nodejs.org).

Deze moet minimum 10.8.3 zijn!

1. **Installeren van meteor globaal.**

Meteor is het platform waarop je project gebaseerd is. Installeer het globaal op je computer door dit commando in de terminal in te voeren:

```bash
npm install -g meteor --foreground-script
meteor --version
```

1. **Download het Project of Maak een Nieuwe App**

- Als je een bestaande app hebt, download je deze (bijvoorbeeld via GitHub).
- Om een nieuwe Meteor-app te maken, voer je in de terminal het volgende commando uit

```bash
meteor create chat-app
```

1. **Verplaats naar de projectmap**

Zorg dat de terminal naar de juiste projectmap verwijst door het volgende commando te gebruiken:

```bash
cd chat-app
```

- Hiermee zorg je ervoor dat alle toekomstige commando's binnen de projectcontext worden uitgevoerd.

1. **Installeren van Meteor-Pakketten**: Voeg de benodigde pakketten voor React en gebruikersbeheer toe:

```bash
npm install --save react-router-dom
npm install  --save bcrypt
npm install --save js-cookie
```

```bash
meteor add accounts-password
```

1. **Installeer Tailwind CSS**.

Tailwind CSS is een utility-first CSS-framework dat je veel controle geeft over de styling van je applicatie. Voeg het toe door:

```bash
npm install tailwindcss postcss autoprefixer
```

- 1. **Instellen van Tailwind CSS**.
  1. Maak de configuratiebestanden aan:
   
```bash
npx tailwindcss init
```

Dit genereert twee bestanden: **tailwind.config.js** en **postcss.config.js**.

- 1. **Controleer dat je bash gebruikt**: Gebruik bij voorkeur de bash-terminal om foutmeldingen te voorkomen.
  1. Voeg configuraties toe aan **postcss.config.js**:

```bash
touch postcss.config.js
```

```javascript
module.exports = {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  };
```

- 1. Pas **tailwind.config.js** aan: Voeg de paden toe naar de

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./client/**/*.{html,jsx,js}", "./imports/ui/**/*.{html,jsx,js}"],
  theme: {
      extend: {},
  },
  plugins: [],
};
```

- 1. Voeg Tailwind CSS toe aan je **main.css**: Maak een bestand aan genaamd **main.css** en voeg de volgende code toe

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

- 1. Importeer de CSS in **main.jsx**: Voeg in je **main.jsx** bestand de volgende regel toe:

```javascript
import '/client/main.css';
```

Met deze stappen zorg je ervoor dat alle benodigde tools en pakketten correct zijn ingesteld voor je project.

## Stap 2: Basisconfiguratie van Meteor applicatie en MongoDB

Om je project overzichtelijk en efficiënt te maken, is het belangrijk om overbodige bestanden en mappen te verwijderen.

1. **Navigeer naar de map imports:**
    - Deze map bevat standaard enkele bestanden en mappen die niet relevant zijn voor jouw project.
2. **Verwijder alle .js- en .jsx-bestanden in de imports-map:**
    - Gebruik de bestandsbeheerder van Visual Studio Code:
        - Klik met de rechtermuisknop op de bestanden die je wilt verwijderen en kies **Delete**.
    - Zorg ervoor dat de map imports leeg is, zodat je zelf de structuur kunt opbouwen.

### 2.2 aansturen van de backend via mongoDB

Meteor heeft een ingebouwde MongoDB-database, waardoor je eenvoudig gegevens zoals chatberichten en gebruikers kunt opslaan en ophalen.

**1\. Verwijderen van bestaande code in server/main.js**

1. **Navigeer naar het bestand server/main.js:**
    - Dit bestand bevindt zich in de server-map van je project.
2. **Verwijder alle bestaande code in main.js:**
    - Selecteer alle tekst in het bestand en druk op **Delete**. Het bestand moet nu leeg zijn.
3. **Voeg de volgende code toe:**

```javascript
import { Accounts } from "meteor/accounts-base";
import { check } from "meteor/check";
import { Meteor } from "meteor/meteor";
import { Messages } from "../imports/api/messages";

//start de server
Meteor.startup(() => {
    console.log("Server started");
})

// Voeg een asynchrone of normale methodes toe om de insert operatie uit te voeren
Meteor.methods({

});
```

Deze code zorgt ervoor dat bij het opstarten van de server een indicatie gegeven wordt dat deze werkt.

**2\. Configureren van de API**

1. **Navigeer naar de map imports/api:**
    - Als deze map nog niet bestaat, maak deze dan aan:
        - Rechtermuisknop in de bestandsweergave > **New Folder** > geef de naam api.
2. **Maak een nieuw bestand aan genaamd messages.jsx:**
    - Klik met de rechtermuisknop op de map api > **New File** > noem het bestand messages.jsx.
3. **Voeg de volgende code toe aan messages.jsx:**

```javascript
import { Mongo } from 'meteor/mongo';
//haal de messages collectie op
export const Messages = new Mongo.Collection('messages');
```

- Hierin wordt een nieuwe MongoDB-collectie genaamd messages aangemaakt.
- Je kunt deze collectie gebruiken om chatberichten op te slaan en op te halen.

**Waarom deze stap belangrijk is**

- Het opschonen van overbodige bestanden voorkomt verwarring en maakt je project overzichtelijker.
- Door de MongoDB-database te configureren, leg je de basis voor het opslaan en beheren van gegevens in je applicatie.
- Het apart organiseren van de backend-logica (bijvoorbeeld in api/messages.jsx) zorgt voor een schaalbare en onderhoudbare structuur.

## Stap3: Opzetten van de routing van de applicatie en start scherm voorzien

1\. **Navigeer naar de map ui en voeg App.jsx toe**

Het bestand App.jsx is de kern van de gebruikersinterface (UI). Hier definieer je de algemene layout en structuur van je applicatie.

1. **Navigeer naar de map ui:**
    - Deze map bevindt zich in de imports-map van je project. Als de map ui niet bestaat, maak deze aan:
        - Klik met de rechtermuisknop in de bestandsweergave > **New Folder** > noem de map ui.
2. **Maak een nieuw bestand genaamd App.jsx:**
    - Klik met de rechtermuisknop op de map ui > **New File** > noem het bestand App.jsx.
3. **Voeg de code toe voor het startscherm:**

```javascript
import React from "react";
export const App = () => {

    return (
        // Toon een welkomstbericht met de juiste styling 
        <div className="main flex flex-col items-center bg-gradient-to-r pt-32">
            <div className="bg-white shadow-lg rounded-lg p-8 max-w-sm w-full">  
                <h1 className="text-2xl font-bold text-gray-800 text-center">Welkom</h1>
            </div>
        </div>
    );
};
```

Deze code zorgt voor een eenvoudig startscherm met een titel en een korte boodschap.

2\. **Navigeer opnieuw naar de map ui en voeg AppRoutes.jsx toe**

Het bestand AppRoutes.jsx wordt gebruikt om de routing van je applicatie in te stellen. Hiermee bepaal je welke componenten worden geladen op basis van de URL.

1. **Maak een nieuw bestand genaamd AppRoutes.jsx:**
    - Klik met de rechtermuisknop op de map ui > **New File** > noem het bestand AppRoutes.jsx.
2. **Voeg de code toe voor de routing:**

```javascript
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { App } from "./App";

const AppRoutes = () => {
    return (
        // Voeg de navigatiebalk toe en de routes voor de verschillende pagina's met juiste styling
        <Router>
            <nav className="bg-blue-500 p-4">
                <div className="container mx-auto flex justify-between items-center">
                    <Link to="/" className="text-white font-bold">
                        Chat-App
                    </Link>
                </div>
            </nav>
            <Routes>
                {/* Route voor de gebruikerslijst */}
                <Route path="/" element={<App />} />
            </Routes>
        </Router>
    );
};

export default AppRoutes;
```

- **BrowserRouter**: Verzorgt de navigatiegeschiedenis van de app.
- **Routes en Route**: Hiermee kun je verschillende componenten weergeven op basis van het pad in de browser (bijvoorbeeld / voor het startscherm).

**Waarom deze stap belangrijk is**

- **App.jsx**: Zorgt voor een visueel startpunt van je applicatie en biedt de eerste indruk aan gebruikers.
- **Routing**: Maakt je applicatie flexibel en uitbreidbaar door verschillende pagina's en functionaliteiten aan specifieke URL's te koppelen.

## Stap 4: Eerste test van de applicatie

**Zorg dat de terminal op PowerShell staat:**

- Klik rechtsboven in de terminal op het dropdown-menu naast het shell-type.
- Selecteer **Powershell.**

Als PowerShell niet zichtbaar is:

- Klik op **Select Default Profile** en kies PowerShell, of open een aparte PowerShell-terminal buiten VS Code.

**2\. Controleer of je in de root van de applicatie zit**

De root van de applicatie is de hoofdmap waarin het bestand **.meteor** staat. Dit is essentieel om de app correct te starten.

1. **Controleer je locatie:**
    - Typ in de terminal:

```bash
pwd
```

Dit toont het pad naar je huidige map. Zorg dat het pad eindigt met de mapnaam van jouw project (bijvoorbeeld C:\\Users\\JouwNaam\\ProjectNaam).

1. **Zo niet, navigeer naar de root:**
    - Gebruik het volgende commando:

```bash
cd pad/naar/chat-app
```

**3\. Start de applicatie**

Run de applicatie door het volgende commando uit te voeren:

```bash
meteor run
```

- **Wat gebeurt er?**
  - Meteor zal je project bouwen en een ontwikkelingsserver starten.
  - De standaardpoort is 3000, wat betekent dat je app toegankelijk zal zijn via **localhost:3000**.

**4\. Open je browser en controleer de applicatie**

1. **Ga naar de volgende URL in je browser:**
    - Open een browser zoals Chrome, Edge, of Firefox.
    - Typ in de adresbalk: **localhost:3000** en druk op **Enter**.
2. **Hoe ziet de pagina eruit?**
    - Als alles correct is geconfigureerd, zou je het startscherm moeten zien dat je eerder in **App.jsx** hebt ingesteld.
3. **Wat te doen als het niet werkt?**
    - Controleer of er foutmeldingen zijn in de terminal of de browserconsole:
        - **In de terminal**: Kijk of Meteor succesvol is gestart. Eventuele fouten worden daar vermeld.
        - **In de browserconsole**: Druk op **F12**, ga naar het tabblad "Console" en controleer op foutmeldingen.
    - Controleer of je internetverbinding werkt (voor het downloaden van eventuele benodigde packages).

## Stap 5: Aanmeld en login systeem toevoegen

**1\. Navigeer naar de ui-map en maak RegisterForm.jsx en LoginForm.jsx aan**

In deze stap maak je twee afzonderlijke bestanden aan: één voor het registreren van gebruikers en één voor het inloggen.

1. **Navigeer naar de ui-map:**
    - Deze bevindt zich in de imports-map van je project. Als de map nog niet bestaat, maak je deze aan:
        - Klik met de rechtermuisknop in de bestandsweergave > **New Folder** > noem de map ui.
2. **Maak twee nieuwe bestanden aan:**
    - Klik met de rechtermuisknop op de map ui > **New File** > noem het eerste bestand RegisterForm.jsx.
    - Herhaal dit voor LoginForm.jsx.

### **2\. Voeg de code toe voor het registratieformulier (RegisterForm.jsx)**

Het registratieformulier biedt een interface voor gebruikers om zich aan te melden.

```javascript
import { Meteor } from "meteor/meteor";
import React, { useState } from "react";

export const RegisterForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const submit = async (e) => {
        // Voorkom dat de pagina herlaad bij het indienen van het formulier 
        e.preventDefault();
        setError("");
        setLoading(true); // Start laden

        Meteor.call("users.create", { name, email, password }, (err) => {
            setLoading(false); // stop laden
            if (err) {
                setError(err.reason);
            } else {
                // Stuur de gebruiker naar de inlogpagina als het registreren is gelukt
                setName("");
                setEmail("");
                setPassword("");
                setError("");
                window.location.href = "/login";
            }
        });
    };

    return (
        // Formulier voor het registreren met de juiste opmaak en styling 
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <form onSubmit={submit} className="bg-white p-8 rounded shadow-md w-96">
                <h2 className="text-xl font-bold mb-4 text-center">Register</h2>
                {/* Toon een foutmelding als het registreren is mislukt */}
                {error && <div className="mb-4 text-red-500">{error}</div>}

                {/* invulveld voor de naam */}
                <div className="mb-4">
                    <label className="block text-gray-700">Name</label>
                    <input
                        type="text"
                        placeholder="Name"
                        name="name"
                        required
                        className="border border-gray-300 p-2 w-full rounded"
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>

                {/* invulveld voor het e-mailadres */}
                <div className="mb-4">
                    <label className="block text-gray-700">Email</label>
                    <input
                        type="email"
                        placeholder="Email"
                        name="email"
                        required
                        className="border border-gray-300 p-2 w-full rounded"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                {/* invulveld voor het wachtwoord */}   
                <div className="mb-4">
                    <label className="block text-gray-700">Password</label>
                    <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        required
                        className="border border-gray-300 p-2 w-full rounded"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <div>
                    {/* knop om te registreren en de indicatie als de applicatie aan het laden is */}
                    <button
                        type="submit"
                        disabled={loading}
                        className="bg-blue-600 text-white p-2 rounded w-full hover:bg-blue-700"
                    >
                        {loading ? "Registering..." : "Register"}
                    </button>
                </div>
            </form>
        </div>
    );
};
```

**Wat doet deze code?**

- Gebruikers kunnen hun e-mailadres en wachtwoord invoeren.
- Bij het indienen van het formulier wordt de gebruiker aangemaakt in de Meteor-gebruikersdatabase.

### 3\. Voeg de code toe voor het loginformulier (**LoginForm.jsx**)

Het loginformulier biedt een eenvoudige interface voor gebruikers om in te loggen.

```javascript
import { Meteor } from 'meteor/meteor';
import React, { useState } from 'react';
import Cookies from 'js-cookie';

export const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);


  const submit = async (e) => {
    // Voorkom dat de pagina herlaad bij het indienen van het formulier
    e.preventDefault();
    setError('');
    setLoading(true); // Start loading

    // E-mail validatie
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setError('Invalid email format.');
      setLoading(false);
      return;
    }

    // Log de gebruiker in met de ingevoerde gegevens en geef een melding als het inloggen is mislukt 
    Meteor.loginWithPassword(email, password, (err) => {
      setLoading(false); 
      if (err) {
        setError(err.reason);
      } else {
        // zet de gebruikersnaam in een cookie en stuur de gebruiker naar de chatpagina
        Cookies.set('userEmail', email, { expires: 1/24 }); // cookie voor 1 uur
        setEmail('');
        setPassword('');
        setError('');
        window.location.href = '/';
      }
    })
    
  };

  
  return (
    // Formulier voor het inloggen met de juiste opmaak en styling 
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <form onSubmit={submit} className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-xl font-bold mb-4 text-center">Log In</h2>
        {/* Toon een foutmelding als het inloggen is mislukt */}
        {error && <div className="mb-4 text-red-500">{error}</div>}

        {/* invulveld voor het e-mailadres */}
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            placeholder="Email"
            name="email"
            required
            className="border border-gray-300 p-2 w-full rounded"
            value={email} // Standaard waarde instellen
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* invulveld voor het wachtwoord */}
        <div className="mb-4">
          <label className="block text-gray-700">Password</label>
          <input
            type="password"
            placeholder="Password"
            name="password"
            required
            className="border border-gray-300 p-2 w-full rounded"
            value={password} // Standaard waarde instellen
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div>
          {/* knop om in te loggen en de indicatie als de applicatie aan het laden is */}
          <button
            type="submit"
            disabled={loading}
            className="bg-blue-600 text-white p-2 rounded w-full hover:bg-blue-700"
          >
            {loading ? 'Logging In...' : 'Log In'}
          </button>
        </div>
      </form>
    </div>
  );
};
```

**Wat doet deze code?**

- Gebruikers kunnen hun e-mailadres en wachtwoord invoeren om in te loggen.
- Meteor valideert de gegevens en logt de gebruiker in als de gegevens correct zijn.

**4\. Waarom deze stap belangrijk is**

- Het toevoegen van een aanmeld- en login-systeem maakt je applicatie persoonlijker en veiliger voor gebruikers.
- De **Accounts-module** van Meteor maakt het eenvoudig om gebruikersbeheerfunctionaliteit toe te voegen, inclusief wachtwoordbeheer en sessiebeheer.

## Stap 6: Updaten van de routes

**1\. Navigeer naar AppRoutes.jsx en voeg de nieuwe routes toe**

In deze stap voeg je nieuwe routes toe aan je applicatie zodat gebruikers op basis van hun inlogstatus de juiste inhoud zien.

1. **Open het bestand AppRoutes.jsx:**
    - Dit bestand bevindt zich in de ui-map van je project. Als het bestand nog niet bestaat, maak het aan.
2. **Toevoegen van nieuwe routes:**
    - De nieuwe routes zorgen ervoor dat:
        - Geregistreerde gebruikers toegang hebben tot bepaalde onderdelen zoals de chat.
        - Niet-geregistreerde gebruikers alleen de inlog- en registratiepagina’s zien.

```javascript
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { LoginForm } from "./LoginForm";
import { RegisterForm } from "./RegisterForm";
import { useTracker } from "meteor/react-meteor-data";
import { App } from "./App";

const AppRoutes = () => {
    // Haal de huidige gebruiker op met behulp van useTracker
    const user = useTracker(() => Meteor.user());
    // Functie om uit te loggen
    const handleLogout = () => {
        // Log de gebruiker uit en geef een melding als het uitloggen is mislukt
        Meteor.logout((error) => {
            if (error) {
                console.error("Logout failed: ", error);
            } else {
                // Optioneel: je kunt hier ook een redirect toevoegen na het uitloggen
                console.log("Logged out successfully");
            }
        });
    };
    return (
        // Voeg de navigatiebalk toe en de routes voor de verschillende pagina's met juiste styling
        <Router>
            <nav className="bg-blue-500 p-4">
                <div className="container mx-auto flex justify-between items-center">
                    <Link to="/" className="text-white font-bold">
                        Chat-App
                    </Link>
                    <div>
                        {user ? (
                            <>
                                <Link to="/" className="text-white hover:underline">
                                    Chat
                                </Link>
                                <Link to="/" className="text-white hover:underline ml-4" onClick={handleLogout}>
                                    Afmelden
                                </Link>
                            </>
                        ) : (
                            <>
                                <Link to="/login" className="text-white hover:underline">
                                    Inloggen
                                </Link>
                                <Link to="/register" className="text-white hover:underline ml-4">
                                    Registreren
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            </nav>
            <Routes>
                {/* Route voor de gebruikerslijst */}
                <Route path="/" element={<App />} />

                {/* Route voor registratie en login */}
                <Route path="/register" element={<RegisterForm />} />
                <Route path="/login" element={<LoginForm />} />

            </Routes>
        </Router>
    );
};

export default AppRoutes;
```

**2\. Uitleg van de code user ? () : ()**

De code bevat een **ternary operator** die controleert of een gebruiker is ingelogd. Op basis hiervan worden specifieke navigatie-opties getoond.

- **user ? () : ()** betekent:
  - Als **user** (de ingelogde gebruiker) bestaat, voer het gedeelte vóór de dubbele punt : uit:
    - Toon de opties "Chat" en "Afmelden".
  - Als **user** niet bestaat (de gebruiker is niet ingelogd), voer het gedeelte na de dubbele punt : uit:
    - Toon de opties "Inloggen" en "Registreren".

**Voorbeeld:**

- **Wanneer een gebruiker is ingelogd:**
  - Er verschijnt een knop "Chat" en "Afmelden" in de navigatiebalk.
- **Wanneer een gebruiker niet is ingelogd:**
  - Er verschijnen knoppen "Inloggen" en "Registreren".

**3\. Waarom deze stap belangrijk is**

- **Gebruikerservaring:** Het zorgt ervoor dat de navigatie dynamisch is, gebaseerd op de status van de gebruiker.
- **Beveiliging:** Niet-geregistreerde gebruikers krijgen geen toegang tot pagina's die alleen voor ingelogde gebruikers zijn bedoeld.
- **Efficiëntie:** De implementatie met een ternary operator maakt de code overzichtelijk en eenvoudig te beheren.

**Tips**

1. **Stijling aanpassen:**
    - Pas de klasse className in de knoppen aan om de navigatie visueel aantrekkelijker te maken.
    - Je kunt **Tailwind CSS** gebruiken, zoals in het voorbeeld hierboven.
2. **Test je routes:**
    - Zorg dat je de routes grondig test door:
        - In te loggen en uit te loggen.
        - De navigatie te controleren.
        - Directe toegang tot een route (bijvoorbeeld /chat/:userId) te proberen zonder in te loggen.

## Stap 7: Toevoegen van functies in de backend

**1\. Navigeren naar server/main.js**

Dit bestand bevindt zich in de server-map van je project. Hierin wordt de backend-code van je Meteor-app beheerd. Open het bestand main.js of maak het aan als het nog niet bestaat.

**2\. Toevoegen van een methode en twee publicaties**

**Waarom een methode en publicaties?**

- **Methode:** Hiermee kunnen clients (zoals je frontend) via de server taken uitvoeren, zoals het opslaan of ophalen van gegevens.
- **Publicaties:** Hiermee deel je specifieke data van de database met de client. Dit zorgt ervoor dat alleen de benodigde gegevens worden opgehaald.

1. **Code voor de methodes toevoegen.**

```javascript
// Voeg een asynchrone of normale methodes toe om de insert operatie uit te voeren
Meteor.methods({
    "users.create"({ name, email, password }) {
        // Validatie
        check(name, String);
        check(email, String);
        check(password, String);

        // Maak de gebruiker aan
        const userId = Accounts.createUser({
            username: name,
            email: email,
            password: password,
        });
        //check of de gebruiker is aangemaakt
        if (!userId) {
            throw new Meteor.Error("User creation failed");
        }
        return userId;
    },
})
```

2. **Code voor de publicaties toevoegen.**

```javascript
// Publicaties voor gebruikers
Meteor.publish("allUsers", function () {
    if (this.userId) {
        //zoek naar alle gebruikers en retourneer alleen de gebruikersnaam en e-mail
        return Meteor.users.find({}, { fields: { username: 1, emails: 1 } });
         // Pas aan welke velden je wilt publiceren
    } else {
        this.ready();
    }
});

Meteor.publish('userById', function (userId) {
    check(userId, String);
    // Zoek naar de gebruiker met de opgegeven id en retourneer alleen de profiel- en e-mailvelden
    return Meteor.users.find({ _id: userId }, { fields: { profile: 1, emails: 1 } });
    // Pas aan welke velden je wilt publiceren
  });
```

**5\. Uitleg van de code**

**Methode: users.create**

- **Wat doet het?**
  - Deze methode voegt een nieuw gebruiker toe aan de database.

**Publicatie: users**

- **Wat doet het?**
  - Publiceert een lijst van gebruikers, zodat je gebruikersinformatie kunt weergeven in je app (bijvoorbeeld gebruikersnamen in de chat).
- **Belangrijke onderdelen:**
  - **Meteor.users.find:** Geeft alleen het gebruikers-ID en de gebruikersnaam door om privacy te waarborgen.

**4\. Waarom zijn deze functies belangrijk?**

- **Methode:** Hiermee kun je veilig gegevens bewerken op de server, wat voorkomt dat gebruikers rechtstreeks toegang krijgen tot je database.
- **Publicaties:** Zorgen ervoor dat alleen de benodigde gegevens naar de client worden verzonden, wat efficiënter en veiliger is.

## Stap 8: Test login en registreren

**1\. Zorg ervoor dat de applicatie draait**

- Controleer of je app nog steeds actief is in je browser door naar **localhost:3000** te gaan.
- **Indien de app niet draait:**
    1. Open de terminal (gebruik PowerShell, geen Bash!).
    2. Navigeer naar de root van je project, waar het bestand meteor zich bevindt.
    3. Voer het volgende commando uit om de applicatie opnieuw te starten:

```bash
meteor run
```

**2\. Test het registratieproces**

- **Doel:** Controleer of nieuwe gebruikers zich correct kunnen registreren.
- Open je app in de browser en klik op de knop **"Registreren"** (die je eerder hebt toegevoegd in de navigatie).
- Vul de volgende gegevens in:
  - Een unieke gebruikersnaam.
  - Een veilig wachtwoord.
- Klik op **"Registreer"**.
- **Wat moet er gebeuren:**
  - De registratie moet slagen en je moet worden doorverwezen naar de hoofdpagina van de app.
  - Controleer in je database (via de MongoDB-shell of een GUI-tool zoals MongoDB Compass) of een nieuw gebruikersrecord is toegevoegd.

**3\. Test het inloggen**

- **Doel:** Controleer of bestaande gebruikers kunnen inloggen.
- Klik in de navigatiebalk op **"Inloggen"**.
- Vul de gebruikersnaam en het wachtwoord in van de gebruiker die je net hebt geregistreerd.
- Klik op **"Login"**.
- **Wat moet er gebeuren:**
  - Als de inloggegevens correct zijn, moet je naar de hoofdpagina worden geleid.
  - Je moet nu toegang hebben tot functies die alleen beschikbaar zijn voor ingelogde gebruikers. Dit stellen we later verder in.

**4\. Test het afmelden**

- **Doel:** Controleer of een ingelogde gebruiker zich correct kan afmelden.
- Klik in de navigatiebalk op de knop **"Afmelden"**.
- **Wat moet er gebeuren:**
  - Je moet uitgelogd worden en opnieuw de opties **"Inloggen"** en **"Registreren"** zien in de navigatiebalk.
  - Je moet geen toegang meer hebben tot functies die alleen beschikbaar zijn voor ingelogde gebruikers (bijvoorbeeld de chatfunctie).

**5\. Foutoplossing**

Als iets niet werkt zoals verwacht:

1. Controleer de console in de browser (Developer Tools > Console) en kijk naar eventuele foutmeldingen.
2. Controleer de server-logs in de terminal waar je meteor run hebt uitgevoerd.
3. Controleer of je publicaties en methodes (zoals Meteor.methods en Meteor.publish) correct zijn geïmplementeerd in server/main.js.

**6\. Waarom deze stap belangrijk is**

- Hiermee verifieer je dat je login- en registratiesysteem functioneert zoals verwacht.
- Je controleert of beveiligingsmaatregelen, zoals gebruikersauthenticatie, correct zijn geïmplementeerd.
- Dit zorgt voor een goede gebruikerservaring, wat essentieel is voor een succesvolle applicatie.

## Stap 9: Maak een lijst van gebruikers om mee te chatten

**1\. Navigeren naar de map ui en een nieuw bestand aanmaken**

- Ga naar de map ui.
- Maak een nieuw bestand aan genaamd UserList.jsx.

```javascript
import React, { useEffect, useState } from "react";
import { Meteor } from "meteor/meteor";
import { Tracker } from "meteor/tracker";
import { Link } from "react-router-dom";

const UserList = () => {
    const [users, setUsers] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const activeUser = Meteor.user();

    useEffect(() => {
        // Laad alle gebruikers met behulp van Tracker en Meteor.subscribe 
        const usersTracker = Tracker.autorun(() => {
            Meteor.subscribe("allUsers");
            const allUsers = Meteor.users.find().fetch();
            // Filter de huidige gebruiker uit de lijst met gebruikers
            allUsers.forEach((user) => {
                if (user._id === activeUser._id) {
                    allUsers.splice(allUsers.indexOf(user), 1);
                }
            });
            // Zet de gebruikers in de state
            setUsers(allUsers);
        });

        // Stop de tracker om geheugenlekken te voorkomen
        return () => {
            usersTracker.stop();
        };
    }, []);

    // Functie om de zoekterm bij te werken wanneer de gebruiker typt
    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    // Filter de gebruikers op basis van de zoekterm en toon de resultaten
    const filteredUsers = users.filter((user) => {
        const email = user.emails ? user.emails[0].address : "";
        return email.toLowerCase().includes(searchTerm.toLowerCase());
    });

    return (
        // Toon de lijst met gebruikers en voeg een zoekbalk toe om gebruikers te zoeken met de juiste styling
        <div className="max-w-lg mx-auto p-4">
            <h2 className="text-2xl font-semibold mb-4">Gebruikers</h2>
            {/* Voeg een zoekbalk toe om gebruikers te zoeken */}
            <input
                type="text"
                placeholder="Zoek gebruiker..."
                value={searchTerm}
                onChange={handleSearchChange}
                className="w-full p-2 border border-blue-500 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            {/* Toon de lijst met gebruikers door map functie te gebruiken  */}
            <ul className="mt-4">
                {filteredUsers.map((user) => (
                    <li key={user._id} className="border-b border-blue-200 py-2">
                        <Link to={`/chat/${user._id}`} className="text-blue-600 hover:text-blue-800">
                            {user.emails ? user.emails[0].address : "error"}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserList;
```

**3\. Uitleg van de code**

- **useTracker Hook:**
  - Haalt alle gebruikers op van de server via de Meteor-publicatie users.
  - Zorg ervoor dat de publicatie users is ingesteld in server/main.js (zoals in een eerdere stap).
- **Zoekfunctie (searchTerm):**
  - De gebruikerslijst kan worden gefilterd op basis van de ingevoerde zoekterm.
  - Dit maakt het makkelijker om een specifieke gebruiker te vinden, vooral bij een lange lijst van gebruikers.
- **Interactieve lijst:**
  - Bij het klikken op een gebruiker wordt de onSelectUser-functie aangeroepen. Deze functie kun je gebruiken om de geselecteerde gebruiker door te sturen naar een chatpagina (dit wordt later in de tutorial uitgewerkt).
- **Styling:**
  - Met eenvoudige Tailwind CSS-klassen wordt de lijst visueel aantrekkelijk en gebruiksvriendelijk gemaakt.

**5\. Waarom is deze stap belangrijk?**

- De gebruikerslijst is essentieel om gebruikers te selecteren waarmee je wilt chatten.
- Het filteren op e-mail zorgt voor een efficiëntere gebruikerservaring, vooral bij grote gebruikerslijsten.
- Deze stap legt de basis voor de chatfunctionaliteit, die in latere stappen verder wordt uitgewerkt.

## Stap 10: Toevoegen van chatsysteem

Het toevoegen van een chatsysteem bestaat uit meerdere stappen. We maken een component voor het weergeven van berichten, een component om berichten te verzenden, en integreren alles in een centrale chatpagina.

**1\. Berichtenlijst en berichtinput component maken**

**a) Navigeren naar de api map**

- Ga in je project naar de api map.
- Voeg twee nieuwe bestanden toe:
    1. MessageList.jsx
    2. MessageInput.jsx

**b) Code voor MessageList.jsx**

Dit component haalt berichten op uit de database en toont ze in een lijst.

```javascript
import React from "react";

const MessageList = ({ messages }) => {
    // Toon de berichten in een lijst met de juiste opmaak voor de afzender en ontvanger van het bericht 
    return (
        // maak een box aan met de berichten erin 
        <div className="box"> 
         {/* map door de berichten en geef ze een kleur en positie afhankelijk van de afzender */}
            {messages.map((message, index) => (
                <div
                    key={index}
                    className={`p-2 rounded-lg text ${
                        message.senderId === Meteor.userId() ? "bg-blue-500 text-white text--right" : "bg-gray-300 "
                    }`}
                >
                    <p>{message.text}</p>
                </div>
            ))}
        </div>
    );
};

export default MessageList;
```

**c) Code voor MessageInput.jsx**

Dit component bevat een invoerveld waarmee gebruikers berichten kunnen verzenden.

```javascript
import React, { useState } from "react";

const MessageInput = ({ onSendMessage }) => {
    const [text, setText] = useState("");
    //functie om het bericht te versturen en de input leeg te maken
    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim()) {
            onSendMessage(text);
            setText("");
        }
    };

    return (
        //formulier om een bericht te versturen
        <form onSubmit={handleSubmit} className="flex box">
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="flex-1 min-w-full p-2 border border-gray-300 rounded-lg"
                placeholder="Schrijf u bericht..."
            />
            <button type="submit" className="ml-2 p-2 bg-blue-500 w-fit text-white rounded-lg">
                Verstuur
            </button>
        </form>
    );
};

export default MessageInput;
```

**2\. Toevoegen van de chatpagina**

**a) Navigeren naar ui**

- Ga naar de map ui.
- Voeg een nieuw bestand toe genaamd ChatPage.jsx.

**b) Code voor ChatPage.jsx**

Dit component combineert de MessageList en MessageInput om een volledige chatervaring te creëren.

```javascript
import React from "react";
import { useParams } from "react-router-dom";
import MessageList from "../api/MessageList";
import MessageInput from "../api/MessageInput";
import { Meteor } from "meteor/meteor";
import { useTracker } from "meteor/react-meteor-data";
import { Messages } from "../api/messages";

const ChatPage = () => {
    // Haal de userId op uit de URL met behulp van useParams
    const { userId } = useParams();

    // Gebruik de useTracker hook om de gebruiker en de laadstatus op te halen
    const { user, isLoading } = useTracker(() => {
        // Laad de gebruiker waarmee wordt gechat door gebruik te maken van de subscribe methode
        const handle = Meteor.subscribe("userById", userId);
        const isLoading = !handle.ready();
        const user = Meteor.users.findOne(userId);
        // Retourneer de gebruiker en de laadstatus
        return { user, isLoading };
    }, [userId]);

    // Gebruik de useTracker hook om de berichten en de laadstatus op te halen
    const { messages, isLoadingMessages } = useTracker(() => {
        // Laad de berichten van de huidige gebruiker en de gebruiker waarmee wordt gechat door gebruik te maken van de subscribe methode
        // hierdoor worden de berichten van de gebruiker en de ontvanger geladen in real-time in de chat
        const handle = Meteor.subscribe("messages", userId);
        const isLoadingMessages = !handle.ready();
        const messages = Messages.find().fetch();

        // Retourneer de berichten en de laadstatus
        return { messages, isLoadingMessages };
    }, [userId]);

    // Toon een laadscherm als de berichten nog worden geladen
    if (isLoadingMessages) {
        return <div>Loading messages...</div>;
    }

    // Toon een laadscherm als de gegevens nog worden geladen
    if (isLoading) {
        return <div>Bezig met laden...</div>;
    }

    // Toon een melding als de gebruiker niet is gevonden
    if (!user) {
        return <div>User not found</div>;
    }
    const handleSendMessage = (text) => {
        // Verstuur het bericht naar de gebruiker waarmee wordt gechat
        // door gebruik te maken van de messages.insert methode van de server en geef een melding als het versturen is mislukt
        Meteor.call("messages.insert", userId, text, (error) => {
            if (error) {
                console.error("Error sending message:", error);
            }
        });
    };

    return (
        // Toon de chatpagina met de berichten en de invoervelden voor het versturen van berichten met de juiste styling 
        <div className="flex flex-col h-screen p-4 bg-blue-100">
            <h1 className="text-2xl mb-4 text-center">Stuur bericht naar {user ? user.emails[0].address : ""} </h1>
            <MessageList messages={messages} />
            <MessageInput onSendMessage={handleSendMessage} />
        </div>
    );
};

export default ChatPage;
```

**3\. Extra styling toevoegen**

Om de chatpagina visueel aantrekkelijk te maken, voeg je aangepaste CSS toe.

**a) Navigeren naar client/main.css**

- Open het bestand client/main.css.
- Voeg hier extra stylingregels toe om de chatinterface beter te maken.

```css
body {
    font-family: sans-serif;
}

.box {
    padding-left: 20%;
    padding-right: 20%;
    min-width: 15rem;
}


.text {
    width: fit-content;
    margin-bottom: 1rem;
}

.text--right {
    text-align: right;
    margin-left: auto;
}
```

**5\. Waarom deze stap belangrijk is**

- Dit vormt de kern van de applicatie: gebruikers kunnen nu berichten naar elkaar sturen.
- Met een combinatie van frontend- en backend-functionaliteit creëer je een interactieve ervaring.

## Stap 11: Laaste update van de routing

 **1\. Routes toevoegen in AppRoutes.jsx**

In deze stap voeg je nieuwe routes toe aan je applicatie, zodat gebruikers op basis van hun inlogstatus de juiste inhoud zien.

 **Open het bestand `AppRoutes.jsx`**

1. **Locatie van het bestand**:  
   Dit bestand bevindt zich in de `ui`-map van je project.  
   Als het bestand nog niet bestaat, maak het aan.

 **Toevoegen van nieuwe routes**

2. **Functionaliteit van de routes**:  
   De nieuwe routes zorgen ervoor dat:
   - De chat-pagina bereikbaar is

```javascript
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { LoginForm } from "./LoginForm";
import { RegisterForm } from "./RegisterForm";
import ChatPage from "./ChatPage"; // Import de ChatPage
import { useTracker } from "meteor/react-meteor-data";
import { App } from "./App";

const AppRoutes = () => {
    // Haal de huidige gebruiker op met behulp van useTracker
    const user = useTracker(() => Meteor.user());
    // Functie om uit te loggen
    const handleLogout = () => {
        // Log de gebruiker uit en geef een melding als het uitloggen is mislukt
        Meteor.logout((error) => {
            if (error) {
                console.error("Logout failed: ", error);
            } else {
                // Optioneel: je kunt hier ook een redirect toevoegen na het uitloggen
                console.log("Logged out successfully");
            }
        });
    };
    return (
        // Voeg de navigatiebalk toe en de routes voor de verschillende pagina's met juiste styling
        <Router>
            <nav className="bg-blue-500 p-4">
                <div className="container mx-auto flex justify-between items-center">
                    <Link to="/" className="text-white font-bold">
                        Chat-App
                    </Link>
                    <div>
                        {user ? (
                            <>
                                <Link to="/" className="text-white hover:underline">
                                    Chat
                                </Link>
                                <Link to="/" className="text-white hover:underline ml-4" onClick={handleLogout}>
                                    Afmelden
                                </Link>
                            </>
                        ) : (
                            <>
                                <Link to="/login" className="text-white hover:underline">
                                    Inloggen
                                </Link>
                                <Link to="/register" className="text-white hover:underline ml-4">
                                    Registreren
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            </nav>
            <Routes>
                {/* Route voor de gebruikerslijst */}
                <Route path="/" element={<App />} />

                {/* Route voor registratie en login */}
                <Route path="/register" element={<RegisterForm />} />
                <Route path="/login" element={<LoginForm />} />

                {/* Dynamische route voor de chatpagina van een specifieke gebruiker */}
                <Route path="/chat/:userId" element={<ChatPage />} />
            </Routes>
        </Router>
    );
};

export default AppRoutes;
```

## Stap 12: Zorgen dat berichten in de database worden opgeslagen en realtime worden weergegeven

In deze stap gaan we een publicatie en methode toevoegen aan de backend, zodat berichten automatisch in de database terechtkomen en realtime zichtbaar worden voor alle gebruikers.

**1\. Navigeren naar server/main.js**

- Open het bestand server/main.js.  
    Dit bestand bevat de server-side logica van je applicatie.

**2\. Toevoegen van een publicatie**

Publicaties in Meteor zorgen ervoor dat specifieke gegevens uit de database beschikbaar worden gemaakt voor de client.

```javascript
// Publicatie voor berichten
Meteor.publish("messages", function (recipientId) {
    if (!this.userId) {
        return this.ready();
    }
    //zoek naar berichten waarvan de verzender of ontvanger de huidige gebruiker is
    return Messages.find({
        $or: [
            { senderId: this.userId, recipientId },
            { senderId: recipientId, recipientId: this.userId },
        ],
    });
});
```

**Uitleg:**

- Deze publicatie deelt alle berichten uit de MessagesCollection met de client.
- Deze berichten worden gesorteerd op basis van de hui

**3\. Toevoegen van een methode**

Middelen worden gebruikt om acties uit te voeren, zoals het toevoegen van gegevens aan de database. Hier voegen we een methode toe om nieuwe berichten op te slaan.

```javascript
// Methode om een bericht toe te voegen
    async "messages.insert"(recipientId, text) {
        // Controleer of de gebruiker is ingelogd
        if (!this.userId) {
            throw new Meteor.Error("not-authorized");
        }

        // Voeg een nieuw bericht toe en wacht op de operatie
        await Messages.insertAsync({
            senderId: this.userId,
            recipientId,
            text,
            createdAt: new Date(),
        });
    },
```

**Uitleg.**

De methode messages.insert wordt gedefinieerd als een asynchrone functie, omdat het werkt met een databasebewerking die tijd kan kosten. Het proces verloopt als volgt:

1. **Controle of de gebruiker is ingelogd**  
    De methode controleert eerst of de gebruiker is ingelogd met this.userId. Als dit niet het geval is, wordt een fout (not-authorized) opgegooid om ongeautoriseerde toegang te blokkeren.
2. **Invoegen van het bericht in de database**  
    Als de gebruiker is ingelogd, wordt een nieuw bericht toegevoegd aan de Messages-collectie met de volgende velden:
    - senderId: De ID van de verzender.
    - recipientId: De ID van de ontvanger (parameter).
    - text: De inhoud van het bericht (parameter).
    - createdAt: Het tijdstip van aanmaak.

## Stap 12: Toevoegen van user List aan de start pagina

In deze stap wil je een lijst van gebruikers toevoegen aan de startpagina van je app, zodat gebruikers die zijn ingelogd of geregistreerd hun gegevens kunnen zien en anderen kunnen bekijken.

**1\. Navigeer naar ui/App.jsx**

Je begint door naar het bestand **App.jsx** te navigeren. Dit bestand bevat de logica voor je startpagina en is waar je de gebruikerslijst wilt weergeven. Om zo er mee te kunnen chatten.

**2\. Pas de code aan**

```javascript
import React from "react";
import { Meteor } from "meteor/meteor";
import { useTracker } from "meteor/react-meteor-data";
import UserList from "./UserList";

export const App = () => {
    // Haal de huidige gebruiker op met behulp van useTracker
    const user = useTracker(() => Meteor.user());

    return (
        // Toon een welkomstbericht en de optie om in te loggen of te registreren met de juiste styling 
        <div className="main flex flex-col items-center bg-gradient-to-r pt-32 min-h-screen">
        <div className="bg-white shadow-lg rounded-lg p-8 max-w-sm w-full mb-2">
            <h1 className="text-2xl font-bold text-gray-800 text-center">Welkom</h1>
            
            {user ? (
                <>
                {/* Toon de gebruiker als deze is ingelogd  */}
                <p className="text-center">{user.emails[0].address}</p>
                {/* Toon de lijst met gebruikers */}
                <UserList />
                </>
            ) : (
                <>
                    {/* Knoppen voor registratie en inloggen, gecentreerd */}
                    <div className="flex justify-center space-x-4">
                        <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg mb-4 hover:bg-blue-600 transition duration-300">
                            <a href="/register">Registreren</a>
                        </button>
                        <button className="bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded-lg mb-4 hover:bg-gray-400 transition duration-300">
                            <a href="/login">Inloggen</a>
                        </button>
                    </div>
                </>
            )}
        </div>
    </div>   
    );
};
```

**De applicatie zou nu foutloos moeten werken**

**Uitleg.**

1. **Gebruik van useTracker om de huidige gebruiker te verkrijgen:**
    - useTracker is een React-hook van Meteor die ervoor zorgt dat de client automatisch de laatste gegevens ontvangt van de server. In dit geval haal je de huidige ingelogde gebruiker op via Meteor.user().
    - Als een gebruiker is ingelogd, wordt de informatie van de gebruiker (zoals het e-mailadres) weergegeven.
2. **Condities voor weergave:**
    - Als de gebruiker is ingelogd (user is waar), wordt hun e-mailadres getoond.
    - Als de gebruiker niet is ingelogd, worden knoppen weergegeven om te registreren of in te loggen.
3. **Knoppen voor registratie en inloggen:**
    - Er worden knoppen gegenereerd voor zowel de registratie- als inlogpagina's, zodat niet-ingelogde gebruikers gemakkelijk toegang hebben tot die pagina's.
4. **UserList component:**
    - Je hebt de **UserList** component aan het einde van de component geplaatst. Deze component zal de lijst van gebruikers tonen om er dan mee te kunnen chatten.

---

# Toekomstige versie / updates

Hoewel de huidige versie van de chatapp een solide basis biedt, zijn er verschillende verbeteringen en uitbreidingen die je kunt overwegen om de functionaliteit te verbeteren en de gebruikerservaring te optimaliseren. Hier zijn enkele ideeën voor toekomstige versies van de applicatie:

**1\. Bericht Notificaties**

In de huidige versie ontvangen gebruikers geen meldingen wanneer ze een nieuw bericht ontvangen. Dit kan worden toegevoegd met behulp van browser-notificaties of een ingebouwd systeem van push-notificaties. Zo kunnen gebruikers direct op de hoogte worden gebracht van nieuwe berichten, zelfs als ze niet actief in de chat zijn.

- **Hoe dit te implementeren**: Gebruik de Notification API van de browser om meldingen te tonen wanneer een nieuw bericht wordt ontvangen. Je kunt ook een externe service zoals Firebase Cloud Messaging (FCM) gebruiken voor push-notificaties.

**2\. Groepschats en Meerdere Ontvangers**

Momenteel kunnen gebruikers alleen privéberichten verzenden naar één andere gebruiker. In toekomstige versies kun je de mogelijkheid toevoegen om groepschats te maken waarbij meerdere gebruikers tegelijkertijd kunnen deelnemen aan een gesprek.

- **Hoe dit te implementeren**: Maak een nieuwe groupId in de berichten- en gebruikerscollectie, zodat gebruikers kunnen worden toegevoegd aan een groepschat. Berichten kunnen dan worden verzonden naar alle leden van de groep.

**3\. Bericht Multimedia (Afbeeldingen, Video's, etc.)**

Een andere toevoeging die de chatapp zou kunnen verbeteren, is de mogelijkheid om afbeeldingen, video's of andere multimedia te delen in berichten. Dit zou de gebruikerservaring aanzienlijk verbeteren, vooral in een chatcontext.

- **Hoe dit te implementeren**: Gebruik een externe service zoals Cloudinary voor het uploaden en hosten van afbeeldingen of video's. Je kunt de link naar de bestanden opslaan in je berichtencollectie en de client kan de media dan weergeven binnen de chatinterface.

**4\. Verbeterde Zoekfunctionaliteit**

De huidige versie bevat een eenvoudige zoekfunctie om gebruikers te filteren op e-mail. Dit kan verder worden uitgebreid door geavanceerdere zoekfunctionaliteit toe te voegen, zoals het zoeken naar berichten op basis van tekst of tijdstempels.

- **Hoe dit te implementeren**: Voeg een zoekbalk toe in de chatinterface en gebruik MongoDB's zoekfunctionaliteit om berichten te filteren op basis van trefwoorden of datums.

**5\. Gebruikersprofielen**

De huidige versie heeft geen gedetailleerde gebruikersprofielen. Dit zou kunnen worden toegevoegd zodat gebruikers hun profiel kunnen bewerken, bijvoorbeeld door hun naam, profielfoto of andere informatie toe te voegen.

- **Hoe dit te implementeren**: Voeg een gebruikersprofielpagina toe waar gebruikers hun persoonlijke gegevens kunnen bijwerken. Gebruik de Meteor.users collectie om deze gegevens op te slaan en aan te passen.

**6\. Veiligheid en Versleuteling**

Om de veiligheid van de gebruikersgegevens en berichten te waarborgen, kun je versleuteling toevoegen aan de berichten die worden verzonden. Dit zorgt ervoor dat alleen de afzender en ontvanger toegang hebben tot de inhoud van de berichten.

- **Hoe dit te implementeren**: Gebruik een versleutelingsbibliotheek zoals crypto in Node.js of een extern systeem zoals JWT (JSON Web Tokens) om de berichten en gebruikerssessies te beveiligen.

**7\. Meer Flexibele Stijlen en UI Verbeteringen**

De huidige versie maakt gebruik van Tailwind CSS voor eenvoudige en responsieve styling. Je kunt de UI verder verbeteren door meer interactieve elementen toe te voegen, zoals chatbubbels die reageren op gebruikersinteracties, en door aangepaste thema's aan te bieden.

- **Hoe dit te implementeren**: Voeg meer Tailwind CSS-componenten toe, zoals knoppen voor het verzenden van reacties, reactiemogelijkheden zoals emoji's en de optie voor donkere modus.

---

# Conclusie

In deze tutorial heb je een volledig werkend chatsysteem gebouwd met behulp van Meteor, React en Tailwind CSS. Gedurende het proces heb je niet alleen geleerd hoe je een chatsysteem implementeert, maar ook hoe je de kracht van Meteor en zijn bijbehorende tools benut om een snelle, real-time applicatie te ontwikkelen. Hieronder volgt een uitgebreide samenvatting van de belangrijkste onderdelen die we hebben behandeld en hoe ze bijdragen aan het succes van de applicatie.

**1\. Opzetten van de Basisstructuur**

De basisstructuur van je applicatie is opgezet door React-componenten te gebruiken voor de front-end en Meteor voor de server-side logica. Je hebt geleerd hoe je het project opzet, hoe je de juiste pakketten installeert en hoe je de componenten voor verschillende pagina’s zoals login, registratie en de chatpagina toevoegt. Dit legde de fundering voor verdere uitbreiding van de applicatie.

**2\. Gebruikersbeheer en Authenticatie**

We hebben Meteor’s ingebouwde gebruikersbeheer en authenticatie gebruikt om de registratie- en login-functionaliteiten toe te voegen. Je hebt gezien hoe eenvoudig het is om Meteor’s Meteor.loginWithPassword, Meteor.logout, en Meteor.userId() te gebruiken voor het beheren van gebruikerssessies en het beschermen van routes die alleen toegankelijk moeten zijn voor ingelogde gebruikers. Door deze functionaliteit te implementeren, hebben we de basis gelegd voor een veilige applicatie waarin gebruikers kunnen inloggen, registreren en afmelden zonder problemen.

**3\. Database en Berichtenbeheer**

Met behulp van MongoDB, dat naadloos werkt met Meteor, hebben we een berichten-collectie opgezet om berichten van gebruikers op te slaan. Door de server-side publicatie van berichten en het gebruik van Meteor's Messages.insert() methode werd ervoor gezorgd dat berichten dynamisch kunnen worden toegevoegd aan de database. Dit zorgt ervoor dat de data gestructureerd wordt bewaard en in real-time kan worden gesynchroniseerd met de gebruikersinterface.

**4\. Real-time Synchronisatie**

Meteor biedt een krachtige real-time data-synchronisatie door gebruik te maken van zijn ingebouwde pub/sub-systeem (publicatie en abonnementen). Dit werd geïmplementeerd door het toevoegen van een publicatie op de server die berichten naar de client stuurt, zodat de chatberichten zonder enige vertraging verschijnen. Je hebt geleerd hoe je publicaties opzet om real-time gegevens naar de client te sturen en hoe de berichten onmiddellijk worden weergegeven, zonder dat de gebruiker de pagina hoeft te vernieuwen.

**5\. Gebruikerslijst en Zoeken**

Op de startpagina van de applicatie hebben we een gebruikerslijst toegevoegd. Door gebruik te maken van de MongoDB-collectie voor gebruikers, konden we een lijst van alle geregistreerde gebruikers ophalen en weergeven. We hebben ook een zoekfunctionaliteit toegevoegd, zodat gebruikers de lijst kunnen filteren op e-mail. Dit helpt gebruikers gemakkelijk de persoon te vinden met wie ze willen chatten, wat de gebruiksvriendelijkheid van de applicatie vergroot.

**6\. Chatfunctie en Interface**

De chatfunctionaliteit zelf werd geïmplementeerd door twee belangrijke componenten: MessageList.jsx en MessageInput.jsx. De eerste toont de berichten die zijn verzonden tussen twee gebruikers, en de tweede component zorgt voor de invoer van nieuwe berichten. Dit alles werd ingebed in de ChatPage.jsx, waarmee gebruikers met elkaar kunnen communiceren in een specifieke chatroom. De interface werd verder gestyled met Tailwind CSS, wat het mogelijk maakte om snel en responsief een aantrekkelijke en functionele gebruikersinterface te creëren.

**7\. Back-end Methodes en Publicaties**

Om ervoor te zorgen dat berichten veilig worden opgeslagen en onmiddellijk zichtbaar zijn voor de gebruikers, werd een backend-methode toegevoegd. Deze methode controleert eerst of de gebruiker is ingelogd voordat het bericht wordt opgeslagen in de database. Dit zorgt ervoor dat alleen geautoriseerde gebruikers berichten kunnen versturen. Daarnaast werd er een publicatie voor berichten opgezet zodat de gegevens real-time worden gesynchroniseerd tussen de client en de server. Dit maakt de chat volledig dynamisch en responsief.

**8\. Gebruik van Meteor voor Snelle Prototyping**

Meteor’s krachtige functies, zoals eenvoudige real-time synchronisatie, ingebouwd gebruikersbeheer en directe integratie met MongoDB, maken het een uitstekende keuze voor het snel ontwikkelen van real-time applicaties. In deze tutorial hebben we deze eigenschappen benut om snel een werkend chatsysteem op te zetten zonder complexiteit toe te voegen aan de infrastructuur. Dit laat zien hoe Meteor het ontwikkelingsproces versnelt, en hoe snel je kunt beginnen met bouwen zonder tijd te verliezen aan de set-up van de basisfunctionaliteiten.

**Sterke punten van Meteor:**

Meteor biedt krachtige tools die specifiek zijn ontworpen voor het bouwen van real-time applicaties, zoals onze chatapp. De sterke punten van Meteor zijn onder andere:

- **Eenvoudige integratie van MongoDB**: Met een minimale configuratie kun je MongoDB gebruiken om gegevens op te slaan en snel beschikbaar te stellen voor de client.
- **Gebruikersbeheer en Authenticatie**: Ingebouwde methodes voor login, registratie, en sessiebeheer, zonder dat je externe bibliotheken hoeft te integreren.
- **Real-time Data Synchronisatie**: Meteors pub/sub-model maakt het mogelijk om real-time gegevens tussen de client en de server te synchroniseren zonder dat de gebruiker de pagina moet vernieuwen.
- **Snelheid van ontwikkeling**: Meteor maakt het snel en gemakkelijk om prototypes te bouwen dankzij zijn out-of-the-box configuratie voor backend en front-end integratie.