# ULN Experience Identity

## Brand Pillars
- **Luminescent Heritage**: Blend archival photography with neon gradients to show Urhobo stories powering the future.
- **Data Rituals**: Charts and stats are treated like ceremonial motifs—minimal, geometric, and precise.
- **Collective Craft**: Interfaces feel co-created with elders, youth, and technologists. Use tactile textures, handwritten accents, and soft noise overlays.
- **Joyful Utility**: Every interaction should feel warm, quick, and encouraging so community members enjoy participating.

## Color Language
- **Pulse (#7C3AED)**: Signature violet used for headlines, buttons, and hero gradients.
- **Aura (#0EA5E9)**: Electric cyan for highlights, links, and interactive affordances.
- **Grove (#0F766E)**: Grounding emerald for success states, data outlines, and map strokes.
- **Radiance (#FCD34D)**: Sunlit accent that warms CTAs and stat callouts.
- **Mist (#F6F4FF)**: Soft background wash for sections and cards.
- **Ink (#050B1A)**: Primary text and deep background tone.

Gradients combine Pulse → Aura for energetic hero zones, and Ink → Aura for data-heavy modules. Shadows lean translucent purple/teal to mimic holographic glow.

## Typography System
- **Display**: Fraunces — used for hero statements, nav logo, and section headlines.
- **Body**: Space Grotesk — utilitarian sans for paragraphs, tables, buttons.
- **Accent**: Spectral — italic pulls for quotes, cultural annotations, or statistic labels.

Letter spacing is often widened (0.2–0.5em) on uppercase captions to echo engraved bronze plaques. Keep body copy at 18–20px with relaxed leading for readability.

## Visual & Motion Vocabulary
- **Pattern Layer**: Radial gradients + low-opacity textile textures that drift slowly (CSS animations instead of heavy video loops).
- **Iconography**: Rounded line icons with double-stroke outlines; avoid sharp corners.
- **Cards**: Glassy surfaces (`backdrop-filter`) with border tints that match the card theme.
- **Motion**: Anime.js drives fade/slide reveals; delays of 80–120ms create rhythmic pulse. Typed.js animates hero statements. Splide powers curated galleries. ECharts renders trees, radars, and timelines with brand colors.
- **Hover Language**: Slight scale (1.03–1.05), color inversion, and drop shadows tinted Pulse/Aura. Buttons use rounded-full shapes and shadow glows instead of square corners.

## Layout Principles
- **Grid**: 12-column responsive grid with generous 32px gutters. Use stacked sections in 3/4 rhythm (e.g., 3 cards + 1 narrative panel).
- **Spacing**: Vertical spacing follows 24px multiples; hero sections use 80–96px padding for cinematic feel.
- **Dividers**: Use translucent white lines on dark backgrounds and gray-200 on light sections. Prefer pill-shaped badges over sharp tags.
- **Accessibility**: Maintain 4.5:1 contrast for text on Mist backgrounds, add focus outlines, and keep animations subtle for reduced-motion preferences.

## Component Guidance
- **Navigation**: Fixed translucent bar with uppercase subtext “Urhobo Lumina Network”. Active link uses Pulse underline.
- **Hero**: Gradient overlays plus pattern noise, large typed statements, and trio of rounded CTAs.
- **Stats**: Counters use Radiance numbers with Ink/Mist captions; include microcopy describing the data source.
- **Cards & Filters**: Filters are pill buttons with dual states (outline vs filled). Cards stack icon or image, bold headline, description, and CTA arrow.
- **Footer**: Dark field with condensed blurb explaining ULN collective, plus mantra “Crafted with ancestral light”.

This guide keeps every file aligned to the Lumina rebrand so web, decks, and prototypes feel like one continuous narrative.
