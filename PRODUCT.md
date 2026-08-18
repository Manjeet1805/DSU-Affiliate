# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Bestehende Kunden von Manjeet Singh Sanga (DSU Platinum), die sein Coaching/Beratungsangebot bereits kennen und selbst erlebt haben. Sie erreichen die Seite überwiegend mobil, primär über Instagram-Links. Ihre Aufgabe auf der Seite: verstehen, was das Partnerprogramm bringt, und sich kostenlos als Affiliate über CopeCart registrieren.

## Product Purpose

Eine One-Page-Landingpage, die bestehende Kunden dafür gewinnt, Manjeet weiterzuempfehlen und sich als Affiliate-Partner anzumelden. Erfolg = Klick auf "Jetzt Partner werden" → Registrierung im CopeCart-Partnerprogramm.

## Positioning

Anders als generische Affiliate-Programme (reine Geld-Provision) kombiniert DSU Platinum vier Rückflüsse pro erfolgreicher Empfehlung: Bargeld (300 $), Noirlab-Guthaben für eigene Creatives (100 $), Zugang zum sonst nur Gold-Kunden vorbehaltenen Winning-Product-Newsletter (täglich von Manjeet ausgewählte Produkte) und persönliche 1:1-Zeit mit Manjeet selbst (2 × 30 Min. Zoom). Die persönliche Nähe zu Manjeet ist Teil des Angebots, nicht nur der Reichweite.

## Operating Context

- Traffic kommt primär von Instagram-Links auf mobilen Geräten.
- Zielhandlung führt zur externen CopeCart-Plattform (kostenlose Partner-Registrierung), aktuell noch als Anker auf die eigene CTA-Sektion (`#partner-werden`) verlinkt, nicht auf die echte CopeCart-URL.
- Statische Astro-Seite ohne Backend, ohne Formulare, ohne eigene Nutzerkonten.

## Capabilities and Constraints

- Rein statischer Astro-Build (Astro + Tailwind CSS v4), kein Server, kein CMS.
- Kerngeschäft von Manjeet/DSU Platinum: Coaching/Beratung. "Noirlab" ist die konkrete externe Plattform, über die Partner ihre Creatives erstellen lassen können (Guthaben-Benefit).
- Folgende Inhalte sind bewusste Platzhalter und bleiben bis auf Weiteres offen (nicht erfinden, nicht mit Fake-Inhalten füllen):
  - Schritte 2–4 der Anleitung (`src/components/Steps.astro`)
  - Echter CopeCart-Partner-Link (aktuell `#partner-werden`)
  - Impressum/Datenschutz-Links im Footer

## Evidence on Hand

Keine realen Testimonials, Kennzahlen oder Case Studies vorhanden. Die vier Benefit-Werte sind bestätigte reale Produktfakten, keine Platzhalter: 300 $ Cash-Bonus, 100 $ Noirlab-Guthaben (Betrag vom Nutzer als "100$" bestätigt, nachdem eine ursprüngliche "100%"-Angabe als Tippfehler geklärt wurde), täglicher Zugang zum Winning-Product-Newsletter (sonst nur Gold-Kunden vorbehalten), 2 × 30 Min. 1:1-Zeit mit Manjeet. Reales Bild- und Videomaterial von Manjeet liegt vor und ist eingebunden (`src/assets/images/`, `public/videos/`) — Video-Platzhalter und Foto-Platzhalter sind damit aufgelöst, keine offenen Punkte mehr. Alle oben gelisteten verbleibenden Platzhalter-Inhalte sind explizit nicht zu erfinden.

## Product Principles

- Vertrauen vor Verkaufsdruck: Zielgruppe kennt Manjeet bereits — die Seite muss diese bestehende Beziehung bestätigen, nicht kalt überzeugen.
- Mobile zuerst: Instagram-Traffic entscheidet über Layout- und Performance-Prioritäten.
- Konkret statt vage: Beträge, Schritte und Abläufe klar und zahlenbasiert kommunizieren statt generischer Marketing-Sprache.
- Persönliche Nähe zu Manjeet ist Differenzierungsmerkmal, nicht Nebensache — im Ton und in der Darstellung erhalten.
- Platzhalter bleiben sichtbar als Platzhalter, bis echte Inhalte geliefert werden — nichts Erfundenes ausgeben.
