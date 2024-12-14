---
title: "WebRTC"
synopsis: "WebRTC is a powerful technology that enables peer-to-peer communication in web browsers for real-time audio, video, and data exchange."
date: 2024-10-18
author:
  name: "Daria"
  avatarUrl: "/assets/avatars/john-doe.png"
  socials:
    website: ""
    linkedin: ""
    github: ""
thumbnailUrl: "/assets/posts/WebRCT_Comparison.png"
head:
  - - meta
    - name: description
      content: "Informatie over WebRTC technologie"
  - - meta
    - name: keywords
      content: "webrtc real-time communication"
---

# WebRTC Video Bel-app: Bouw je eigen video-call applicatie

In deze tutorial leer je hoe je een eenvoudige video-belapp kan maken met WebRTC, Node.js, en Socket.io (voor de signaling). Je leert wat WebRTC is, hoe het werkt, en hoe je een volledige applicatie kunt bouwen met een mooie gebruikersinterface. We gebruiken ook **TailwindCSS** om de applicatie er modern en overzichtelijk uit te laten zien.

---

## Wat is WebRTC?

WebRTC staat voor **Web Real-Time Communication** en is een technologie waarmee je in real-time audio- en videocommunicatie kunt doen via het internet. Het maakt gebruik van een directe verbinding tussen browsers. Dit betekent dat je geen externe servers nodig hebt om de media te versturen (video en audio).

### **Wat kun je bouwen met WebRTC?**

- **Video- en audioapplicaties**
- **Scherm delen**
- **Chat-apps**
- **Bestandsdeling-applicaties**

En dit alles werkt zonder extra plugins of software!

---

## Hoe werkt WebRTC?

WebRTC gebruikt een aantal belangrijke onderdelen om de communicatie tussen twee browsers mogelijk te maken. Hier is een eenvoudige uitleg:

### **Stap 1: Peer-to-Peer (P2P)**

WebRTC maakt een directe verbinding tussen twee apparaten. Dit wordt een **P2P-verbinding** genoemd. Hierdoor kunnen data (zoals video en audio) sneller en efficiënter worden verzonden.

### **Stap 2: Signaling (Signaaluitwisseling)**

WebRTC heeft hulp nodig om de verbinding op te zetten. Het moet informatie uitwisselen tussen de twee apparaten, zoals:

- **SDP (Session Description Protocol):** Beschrijft de details van de verbinding, zoals videoformaten en codec-instellingen.
- **ICE (Interactive Connectivity Establishment) Candidates:** Helpt met het vinden van de beste route tussen apparaten, zelfs als ze achter een router (NAT) zitten.

### **Stap 3: STUN- en TURN-servers**

- **STUN-server:** Helpt om je publieke IP-adres te ontdekken. Dit is nodig als je apparaat achter een router zit.
- **TURN-server:** Stuurt data via een relay als een directe verbinding niet mogelijk is (bijvoorbeeld door strenge firewallregels).

### **Stap 4: MediaStreams**

Met WebRTC kun je de camera en microfoon van de gebruiker gebruiken via de browser. Deze media worden in streams verwerkt en tussen apparaten gedeeld.

---

# WebRTC Tutorial

### **Wat bouwen we in deze tutorial?**

We gaan een eenvoudige video-belapplicatie maken met:

- **WebRTC:** Voor het opzetten van de verbinding en het delen van video en audio.
- **Node.js en Socket.io:** Voor signaling (het uitwisselen van SDP en ICE-informatie).
- **TailwindCSS:** Voor een moderne en eenvoudige stijl.

---

## Stap 1: De Backend Opzetten

De backend is een eenvoudige server die de signaling afhandelt. WebRTC gebruikt deze server om gegevens uit te wisselen, maar de audio en video zelf worden direct tussen de gebruikers verstuurd.

### **Wat doet de backend?**

1. Laat gebruikers een **kamer** (chatroom) maken en eraan deelnemen.
2. Deelt belangrijke informatie, zoals:
   - **SDP-offers:** Voor het starten van de verbinding.
   - **SDP-answers:** Voor het accepteren van de verbinding.
