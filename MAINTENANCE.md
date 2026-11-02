# Website selbst pflegen – einfach erklärt

Diese Anleitung ist für Personen ohne Programmierkenntnisse. Änderungen zuerst in einer Kopie testen. Die wichtigsten Stellen sind mit **HIER ÄNDERN** markiert.

## 1. Welche Datei brauche ich?

- **`config.js`**: Firmenname, Website-Adresse (Domain), Kontaktdaten, Farben, Leistungen und Fotoliste.
- **`index.html`**: Überschrift, Einleitung und Texte der Startseite.
- **`leistungen.html`**, **`galerie.html`**, **`ueber-uns.html`**, **`kontakt.html`**: Inhalte der einzelnen Seiten.
- **`style.css`**: Design, Abstände, Schriftgrößen und Darstellung auf dem Handy.
- **`main.js`**: Menü, Symbole, Galerie und Klick-Funktionen. Normalerweise nicht ändern.
- **`images/`**: Fotos.
- **`impressum.html`** und **`datenschutz.html`**: Rechtstexte. Vor Änderungen fachlich prüfen.
- **`sitemap.xml`** und **`robots.txt`**: Informationen für Suchmaschinen.
- **`404.html`**: Seite für nicht vorhandene Links.

## 2. Firmenname, Telefonnummer und Adresse ändern

1. `config.js` öffnen.
2. Die Stelle **HIER ÄNDERN: Name & Domain** oder **HIER ÄNDERN: Kontakt** suchen.
3. Nur den Text **zwischen den Anführungszeichen** ändern. Die Anführungszeichen und die Kommas stehen lassen.
4. Bei einer Telefonnummer beide Angaben ändern: `mobile` (schön lesbar) und `mobileRaw` (zum Anklicken, z. B. `+49176...`).
5. Für WhatsApp die Nummer in `whatsapp` ohne Leerzeichen und ohne `+` verwenden. `""` versteckt WhatsApp und zeigt stattdessen einen E-Mail-Knopf.
6. Speichern und alle Seiten neu öffnen.

## 3. Farben und Logo ändern

- In `config.js` unter `colors` lassen sich `primary` (Blau), `primaryDark` (Dunkelblau), `accent` (Gelb), `dark` und `light` ändern. Beispiel: `"#1e73be"`.
- Das Zeichen „Z“ und der Text in der Kopfzeile stehen in `main.js` bei **Header**. Die Form und Größe stehen in `style.css` bei `.logo` und `.mark`.
- Ein anderes Logo kann als Bilddatei in `images/` gespeichert und im Header verwendet werden; hierfür muss der HTML-Text in `main.js` einmal angepasst werden.

## 4. Texte und Leistungen ändern

- Startseiten-Überschrift oder Begrüßung: `index.html` öffnen und **HIER ÄNDERN** suchen.
- Einen anderen Seitentext: die passende `.html`-Datei öffnen. Text zwischen HTML-Tags ändern, Tags nicht löschen.
- Neue Leistung: In `config.js` unter `services` eine vorhandene **Zeile** kopieren. `title`, `text` und `iconName` ändern.
- Mögliche Symbole: `paint-roller`, `layers`, `wallpaper`, `zap`, `floor`, `bath`. Ein neues Symbol muss bei Bedarf in `main.js` unter `paths` ergänzt werden.
- Wichtig: Auf der Startseite steht `data-services="6"`. Wenn dort mehr Leistungen angezeigt werden sollen, diese Zahl in `index.html` anpassen. Die Leistungsseite zeigt alle Einträge.

## 5. Fotos hinzufügen, entfernen oder sortieren

1. Foto möglichst klein speichern (z. B. JPG oder WebP; idealerweise 1200–1600 Pixel Breite). Namen ohne Umlaute und Leerzeichen verwenden, zum Beispiel `wohnzimmer-neu.jpg`.
2. Foto in den Ordner `images/` kopieren.
3. In `config.js` unter `gallery` eine ganze Zeile kopieren:

   ```js
   { file: "wohnzimmer-neu.jpg", cat: "Wohnzimmer", alt: "Neue Wandgestaltung mit indirektem Licht", caption: "Neue Wohnzimmergestaltung" },
   ```

