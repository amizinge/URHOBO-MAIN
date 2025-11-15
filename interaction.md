# ULN Interaction + Motion Narrative

## Core Systems

### 1. Lineage Lab
**Purpose**: Collaborative constellation builder for families.
- **Canvas**: Zoomable WebGL tree with smooth pan + focus on any node.
- **Actions**: Add members, upload media, drop audio quotes, tag rituals, request merges with nearby trees.
- **Loops**: Every new node prompts suggested relatives + verification tasks so users keep returning until each branch glows “complete”.

### 2. Culture Engine
**Purpose**: Map + timeline that streams Urhobo ceremonies, crafts, and oral histories.
- **Canvas**: Split layout—left map (ECharts geo), right timeline + card stack.
- **Filters**: Kingdom, creative discipline, emotion tags, time period.
- **Loops**: Users toggle between “Explore” and “Contribute” modes to upload artifacts, audio, or event recaps. Contribution queue gives status updates.

### 3. Lumina Directory
**Purpose**: Verified registry of Urhobo professionals and maker guilds.
- **Interface**: Elastic search with stacked pill filters, spotlight cards, and diaspora heatmap.
- **Features**: Bookmark pipelines, mentorship badges, event RSVPs, and one-click referrals.
- **Loops**: Members refresh their profile to maintain “Signal Strength” scores; higher signals unlock directory placement and dashboard highlights.

### 4. Insight Dashboard
**Purpose**: Narrative analytics for culture leads and donors.
- **Interface**: Animated counters, comparison charts, radar maps, and contributor wall.
- **Signals**: Weekly progress emails embed mini sparkline charts pulled from the dashboard to pull people back in.

## Motion Principles
- **Breath Rhythm**: Scroll reveals use 80–120ms stagger, 24px translate, easing `easeOutQuart` via Anime.js.
- **Hover Physics**: Cards scale to 1.04 with glow ring; filters animate between outline and filled states.
- **Typed Moments**: Hero statements cycle through four luminous phrases using Typed.js to keep energy high.
- **Carousel Energy**: Splide slides auto-play but pause on hover; slide overlays fade-in with gradient masks.
- **Data Pulse**: ECharts elements reuse brand palette, glowing tooltips, and soft drop shadows.

## Journey Blueprint
1. **Landing** → hero explains mission with typed line, CTA triad.
2. **Orientation** → quick form chooses focus (Lineage, Culture, Directory) to personalize cues.
3. **Workspace** → user enters respective studio (tree canvas, explorer, directory workspace) with saved progress.
4. **Contribution** → upload wizard surfaces privacy + verification steps.
5. **Feedback** → dashboard + email recaps celebrate contributions, offer next missions, and highlight cross-team collabs.

## Technical Rhythm
- Responsive Tailwind layout, CSS variables for radiance glows.
- CDN-delivered libs: Anime.js, Typed.js, Splide.js, ECharts.
- Lazy-load heavy imagery and videos to keep hero responsive.
- IndexedDB cache for offline draft entries (family stories, culture uploads) before syncing.
- Role-based auth differentiates storytellers, editors, and admins.
