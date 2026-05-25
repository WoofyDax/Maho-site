# Aleksandr Harrison Coaching Funnel - Website Guide

## Overview

This is a premium, high-converting 2-page consulting funnel website designed for Aleksandr Harrison's 180-day fitness transformation coaching program. The website features a cinematic luxury minimalism design with a black and gold color scheme.

## Design System

### Color Palette

**Primary Colors:**
- **Background:** Pure black (`oklch(0.08 0 0)`) - Creates maximum contrast and premium feel
- **Accent Gold:** Warm metallic gold (`oklch(0.72 0.19 70.08)`) - Used for CTAs, highlights, and borders
- **Card Background:** Deep charcoal (`oklch(0.12 0 0)`) - Subtle elevation from background
- **Text:** Off-white (`oklch(0.95 0 0)`) - High contrast for readability

**Emotional Intent:** The black and gold combination conveys exclusivity, sophistication, and high-ticket positioning. Gold feels precious and aspirational; black conveys power and luxury.

### Typography

**Font Families:**
- **Headlines:** Montserrat (Bold, 700-900 weights) - Confident, powerful, masculine
- **Body:** Inter (Regular, 400-600 weights) - Clean, readable, professional

**Hierarchy:**
- **H1:** 48-72px on desktop, bold, tight letter-spacing
- **H2:** 32-48px on desktop, bold
- **H3:** 24-32px on desktop, bold
- **Body:** 16-18px, generous line-height (1.6+)

### Components

**Liquid Glass Buttons:**
- Gradient background from gold to darker gold
- Frosted glass effect with backdrop blur
- Subtle glow effect on hover
- Shine animation on hover (left-to-right sweep)
- Active state scales to 0.97 for tactile feedback

**Glassmorphic Cards:**
- Semi-transparent dark background
- Subtle gold border
- Backdrop blur effect
- Hover state: enhanced glow and background opacity increase
- Used for benefits, testimonials, and content cards

**Section Dividers:**
- Thin gradient lines (gold or green)
- Fade from transparent to color to transparent
- Provides visual separation without being heavy

### Animations

**Fade-In on Scroll:**
- Opacity 0→1 over 600ms
- Ease-out cubic-bezier for snappy feel
- Staggered by 50ms per element

**Button Interactions:**
- Hover: Lift 2-3px with enhanced glow
- Active: Scale to 0.97
- Shine effect: 300ms sweep on hover

**Pulse Glow:**
- Subtle pulsing effect on CTAs
- 2s infinite animation
- Creates urgency without being distracting

## Website Structure

### Page 1: ESL (Entry Sales Letter) - Main Landing Page

**Purpose:** Convert cold/warm traffic into booked calls.

**Sections:**

1. **Hero Section**
   - Logo placeholder (currently shows "AH" initials)
   - Main headline: "We Help Busy Men Transform Their Physique In 180 Days"
   - Subheadline with value proposition
   - Trust indicators (100+ clients, busy-schedule friendly, personalized coaching)
   - Primary CTA: "Book a Call" button
   - Hero image placeholder

2. **Video Sales Letter**
   - Embedded YouTube video (180-day transformation system explanation)
   - Supporting text
   - CTA: "Book Your Free Strategy Call"

3. **Calendly Booking**
   - Embedded Calendly scheduler
   - Instruction text
   - Section headline

4. **What You Get On The Call**
   - 4 benefit cards with icons:
     - Personalized Physique Strategy
     - 180-Day Transformation Roadmap
     - Nutrition & Training Bottleneck Audit
     - Custom Action Plan

5. **Testimonials**
   - 3 client testimonial cards with star ratings
   - Placeholder testimonials (replace with real ones)
   - Stats about 100+ clients helped

6. **Case Study Video**
   - Embedded YouTube case study video
   - Premium framed container

7. **Final CTA Section**
   - Closing headline
   - Urgency messaging ("Limited weekly call slots available")
   - Final CTA button with pulse glow effect

### Page 2: ASL (After Sales Letter) - Post-Booking Page

**Purpose:** Confirm the call, increase show-up rate, build trust, and pre-sell the coaching program.

**Sections:**

1. **Confirmation Hero**
   - Success indicator (green checkmark)
   - Confirmation headline: "Your Call Is Now Confirmed"
   - Next steps explanation
   - CTA: "Watch The Prep Video"

2. **Prep / Program Video**
   - Embedded YouTube video (coaching program explanation)
   - 3 preparation tips cards:
     - Be In A Quiet Place
     - Watch This Video
     - Have Your Goals Ready

3. **Objection Handling Videos**
   - 8 video cards addressing common objections:
     - Will this work for me?
     - I don't have enough time
     - I've tried programs before
     - I can't afford it
     - Why now?
     - What if I'm too busy?
     - How does the coaching actually work?
     - What kind of ROI should I expect?
   - Modal popup for video playback

4. **More Testimonials / Client Wins**
   - 2 featured testimonial cards
   - Case study video
   - Stats reinforcing credibility

5. **Final Reminder**
   - Reminder to show up on time
   - Call details box
   - CTAs: "Add To Calendar" and "View Call Details"

## Customization Guide

### Replacing Placeholder Content