4. `file` muss genau zum Dateinamen passen. `cat` ist die Kategorie, `alt` beschreibt das Bild und `caption` steht darunter.
5. Eine neue Kategorie entsteht automatisch, wenn bei `cat` ein neuer Name steht.
6. Zum Entfernen die ganze Zeile löschen. Das Foto kann zusätzlich aus `images/` entfernt werden.
7. **Die ersten sechs Zeilen** erscheinen auch auf der Startseite. Zeilen verschieben, um die Reihenfolge zu ändern.
8. Die Hauptaufnahme auf der Startseite ist `images/tv-wand-marmor.jpg`. Für ein anderes Hauptfoto in `index.html` den Dateinamen beim Bild mit der Klasse `hero-photo` ändern.

**Hinweis:** Das frühere allgemeine Elektrobild liegt als Datei noch vor, ist aber nicht in der Referenzgalerie. Erst ein echtes, zur Veröffentlichung freigegebenes Projektfoto mit einer passenden Zeile in `gallery` ergänzen.

## 6. Domain oder Website-Namen ändern

1. In `config.js` `name`, `shortName` und `domain` ändern.
2. Im ganzen Projekt den alten Domainnamen suchen und ersetzen. Das ist für `sitemap.xml`, `robots.txt` und die **HTML-Metadaten** wichtig, auch wenn JavaScript viele Links automatisch aktualisiert.
3. Beim Hosting den neuen Domainnamen hinzufügen und beim Domainanbieter die geforderten DNS-Werte eintragen (siehe `DEPLOY.md`).
4. HTTPS kontrollieren. Die alte Domain nach Möglichkeit auf die neue Domain weiterleiten.

## 7. Direkt auf GitHub bearbeiten

1. GitHub öffnen und das Repository auswählen.
2. Gewünschte Datei anklicken, dann **Edit this file** (Stiftsymbol).
3. Änderungen machen und mit **Commit changes** speichern.
4. Wenn Netlify mit GitHub verbunden ist, wird die Website normalerweise nach jedem Commit automatisch neu veröffentlicht. Im Netlify-Dashboard den Status kontrollieren.
5. Für mehrere Dateien: Im Repository die Taste **`.`** drücken, um den GitHub-Webeditor zu öffnen.

## 8. Wenn die Website kaputt oder nicht erreichbar ist

1. Funktioniert die Website auf einem anderen Handy oder über mobile Daten?
2. Wurde die Domain verlängert? Beim Domainanbieter nachsehen.
3. Stimmen die DNS-Einträge? Mit den Angaben im Hosting-Dashboard vergleichen.
4. Gibt es eine Hosting-Störung? Die Statusseite des Hosters prüfen.
5. Ist HTTPS aktiv? Gibt es eine Meldung über ein abgelaufenes Zertifikat?
6. Im GitHub-Repository unter **Commits** nachsehen: Wurde kurz vor dem Fehler etwas geändert?
7. **Rückgängig machen:** Einen defekten Commit bei GitHub suchen. Je nach Oberfläche mit **Revert** zurücknehmen oder in der **History** die frühere Dateiversion aufrufen und wiederherstellen. Nicht jeder GitHub-Bildschirm zeigt einen direkten Revert-Knopf.
8. **Konsole prüfen:** Die Website im Browser öffnen, **F12** drücken und bei **Console** nach roten Fehlermeldungen suchen. Häufige Ursache: Komma oder Anführungszeichen in `config.js` vergessen.
9. **Lokal testen:** Von GitHub das Projekt als ZIP laden, entpacken und `index.html` doppelt anklicken. Wenn es lokal funktioniert, aber online nicht, Hosting und Domain prüfen.
10. Kontaktknöpfe testen: Eine `tel:`-Verknüpfung wählt die Nummer nicht selbst; der Browser übergibt sie an das Telefonprogramm. Beim Formular muss die Person in der geöffneten E-Mail-App auf **Senden** klicken.

## 9. Backup anlegen

GitHub → **Code** → **Download ZIP**. Die ZIP-Datei an einem zweiten Ort sichern. Vor großen Änderungen immer eine Kopie behalten.

## 10. Wer hilft bei Problemen?

- Domain kaputt oder DNS falsch: **Support des Domainanbieters** (z. B. IONOS, STRATO oder INWX).
- Website nicht erreichbar / Veröffentlichung fehlgeschlagen: **Hosting-Support** (z. B. Netlify).
- Inhalt oder Code beschädigt: GitHub-Commit-Verlauf prüfen oder einen Webentwickler hinzuziehen.
- Rechtstexte: Eine rechtlich qualifizierte Stelle in Deutschland fragen.
