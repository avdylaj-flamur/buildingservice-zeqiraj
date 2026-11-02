# MAINTENANCE.md – Udhëzues mirëmbajtjeje (në gjuhë të thjeshtë)

## 1. Struktura e dosjes: çfarë bën çdo skedar

| Skedari | Çfarë bën |
|---|---|
| `config.js` | **Më i rëndësishmi.** Emri, domaini, telefoni, adresa, ngjyrat, shërbimet dhe lista e fotove. |
| `index.html` | Faqja kryesore |
| `leistungen.html` | Shërbimet |
| `galerie.html` | Galeria me filtra |
| `ueber-uns.html` | Rreth nesh |
| `kontakt.html` | Kontakti + formulari + harta |
| `impressum.html`, `datenschutz.html` | Faqet ligjore (të detyrueshme në Gjermani) |
| `style.css` | Pamja (ngjyrat vijnë nga `config.js`) |
| `main.js` | Ndërton header, footer, galerinë (zakonisht nuk preket) |
| `images/` | Të gjitha fotot |
| `sitemap.xml`, `robots.txt` | Për Google |

## 2. Si ndryshon gjërat e zakonshme (të gjitha në `config.js`)

- **Numri i telefonit / email / adresa:** ndrysho `mobile`, `mobileRaw`, `phone`, `phoneRaw`, `email`, `street`, `zip`, `city`. (`...Raw` = pa hapësira dhe me `+49`, për lidhjen e klikueshme.)
- **Emri i faqes:** ndrysho `name` (dhe `shortName`).
- **Ngjyrat:** ndrysho vlerat në `colors` (kodet hex, p.sh. `#1e73be`).
- **Shërbim i ri:** kopjo një rresht `{ icon: ..., title: ..., text: ... }` në `services` dhe ndrysho tekstin.
- **WhatsApp:** shkruaj numrin në `whatsapp` (pa +), ose lëre `""` për ta fshehur butonin.
- **USt-IdNr. (nr. i TVSH-së):** nëse klienti ka, shkruaje në `vatId` dhe shtoje në `impressum.html`.
- **Teksti i faqeve** (p.sh. "Über uns"): hap skedarin `.html` përkatës dhe ndrysho tekstin mes tageve.

## 3. Si shton ose heq foto

1. Vendos fotot në dosjen `images/` (ideale: JPG, gjerësi max 1400px, nën 400 KB; përdor squoosh.app për ta zvogëluar).
2. Në `config.js`, te `gallery`, kopjo një rresht dhe ndrysho `file`, `cat` (kategoria), `alt` (përshkrimi), `caption` (titulli).
3. Kategori të reja: shkruaj thjesht emër të ri te `cat`; filtri shfaqet vetë.
4. Për ta hequr: fshi rreshtin (dhe skedarin nga `images/`).
5. **Foto për Elektro:** kur klienti të dërgojë, shtoji me `cat: "Elektro"`.

## 4. Si ndryshon emrin dhe domainin

1. Në `config.js`: ndrysho `name` dhe `domain`.
2. Në editor (VS Code ose GitHub) bëj **Find & Replace në gjithë projektin**: `buildingservicezeqiraj.de` → domaini i ri. Ndikon te `canonical`, `og:url`, `sitemap.xml`, `robots.txt`.
3. Te ofruesi i domainit, drejto domainin e ri (shih DEPLOY.md, hapi 4). Pastaj te hosting/GitHub Pages ndrysho "Custom domain".
4. Domaini i vjetër: vendos ridrejtim (redirect) nëse mundesh, që Google të mos humbasë renditjen.

## 5. Si e ndryshon direkt në GitHub (pa kompjuter të veçantë)

1. Hap repository-n në github.com, kliko skedarin, pastaj ikona ✏️ (Edit).
2. Ndrysho, pastaj **Commit changes**.
3. Faqja përditësohet vetë brenda 1–2 minutave (GitHub Pages / Netlify / Vercel).
4. Për të ndryshuar shumë gjëra: shtyp `.` në repository për të hapur editorin web, ose përdor GitHub Desktop.

## 6. Nëse bie faqja: checklista

Kalo me radhë:

1. **Hape faqen në telefon me të dhëna mobile dhe në një shfletues tjetër.** A është problem vetëm te ti (cache)? Provo Ctrl+F5.
2. **Domaini ka skaduar?** Hyr te ofruesi (IONOS, INWX…) dhe shiko datën e skadimit. Aktivizo rinovimin automatik.
3. **DNS:** kontrollo në dnschecker.org që `A`/`CNAME` tregojnë ende hosting-un e duhur (shih DEPLOY.md).
4. **Statusi i hosting-it:** githubstatus.com, netlifystatus.com, vercel-status.com.
5. **HTTPS / certifikata:** te GitHub Pages: Settings → Pages → "Enforce HTTPS". Nëse del paralajmërim, hiq domainin e personalizuar dhe vëre përsëri; certifikata rigjenerohet.
6. **Ndryshimi i fundit:** në GitHub shiko tab-in **Commits**. Nëse faqja u prish pas një ndryshimi:
   - hap atë commit → butoni **Revert** → krijon një commit që e kthen mbrapsht.
   - ose hap skedarin → **History** → zgjidh versionin e vjetër → "…" → *Edit file* ose kopjo përmbajtjen.
7. **Gabime në kod:** hap faqen, shtyp **F12 → Console**. Teksti i kuq tregon skedarin dhe rreshtin e gabuar. Gabimet tipike: një presje e harruar ose thonjëza e pambyllur në `config.js` (atëherë gjithçka e dinamike, si menyja dhe galeria, zhduket).
8. **Testo lokalisht:** shkarko projektin si ZIP dhe hap `index.html` me dy klikime. Nëse punon aty, problemi është te hosting/domaini.
9. **Formulari nuk hap email:** kontrollo `email` në `config.js`. Formulari përdor aplikacionin e email-it të vizitorit (ose WhatsApp si alternativë).

## 7. Backup

- GitHub → butoni jeshil **Code** → **Download ZIP**. Bëje çdo herë pas ndryshimeve të mëdha.
- Ruaje ZIP-in edhe te klienti ose në Google Drive.

## 8. Ku merr ndihmë

- Domaini: mbështetja e ofruesit (IONOS, Strato, INWX…).
- Hosting: docs.github.com/pages, docs.netlify.com, vercel.com/docs.
