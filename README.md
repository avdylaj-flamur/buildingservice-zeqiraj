# Building Service Zeqiraj – Website (Design V2)

Eine fertige statische Website für Halil Zeqiraj in Fürstenfeldbruck. Die Website nutzt ausschließlich **HTML, CSS und JavaScript**. Es gibt keine Datenbank, keine Registrierung und kein Build-Tool.

## Schnell starten

1. Den ZIP-Ordner entpacken.
2. **`index.html`** doppelt anklicken. Die Startseite öffnet sich im Browser.
3. Änderungen an Firma, Kontakt, Farben, Leistungen und Bildern in **`config.js`** machen.
4. Änderungen am Text der Startseite in `index.html` machen.
5. Änderungen am Layout in `style.css` machen.

## Dateien

| Datei | Aufgabe |
| --- | --- |
| `index.html` | Startseite mit großem Projektfoto |
| `leistungen.html` | Leistungen und Ablauf |
| `galerie.html` | Alle 17 Projektfotos mit Filtern |
| `ueber-uns.html` | Informationen zum Betrieb |
| `kontakt.html` | Kontakt, E-Mail-Formular und Karte nach Klick |
| `impressum.html`, `datenschutz.html` | Rechtliche Informationen, vor Veröffentlichung prüfen |
| `404.html` | Fehlerseite |
| **`config.js`** | Name, Domain, Telefonnummern, Farben, Leistungen und Fotoliste |
| `main.js` | Menü, Icons, Galerie, Lightbox, Links, Kontaktformular |
| `style.css` | Farben, Größen, Abstände, mobiles Layout |
| `images/` | Projektbilder, zusätzlich eine unbenutzte Elektro-Illustration |
| `sitemap.xml`, `robots.txt` | Suchmaschinen |

## Neues Design (V2)

- Dunkelblauer Startbereich mit **echtem Projektfoto (TV-Wand)** und gut lesbaren Schaltflächen.
- Neue Wort-/Bildmarke mit „Z“, einheitliche Vektor-Icons statt Emojis.
- Die sechs repräsentativen Projektbilder erscheinen zuerst. Das allgemeine Elektrobild wird **nicht als eigene Referenz** gezeigt.
- Filter für die Galerie sind auf dem Handy horizontal scrollbar; Lightbox mit Tastaturbedienung.
- Mobil unten eine kompakte Leiste mit **Anrufen** und **WhatsApp**.
- Die Karte kontaktiert OpenStreetMap erst, wenn Besucher „Karte anzeigen“ klicken.
- Behobene horizontale Verschiebung auf sehr kleinen Bildschirmen.

## Anleitungen

- **[MAINTENANCE.md](MAINTENANCE.md)** – Pflege, Bilder, Fehler beheben und Backups (einfaches Deutsch).
- **[DEPLOY.md](DEPLOY.md)** – GitHub, Netlify, Domain und HTTPS (einfaches Deutsch).
- `MAINTENANCE-SQ.md` und `DEPLOY-SQ.md` enthalten die älteren Anleitungen auf Albanisch. Die neuen Designhinweise stehen in den deutschen Dateien.

**Vor der Veröffentlichung:** Impressum und Datenschutzerklärung prüfen lassen, die Rechte an allen Bildern sicherstellen und die Berechtigung für bestimmte Handwerksleistungen klären. Das Formular versendet **keine Nachricht automatisch**: Es öffnet das E-Mail-Programm der Besucherin oder des Besuchers.
