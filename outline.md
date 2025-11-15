# ULN Platform Outline

## Repo Layout
```
URHOBO MAIN/
├── index.html        # Lumina landing page + platform overview
├── heritage.html     # Culture Engine stories + map
├── genealogy.html    # Lineage Lab builder
├── directory.html    # Lumina Directory (professionals)
├── dashboard.html    # Insight dashboard + analytics
├── main.js           # Shared interactions + animations
├── resources/        # Image assets + patterns
├── design.md         # Visual language guide
├── interaction.md    # Interaction + motion narrative
└── outline.md        # You are here
```

## Page Intent

### index.html — Welcome & Story
- Hero with typed mission statements + triple CTA.
- Feature grid describing Lineage Studio, Diaspora Grid, Culture Engine, Impact Programs.
- Splide carousel for “Culture Signals”.
- Stats + CTA inviting families + labs to contribute.

### heritage.html — Culture Engine
- Hero frames the Story Field mission.
- Atlas (map + info cards) describing kingdoms.
- Legacy timeline list with animated markers.
- Filterable archive grid + contribution form.

### genealogy.html — Lineage Lab
- CTA hero encouraging constellation building.
- Sticky controls for creating members, importing/exporting data.
- ECharts tree visualization space + details panel.
- Family member grid + quick actions.

### directory.html — Lumina Directory
- Hero describing what the directory tracks.
- Search + filter panel with pill toggles.
- Cards for professionals, achievements, and mentorship badges.
- Highlight + CTA to submit profiles.

### dashboard.html — Insight Console
- Stats row (storytellers, nodes, uploads, cities).
- Engagement line/bar chart and diaspora radar chart.
- Contributor wall + mission CTA.

## Tech + Libraries
- Tailwind CDN for utility styles + custom theme tokens.
- Anime.js for scroll reveals and card hover micro-interactions.
- Typed.js for hero statements.
- Splide.js for carousels.
- ECharts for tree, map, and dashboard visualizations.
- Vanilla JS module (`main.js`) orchestrates observers, cards, gallery filters, etc.

## Experience Notes
- Keep nav consistent across pages with ULN logo + uppercase tagline.
- Buttons use rounded-full shapes, Pulse backgrounds, and glow shadows.
- Counters animate via `data-target` attributes processed in JS.
- Contribution flows use cards with borders tinted by palette.
- Footer mantra: “Crafted with ancestral light.”

This outline keeps every surface aligned with the Lumina rebrand so stakeholders can navigate, contribute, and analyze without context switching.