**Logo:**
Replace the "AH" placeholder in the Header component (`client/src/components/Header.tsx`) and hero sections with your actual logo. The current placeholder is a gradient box with initials.

**Testimonials:**
Update the testimonial cards in both ESL and ASL pages with real client testimonials. Replace placeholder text with actual client names, results, and quotes.

**Videos:**
The following YouTube video IDs are embedded:
- Main VSL: `dBzUhEX1weI` (coaching program explanation)
- Case Study: `tsLz3ohswow` (client transformation video)

Replace these with your actual video IDs in:
- `client/src/pages/ESL.tsx` (lines with `src="https://www.youtube.com/embed/..."`)
- `client/src/pages/ASL.tsx` (lines with `src="https://www.youtube.com/embed/..."`)

**Calendly Link:**
The Calendly booking widget is embedded in both pages. Update the URL:
```
https://calendly.com/aleksandrharrison0/aleksandr-harrison-1-1-call
```
Replace with your actual Calendly link in:
- `client/src/pages/ESL.tsx` (line ~171)
- `client/src/pages/ASL.tsx` (line ~384)

**Hero Image Placeholder:**
In ESL page, the hero image placeholder is a styled div. Replace with an actual image by modifying the section starting at line ~97 in `client/src/pages/ESL.tsx`.

### Modifying Colors

All colors are defined in `client/src/index.css` using OKLCH color format (Tailwind 4 standard):

**Change Primary Gold:**
Find `--primary: oklch(0.72 0.19 70.08);` and modify the values.

**Change Background:**
Find `--background: oklch(0.08 0 0);` and adjust the lightness value (first number).

**Change Accent Colors:**
Search for `oklch(0.72 0.19 70.08)` throughout the CSS to find all gold references.

### Modifying Typography

**Change Headline Font:**
In `client/index.html`, modify the Google Fonts import:
```html
<link href="https://fonts.googleapis.com/css2?family=YourFont:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
```

Update the CSS variable:
```css
--font-display: 'YourFont', sans-serif;
```

**Change Font Sizes:**
In `client/src/index.css`, modify the `h1`, `h2`, `h3` rules to adjust sizes.

### Adding New Sections

To add a new section to either page:

1. Create a new section element in the page component
2. Add `data-animate` attribute for scroll animations
3. Use the `.glass-card` class for card components
4. Use the `.btn-liquid-gold` class for buttons
5. Add section dividers using the `SectionDivider` component

### Mobile Responsiveness

The website is built mobile-first with responsive breakpoints:
- **Mobile:** Default styles (< 640px)
- **Tablet:** `md:` prefix (≥ 768px)
- **Desktop:** `lg:` prefix (≥ 1024px)

All text sizes, spacing, and layouts adjust automatically. Test on mobile devices to ensure proper display.

## Technical Stack

- **Framework:** React 19 with TypeScript
- **Styling:** Tailwind CSS 4 with custom components
- **Routing:** Wouter (lightweight router)
- **Icons:** Lucide React
- **UI Components:** shadcn/ui
- **Build Tool:** Vite
- **Deployment:** Manus WebDev platform

## Performance Optimization

**Already Implemented:**
- Lazy loading for YouTube embeds
- Optimized CSS with Tailwind purging
- Smooth scroll animations (GPU-accelerated)
- Minimal JavaScript payload

**Recommendations:**
- Replace placeholder images with optimized versions
- Consider lazy-loading sections below the fold
- Monitor Core Web Vitals in production

## Conversion Optimization

**Current Features:**
- Multiple CTAs throughout both pages
- Clear value proposition in hero
- Trust indicators and social proof
- Objection handling on post-booking page
- Urgency messaging ("Limited weekly call slots")
- Smooth scroll-to-booking flow

**Recommendations:**
- A/B test different headline variations
- Track button click-through rates
- Monitor Calendly booking completion rate
- Collect feedback from booked calls
- Optimize video thumbnail images

## Support & Maintenance

**Regular Updates:**
- Update testimonials quarterly
- Refresh case study videos as new clients complete programs
- Monitor video embeds for playback issues
- Test Calendly integration monthly

**Common Issues:**
- If Calendly embed doesn't load, check URL and CORS settings
- If videos don't play, verify YouTube video IDs are correct
- If animations feel slow, check browser performance settings

## File Structure

```
client/
├── src/
│   ├── pages/
│   │   ├── ESL.tsx          # Main landing page
│   │   ├── ASL.tsx          # Post-booking page
│   │   └── NotFound.tsx     # 404 page
│   ├── components/
│   │   ├── Header.tsx       # Navigation header
│   │   ├── SectionDivider.tsx
│   │   └── ui/              # shadcn/ui components
│   ├── App.tsx              # Router and layout
│   ├── index.css            # Global styles and design system
│   └── main.tsx             # React entry point
├── index.html               # HTML template
└── public/                  # Static assets (favicon, etc.)
```

## Next Steps

1. Upload your actual logo and replace the "AH" placeholder
2. Replace all placeholder testimonials with real client feedback
3. Update YouTube video IDs with your actual videos
4. Customize the Calendly link
5. Test all CTAs and booking flow
6. Deploy and monitor conversion metrics
