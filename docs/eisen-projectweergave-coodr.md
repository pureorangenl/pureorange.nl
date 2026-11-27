# Eisen: projectweergave Coodr op PureOrange.nl

| Veld | Waarde |
|------|--------|
| Project | Aanpassing Website PureOrange.nl |
| Onderwerp | Weergave van project Coodr in de projectensectie |
| V-model-fase | Eisen |
| Bron | Bestaande homepage (`index.html`, `styles.css`) en sectie Oplossingen |
| Status | Definitief voor ronde 3 |

## 1. Doel

Vastleggen hoe het project **Coodr** op pureorange.nl wordt getoond: inhoud (titel, beschrijving, link), media, plaatsing en presentatie, zodat latere ontwerp- en bouwfasen eenduidig kunnen opleveren.

## 2. Uitgangspunt: huidige projectensectie

Op de homepage heet de projectensectie **Oplossingen** (`.solutions` in `index.html`). Projecten verschijnen als kaarten (`.solution-card`) naast Contact in `.bottom-grid`.

Referentiekaart **Candidakuur**:

| Element | Waarde |
|---------|--------|
| Titel (`h3`) | Candidakuur |
| Beschrijving (`p`) | Korte producttekst (1–2 zinnen) |
| Link (`.solution-link`) | URL + zichtbare linktekst (domeinnaam) |
| Media | Geen afbeelding in de huidige kaart |

Coodr volgt hetzelfde kaartpatroon, zodat de sectie visueel en structureel consistent blijft.

## 3. Plaatsing en sectiestructuur

| ID | Eis | Prioriteit |
|----|-----|------------|
| E-01 | Coodr wordt opgenomen in de bestaande sectie **Oplossingen** op de homepage (`index.html`). Er komt geen aparte pagina of modal voor deze weergave. | Must |
| E-02 | Sectiekop blijft **Oplossingen** (uppercase-styling via bestaande CSS). Geen hernoeming naar “Projecten” in deze oplevering, tenzij een latere taak dat expliciet vraagt. | Must |
| E-03 | Coodr verschijnt als **tweede** `.solution-card` onder Candidakuur (volgorde: Candidakuur, daarna Coodr). | Must |
| E-04 | Bij meerdere kaarten stapelen de kaarten verticaal met dezelfde tussenruimte als tussen bestaande blokken in `.solutions` (ca. 1rem; aansluitend bij bestaande spacing). | Must |
| E-05 | Desktop-layout van `.bottom-grid` (twee kolommen: Contact \| Oplossingen) blijft ongewijzigd; alleen de inhoud van Oplossingen groeit. | Must |

## 4. Inhoud: titel, beschrijving en link

### 4.1 Titel

| ID | Eis | Prioriteit |
|----|-----|------------|
| E-06 | Kaarttitel is precies **Coodr**. | Must |
| E-07 | Titel staat in een `h3` binnen de `.solution-card`, gelijk aan Candidakuur. | Must |

### 4.2 Beschrijving

| ID | Eis | Prioriteit |
|----|-----|------------|
| E-08 | Beschrijvingstekst (vastgelegd voor bouw): *“AI-agentplatform voor softwareteams: taken uitzetten, voortgang volgen en opleveren zonder ruis — van eis tot werkende code.”* | Must |
| E-09 | Beschrijving staat in één `p`-element direct onder de titel. | Must |
| E-10 | Toon: Nederlands, zakelijk-kort, in lijn met de homepage (“Geen ruis, wel resultaat”). Geen marketingjargon of featurelijst in de kaart. | Must |
| E-11 | Lengte: circa 1–2 zinnen, vergelijkbaar met Candidakuur; geen lange alinea. | Should |

### 4.3 Link

| ID | Eis | Prioriteit |
|----|-----|------------|
| E-12 | De kaart bevat een externe link naar **https://coodr.nl**. | Must |
| E-13 | Zichtbare linktekst is **coodr.nl** (domein zonder protocol), class `.solution-link`. | Must |
| E-14 | Link opent in een nieuw tabblad: `target="_blank"` en `rel="noopener noreferrer"`. | Must |
| E-15 | Als coodr.nl (tijdelijk) niet bereikbaar is, blijft de link aanwezig; er is geen fallback-URL vereist in deze eisenset. | Should |

