# DEPLOY.md – GitHub, hosting dhe domaini .de (hap pas hapi)

## 1. Vendose projektin në GitHub

1. Krijo llogari në github.com (falas).
2. Kliko **New repository** → emri p.sh. `buildingservice-zeqiraj` → **Public** (GitHub Pages falas kërkon public) → Create.
3. **Mënyra e lehtë (pa terminal):** në faqen e repository-t: *Add file → Upload files* → tërhiq të gjithë përmbajtjen e dosjes (përfshirë `images/`) → **Commit changes**.
4. **Mënyra me terminal:**
   ```bash
   cd buildingservice-zeqiraj
   git init
   git add .
   git commit -m "Erste Version"
   git branch -M main
   git remote add origin https://github.com/EMRI_YT/buildingservice-zeqiraj.git
   git push -u origin main
   ```

## 2. Publiko faqen (zgjidh një, falas)

**A) GitHub Pages (rekomandohet, më e thjeshtë)**
Repository → Settings → Pages → Source: *Deploy from a branch* → `main` / `/ (root)` → Save. Pas 1–2 min faqja del te `https://EMRI_YT.github.io/buildingservice-zeqiraj/`.

**B) Netlify:** netlify.com → Add new site → Import from GitHub → zgjidh repository-n → Build command: *bosh* → Publish directory: `.` → Deploy. Bonus: Netlify Forms për formularin.

**C) Vercel:** vercel.com → Add New Project → Import repository → Framework: *Other* → Deploy.

## 3. Bli domainin .de

1. Zgjidh ofruesin: **IONOS**, **Strato**, **INWX** ose **Namecheap** (.de kushton zakonisht 1–10 € në vit).
2. Kërko `buildingservicezeqiraj.de` (shkronjat e mëdha nuk kanë rëndësi). Nëse është i zënë, provo `zeqiraj-maler.de` ose `maler-zeqiraj.de`.
3. Regjistro domainin me të dhënat e klientit (domaini duhet të jetë në emër të klientit, e jo tëndin, që ai të jetë pronari).
4. Aktivizo **rinovimin automatik** dhe email-in e rikuperimit.

## 4. Lidh domainin me faqen (DNS)

Te ofruesi i domainit: **DNS / Domains → Manage DNS Records**.

**Për GitHub Pages:**

| Lloji | Host/Emri | Vlera |
|---|---|---|
| A | `@` | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |
| CNAME | `www` | `EMRI_YT.github.io` |

*(Para se t'i vendosësh, krahaso IP-të me docs.github.com/pages → "Managing a custom domain", se mund të ndryshojnë.)*

Pastaj: GitHub → Settings → Pages → **Custom domain** → `buildingservicezeqiraj.de` → Save → kur të bëhet e gjelbër shëno **Enforce HTTPS**.
Në repository krijohet automatikisht skedari `CNAME`; mos e fshi.

**Netlify/Vercel:** shto domainin te "Domain settings" dhe ndiq vlerat që tregojnë ato (zakonisht një A-record dhe CNAME për `www`).

DNS merr nga 5 minuta deri në 24 orë. Kontrollo në dnschecker.org.

## 5. HTTPS
Falas dhe automatik te GitHub Pages / Netlify / Vercel, pasi DNS të ketë marrë. Sigurohu që hapet `https://` pa paralajmërim.

## 6. Email me domainin (opsionale)
- IONOS/Strato ofrojnë paketa email (rreth 1 €/muaj), p.sh. `info@buildingservicezeqiraj.de`.
- Falas: Zoho Mail (plani falas) ose përcjellje email (forwarding) te Gmail e klientit.
- Pastaj ndrysho `email` te `config.js`.

## 7. Formulari i kontaktit
Nuk kërkon asnjë konfigurim. Kur vizitori e shtyp "Per E-Mail senden", hapet email-i i tij me mesazhin gati te adresa `email` e `config.js`, dhe ai vetëm shtyp Send. Ka edhe një lidhje WhatsApp me të njëjtin tekst. Për ta ndryshuar adresën, ndrysho `email` në `config.js`.

## 8. Ndryshimi i domainit më vonë
Shih MAINTENANCE.md, pika 4.

## 9. Checklista ligjore për Gjermani
- [ ] **Impressum** (§ 5 DDG): emri i plotë, adresa, telefon, email, Steuernummer ose USt-IdNr., kamera e zanatit (Handwerkskammer) – i arritshëm nga çdo faqe (është në footer).
- [ ] **Datenschutzerklärung** (DSGVO): teksti bazë është gati (hosting, OpenStreetMap). Halili i rregullon detajet me klientin.
- [ ] Pa cookies/tracking = nuk nevojitet banner (nëse shton Google Analytics, YouTube, Google Maps etj., do duhet).
- [ ] Fotot: sigurohu që klienti ka të drejtën e publikimit; hiq foto ku shihen persona ose shtëpi private të klientëve pa leje.
- [ ] Formulari: checkbox i pranimit të privatësisë (është i përfshirë).
- [ ] Faqet `impressum` dhe `datenschutz` kanë `noindex`; lëri ashtu.
