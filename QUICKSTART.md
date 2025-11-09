# Vue&Do Website - Quick Start Guide

Get the Vue&Do marketing website up and running in 5 minutes.

## Step 1: Test Locally (2 minutes)

Open a terminal and run:

```bash
cd /home/dam/VueDo/website
python3 -m http.server 8000
```

Then open your browser to: **http://localhost:8000**

You should see the Vue&Do landing page!

### What to Check:
- [ ] Page loads without errors
- [ ] Language switcher works (EN/FR toggle in top-right)
- [ ] Navigation smooth scrolling works
- [ ] Mobile menu works (resize browser to < 768px)
- [ ] Form validation works (try submitting empty form)
- [ ] All sections display correctly

**Test Page**: Visit http://localhost:8000/test.html to verify components

## Step 2: Add Images (10-30 minutes)

Before deployment, you need to create these images in `/home/dam/VueDo/website/images/`:

### Required Images:

1. **hero-mockup.png** (600x500px)
   - Quick option: Use a placeholder from https://placehold.co/600x500/2196F3/FFFFFF?text=Vue%26Do

2. **og-image.png** (1200x630px)
   - Social media preview image
   - Must include logo and tagline

3. **twitter-card.png** (1200x600px)
   - Similar to OG image

4. **favicon-32x32.png** & **favicon-16x16.png**
   - Browser icons
   - Use https://favicon.io/ to generate from logo

5. **apple-touch-icon.png** (180x180px)
   - iOS home screen icon

### Temporary Placeholders (for testing):

```bash
cd /home/dam/VueDo/website/images
# Download placeholder images (requires curl/wget)
curl "https://placehold.co/600x500/2196F3/FFFFFF.png?text=VueDo+Hero" -o hero-mockup.png
curl "https://placehold.co/1200x630/2196F3/FFFFFF.png?text=VueDo" -o og-image.png
curl "https://placehold.co/1200x600/2196F3/FFFFFF.png?text=VueDo" -o twitter-card.png
curl "https://placehold.co/32x32/2196F3/FFFFFF.png?text=V" -o favicon-32x32.png
curl "https://placehold.co/16x16/2196F3/FFFFFF.png?text=V" -o favicon-16x16.png
curl "https://placehold.co/180x180/2196F3/FFFFFF.png?text=VueDo" -o apple-touch-icon.png
```

## Step 3: Deploy to GitHub Pages (5-10 minutes)

### A. Create GitHub Repository

1. Go to https://github.com/new
2. Repository name: `vuedo-website`
3. Visibility: Public
4. Don't initialize with README
5. Click "Create repository"

### B. Push Code

```bash
cd /home/dam/VueDo
git init
git add website/
git commit -m "Add Vue&Do marketing website"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/vuedo-website.git
git push -u origin main
```

Replace `YOUR-USERNAME` with your GitHub username.

### C. Enable GitHub Pages

1. Go to repository **Settings** → **Pages**
2. Source: **Deploy from a branch**
3. Branch: **main**
4. Folder: **/website** (if website is in subfolder) or **/ (root)** (if at root)
5. Click **Save**

Wait 1-2 minutes, then visit:
**https://YOUR-USERNAME.github.io/vuedo-website/**

## Step 4: Configure Custom Domain (Optional, 10-30 minutes)

### A. DNS Configuration

At your domain registrar (e.g., Namecheap, GoDaddy), add these records:

```
Type: A
Name: @
Value: 185.199.108.153

Type: A
Name: @
Value: 185.199.109.153

Type: A
Name: @
Value: 185.199.110.153

Type: A
Name: @
Value: 185.199.111.153

Type: CNAME
Name: www
Value: YOUR-USERNAME.github.io
```

### B. GitHub Configuration

1. Settings → Pages → Custom domain
2. Enter: `vuedo.app`
3. Click Save
4. Wait for DNS check (can take 24-48 hours)
5. Enable "Enforce HTTPS" once DNS check passes