## 5. Media

| ID | Eis | Prioriteit |
|----|-----|------------|
| E-16 | In de **eerste oplevering** van de Coodr-kaart is **geen** afbeelding, logo of video in de kaart verplicht — gelijk aan Candidakuur. | Must |
| E-17 | Optioneel later: productbeeld of logo boven of naast de titel, mits het bestaande kaartpatroon en de premium, rustige uitstraling van de homepage behouden blijven. | Could |
| E-18 | Indien media later wordt toegevoegd: bestanden in `assets/` of `images/`, WebP of SVG bij voorkeur, met betekenisvolle `alt`-tekst (bijv. “Coodr — AI-agentplatform”). Decoratieve beelden: `alt=""`. | Could |
| E-19 | Geen autoplay-video, carrousel of zware animatie in de projectkaart. | Must |

## 6. Visuele en interactie-eisen

| ID | Eis | Prioriteit |
|----|-----|------------|
| E-20 | Coodr gebruikt dezelfde styling als `.solution-card` (achtergrond, border, radius, padding, typografie). Geen aparte “featured”-styling. | Must |
| E-21 | Kleuren en fonts volgen bestaande CSS-variabelen (`--orange`, `--ink`, `--muted`, `--card`, `--font`). Geen nieuwe huisstijl voor deze kaart. | Must |
| E-22 | Hover/focus van de link volgt bestaande `.solution-link`-gedrag. | Must |
| E-23 | Kaart is leesbaar en bruikbaar op mobiel (≥320px) en desktop; geen horizontale overflow. | Must |

## 7. Toegankelijkheid en semantiek

| ID | Eis | Prioriteit |
|----|-----|------------|
| E-24 | Semantiek: `article.solution-card` → `h3` → `p` → `a.solution-link`. | Must |
| E-25 | Linktekst is begrijpelijk zonder omliggende context (domeinnaam volstaat). | Must |
| E-26 | Contrast van tekst en link blijft gelijk aan bestaande kaarten (oranje accent op lichte achtergrond). | Must |
| E-27 | Geen uitsluitend kleur-afhankelijke informatie. | Must |

## 8. Scope-grenzen

| ID | Eis | Prioriteit |
|----|-----|------------|
| E-28 | Geen wijziging aan hero, expertise-blokken, Over PureOrange, Contact of footer voor deze weergave. | Must |
| E-29 | Geen CMS, database of build-pipeline vereist; statische HTML/CSS zoals de rest van de site. | Must |
| E-30 | Geen `.env`, secrets of deployconfiguratie wijzigen. | Must |
| E-31 | SEO: geen aparte meta/OG-tags voor Coodr verplicht; homepage-meta blijft leidend. | Should |

## 9. Acceptatiecriteria (samenvatting)

Het document (dit bestand) is opgeleverd wanneer latere fasen hieruit kunnen bouwen. De **implementatie** van de weergave is acceptabel wanneer:

1. In Oplossingen staat een tweede kaart met titel **Coodr**.
2. De vastgelegde beschrijving (E-08) is zichtbaar.
3. Er is een werkende link naar https://coodr.nl met zichtbare tekst `coodr.nl`.
4. Styling en structuur komen overeen met de Candidakuur-kaart.
5. Geen regressie in Contact-kolom of overige homepage-secties.
6. Media: geen verplicht beeld in v1; optionele media voldoen aan E-17–E-19.

## 10. Traceerbaarheid naar projectdoel

| Projectdoel | Dekking in eisen |
|-------------|------------------|
| Coodr toevoegen aan de projectensectie | E-01 t/m E-05 |
| Titel, beschrijving en media bepalen | E-06 t/m E-19 |
| Document met gedetailleerde weergave-eisen | Dit document |

## 11. Open punten voor latere fasen

- Bevestiging dat de product-URL definitief `https://coodr.nl` is (E-12).
- Eventuele toevoeging van logo/screenshot (E-17) in een vervolgtaak.
- Of Candidakuur en Coodr ooit naast elkaar in een grid moeten i.p.v. gestapeld (nu: gestapeld, E-04).
