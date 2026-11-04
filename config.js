/* =====================================================================
   config.js  –  DIE EINZIGE DATEI, DIE DU FÜR DIE MEISTEN ÄNDERUNGEN BRAUCHST
   (Këtu ndryshon emrin, domainin, kontaktin, ngjyrat dhe galerinë.)
   ===================================================================== */

const SITE = {
  // ---- HIER ÄNDERN: Name & Domain --------------------------------------
  name: "Firma Zeqiraj",
  shortName: "Zeqiraj",
  domain: "buildingservicezeqiraj.de",          // pa https://
  tagline: "Maler- & Renovierungsarbeiten in Fürstenfeldbruck und Umgebung",

  // ---- HIER ÄNDERN: Kontakt --------------------------------------------
  owner: "Halil Zeqiraj",
  job: "Maler",
  street: "Ettenhofer Str. 46",
  zip: "82256",
  city: "Fürstenfeldbruck",
  mobile: "0176 / 49232338",
  mobileRaw: "+4917649232338",                  // për lidhjen tel: (pa hapësira)
  phone: "08141 / 890101",
  phoneRaw: "+498141890101",
  email: "23011973halil@gmail.com",
  taxNumber: "117/292/60071",
  vatId: "",                                    // USt-IdNr. nëse ka, p.sh. "DE123456789"
  whatsapp: "4917649232338",                    // pa + dhe pa hapësira; "" = fshih butonin

  // ---- HIER ÄNDERN: Farben ---------------------------------------------
  colors: {
    primary: "#1e73be",       // blu kryesore
    primaryDark: "#0f4c81",
    accent: "#f5b700",        // e verdhë (si shiriti i maskimit)
    dark: "#14263a",
    light: "#f4f8fc"
  },

  // ---- HIER ÄNDERN: Leistungen (shërbimet) ------------------------------
  services: [
    { iconName: "paint-roller", title: "Malerarbeiten", text: "Innen- und Außenanstriche, Akzentwände, Fassadengestaltung und Lackierarbeiten – sauber, deckend und langlebig." },
    { iconName: "layers", title: "Trockenbau & Gipskarton", text: "Wände, abgehängte Decken, Dachausbau, Nischen und TV-Wände inklusive Dämmung und Feuchtraum-Platten." },
    { iconName: "wallpaper", title: "Tapezierarbeiten", text: "Mustertapeten, Vliestapeten und Fototapeten – exakt verlegt, auch bei großen Motiven." },
    { iconName: "zap", title: "Elektroarbeiten", text: "Elektroarbeiten im Rahmen von Renovierungen, bei Bedarf in Zusammenarbeit mit qualifizierten Fachbetrieben." },
    { iconName: "floor", title: "Bodenbeläge", text: "Vinyl, Laminat und Fischgrät-Böden – fachgerecht verlegt mit sauberen Anschlüssen." },
    { iconName: "bath", title: "Bad- & Wohnraumrenovierung", text: "Fliesen, Sanitär, Spiegel mit LED und komplette Raumsanierungen aus einer Hand." }
  ],

  // ---- HIER ÄNDERN: Galerie ---------------------------------------------
  // NEUES FOTO HINZUFÜGEN: 1) Foto in den Ordner "images/" legen
  // 2) Eine Zeile kopieren und Dateiname, Kategorie, Text ändern.
  // Kategorien: Malerarbeiten, Trockenbau, Tapeten, Boden, Bad, Wohnzimmer, Fassade
  // Das Elektro-Symbol steht auf der Leistungsseite. Das allgemeine Elektrobild
  // wird nicht als eigenes Referenzprojekt gezeigt (kein Projektbeleg).
  // Die ERSTEN SECHS Fotos erscheinen auch auf der Startseite.
  // Icon-Namen für Leistungen: paint-roller, layers, wallpaper, zap, floor, bath.
  gallery: [
    { file: "tv-wand-marmor.jpg",        cat: "Wohnzimmer",   alt: "TV-Wand mit Marmor-Optik, Lamellen und LED-Beleuchtung", caption: "TV-Wand mit Marmor-Optik & Lamellen" },
    { file: "fassade-rot-grau.jpg",      cat: "Fassade",      alt: "Fassadenanstrich in Rot mit grauem Sockel",              caption: "Fassadenanstrich Rot / Anthrazit" },
    { file: "boden-fischgraet.jpg",      cat: "Boden",        alt: "Fischgrät-Bodenbelag in Eiche-Optik",                    caption: "Fischgrät-Boden" },
    { file: "bad-doppelwaschtisch.jpg",  cat: "Bad",          alt: "Badezimmer mit Doppelwaschtisch und LED-Spiegel",        caption: "Bad mit Doppelwaschtisch & LED-Spiegel" },
    { file: "tv-wand-schwarz.jpg",       cat: "Wohnzimmer",   alt: "Dunkle TV-Wand mit Nischen und Ziegel-Optik",            caption: "TV-Wand mit Nischen & Ziegel-Optik" },
    { file: "fototapete-wasserfall.jpg", cat: "Tapeten",      alt: "Fototapete mit Wasserfall im Wald",                      caption: "Fototapete Wasserfall" },
    { file: "dusche.jpg",                cat: "Bad",          alt: "Geflieste Dusche mit Regenbrause",                       caption: "Dusche mit Großformat-Fliesen" },
    { file: "akzentwand-orange.jpg",     cat: "Malerarbeiten",alt: "Orange gestrichene Akzentwand",                          caption: "Akzentwand in Ocker-Orange" },
    { file: "fassade-rot-garten.jpg",    cat: "Fassade",      alt: "Rot gestrichenes Haus mit Gerüst",                       caption: "Fassade nach der Sanierung" },
    { file: "glastuer-rohbau.jpg",       cat: "Trockenbau",   alt: "Glas-Doppeltür in verspachtelter Trockenbauwand",        caption: "Glastür & Spachtelarbeiten" },
    { file: "tv-nische-trockenbau.jpg",  cat: "Trockenbau",   alt: "Trockenbau-Nische für TV-Wand im Rohzustand",            caption: "TV-Nische in Trockenbau" },
    { file: "daemmung-1.jpg",            cat: "Trockenbau",   alt: "Metallständerwand mit Mineralwolle-Dämmung",             caption: "Ständerwerk mit Dämmung" },
    { file: "daemmung-2.jpg",            cat: "Trockenbau",   alt: "Trockenbauwand mit Dämmung und Installationen",          caption: "Dämmung & Installationen" },
    { file: "feuchtraum-platten.jpg",    cat: "Trockenbau",   alt: "Feuchtraumplatten im Bad neben einem Fenster",           caption: "Feuchtraumplatten im Bad" },
    { file: "dachschraege-balken.jpg",   cat: "Trockenbau",   alt: "Dachschräge mit Holzbalken und Gipskarton",              caption: "Dachausbau mit Holzbalken" },
    { file: "dachschraege-decke.jpg",    cat: "Trockenbau",   alt: "Beplankte Dachschräge mit Dachfenster",                  caption: "Dachschräge beplankt" },
    { file: "dachausbau-dampfbremse.jpg",cat: "Trockenbau",   alt: "Dachausbau mit Dampfbremse und Unterkonstruktion",       caption: "Dachausbau: Dampfbremse & Unterkonstruktion" }
  ]
};