## Step 5: Verify & Launch (5 minutes)

### SEO Checks

1. **Google Search Console**
   - Add property: https://vuedo.app
   - Submit sitemap: https://vuedo.app/sitemap.xml

2. **Social Media Previews**
   - Twitter: https://cards-dev.twitter.com/validator
   - Facebook: https://developers.facebook.com/tools/debug/

3. **Performance**
   - PageSpeed: https://pagespeed.web.dev/
   - Test URL: https://vuedo.app

### Accessibility Check

1. **WAVE Tool**: https://wave.webaim.org/
2. **axe DevTools**: Install browser extension, run audit
3. **Keyboard Navigation**: Tab through all interactive elements

## Common Issues & Solutions

### Issue: 404 Not Found

**Solution**: Check GitHub Pages settings. Ensure correct branch and folder are selected.

### Issue: Styles Not Loading

**Solution**: Paths must be absolute. Use `/css/styles.css` not `css/styles.css`.

### Issue: Images Not Displaying

**Solution**:
1. Check image files exist in `/images/` folder
2. Paths should be `/images/hero-mockup.png`
3. File names are case-sensitive

### Issue: Language Switcher Not Working

**Solution**:
1. Check browser console for JavaScript errors
2. Ensure `js/i18n.js` and `js/main.js` are loaded
3. Clear browser cache

### Issue: Form Not Submitting

**Solution**: Form currently stores in localStorage (demo only). Check console for errors. For production, integrate with backend API.

## Quick Reference

### File Locations

```
Main page:        /home/dam/VueDo/website/index.html
Styles:           /home/dam/VueDo/website/css/styles.css
Scripts:          /home/dam/VueDo/website/js/
Images:           /home/dam/VueDo/website/images/
Test page:        /home/dam/VueDo/website/test.html
```

### Important URLs (After Deployment)

```
Homepage:         https://vuedo.app
French version:   https://vuedo.app/fr
Sitemap:          https://vuedo.app/sitemap.xml
Manifest:         https://vuedo.app/manifest.json
```

### Local Testing Commands

```bash
# Python server
cd /home/dam/VueDo/website && python3 -m http.server 8000

# Node.js server (if installed)
cd /home/dam/VueDo/website && npx http-server -p 8000

# Visit
http://localhost:8000
```

### Git Commands

```bash
# Status
git status

# Add changes
git add .

# Commit
git commit -m "Update content"

# Push
git push origin main

# View log
git log --oneline
```

## Content Updates

To update website content:

1. **Edit files** in `/home/dam/VueDo/website/`
2. **Test locally** (python3 -m http.server)
3. **Commit changes**: `git add . && git commit -m "Update"`
4. **Push to GitHub**: `git push origin main`
5. **Wait 1-2 minutes** for deployment
6. **Verify live site**: Visit https://vuedo.app

## Next Steps After Launch

1. **Monitor Analytics** (if added)
2. **Track Waitlist Signups** (localStorage or backend)
3. **Gather User Feedback**
4. **A/B Test Headlines** (different value propositions)
5. **Add Blog Content** (for SEO)
6. **Create Case Studies** (testimonials)

## Support & Resources

### Documentation
- Main README: `/home/dam/VueDo/website/README.md`
- Deployment Guide: `/home/dam/VueDo/website/DEPLOYMENT.md`
- Project Summary: `/home/dam/VueDo/website/PROJECT-SUMMARY.md`

### External Resources
- GitHub Pages Docs: https://docs.github.com/en/pages
- Design System: `/home/dam/VueDo/design-system/`
- WCAG Guidelines: https://www.w3.org/WAI/WCAG21/quickref/

### Contact
- Email: hello@vuedo.app

---

**You're ready to launch!**

Follow these 5 steps and your professional Vue&Do website will be live and ready to convert visitors into waitlist signups.

**Estimated Total Time**: 30-60 minutes (including image creation)
