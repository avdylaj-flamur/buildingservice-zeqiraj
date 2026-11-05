/* ================================================================
   main.js – Navigation, Kontakt, Leistungen und Galerie.
   HIER NORMALERWEISE NICHTS ÄNDERN.
   Daten und Fotos pflegen Sie in config.js.
   ================================================================ */
(function () {
  "use strict";
  if (typeof SITE === "undefined") { console.error("config.js wurde nicht geladen!"); return; }

  const r = document.documentElement.style;
  Object.entries(SITE.colors).forEach(([key, value]) => {
    const names = {primary:"--primary",primaryDark:"--primary-dark",accent:"--accent",dark:"--dark",light:"--light"};
    if (names[key]) r.setProperty(names[key], value);
  });
  const esc = s => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const page = document.body.dataset.page || "";

  // Einheitliche lokale SVG-Symbole – kein externer Icon-Dienst.
  const paths = {
    "phone":'<path d="M22 16.9v3a2 2 0 0 1-2.2 2A19.7 19.7 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7l.5 2.8a2 2 0 0 1-.6 1.9L7.6 9.8a16 16 0 0 0 6.6 6.6l1.4-1.4a2 2 0 0 1 1.9-.6l2.8.5a2 2 0 0 1 1.7 2z"/>',
    "menu":'<path d="M4 7h16M4 12h16M4 17h16"/>',
    "x":'<path d="M6 6l12 12M18 6L6 18"/>',
    "map-pin":'<path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="2.8"/>',
    "arrow-right":'<path d="M4 12h16m-7-7 7 7-7 7"/>',
    "paint-roller":'<rect x="3" y="3" width="18" height="7" rx="1.5"/><path d="M12 10v3H7v4m0 0v4m-2-4h4"/>',
    "layers":'<path d="m12 3 9 5-9 5-9-5 9-5z"/><path d="m3 12 9 5 9-5M3 16l9 5 9-5"/>',
    "wallpaper":'<rect x="4" y="3" width="16" height="18" rx="2"/><path d="M4 9h16M9 9v12m6-18v6M9 13c2-1 4 1 6 0m-6 5c2 1 4-1 6 0"/>',
    "zap":'<path d="m13 2-9 12h7l-1 8 10-13h-7l1-7z"/>',
    "floor":'<path d="m3 9 9-6 9 6v10l-9 3-9-3V9z"/><path d="m3 9 9 4 9-4M12 13v9m-5-11 5-4 5 4"/>',
    "bath":'<path d="M3 13h18v3a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4v-3zM6 13V6a3 3 0 0 1 6 0"/><path d="M7 20v2m10-2v2"/>',
    "check-circle":'<circle cx="12" cy="12" r="9"/><path d="m8 12 2.8 2.8L16.5 9"/>',
    "sparkles":'<path d="m12 2 1.8 6.2L20 10l-6.2 1.8L12 18l-1.8-6.2L4 10l6.2-1.8L12 2zM19 17l.6 2.4L22 20l-2.4.6L19 23l-.6-2.4L16 20l2.4-.6L19 17z"/>',
    "shield-check":'<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m8 12 3 3 5-6"/>',
    "clipboard":'<rect x="5" y="5" width="14" height="17" rx="2"/><rect x="9" y="2" width="6" height="5" rx="1"/><path d="M9 12h6M9 16h5"/>',
    "message-circle":'<path d="M20 11.5a8.5 8.5 0 0 1-8.5 8.5 9 9 0 0 1-4-.9L3 21l1.9-4.5a8.5 8.5 0 1 1 15.1-5z"/><path d="M8 11h8m-8 4h5"/>'
  };
  const svg = name => `<svg class="icon-svg" aria-hidden="true" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">${paths[name]||paths["layers"]}</svg>`;
  const navigation = [
    ["index.html", "Start", "home"], ["leistungen.html", "Leistungen", "leistungen"],
    ["galerie.html", "Galerie", "galerie"], ["ueber-uns.html", "Über uns", "about"],
    ["kontakt.html", "Kontakt", "kontakt"]
  ];
  const links = navigation.map(([url,label,key]) => `<li><a ${page===key?'class="active" aria-current="page"':''} href="${url}">${label}</a></li>`).join("");
  const header = document.getElementById("site-header");
  if (header) {
    header.innerHTML = `
      <a class="skip" href="#main">Zum Inhalt springen</a>
      <div class="topbar"><div class="container"><span class="topbar-info">${svg("map-pin")} ${esc(SITE.street)}, ${esc(SITE.zip)} ${esc(SITE.city)}</span>
      <span class="topbar-contact">${svg("phone")} <a href="tel:${esc(SITE.mobileRaw)}">${esc(SITE.mobile)}</a> <span aria-hidden="true">·</span> <a href="mailto:${esc(SITE.email)}">${esc(SITE.email)}</a></span></div></div>
      <header class="site"><div class="container">
        <a class="logo" href="index.html" aria-label="${esc(SITE.name)} – zur Startseite"><span class="mark" aria-hidden="true">Z</span><span class="logo-text"><span class="logo-title">${esc(SITE.name)}</span><span class="logo-sub">Renovierung &amp; Trockenbau</span></span></a>
        <button class="burger" type="button" aria-label="Menü öffnen" aria-controls="nav" aria-expanded="false">${svg("menu")}</button>
        <nav id="nav" aria-label="Hauptnavigation"><ul>${links}
          <li class="nav-action"><a class="btn" href="tel:${esc(SITE.mobileRaw)}">${svg("phone")} Jetzt anrufen</a></li>
        </ul></nav>
      </div></header>`;
    const burger = header.querySelector(".burger"), nav = header.querySelector("nav");
    const setMenu = open => {
      nav.classList.toggle("open", open);
      burger.setAttribute("aria-expanded", String(open));
      burger.setAttribute("aria-label", open ? "Menü schließen" : "Menü öffnen");
      burger.innerHTML = svg(open ? "x" : "menu");
    };
    burger.addEventListener("click", () => setMenu(!nav.classList.contains("open")));
    nav.addEventListener("click", e => { if (e.target.closest("a")) setMenu(false); });
    document.addEventListener("keydown", e => {if (e.key==="Escape") setMenu(false);});
    document.addEventListener("click", e => {if (!e.composedPath().includes(header) && nav.classList.contains("open")) setMenu(false);});
    window.addEventListener("resize", () => {if (innerWidth>820) setMenu(false);});
  }
  const footer = document.getElementById("site-footer");
  if (footer) {
    footer.innerHTML = `<footer class="site"><div class="container"><div class="cols">
      <div><h3>${esc(SITE.name)}</h3><p class="footer-tagline">${esc(SITE.tagline)}</p><div class="footer-badge">Mit Sorgfalt. Mit Handwerk.</div></div>
      <div><h3>Kontakt</h3><p>${esc(SITE.owner)}<br>${esc(SITE.street)}<br>${esc(SITE.zip)} ${esc(SITE.city)}<br>
      <a href="tel:${esc(SITE.mobileRaw)}">Mobil: ${esc(SITE.mobile)}</a><br><a href="tel:${esc(SITE.phoneRaw)}">Tel.: ${esc(SITE.phone)}</a><br><a href="mailto:${esc(SITE.email)}">${esc(SITE.email)}</a><br><span>Steuernummer: ${esc(SITE.taxNumber)}</span></p></div>
      <div><h3>Entdecken</h3><p><a href="leistungen.html">Leistungen</a><br><a href="galerie.html">Referenzen</a><br><a href="ueber-uns.html">Über uns</a><br><a href="kontakt.html">Kontakt</a><br><a href="impressum.html">Impressum</a><br><a href="datenschutz.html">Datenschutz</a></p></div>
      </div><div class="legal"><span>© ${new Date().getFullYear()} ${esc(SITE.name)} · ${esc(SITE.owner)}</span><span>Fürstenfeldbruck &amp; Umgebung</span></div>
      </div></footer>
      <div class="float" aria-label="Schnellkontakt">
        <a class="call" href="tel:${esc(SITE.mobileRaw)}">${svg("phone")} Anrufen</a>
        ${SITE.whatsapp ? `<a class="wa" href="https://wa.me/${encodeURIComponent(SITE.whatsapp)}" target="_blank" rel="noopener noreferrer">${svg("message-circle")} WhatsApp</a>` : `<a class="wa" href="mailto:${esc(SITE.email)}">${svg("message-circle")} E-Mail</a>`}
      </div>`;
  }
  document.querySelectorAll("[data-icon]").forEach(el => el.innerHTML = svg(el.dataset.icon));
  document.querySelectorAll("[data-site]").forEach(el => {
    const key = el.dataset.site;
    if (key === "address") el.textContent = `${SITE.street}, ${SITE.zip} ${SITE.city}`;
    else if (key === "mobileLink") {el.href = "tel:"+SITE.mobileRaw;el.textContent=SITE.mobile;}
    else if (key === "phoneLink") {el.href = "tel:"+SITE.phoneRaw;el.textContent=SITE.phone;}
    else if (key === "emailLink") {el.href = "mailto:"+SITE.email;el.textContent=SITE.email;}
    else if (SITE[key] !== undefined) el.textContent = SITE[key];
  });

  // OpenStreetMap: Drittanbieter-Daten erst nach Klick laden (Datenschutz).
  const mapButton = document.getElementById("load-map");
  if (mapButton) mapButton.addEventListener("click", () => {
    const container = document.getElementById("map-consent");
    const frame = document.createElement("iframe");
    frame.className="map";frame.title="OpenStreetMap – Fürstenfeldbruck";
    frame.loading="lazy";frame.referrerPolicy="strict-origin-when-cross-origin";
    frame.src="https://www.openstreetmap.org/export/embed.html?bbox=11.20%2C48.16%2C11.30%2C48.20&layer=mapnik";
    container.replaceWith(frame);
  });

 
  // Kontaktformular über Formspree senden.
  const form = document.getElementById("contact-form");

  if (form) {
    form.addEventListener("submit", async event => {
      event.preventDefault();

      const note = document.getElementById("form-note");
      const button = form.querySelector('button[type="submit"]');
      const originalText = button.textContent;

      button.disabled = true;
      button.textContent = "Wird gesendet...";

      if (note) {
        note.style.display = "none";
        note.textContent = "";
      }

      try {
        const data = new FormData(form);

        const response = await fetch(form.action, {
           method: "POST",
           headers: {
             "Accept": "application/json"
        },
        body: data
         });

        if (!response.ok) {
          throw new Error("Form submission failed: " + response.status);
        }

        form.reset();

        if (note) {
          note.textContent = "Vielen Dank! Ihre Anfrage wurde erfolgreich übermittelt.";
          note.style.display = "block";
        }
      } catch (error) {
        console.error("Kontaktformular:", error);

        if (note) {
          note.textContent = "Ihre Anfrage konnte nicht gesendet werden. Bitte versuchen Sie es erneut oder kontaktieren Sie uns telefonisch.";
          note.style.display = "block";
        }
      } finally {
        button.disabled = false;
        button.textContent = originalText;
      }
    });
  }


  // HIER ÄNDERN: Neue Leistungen und Icons in config.js (icon: paint-roller etc.).
  const serviceIcons = ["paint-roller","layers","wallpaper","zap","floor","bath"];
  document.querySelectorAll("[data-services]").forEach(box => {
    const limit=Number.parseInt(box.dataset.services,10) || SITE.services.length;
    box.innerHTML = SITE.services.slice(0,limit).map((service,index) => `<article class="card"><div class="icon">${svg(service.iconName || serviceIcons[index%serviceIcons.length])}</div><h3>${esc(service.title)}</h3><p>${esc(service.text)}</p></article>`).join("");
  });

  // Eine Bilderliste in config.js steuert Homepage + Filtergalerie.
  const gallery = document.getElementById("gallery");
  if (gallery) {
    const all = SITE.gallery.slice(0,Number.parseInt(gallery.dataset.limit,10) || SITE.gallery.length);
    const filters = document.getElementById("filters");
    const cats = ["Alle",...new Set(all.map(item=>item.cat))];
    let visible = all.slice(), activeIndex=0, previousFocus=null;
    const render = () => {
      gallery.innerHTML=visible.map((item,index) => `<figure role="button" tabindex="0" aria-label="${esc(item.caption)} vergrößern" data-i="${index}"><img src="images/${encodeURI(item.file)}" loading="lazy" decoding="async" alt="${esc(item.alt)}"><figcaption><span class="gallery-tag">${esc(item.cat)}</span>${esc(item.caption)}</figcaption></figure>`).join("");
    };
    if (filters && !gallery.dataset.limit) {
      filters.setAttribute("aria-label","Fotos nach Kategorie filtern");
      filters.innerHTML=cats.map((cat,index)=>`<button type="button" aria-pressed="${index===0}" class="${index===0?'on':''}" data-c="${esc(cat)}">${esc(cat)}</button>`).join("");
      filters.addEventListener("click",event=>{
        const btn=event.target.closest("button");if(!btn)return;
        filters.querySelectorAll("button").forEach(b=>{const selected=b===btn;b.classList.toggle("on",selected);b.setAttribute("aria-pressed",String(selected));});
        visible=btn.dataset.c==="Alle"?all.slice():all.filter(i=>i.cat===btn.dataset.c);
        render();
      });
    }
    render();
    const lb=document.createElement("div");lb.className="lightbox";lb.setAttribute("role","dialog");lb.setAttribute("aria-modal","true");lb.setAttribute("aria-label","Fotoansicht");
    lb.innerHTML='<button class="lb-close" type="button" aria-label="Fotoansicht schließen">×</button><button class="lb-prev" type="button" aria-label="Vorheriges Foto">‹</button><img alt=""><p></p><button class="lb-next" type="button" aria-label="Nächstes Foto">›</button>';
    document.body.appendChild(lb);
    const show=index=>{
      activeIndex=(index+visible.length)%visible.length;
      const item=visible[activeIndex];
      lb.querySelector("img").src="images/"+encodeURI(item.file);
      lb.querySelector("img").alt=item.alt;
      lb.querySelector("p").textContent=item.caption;
    };
    const open=index=>{previousFocus=document.activeElement;show(index);lb.classList.add("open");document.body.classList.add("lightbox-active");lb.querySelector(".lb-close").focus();};
    const close=()=>{lb.classList.remove("open");document.body.classList.remove("lightbox-active");if(previousFocus?.isConnected)previousFocus.focus();};
    gallery.addEventListener("click",event=>{const fig=event.target.closest("figure");if(fig)open(Number(fig.dataset.i));});
    gallery.addEventListener("keydown",event=>{if((event.key==="Enter"||event.key===" ")&&event.target.matches("figure")){event.preventDefault();open(Number(event.target.dataset.i));}});
    lb.querySelector(".lb-close").addEventListener("click",close);
    lb.querySelector(".lb-prev").addEventListener("click",()=>show(activeIndex-1));
    lb.querySelector(".lb-next").addEventListener("click",()=>show(activeIndex+1));
    lb.addEventListener("click",event=>{if(event.target===lb)close();});
    document.addEventListener("keydown",event=>{
      if(!lb.classList.contains("open"))return;
      if(event.key==="Escape")close();
      if(event.key==="ArrowLeft")show(activeIndex-1);
      if(event.key==="ArrowRight")show(activeIndex+1);
      if(event.key==="Tab"){
        const buttons=[...lb.querySelectorAll("button")];
        const first=buttons[0],last=buttons.at(-1);
        if(event.shiftKey&&document.activeElement===first){event.preventDefault();last.focus();}
        else if(!event.shiftKey&&document.activeElement===last){event.preventDefault();first.focus();}
      }
    });
  }

  // Domain-Korrektur aus config.js für Meta-Tags und schema.org.
  // sitemap.xml/robots.txt werden beim echten Domainwechsel zusätzlich geprüft.
  const canonical=document.querySelector('link[rel="canonical"]');
  const pathname=location.pathname.split('/').pop();
  const url=`https://${SITE.domain}/${pathname==='index.html'?'':pathname}`;
  if(canonical)canonical.href=url;
  const ogUrl=document.querySelector('meta[property="og:url"]');if(ogUrl)ogUrl.content=url;
  const ogImg=document.querySelector('meta[property="og:image"]');if(ogImg)ogImg.content=`https://${SITE.domain}/images/tv-wand-marmor.jpg`;
  const ld=document.createElement("script");ld.type="application/ld+json";
  ld.textContent=JSON.stringify({"@context":"https://schema.org","@type":"HousePainter",name:SITE.name,url:"https://"+SITE.domain,telephone:SITE.mobileRaw,email:SITE.email,address:{"@type":"PostalAddress",streetAddress:SITE.street,postalCode:SITE.zip,addressLocality:SITE.city,addressCountry:"DE"},areaServed:["Fürstenfeldbruck","München-West","Landkreis Fürstenfeldbruck"],image:`https://${SITE.domain}/images/tv-wand-marmor.jpg`});
  document.head.appendChild(ld);
})();
