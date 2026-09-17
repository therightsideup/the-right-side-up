# The Right Side Up - Editorial Identity 2.1

Status: Canonical working guidance for the monochrome editorial site and its publication formats.

This document supersedes the earlier teal-and-cream engraving system and the multicolor 2.0 mockup. When this guide and an older artifact disagree, the current production site is the visual source of truth.

## North star

The Right Side Up should feel like a small, generous publication made by real people: part independent magazine, part field guide, part church library. It is attentive rather than polished, tactile rather than synthetic, and confident without becoming loud.

We design attention, not pages. Attention becomes contemplation; contemplation becomes formation.

## The current visual language

1. **Paper and ink** - warm paper, near-black ink, thin rules, and visible editorial structure.
2. **Ordinary life** - candid documentary photography that feels observed rather than staged.
3. **Restrained signal** - muted print red is the only recurring accent color.
4. **Printed architecture** - oversized condensed display type, serif reading text, and monospaced metadata.
5. **One visual idea** - each publication has one theme photograph, used consistently on its cover and discovery cards.
6. **Generous utility** - web editions, PDFs, excerpts, and future study formats should feel like editions of the same work.

## Typography

### Display - Barlow Condensed 800

Use for series titles, publication covers, issue names, chapter thresholds, and brief declarative statements. Uppercase only. Line height `0.76-0.86`. Tracking should remain between `-0.02em` and `0`.

Display type may be very large, but it must scale with `clamp()` and be checked at phone, tablet, laptop, and wide desktop sizes. Letters may visually touch; they must not overlap, clip, or force horizontal scrolling.

### Editorial - Libre Baskerville 400/700

Use for sustained reading, summaries, Scripture, reflection prompts, and contemplative statements. Target line height `1.45-1.65` and a reading measure of 45-68 characters.

### Metadata - IBM Plex Mono 500/600

Use for Scripture references, issue numbers, dates, credits, navigation, buttons, running heads, and page numbers. Uppercase with `0.06-0.12em` tracking. Do not use for paragraphs.

### Interface - Libre Franklin 400/600

Use sparingly for accessible controls and supporting interface language.

## Color

The system is intentionally close to monochrome. Color should never become the organizing idea.

| Role | Name | Hex |
|---|---|---|
| Ground | Warm Paper | `#F0EDE6` |
| Primary | Printer's Ink | `#151513` |
| Signal | Muted Print Red | `#A93B32` |
| Secondary text | Warm Gray | `#65615A` |
| Hairline | Ink at 16% | `rgba(21,21,19,.16)` |
| Strong rule | Ink at 42% | `rgba(21,21,19,.42)` |

The former teal belongs to the archive. Cobalt and yellow from the exploratory mockup are no longer system colors. Red is reserved for small editorial signals: eyebrows, issue numbers, rules, and occasional labels. Do not use broad color fields, gradients, or a different palette for every publication.

## Photography

Photography is now a primary part of the identity.

Prefer Alex's approved work or licensed documentary stock. Images should feel candid, anonymous, and grounded in ordinary life. Favor weather, public space, overlooked objects, imperfect light, movement, distance, waiting, and human-scale scenes over cinematic spectacle.

### One-theme-image rule

- Every publication receives one theme photograph.
- Use that same photograph on the publication cover, homepage card, library card, and PDF cover.
- Do not introduce unrelated chapter photographs inside the same publication.
- A publication may later earn a deliberately commissioned visual sequence, but that is an exception requiring its own art direction.

The photograph should establish emotional atmosphere rather than literally illustrate every sentence. It must still make conceptual sense: prayer should not look militaristic; repair should suggest structure, wear, or making whole; relational work should show distance or gathering.

### Treatment and cropping

