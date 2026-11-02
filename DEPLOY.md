# Website veröffentlichen – Schritt für Schritt

Diese Website hat keinen Build-Prozess: Alle Dateien kommen direkt auf den Webspace. Empfohlen wird **GitHub für die Dateien** und ein zur geschäftlichen Nutzung geeigneter **Hosting-Tarif** (zum Beispiel ein passender Netlify-Tarif). Prüfen Sie immer die aktuellen Bedingungen, auch bei kostenlosen Angeboten.

## Schritt 1: Auf GitHub speichern

1. Ein Konto auf [github.com](https://github.com) erstellen.
2. **New repository** anklicken und zum Beispiel `buildingservice-zeqiraj` nennen.
3. Repository erstellen; dann **Add file → Upload files** wählen.
4. Alle Dateien aus dem entpackten Projektordner hochladen – **auch den Ordner `images/`**.
5. Mit **Commit changes** bestätigen.

**Mit Git auf dem eigenen Computer** (nur wenn Git installiert ist):

```bash
git init
git add .
git commit -m "Website Design V2"
git branch -M main
git remote add origin https://github.com/DEIN-BENUTZERNAME/buildingservice-zeqiraj.git
git push -u origin main
```

## Schritt 2: Website auf Netlify veröffentlichen

1. Auf [netlify.com](https://www.netlify.com) anmelden.
2. **Add new project / Import from Git** auswählen und GitHub verbinden.
3. Das Repository `buildingservice-zeqiraj` auswählen.
4. **Build command** leer lassen. **Publish directory** auf `.` (Hauptverzeichnis) setzen.
5. Auf **Deploy** klicken und anschließend die öffentliche Vorschau-Adresse öffnen.
6. Falls Änderungen über GitHub gespeichert werden, aktualisiert Netlify die Website beim nächsten Deployment automatisch.

**Alternativen:** GitHub Pages ist für bestimmte geschäftliche Websites nicht als kostenloser Hosting-Ersatz gedacht; Vercel Hobby ist für nichtkommerzielle persönliche Nutzung bestimmt. Vor einer Entscheidung die aktuellen Nutzungsbedingungen prüfen. Für den Geschäftsauftritt ggf. bezahltes Hosting wählen.

## Schritt 3: .de-Domain kaufen

1. Bei einem Anbieter wie **IONOS**, **STRATO**, **INWX** oder **Namecheap** nach `buildingservicezeqiraj.de` suchen.
2. Verfügbarkeit und **Verlängerungspreis** prüfen, nicht nur den Aktionspreis im ersten Jahr.
3. Die Domain mit den Angaben des **Betriebsinhabers** bestellen.
4. Automatische Verlängerung einschalten und die Zugangsdaten sicher aufbewahren.

## Schritt 4: Domain verbinden (DNS)

1. Bei Netlify unter **Domain management** die gekaufte Domain hinzufügen.
2. Netlify zeigt die aktuell nötigen DNS-Einträge (z. B. `A`, `ALIAS`, `CNAME` oder Nameserver).
3. Beim Domainanbieter unter **DNS / DNS-Einstellungen** genau diese Werte eintragen.
4. Sowohl die Adresse mit `www` als auch ohne `www` prüfen.
5. DNS-Änderungen können dauern. Nicht blind DNS-Adressen aus alten Anleitungen kopieren.
6. Im Hosting-Dashboard **HTTPS / TLS** aktivieren und kontrollieren, dass die Website über `https://` ohne Warnung öffnet.

## Schritt 5: E-Mail mit der Domain (freiwillig)

Sie können eine Adresse wie `info@buildingservicezeqiraj.de` bei einem E-Mail-Anbieter bestellen. Danach die dort angegebenen **MX-, SPF-, DKIM- und DMARC-Einstellungen** beim Domainanbieter eintragen. Zum Schluss `email` in `config.js` ändern und testen. Die bestehende Gmail-Adresse darf auch weiterverwendet werden.

## Schritt 6: Kontaktformular testen

Das Formular auf `kontakt.html` benutzt **mailto**, nicht Netlify Forms. Es öffnet das E-Mail-Programm der Besucherin oder des Besuchers mit einer vorbereiteten Nachricht. **Das Formular versendet nichts automatisch.** Auch WhatsApp ist eine direkte Verknüpfung. Beide Varianten auf Handy und Computer prüfen.

## Schritt 7: Vor dem Onlinegang kontrollieren

- [ ] Telefonnummer, WhatsApp, E-Mail und Adresse stimmen.
- [ ] Alle Bilder dürfen öffentlich gezeigt werden.
- [ ] Dienstleistungen (insbesondere Elektroarbeiten) sind nach den geltenden Regeln zulässig bzw. werden durch entsprechend qualifizierte Betriebe ausgeführt.
- [ ] Impressum und Datenschutz wurden für den konkreten Betrieb und Hoster überprüft.
- [ ] OpenStreetMap-Karte wird erst nach Klick geladen.
- [ ] Kein Analytics-/Tracking-Code oder externe Schriftart wurde nachträglich hinzugefügt.
- [ ] Domain, SSL-Zertifikat, Impressum, Datenschutz und 404-Seite funktionieren.
- [ ] Galerie, Menü, Lightbox und Links wurden auf Handy und Computer getestet.

Wichtig: Dieses Dokument ist eine technische Anleitung, keine individuelle Rechtsberatung. Bei Impressum und DSGVO ggf. rechtlichen Rat einholen.