3. Stuurt **ICE-candidates** door, die nodig zijn om de verbinding te laten werken, zelfs als gebruikers achter een router zitten.

---

### **Benodigdheden**

- **Node.js:** Te downloaden via [Node.js](https://nodejs.org).
- **Een teksteditor** zoals Visual Studio Code of WebStorm.
- **npm (Node Package Manager):** Wordt automatisch meegeleverd met Node.js.

---

### **Hoe zet je de backend op?**

1. **Maak een nieuwe map voor je project.**
   ```bash
   mkdir webrtc-app
   cd webrtc-app
   code .
   ```
2. **Initialiseer een nieuw Node.js-project.**

```bash
npm init -y
```

3. **Installeer de benodigde pakketten.**

```bash
npm install express socket.io
```

## Backend Code

```js
const express = require("express"); // Laadt Express, onze webserver
const http = require("http"); // Nodig om een HTTP-server te maken
const { Server } = require("socket.io"); // Laadt Socket.io voor real-time communicatie

const app = express(); // Maakt een nieuwe Express-app
const server = http.createServer(app); // Combineert Express met een HTTP-server
const io = new Server(server); // Verbindt Socket.io met de HTTP-server

// Laat Express bestanden uit de huidige map (zoals index.html) tonen
app.use(express.static(__dirname));

// Wanneer een gebruiker verbinding maakt
io.on("connection", (socket) => {
  console.log("Een gebruiker is verbonden:", socket.id);

  // Gebruiker voegt zich toe aan een kamer
  socket.on("join", (room) => {
    console.log(`${socket.id} is toegevoegd aan kamer ${room}`);
    socket.join(room); // Voeg de gebruiker toe aan de kamer
    socket.to(room).emit("user-joined"); // Laat andere gebruikers weten dat iemand is aangesloten
  });

  // Wanneer een gebruiker een SDP-offer verstuurt
  socket.on("offer", ({ offer, room }) => {
    console.log(`Offer ontvangen van ${socket.id} in kamer ${room}`);
    socket.to(room).emit("offer", offer); // Stuur het offer door naar andere gebruikers
  });

  // Wanneer een gebruiker een SDP-answer verstuurt
  socket.on("answer", ({ answer, room }) => {
    console.log(`Answer ontvangen van ${socket.id} in kamer ${room}`);
    socket.to(room).emit("answer", answer); // Stuur het antwoord door naar de initiator
  });

  // Wanneer een gebruiker een ICE-candidate verstuurt
  socket.on("ice-candidate", ({ candidate, room }) => {
    console.log(`ICE-candidate ontvangen van ${socket.id} in kamer ${room}`);
    socket.to(room).emit("ice-candidate", candidate); // Stuur de ICE-candidate door naar de andere gebruiker
  });
});

// Start de server op poort 3000
server.listen(3000, () => {
  console.log("Server draait op http://localhost:3000");
});
```

## Wat doet deze code?

- **Express:** Deze server toont de bestanden in de map waarin de server draait. Dit betekent dat onze `index.html` automatisch wordt geladen wanneer een gebruiker naar de URL `http://localhost:3000` gaat.
- **Socket.io:** Hiermee kunnen gebruikers in real time met elkaar praten. In dit geval worden SDP-offers, SDP-answers en ICE-candidates doorgestuurd tussen de gebruikers.

---

## Evenementen in Socket.io

- **`connection`**: Dit wordt uitgevoerd wanneer een gebruiker verbinding maakt. Hier kun je de `socket.id` van de gebruiker zien.
- **`join`**: Hiermee voegt een gebruiker zich toe aan een kamer. Dit is handig om ervoor te zorgen dat de communicatie alleen gebeurt tussen gebruikers in dezelfde kamer.
- **`offer`**: De initiator stuurt een SDP-offer naar de andere gebruiker.
- **`answer`**: De andere gebruiker stuurt een SDP-answer terug naar de initiator.
- **`ice-candidate`**: Beide gebruikers wisselen ICE-candidates uit om de beste netwerkroute te vinden.

---

## Hoe start je een server op?

1. **Zorg eerst dat het bestand opgeslagen is.**
2. **Start de server.** Ga naar je terminal of command line en voer het volgende commando uit (in het juiste pad):
   ```bash
   node server.js
   ```
3. Test de server, open de browser en ga naar het url om te zien dat alles goed is ingesteld. Later zou de server je HTML bestand moeten tonen als alles goed is.

## We hebben een basis gelegd voor de backend van onze WebRTC-app

Dit is wat we al hebben gedaan:

1. **Een Node.js-server opgezet:** De server draait op poort 3000 en is verantwoordelijk voor het afhandelen van signaling.
2. **Express gebruikt:** Hiermee serveren we bestanden zoals onze HTML-frontend.
3. **Socket.io toegevoegd:** Dit zorgt voor real-time communicatie tussen de gebruikers, inclusief het versturen van SDP-offers, SDP-answers en ICE-candidates.

De backend is nu volledig operationeel. In de volgende stap gaan we een frontend bouwen die gebruikers toestaat om de videobelverbinding op te zetten. **Lees de comments in de code als je nog iets niet begrijpt.**

---

## Stap 2: De Frontend Maken

De frontend is het deel van de applicatie dat gebruikers zien en waarmee ze interactie hebben. Hier regelen we:

- De toegang tot de camera en microfoon.
- De gebruikersinterface (UI).
- De WebRTC-logica voor het opzetten van de videoverbinding.

Dit deel is net zo belangrijk als de backend, omdat hier daadwerkelijk de verbindingen worden opgezet en de video wordt weergegeven.

---

### **Wat gaat de frontend doen?**

De frontend heeft verschillende taken:

1. **Toegang tot camera en microfoon vragen:** We gebruiken de browser-API `getUserMedia()` om de videostream van de gebruiker te krijgen.
2. **De video's tonen:** De lokale videostream wordt in een `<video>`-element weergegeven, en de video van de andere gebruiker (remote video) komt in een ander `<video>`-element.
3. **WebRTC-verbinding opzetten:** We maken een Peer-to-Peer (P2P) verbinding tussen twee gebruikers met `RTCPeerConnection`.
4. **Signaling met Socket.io:** SDP-offers, SDP-answers en ICE-candidates worden uitgewisseld met behulp van onze backend.
5. **Een mooie UI maken:** Met **TailwindCSS** zorgen we ervoor dat de interface er strak uitziet en gemakkelijk te gebruiken is.

---

### **Hoe zet je de frontend op?**

#### **HTML en Structuur**

We beginnen met een eenvoudig HTML-bestand. Dit bestand bevat:

- **Een knop** om de videoverbinding te starten.
- **Twee `<video>`-elementen:** Eén voor de lokale video en één voor de inkomende (remote) video.
- **Styling met TailwindCSS:** Voor een moderne uitstraling. (We importeren Tailwind direct van hun website.)

---

#### **Maak een HTML-bestand**

Maak een bestand genaamd `index.html` en voeg de volgende code toe:

```html
<!DOCTYPE html>
<html lang="nl">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>WebRTC Video Bel-app</title>
    <script src="https://cdn.tailwindcss.com"></script>
  </head>
  <body class="bg-gray-100 text-gray-800 font-sans">
    <div
      class="min-h-screen flex flex-col items-center justify-center space-y-6"
    >
      <h1 class="text-3xl font-bold text-blue-600">WebRTC Video Bel-app</h1>

      <button
        id="startBtn"
        class="px-6 py-3 bg-blue-500 text-white font-semibold rounded shadow-md hover:bg-blue-600 transition"
      >
        Start Video Call
      </button>

      <div class="flex space-x-4 mt-6">
        <video
          id="localVideo"
          class="w-1/2 border border-gray-300 rounded-lg shadow-md"
          autoplay
          playsinline
          muted
        ></video>
        <video
          id="remoteVideo"
          class="w-1/2 border border-gray-300 rounded-lg shadow-md"
          autoplay
          playsinline
        ></video>
      </div>
    </div>
  </body>
</html>
```

Deze HTML bevat de basisstructuur en styling voor onze videobel-app. In de volgende stap voegen we JavaScript toe om de functionaliteit voor WebRTC en signaling te implementeren.

#### **Logica toevoegen met JavaScript**

Nu voegen we de logica toe om de videoverbinding te starten. We gebruiken Socket.io om signaling te doen en WebRTC voor de Peer-to-Peer-verbinding.

Plaats het volgende script-element onderaan de HTML:

```js
<script src="/socket.io/socket.io.js"></script>
<script>
  const socket = io(); // Verbindt met de backend via Socket.io
  const roomName = "webrtc-demo"; // Naam van de kamer waar gebruikers aan deelnemen

  const startBtn = document.getElementById("startBtn");
  const localVideo = document.getElementById("localVideo");
  const remoteVideo = document.getElementById("remoteVideo");

  let localStream; // Voor de stream van de gebruiker zelf (camera en microfoon)
  let pc; // RTCPeerConnection object voor de P2P-verbinding

  const configuration = {
    iceServers: [
      { urls: "stun:stun.services.mozilla.com" }, // STUN-server om IP-adressen te ontdekken
      { urls: "stun:stun.l.google.com:19302" },
      {
        urls: "turn:relay.metered.ca:80", // TURN-server voor NAT-traversal
        username: "relayUsername",
        credential: "relayPassword",
      },
    ],
  };

  // Wanneer de gebruiker op de "Start Video Call" knop klikt
  startBtn.onclick = async () => {
    startBtn.disabled = true;

    try {
      // Vraag toegang tot de camera en microfoon
      localStream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true,
      });
      localVideo.srcObject = localStream; // Toon de video in het lokale video-element

      socket.emit("join", roomName); // Meld de gebruiker aan in de kamer
      console.log("Gebruiker toegevoegd aan kamer:", roomName);
    } catch (err) {
      console.error("Fout bij toegang tot camera of microfoon:", err);
    }
  };

  // Wanneer een andere gebruiker de kamer joint
  socket.on("user-joined", async () => {
    console.log("Een andere gebruiker heeft zich aangesloten");
    createPeerConnection(); // Maak een RTCPeerConnection
    localStream.getTracks().forEach((track) => pc.addTrack(track, localStream)); // Voeg lokale tracks toe aan de verbinding

    const offer = await pc.createOffer(); // Maak een SDP-offer
    await pc.setLocalDescription(offer); // Stel de lokale SDP in
    socket.emit("offer", { offer: pc.localDescription, room: roomName }); // Stuur de offer naar de andere gebruiker
  });

  // Wanneer een offer wordt ontvangen
  socket.on("offer", async (offer) => {
    console.log("Offer ontvangen");
    createPeerConnection();
    localStream.getTracks().forEach((track) => pc.addTrack(track, localStream)); // Voeg lokale tracks toe

    await pc.setRemoteDescription(offer); // Stel de remote SDP in
    const answer = await pc.createAnswer(); // Maak een SDP-answer
    await pc.setLocalDescription(answer); // Stel de lokale SDP in
    socket.emit("answer", { answer: pc.localDescription, room: roomName }); // Stuur de answer terug
  });

  // Wanneer een answer wordt ontvangen
  socket.on("answer", async (answer) => {
    console.log("Answer ontvangen");
    await pc.setRemoteDescription(answer); // Stel de remote SDP in
  });

  // Wanneer een ICE-candidate wordt ontvangen
  socket.on("ice-candidate", async (candidate) => {
    console.log("ICE-candidate ontvangen");
    try {
      await pc.addIceCandidate(candidate); // Voeg de ICE-candidate toe aan de verbinding
    } catch (err) {
      console.error("Fout bij het toevoegen van ICE-candidate:", err);
    }
  });

  // Functie om een PeerConnection te maken
  function createPeerConnection() {
    if (pc) return; // Controleer of er al een verbinding is
    console.log("RTCPeerConnection wordt gemaakt");

    pc = new RTCPeerConnection(configuration); // Maak een nieuwe PeerConnection

    // Stuur ICE-candidates naar de andere gebruiker
    pc.onicecandidate = ({ candidate }) => {
      if (candidate) {
        console.log("ICE-candidate verzonden:", candidate);
        socket.emit("ice-candidate", { candidate, room: roomName });
      }
    };

    // Wanneer een remote stream wordt ontvangen
    pc.ontrack = (event) => {
      console.log("Remote stream ontvangen");
      remoteVideo.srcObject = event.streams[0]; // Toon de remote video
    };
  }
</script>

```

## Hoe werkt de frontend?

### 1. **Start de verbinding**

- De gebruiker klikt op de knop **“Start Video Call”**.
- `getUserMedia()` vraagt toegang tot de camera en microfoon.
- De lokale videostream wordt in het `<video>`-element weergegeven.

### 2. **Signaling via Socket.io**

- De gebruiker joint een kamer via `socket.emit("join")`.
- Als een andere gebruiker de kamer joint:
  - Wordt een **SDP-offer** gemaakt en verzonden.
  - **SDP-answers** en **ICE-candidates** worden uitgewisseld om de verbinding op te zetten.

### 3. **Peer-to-Peer verbinding opzetten**

- WebRTC zorgt voor de directe uitwisseling van audio en video tussen de gebruikers.
- De inkomende stream van de andere gebruiker wordt weergegeven in het **remote `<video>`-element**.

---

## Resultaat

Na deze stap heb je een werkende frontend die:

- De video’s van beide gebruikers weergeeft.
- Een **Peer-to-Peer verbinding** opzet met WebRTC.
- **Signaling** afhandelt met Socket.io.
- Een **moderne UI** gebruikt met TailwindCSS.

---

## De applicatie testen

Nu we zowel de backend als de frontend hebben opgezet, is het tijd om te testen of de applicatie werkt zoals bedoeld. In deze stap leren we hoe je:

- De applicatie uitvoert.
- Problemen opspoort.
- Controleert of de videoverbinding correct wordt opgezet.

---

### **Benodigdheden voor het testen**

1. **Node.js en npm**

   - Zorg ervoor dat beide correct zijn geïnstalleerd.
   - Controleer dit door in de terminal de volgende commando’s uit te voeren:
     ```bash
     node -v
     npm -v
     ```
   - Als je de versies ziet, is alles correct geïnstalleerd.

2. **Twee browservensters openen**
   Je hebt twee tabbladen of apparaten nodig om de applicatie te testen:

   - **Optie 1:** Open twee tabbladen in dezelfde browser.
   - **Optie 2:** Gebruik twee verschillende browsers (bijvoorbeeld Chrome en Firefox).
   - **Optie 3:** Gebruik twee apparaten (bijvoorbeeld je laptop en je telefoon). Ga in dit geval naar het URL: `JOUW_IP:3000`.
     - Je kunt je IP-adres vinden via je netwerkinstellingen of door het online op te zoeken.

3. **Camera en microfoon**
   - Zorg ervoor dat je apparaat een werkende camera en microfoon heeft. Als dit niet het geval is, gebruik dan een externe webcam of microfoon.
   - Geef de browser toestemming om de camera en microfoon te gebruiken tijdens het testen.

---

## Applicatie starten

### **Frontend openen**

1. Open een browser en ga naar `http://localhost:3000`.
2. Je zou de gebruikersinterface van je videobelapplicatie moeten zien, inclusief de knop **“Start Video Call”**.
3. **Tweede gebruiker toevoegen:**
   - Open een tweede tabblad of gebruik een ander apparaat.
   - Ga ook naar `http://localhost:3000`.

---

### **De verbinding testen**

1. Klik op **“Start Video Call”** in beide vensters.

   - Beide gebruikers worden toegevoegd aan de kamer genaamd `webrtc-demo`.
   - De eerste gebruiker maakt een **SDP-offer** en stuurt deze naar de tweede gebruiker via **Socket.io**.
   - De tweede gebruiker accepteert het offer met een **SDP-answer**.

2. **Bekijk de video’s:**

   - In het linker `<video>`-element zie je de **lokale videostream** (van je eigen camera).
   - In het rechter `<video>`-element zie je de **remote videostream** (van de andere gebruiker).

3. **Controleer de console:**
   - Open de ontwikkelaarstools in je browser (**Rechtermuisknop → Inspecteren → Console**).
   - Je zou berichten moeten zien zoals:
     - **Gebruiker toegevoegd aan kamer: webrtc-demo**
     - **Een andere gebruiker heeft zich aangesloten**
     - **Offer ontvangen**
     - **Answer ontvangen**
     - **ICE-candidate verzonden**
     - **ICE-candidate ontvangen**

Als je deze berichten ziet, betekent dit dat de signaling succesvol werkt en de verbinding tot stand is gebracht.

---

## Veelvoorkomende problemen en oplossingen

### **Probleem 1: Geen video te zien**

- **Oorzaak:** De camera of microfoon werkt niet, of de browser heeft geen toestemming.
- **Oplossing:**
  - Controleer of de camera en microfoon werken in andere apps.
  - Zorg ervoor dat je de browser toestemming hebt gegeven om de camera en microfoon te gebruiken.

### **Probleem 2: Geen verbinding tussen gebruikers**

- **Oorzaak:** De signaling werkt niet correct of er is een probleem met de ICE-candidates.
- **Oplossing:**
  - Controleer of beide gebruikers dezelfde kamer (room) gebruiken.
  - Zorg ervoor dat de backend actief is en geen fouten toont in de terminal.
  - Voeg een TURN-server toe als je apparaten op verschillende netwerken zitten.

### **Probleem 3: De verbinding blijft hangen op “Connecting”**

- **Oorzaak:** NAT-traversal faalt omdat er geen geschikte netwerkroute is gevonden.
- **Oplossing:**
  Voeg een TURN-server toe aan de configuratie:
  ```javascript
  {
    urls: "turn:relay.metered.ca:80",
    username: "relayUsername",
    credential: "relayPassword"
  }
  ```
  ## Verbeteringen en uitbreidingen

Nu de basisapplicatie werkt, kun je extra functies toevoegen om de app nog beter te maken:

### **1. Meerdere gebruikers ondersteunen**

- Voeg functionaliteit toe waarmee meer dan twee gebruikers in een kamer kunnen deelnemen.
- Gebruik een **SFU (Selective Forwarding Unit)** zoals **Mediasoup** of **Janus** om meerdere videostreams efficiënt te beheren en de prestaties te verbeteren.

---

### **2. Scherm delen**

- Maak het mogelijk om je scherm te delen in plaats van de camerastream. Dit is handig voor presentaties of samenwerking.
- Gebruik de `getDisplayMedia()` API om een schermstream te krijgen:
  ```javascript
  const screenStream = await navigator.mediaDevices.getDisplayMedia({
    video: true,
  });
  ```

### **3. Chat toevoegen**

- Gebruik WebRTC’s datachannels om tekstberichten te sturen tussen gebruikers.

### **4. Toestemmingsscherm**

- Voeg een dialoogvenster toe waarin gebruikers toestemming geven voordat de camera en microfoon worden gestart.

### **5. Stijl verbeteren**

- Gebruik meer TailwindCSS-klassen om de gebruikersinterface interactiever en mooier te maken. Voeg bijvoorbeeld animaties of hover-effecten toe.

## Conclusie

Gefeliciteerd! Je hebt nu een werkende video-belapplicatie gebouwd! In deze stappen hebben we:

1. **Een eenvoudige backend gemaakt** met Node.js en Socket.io voor signaling.
2. **Een frontend gebouwd** met WebRTC om de Peer-to-Peer (P2P)-verbinding op te zetten.
3. **De applicatie getest** en gecontroleerd of alles naar behoren werkt.

WebRTC is een krachtige technologie die je kunt gebruiken voor meer dan alleen videobellen. Je kunt hiermee ook bestandsdeling, real-time chats en meer implementeren. **Veel succes met het uitbreiden van je project!**

---

## Extra’s

Wil je nog extra’s weten en dieper op de theorie ingaan? Lees dan verder!

### Hoe werkt signaling in detail?

WebRTC vereist signaling om een verbinding tussen twee gebruikers tot stand te brengen. Dit proces houdt in dat bepaalde informatie moet worden uitgewisseld voordat een directe Peer-to-Peer (P2P)-verbinding kan worden gemaakt.

---

### Wat is SDP (Session Description Protocol)?

**SDP** beschrijft hoe een media-verbinding moet worden opgezet. Het bevat informatie zoals:

- **Welke codecs worden ondersteund:** Bijvoorbeeld VP8 of H.264 voor video.
- **De maximale resolutie en framerate van de video.**
- **Audio-instellingen:** Zoals de gebruikte codec (meestal Opus voor WebRTC).
- **Het gebruikte transportprotocol:** Meestal SRTP (Secure Real-Time Protocol).

---

### Wat zijn ICE-candidates?

**ICE (Interactive Connectivity Establishment)** is een protocol dat helpt om de beste netwerkroute te vinden tussen gebruikers. Dit is vooral belangrijk als gebruikers achter **NAT** (Network Address Translation) of firewalls zitten.

#### Soorten ICE-candidates:

1. **Host:** Een lokaal IP-adres dat direct toegankelijk is.
2. **srflx (Server Reflexive):** Een openbaar IP-adres, verkregen via een STUN-server.
3. **relay:** Een adres dat via een TURN-server loopt als directe verbinding niet mogelijk is.

---

### Waarom signaling via Socket.io?

Signaling kan op verschillende manieren worden gedaan, bijvoorbeeld via **REST API’s**, **WebSockets** of handmatige uitwisseling van SDP’s. **Socket.io** is ideaal omdat:

- Het **bidirectionele communicatie** ondersteunt.
- Het **real-time** en **betrouwbaar** is.
- Het eenvoudig integreert met onze **Node.js-backend**.

---

### Wat is een STUN-server?

Een **STUN-server** (_Session Traversal Utilities for NAT_) helpt apparaten om hun publieke IP-adres te ontdekken. Dit is nodig als een apparaat zich achter een router of NAT bevindt. STUN-servers zijn lichtgewicht en worden vaak gratis aangeboden door bedrijven zoals Google.

#### Bekende STUN-servers:

- `stun:stun.services.mozilla.com`
- `stun:stun.l.google.com:19302`

---

### Wat is een TURN-server?

Een **TURN-server** (_Traversal Using Relays around NAT_) is een fallback-oplossing als een directe P2P-verbinding niet mogelijk is. TURN-servers sturen media via een relayserver. Dit zorgt ervoor dat WebRTC zelfs werkt in omgevingen met strenge firewallregels, maar het verhoogt de latentie en kost meer bandbreedte.

#### Wanneer gebruik je een TURN-server?

- Als gebruikers op verschillende netwerken zitten en een directe verbinding niet lukt.
- Als de verbinding vastloopt op **“Connecting”** door NAT-traversal.

---

### Hoe werkt NAT-traversal?

Bij NAT-traversal probeert WebRTC verbinding te maken tussen apparaten die achter een NAT-router staan. Dit gebeurt door:

1. **STUN:** Het publieke IP-adres van beide apparaten te ontdekken.
2. **ICE-candidates:** Mogelijke routes te testen voor de snelste verbinding.
3. **TURN:** Een relayserver te gebruiken als geen directe verbinding mogelijk is.

---

Met deze extra’s kun je een dieper inzicht krijgen in hoe WebRTC werkt en hoe je het verder kunt uitbreiden. Veel succes met het bouwen van geavanceerde real-time applicaties!