- Default to black and white with moderate contrast and slightly lowered brightness.
- Preserve detail in faces and important subject matter; do not crush the image into an unreadable black field.
- Use `object-fit: cover` and choose an intentional focal point.
- Crop close enough to remove baked-in film borders or scanning edges unless the border is an explicitly approved part of the composition.
- Do not assemble multiple photos into a collage for a publication card.
- Preserve unedited masters and photographer credits in `assets/photography/CREDITS.md`.

## Texture

Use one global paper-grain layer at approximately 5-6% opacity. Texture should make the page feel handled, not dirty. Avoid decorative tape, torn-paper edges, large rotations, and layered collage on reading pages. The design should feel tactile because of paper, type, photography, and spacing - not because effects were added everywhere.

## Grid and spacing

- Base unit: `8px`.
- Mobile page edge: `18-20px`.
- Desktop page edge: `4vw`, capped around `64px`.
- Major section gap: `64-112px` desktop; `40-72px` mobile.
- Component gap: `16-34px`.
- Use thin rules to create editorial rhythm.
- Give every section one clear place for attention to land.
- Mobile is composed in reading order, not a scaled-down desktop spread.

## Core components

### Navigation

Wordmark left; Library and Art right. Use one thin rule. No floating glass, pills, gradients, or oversized application chrome.

### Series feature

One large display title, one declarative subtitle, and one dominant photograph. It should be understandable in three seconds.

### Publication card

One photograph, metadata, title, short description, and reading action. Never use a black placeholder when a publication has an approved theme photograph.

### Publication cover

One photograph paired with a strong title field, metadata, a concise promise, and a begin-reading action. Do not repeat additional photographs between chapters.

### Chapter threshold

Use number, title, question, and negative space. A threshold should change pace without introducing a new visual identity.

### Reading spread

Serif body copy with a restrained measure, clear subheads, Scripture or quote blocks, and enough vertical space to breathe.

### Practice and prayer

Every publication should give the reader somewhere to go: a reflection question, embodied practice, prayer, or blessing.

### Buttons and links

Rectangular, square corners, monospaced uppercase labels. Primary actions may be ink-filled; secondary actions use a one-pixel rule or underlined text. No rounded pills.

## PDF editions

The PDF is a print edition of the publication, not a screenshot of the website.

- Default format: US Letter, portrait, printable on ordinary home and church printers.
- Cover: the publication's single theme photograph, title, Scripture reference, and one-sentence promise.
- Interior: warm paper on screen; white-paper-safe when printed in grayscale.
- Running architecture: publication name, chapter name, page number, and thin rules.
- Chapter dividers use display type and negative space, not additional photography.
- Body pages use Libre Baskerville at a comfortable print size with generous margins.
- Practice, reflection, and prayer pages receive intentional writing space.
- Navigation, web controls, sticky headers, and decorative interface elements never appear in print.
- Every downloadable PDF must be visually rendered and checked for clipped text, awkward page breaks, widows, orphaned headings, and unreadable photographs before publication.

## Accessibility and responsive behavior

- Body text minimum `16px` on the web and approximately `10.5-11.5pt` in print.
- Metadata minimum `9-10px` where practical.
- Maintain WCAG AA contrast for functional text.
- Every meaningful image receives useful alt text.
- All interactions work by keyboard and show focus.
- Respect reduced-motion settings.
- Check phone, tablet, laptop, and wide desktop layouts before publishing.

## Editorial voice

Begin with Jesus. Think beside the reader rather than lecturing. Prefer invitation to urgency, identity to behavior, and concrete life to abstraction. No funnels, scarcity, hype, or engagement bait. Everything is gift.

## Test for every new edition

1. Is there one clear place for attention to land?
2. Does it feel made by people rather than generated by a system?
3. Does the photograph belong to the publication and remain consistent across formats?
4. Is the page primarily paper, ink, type, and space?
5. Could a thoughtful teenager read it without being talked down to?
6. Does mobile feel composed rather than merely stacked?
7. Does the PDF feel like the same publication, newly typeset for print?

