# DSU Platinum — Affiliate-Partnerprogramm

One-Page-Landingpage für das Affiliate-Partnerprogramm von Manjeet Singh Sanga (DSU Platinum). Statisch gebaut mit Astro + Tailwind CSS v4. Helles Papier/Ledger-Design (siehe `DESIGN.md`) mit einer bewusst dunklen CTA-Sektion als Kontrastmoment. Scroll-Motion nutzt natives Browser-Scrolling (kein Scroll-Hijacking) — GSAP ScrollTrigger steuert gestaffelte Reveals und die Schritte-Linie, ein leichter `requestAnimationFrame`-Listener treibt den Hero-Parallax. Alles zentral verdrahtet in `src/layouts/Layout.astro`.

## Struktur

```text
/
├── public/
├── src/
│   ├── components/     # Nav, Hero, Benefits, VideoShowcase, Steps, Cta, Footer, Icon, ButtonPrimary
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   └── index.astro
│   └── styles/
│       └── global.css  # Tailwind + Design-Tokens (Gold/Smaragd/Navy) + Reveal-Basisklassen
└── package.json
```

## Commands

| Command           | Action                                       |
| :----------------- | :-------------------------------------------- |
| `npm install`       | Installiert Abhängigkeiten                    |
| `npm run dev`       | Startet den Dev-Server auf `localhost:4321`   |
| `npm run build`     | Baut die statische Seite nach `./dist/`       |
| `npm run preview`   | Vorschau des Builds                           |

Node **22+** wird benötigt (siehe `.node-version`).

## Platzhalter, die noch befüllt werden müssen

- Schritte 2–4 im Ablauf-Abschnitt (`src/components/Steps.astro`)
- Echter CopeCart-Partner-Link (aktuell `#partner-werden`)
- Impressum/Datenschutz-Links im Footer
