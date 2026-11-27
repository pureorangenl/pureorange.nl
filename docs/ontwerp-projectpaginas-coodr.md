# Ontwerp: projectpagina’s Coodr

**Project:** Aanpassing website PureOrange.nl  
**Fase:** Ontwerp · Ronde 2  
**Doel:** Vastleggen hoe Coodr op de site wordt gepresenteerd, ter goedkeuring door belanghebbenden.

## 1. Scope

| Onderdeel | In scope |
|-----------|----------|
| Homepage | Teaser voor Coodr in de sectie Oplossingen |
| Detailpagina | Eigen pagina die Coodr toelicht |
| Navigatie | Link van teaser naar detailpagina; terug naar homepage |

Buiten scope: implementatie, definitieve copy/beeld, SEO-techniek.

## 2. Informatiearchitectuur

**Keuze:** sectie blijft “Oplossingen”; URL `/oplossingen/coodr`; eyebrow op de detailpagina: “Oplossing”.

```
Homepage (/)
  └─ Sectie Oplossingen
       ├─ Candidakuur → externe link (ongewijzigd)
       └─ Coodr → /oplossingen/coodr
```

Eén detailpagina. Geen apart projectenoverzicht in deze ronde.

## 3. Homepage-teaser

Zelfde solution-card als Candidakuur. Verschil in CTA:

| | Candidakuur | Coodr |
|---|---|---|
| Card-CTA | externe URL (`candidakuur.nl`) | interne link naar detailpagina |
| Label | domeinnaam | “Meer over Coodr” |
| Externe productlink | op de card | alleen op de detailpagina |

**Voorbeeldcopy teaser**

- **Titel:** Coodr  
- **Tekst:** Platform voor AI-gestuurde softwareagents: taken uitzetten, voortgang volgen en resultaten terugkoppelen — zonder de ruis van een generieke chat.  
- **CTA:** Meer over Coodr → `/oplossingen/coodr`

## 4. Detailpagina Coodr

```
┌─────────────────────────────────────┐
│ [PureOrange]              ← home    │  header
├─────────────────────────────────────┤
│ Oplossing                           │  eyebrow
│ Coodr                               │  titel
│ <lede, 1–2 zinnen>                  │
├─────────────────────────────────────┤
│ Wat het is                          │  probleem/oplossing
│ <korte alinea>                      │
├─────────────────────────────────────┤
│ • voor wie                          │  3–4 kernpunten
│ • wat het doet                      │
│ • resultaat                         │
├─────────────────────────────────────┤
│ [Productlink / demo]  ← optioneel   │  externe URL hier
├─────────────────────────────────────┤
│ footer (= homepage)                 │
└─────────────────────────────────────┘
```

**Voorbeeldcopy intro**

- **Eyebrow:** Oplossing  
- **Titel:** Coodr  
- **Lede:** Coodr helpt teams AI-agents inzetten op concrete softwaretaken: van opdracht tot oplevering, met overzicht in één omgeving.

Geen aparte contactsectie; contact blijft op de homepage.

## 5. Visuele aansluiting

- Tokens en typografie gelijk aan de site: `--orange`, `--ink`, `--paper`, Inter.  
- Zelfde max-breedte en rustige layout; geen nieuwe card-variant of dashboard-grid.  
- Beeld alleen als het product of context toont.

## 6. Acceptatie

Akkoord van belanghebbenden op:

- teaser in Oplossingen met CTA “Meer over Coodr” naar `/oplossingen/coodr`;  
- externe productlink alleen op de detailpagina;  
- detailpagina-opbouw en voorbeeldcopy hierboven;  
- hergebruik van de huidige huisstijl.

Na goedkeuring volgt de realisatiefase.
