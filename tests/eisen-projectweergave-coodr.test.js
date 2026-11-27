/**
 * Tests voor acceptatiecriteria: gedetailleerde projectweergave-eisen Coodr.
 * Uitvoeren: node --test tests/eisen-projectweergave-coodr.test.js
 * (Geen testcommando geconfigureerd voor Coodr; suite is lokaal bruikbaar.)
 */
const { describe, it } = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const ROOT = path.resolve(__dirname, "..");
const EISEN_PATH = path.join(ROOT, "docs", "eisen-projectweergave-coodr.md");
const INDEX_PATH = path.join(ROOT, "index.html");
const CSS_PATH = path.join(ROOT, "styles.css");

const BESCHRIJVING_E08 =
  "AI-agentplatform voor softwareteams: taken uitzetten, voortgang volgen en opleveren zonder ruis — van eis tot werkende code.";

function readEisen() {
  assert.ok(fs.existsSync(EISEN_PATH), `Eisendocument ontbreekt: ${EISEN_PATH}`);
  return fs.readFileSync(EISEN_PATH, "utf8");
}

describe("Acceptatiecriterium: document met projectweergave-eisen", () => {
  it("bestaat op docs/eisen-projectweergave-coodr.md", () => {
    assert.ok(fs.existsSync(EISEN_PATH));
    const content = readEisen();
    assert.ok(content.trim().length > 0, "Eisendocument mag niet leeg zijn");
  });

  it("benoemt titel, beschrijving en media als onderwerpen", () => {
    const content = readEisen();
    assert.match(content, /titel/i);
    assert.match(content, /beschrijving/i);
    assert.match(content, /media/i);
  });

  it("bevat een acceptatiesectie voor de weergave", () => {
    const content = readEisen();
    assert.match(content, /##\s*9\.\s*Acceptatiecriteria/i);
  });
});

describe("Eiseninhoud: plaatsing en sectiestructuur", () => {
  it("legt Coodr vast in sectie Oplossingen (E-01, E-02)", () => {
    const content = readEisen();
    assert.match(content, /E-01/);
    assert.match(content, /E-02/);
    assert.match(content, /Oplossingen/);
    assert.match(content, /\.solutions/);
  });

  it("legt volgorde Candidakuur → Coodr vast (E-03)", () => {
    const content = readEisen();
    assert.match(content, /E-03/);
    assert.match(content, /tweede.*\.solution-card|Candidakuur.*Coodr/is);
  });

  it("beschrijft stapeling en tussenruimte bij meerdere kaarten (E-04)", () => {
    const content = readEisen();
    assert.match(content, /E-04/);
    assert.match(content, /tussenruimte|stapelen|1\s*rem/i);
  });

  it("behoudt desktop-layout .bottom-grid (E-05)", () => {
    const content = readEisen();
    assert.match(content, /E-05/);
    assert.match(content, /\.bottom-grid/);
  });
});

describe("Eiseninhoud: titel, beschrijving en link", () => {
  it("legt titel Coodr in h3 vast (E-06, E-07)", () => {
    const content = readEisen();
    assert.match(content, /E-06/);
    assert.match(content, /E-07/);
    assert.match(content, /\*\*Coodr\*\*|titel is precies \*\*Coodr\*\*/i);
    assert.match(content, /`h3`|h3/);
  });

  it("legt vaste beschrijvingstekst vast (E-08)", () => {
    const content = readEisen();
    assert.match(content, /E-08/);
    assert.ok(
      content.includes(BESCHRIJVING_E08),
      "E-08-beschrijvingstekst moet letterlijk in het document staan"
    );
  });

  it("legt beschrijvingsplaats en toon vast (E-09, E-10)", () => {
    const content = readEisen();
    assert.match(content, /E-09/);
    assert.match(content, /E-10/);
    assert.match(content, /`p`-element|p-element/i);
  });

  it("legt externe link naar coodr.nl vast (E-12 t/m E-14)", () => {
    const content = readEisen();
    assert.match(content, /E-12/);
    assert.match(content, /E-13/);
    assert.match(content, /E-14/);
    assert.ok(content.includes("https://coodr.nl"));
    assert.match(content, /\*\*coodr\.nl\*\*|zichtbare linktekst is \*\*coodr\.nl\*\*/i);
    assert.match(content, /target="_blank"/);
    assert.match(content, /rel="noopener noreferrer"/);
    assert.match(content, /\.solution-link/);
  });
});

describe("Eiseninhoud: media", () => {
  it("schrijft geen verplichte media voor in v1 (E-16)", () => {
    const content = readEisen();
    assert.match(content, /E-16/);
    assert.match(content, /geen.*afbeelding|geen.*media|niet.*verplicht/i);
  });

  it("sluit autoplay/carrousel/zware animatie uit (E-19)", () => {
    const content = readEisen();
    assert.match(content, /E-19/);
    assert.match(content, /autoplay|carrousel|animatie/i);
  });

  it("beschrijft optionele latere media (E-17, E-18)", () => {
    const content = readEisen();
    assert.match(content, /E-17/);
    assert.match(content, /E-18/);
    assert.match(content, /alt/i);
  });
});

describe("Eiseninhoud: styling, a11y en scope", () => {
  it("eist hergebruik van .solution-card-styling (E-20 t/m E-22)", () => {
    const content = readEisen();
    assert.match(content, /E-20/);
    assert.match(content, /E-21/);
    assert.match(content, /E-22/);
    assert.match(content, /\.solution-card/);
    assert.match(content, /--orange|--ink|--muted|--card|--font/);
  });

  it("legt semantiek article → h3 → p → a vast (E-24)", () => {
    const content = readEisen();
    assert.match(content, /E-24/);
    assert.match(
      content,
      /article\.solution-card.*h3.*p.*a\.solution-link|`article\.solution-card`\s*→\s*`h3`\s*→\s*`p`\s*→\s*`a\.solution-link`/
    );
  });

  it("begrenst scope tot weergave zonder secrets/deploy (E-28 t/m E-30)", () => {
    const content = readEisen();
    assert.match(content, /E-28/);
    assert.match(content, /E-29/);
    assert.match(content, /E-30/);
    assert.match(content, /\.env|secrets|deploy/i);
  });
});

describe("Eisendekking: Must-IDs aanwezig", () => {
  const mustIds = [
    "E-01", "E-02", "E-03", "E-04", "E-05",
    "E-06", "E-07", "E-08", "E-09", "E-10",
    "E-12", "E-13", "E-14",
    "E-16", "E-19",
    "E-20", "E-21", "E-22", "E-23",
    "E-24", "E-25", "E-26", "E-27",
    "E-28", "E-29", "E-30",
  ];

  for (const id of mustIds) {
    it(`bevat eis ${id}`, () => {
      const content = readEisen();
      assert.match(content, new RegExp(`\\b${id}\\b`));
    });
  }
});

describe("Consistentie met bestaande homepage (referentie Candidakuur)", () => {
  it("index.html heeft Oplossingen met solution-card-patroon", () => {
    const html = fs.readFileSync(INDEX_PATH, "utf8");
    assert.match(html, /class="solutions"/);
    assert.match(html, /<h2>Oplossingen<\/h2>/);
    assert.match(html, /class="solution-card"/);
    assert.match(html, /Candidakuur/);
    assert.match(
      html,
      /class="solution-link"[^>]*href="https:\/\/candidakuur\.nl"[^>]*target="_blank"[^>]*rel="noopener noreferrer"/
    );
  });

  it("styles.css definieert .solution-card en .solution-link", () => {
    const css = fs.readFileSync(CSS_PATH, "utf8");
    assert.match(css, /\.solution-card\s*\{/);
    assert.match(css, /\.solution-link\s*\{/);
    assert.match(css, /--orange/);
    assert.match(css, /--font/);
  });

  it("eisendocument verwijst naar hetzelfde markuppatroon als Candidakuur", () => {
    const content = readEisen();
    const html = fs.readFileSync(INDEX_PATH, "utf8");
    assert.ok(html.includes("solution-card"), "Referentiekaart ontbreekt in HTML");
    assert.match(content, /Candidakuur/);
    assert.match(content, /solution-card/);
    assert.match(content, /solution-link/);
  });
});

describe("Implementatie-acceptatiecriteria in het document (sectie 9)", () => {
  it("somt Coodr-kaart, beschrijving, link, styling en geen regressie op", () => {
    const content = readEisen();
    assert.match(content, /tweede kaart.*Coodr|titel \*\*Coodr\*\*/i);
    assert.ok(content.includes(BESCHRIJVING_E08) || content.includes("E-08"));
    assert.match(content, /https:\/\/coodr\.nl/);
    assert.match(content, /coodr\.nl/);
    assert.match(content, /Candidakuur/);
    assert.match(content, /regressie|Contact/i);
    assert.match(content, /Media|beeld/i);
  });
});
