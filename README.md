# Vue&Do Marketing Website

Static product portal for Vue&Do, designed for GitHub Pages deployment at [vuedo.app](https://vuedo.app).

## Overview

This is a fully static, SEO-optimized, bilingual (English/French) marketing website for Vue&Do - an evidence-based visual routine app for neuro-diverse children.

### Key Features

- **Fully Static**: Pure HTML/CSS/JavaScript - no build process required
- **SEO Optimized**: Comprehensive meta tags, structured data, sitemap
- **Bilingual**: Full English and French support with language switcher
- **Accessible**: WCAG 2.1 AA compliant, neuro-inclusive design
- **Responsive**: Mobile-first design, works on all devices
- **Fast**: Optimized for performance, lazy loading, minimal dependencies
- **GitHub Pages Ready**: Configured for seamless deployment

## Project Structure

```
website/
├── index.html              # Main landing page (bilingual)
├── css/
│   └── styles.css         # All styles using design system tokens
├── js/
│   ├── i18n.js           # Internationalization & language switching
│   └── main.js           # Navigation, forms, interactions
├── images/               # Image assets (add your images here)
│   ├── hero-mockup.png   # Hero section product mockup
│   ├── og-image.png      # Open Graph image (1200x630px)
│   ├── twitter-card.png  # Twitter card image (1200x600px)
│   ├── favicon-32x32.png # Favicon
│   ├── favicon-16x16.png # Small favicon
│   └── apple-touch-icon.png # iOS home screen icon (180x180px)
├── sitemap.xml           # XML sitemap for search engines
├── robots.txt            # Robots directives
├── CNAME                 # Custom domain configuration
└── README.md             # This file
```

## Design System

The website uses the Vue&Do Neuro-Inclusive Design System located at `/home/dam/VueDo/design-system/`. All design tokens are integrated into `css/styles.css`:

- **Colors**: Calming blue primary, soft error/warning states
- **Typography**: Comic Neue for child-friendly headings, system fonts for body
- **Spacing**: 4px grid system for consistency
- **Accessibility**: WCAG 2.1 AA compliant, high contrast options
- **Touch Targets**: Minimum 48px, optimized for neuro-inclusive interaction

## Deployment to GitHub Pages

### Initial Setup

1. **Prepare Repository**
   ```bash
   cd /home/dam/VueDo
   git init
   git add website/
   git commit -m "Add Vue&Do marketing website"
   ```

2. **Create GitHub Repository**
   - Go to [GitHub](https://github.com/new)
   - Create a new repository named `vuedo-website` (or your preferred name)
   - Don't initialize with README (we already have one)

3. **Push to GitHub**
   ```bash
   git remote add origin https://github.com/YOUR-USERNAME/vuedo-website.git
   git branch -M main
   git push -u origin main
   ```

4. **Enable GitHub Pages**
   - Go to repository Settings > Pages
   - Source: Deploy from a branch
   - Branch: `main` / `website` folder (or root if website is at root)
   - Click Save

### Custom Domain Setup (vuedo.app)

1. **Add DNS Records** at your domain registrar:
   ```
   Type: A
   Name: @
   Value: 185.199.108.153
   Value: 185.199.109.153
   Value: 185.199.110.153
   Value: 185.199.111.153

   Type: CNAME
   Name: www
   Value: YOUR-USERNAME.github.io
   ```

2. **Configure in GitHub**
   - Settings > Pages > Custom domain
   - Enter: `vuedo.app`
   - Check "Enforce HTTPS" (wait for certificate provisioning)

3. **Verify CNAME File**
   - The `CNAME` file contains `vuedo.app`
   - GitHub Pages will automatically respect this

### Updates & Maintenance

To update the website:

```bash
# Make your changes to files in website/
# Then commit and push

git add .
git commit -m "Update content"
git push origin main
```

Changes will be live in 1-2 minutes.

## Development

### Local Testing

You can test the website locally using any static file server:

**Option 1: Python**
```bash
cd /home/dam/VueDo/website
python3 -m http.server 8000
# Visit http://localhost:8000
```

**Option 2: Node.js (http-server)**
```bash
npx http-server /home/dam/VueDo/website -p 8000
# Visit http://localhost:8000
```

**Option 3: VS Code Live Server**
- Install "Live Server" extension
- Right-click `index.html` > "Open with Live Server"

### Image Assets

You need to create and add the following images to `/home/dam/VueDo/website/images/`:

1. **hero-mockup.png** (600x500px recommended)
   - Product screenshot or mockup for hero section
   - Show Vue&Do interface with visual routines

2. **og-image.png** (1200x630px)
   - Open Graph image for social sharing
   - Include logo, tagline, and visual element

3. **twitter-card.png** (1200x600px)
   - Twitter card image
   - Similar to OG image but different aspect ratio

4. **favicon-32x32.png** & **favicon-16x16.png**
   - Browser tab icons
   - Simplified Vue&Do logo

5. **apple-touch-icon.png** (180x180px)
   - iOS home screen icon
   - No transparency, solid background

### Content Updates

All content is in `index.html` with bilingual support:

```html
<h1 data-i18n="hero-title">
  <span lang="en">English Text</span>
  <span lang="fr" hidden>Texte français</span>
</h1>
```

Translation strings are in `js/i18n.js` - update both HTML and JS when changing content.

## SEO Checklist

- [x] Semantic HTML5 structure
- [x] Proper heading hierarchy (h1 → h6)
- [x] Meta descriptions and keywords
- [x] Open Graph tags (Facebook, LinkedIn)
- [x] Twitter Card tags
- [x] Structured data (Schema.org)
- [x] Sitemap.xml
- [x] Robots.txt
- [x] Canonical URLs
- [x] Alt text on images (add when images are ready)
- [x] Mobile-responsive
- [x] Fast loading (minimal dependencies)
- [x] HTTPS (via GitHub Pages)
- [x] Bilingual hreflang tags

## Accessibility Checklist

- [x] WCAG 2.1 AA contrast ratios
- [x] Semantic HTML landmarks
- [x] Skip to main content link
- [x] Keyboard navigation support
- [x] Focus indicators (3px visible outline)
- [x] Screen reader compatible
- [x] Alt text for images
- [x] ARIA labels where needed
- [x] Reduced motion support
- [x] Form labels and error states
- [x] Touch targets (48px minimum)
- [x] High contrast mode support

## Analytics Setup (Optional)

To add Google Analytics:

1. Add GA4 tracking code to `<head>` in `index.html`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

2. Events are already set up in `js/main.js`:
   - CTA clicks
   - Section views
   - Waitlist signups

## Browser Support

- Chrome/Edge (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- iOS Safari (latest 2 versions)
- Android Chrome (latest 2 versions)

## Performance

- First Contentful Paint: < 1.5s (target)
- Largest Contentful Paint: < 2.5s (target)
- Cumulative Layout Shift: < 0.1 (target)
- First Input Delay: < 100ms (target)

Optimize images before deployment:
- Use WebP format where possible
- Compress PNG/JPEG (TinyPNG, ImageOptim)
- Serve responsive images with srcset
- Enable lazy loading

## Privacy & GDPR

The website currently:
- Uses localStorage for language preference
- No cookies (analytics can be added with consent)
- No tracking without user consent
- Waitlist data stored in localStorage (demo only)

For production:
- Add cookie consent banner if using analytics
- Connect waitlist form to backend API
- Create privacy policy page
- Create terms of service page
- Create accessibility statement page

## Backend Integration (Future)

To connect the waitlist form to a backend:

1. Update `js/main.js` form submission:
```javascript
const response = await fetch('https://api.vuedo.app/waitlist', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData)
});
```

2. Options for backend:
   - Netlify Forms (serverless)
   - Google Forms (quick setup)
   - Custom API (FastAPI, as per project spec)
   - Email service (SendGrid, Mailchimp)

## Security

- All external links should have `rel="noopener noreferrer"`
- Form validation on both client and server
- Rate limiting on backend API
- HTTPS enforced via GitHub Pages
- No sensitive data in frontend code

## Maintenance

### Regular Updates

- Update content seasonally
- Add blog posts or news section (future)
- Update research citations as new studies publish
- Refresh images and mockups as product evolves
- Monitor and fix broken links
- Update dependencies (if any added)

### Monitoring

- Google Search Console for SEO health
- PageSpeed Insights for performance
- WAVE or axe for accessibility testing
- Browser DevTools for responsiveness

## Contributing

When making changes:

1. Test on multiple browsers and devices
2. Validate HTML (W3C Validator)
3. Check accessibility (WAVE, axe DevTools)
4. Test with screen reader
5. Verify both English and French content
6. Check mobile responsiveness
7. Test forms and interactions
8. Review SEO meta tags

## Support

For questions or issues with the website:
- Email: hello@vuedo.app
- Check design system docs: `/home/dam/VueDo/design-system/`

## License

Copyright 2025 Vue&Do. All rights reserved.

---

**Built with care for neuro-diverse families**
