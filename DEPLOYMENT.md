# Vue&Do Website - Deployment Guide

Complete guide for deploying the Vue&Do marketing website to GitHub Pages.

## Pre-Deployment Checklist

### 1. Content Review
- [ ] All English content reviewed and proofread
- [ ] All French content reviewed and proofread
- [ ] Translation strings match between HTML and JS
- [ ] All links tested (internal and external)
- [ ] Contact email updated (hello@vuedo.app)

### 2. Images & Assets
- [ ] Hero mockup created and optimized
- [ ] Open Graph image created (1200x630px)
- [ ] Twitter card image created (1200x600px)
- [ ] Favicons created (16x16, 32x32)
- [ ] Apple touch icon created (180x180)
- [ ] All images compressed
- [ ] Alt text added for all images

### 3. SEO & Meta
- [ ] Meta descriptions reviewed
- [ ] Keywords optimized
- [ ] Structured data validated (schema.org)
- [ ] Sitemap.xml updated with current date
- [ ] Robots.txt configured correctly
- [ ] CNAME file contains correct domain

### 4. Testing
- [ ] Tested on Chrome, Firefox, Safari, Edge
- [ ] Tested on mobile devices (iOS, Android)
- [ ] Form submission works
- [ ] Language switcher works
- [ ] Navigation smooth scrolling works
- [ ] All interactive elements keyboard accessible
- [ ] Screen reader tested (NVDA, VoiceOver)
- [ ] Performance tested (PageSpeed Insights)
- [ ] HTML validated (W3C Validator)

## GitHub Pages Deployment

### Option 1: Deploy from Website Folder

If your repository structure is:
```
VueDo/
├── website/
├── design-system/
└── other-folders/
```

**Steps**:

1. **Initialize Git** (if not already done):
```bash
cd /home/dam/VueDo
git init
```

2. **Add and Commit**:
```bash
git add website/
git commit -m "Initial Vue&Do marketing website"
```

3. **Create GitHub Repository**:
   - Go to https://github.com/new
   - Repository name: `vuedo-website` (or any name)
   - Visibility: Public (for GitHub Pages)
   - Don't initialize with README

4. **Push to GitHub**:
```bash
git remote add origin https://github.com/YOUR-USERNAME/vuedo-website.git
git branch -M main
git push -u origin main
```

5. **Configure GitHub Pages**:
   - Go to repository Settings → Pages
   - Source: Deploy from a branch
   - Branch: `main`
   - Folder: `/website` (if website is in a subfolder)
   - Click Save

6. **Wait for Deployment**:
   - Check Actions tab for deployment status
   - Usually takes 1-2 minutes
   - Site will be available at: `https://YOUR-USERNAME.github.io/vuedo-website/`

### Option 2: Deploy from Root

If you want the website at root level:

1. **Move website contents to root**:
```bash
cd /home/dam/VueDo
mv website/* .
mv website/.gitignore .
rm -rf website/
```

2. **Follow steps 1-6 from Option 1**, but select:
   - Folder: `/ (root)`

### Custom Domain Setup (vuedo.app)

#### A. Configure DNS at Domain Registrar

Add these DNS records at your domain registrar (e.g., Namecheap, GoDaddy, Cloudflare):

**For apex domain (vuedo.app)**:
```
Type: A
Name: @ (or leave blank)
Value: 185.199.108.153
TTL: Automatic or 3600

Type: A
Name: @
Value: 185.199.109.153
TTL: Automatic or 3600

Type: A
Name: @
Value: 185.199.110.153
TTL: Automatic or 3600

Type: A
Name: @
Value: 185.199.111.153
TTL: Automatic or 3600
```

**For www subdomain**:
```
Type: CNAME
Name: www
Value: YOUR-USERNAME.github.io
TTL: Automatic or 3600
```

#### B. Configure GitHub Pages

1. Go to repository Settings → Pages
2. Custom domain: `vuedo.app`
3. Click Save
4. Wait for DNS check (can take a few minutes to 48 hours)
5. Once DNS check passes, enable "Enforce HTTPS"

#### C. Verify CNAME File

Ensure `/home/dam/VueDo/website/CNAME` contains:
```
vuedo.app
```

GitHub Pages will automatically use this domain.

## Post-Deployment Verification

### 1. Website Access
- [ ] Visit https://vuedo.app
- [ ] Visit https://www.vuedo.app (should redirect)
- [ ] HTTPS is working (green padlock)

### 2. Functionality Tests
- [ ] All pages load correctly
- [ ] Images display properly
- [ ] Language switcher works
- [ ] Form submission works
- [ ] Mobile menu works
- [ ] Smooth scrolling works

### 3. SEO Verification

**Google Search Console**:
1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add property: `vuedo.app`
3. Verify ownership (DNS, HTML file, or meta tag)
4. Submit sitemap: `https://vuedo.app/sitemap.xml`

**Social Media Preview**:
1. Test Twitter card: https://cards-dev.twitter.com/validator
2. Test Facebook: https://developers.facebook.com/tools/debug/
3. Test LinkedIn: https://www.linkedin.com/post-inspector/

**Performance**:
1. PageSpeed Insights: https://pagespeed.web.dev/
2. GTmetrix: https://gtmetrix.com/
3. WebPageTest: https://www.webpagetest.org/

### 4. Accessibility Audit
- [ ] WAVE: https://wave.webaim.org/
- [ ] axe DevTools browser extension
- [ ] Lighthouse audit in Chrome DevTools
- [ ] Screen reader test (NVDA, JAWS, VoiceOver)

## Troubleshooting

### Issue: 404 Error on GitHub Pages

**Solution**:
- Ensure files are in correct folder (root or /website)
- Check GitHub Pages settings (branch and folder)
- Wait a few minutes after pushing changes
- Check Actions tab for build errors

### Issue: Custom Domain Not Working

**Solution**:
- Verify DNS records are correct
- DNS propagation can take up to 48 hours
- Check CNAME file is in root of deployment folder
- Use `dig vuedo.app` to verify DNS resolution

### Issue: HTTPS Not Available

**Solution**:
- DNS must be fully propagated first
- Wait 24 hours after DNS setup
- Uncheck and re-check "Enforce HTTPS" in settings
- Ensure CNAME is configured correctly

### Issue: Images Not Loading

**Solution**:
- Check file paths (use absolute paths: `/images/...`)
- Verify images are committed and pushed to GitHub
- Check file extensions match (case-sensitive)
- Clear browser cache

### Issue: CSS/JS Not Loading

**Solution**:
- Use absolute paths: `/css/styles.css`, not `css/styles.css`
- Check files are committed
- Hard refresh browser (Ctrl+Shift+R)
- Check console for errors

## Continuous Deployment

### Making Updates

1. **Edit Files Locally**:
```bash
cd /home/dam/VueDo/website
# Make your changes
```

2. **Test Locally**:
```bash
python3 -m http.server 8000
# Visit http://localhost:8000
```

3. **Commit and Push**:
```bash
git add .
git commit -m "Update homepage content"
git push origin main
```

4. **Verify Deployment**:
   - Check GitHub Actions tab
   - Wait 1-2 minutes
   - Visit https://vuedo.app
   - Hard refresh browser (Ctrl+Shift+R)

### Rollback to Previous Version

If something breaks:

```bash
# View commit history
git log --oneline

# Revert to specific commit
git revert <commit-hash>
git push origin main

# Or reset to previous commit (destructive)
git reset --hard <commit-hash>
git push origin main --force
```

## Performance Optimization

### Before Launch

1. **Image Optimization**:
```bash
# Use ImageOptim, TinyPNG, or Squoosh
# Target: < 100KB per image
# Consider WebP format with PNG fallback
```

2. **Minification** (optional for static sites):
```bash
# CSS minification
npx clean-css-cli -o css/styles.min.css css/styles.css

# JS minification
npx terser js/main.js -o js/main.min.js
npx terser js/i18n.js -o js/i18n.min.js

# Update HTML to reference .min files
```

3. **Enable Compression**:
   GitHub Pages automatically enables gzip compression.

### Monitoring

**Setup Analytics** (optional):

Add to `<head>` in index.html:
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

**Monitoring Tools**:
- Google Analytics (traffic, conversions)
- Google Search Console (SEO, indexing)
- Hotjar or Microsoft Clarity (user behavior)
- Uptime monitoring (UptimeRobot, Pingdom)

## Security Best Practices

1. **HTTPS**: Always enabled on GitHub Pages
2. **Dependencies**: None (pure HTML/CSS/JS)
3. **Form Security**: Backend validation required for production
4. **Content Security Policy** (optional):

Add to `<head>`:
```html
<meta http-equiv="Content-Security-Policy"
      content="default-src 'self'; script-src 'self' 'unsafe-inline' https://www.googletagmanager.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:;">
```

## Maintenance Schedule

### Weekly
- Check for broken links
- Monitor Google Search Console for errors
- Review analytics

### Monthly
- Update content (blog posts, news)
- Review and optimize images
- Check PageSpeed score
- Update dependencies (if any added)

### Quarterly
- Content audit (outdated information)
- SEO keyword review
- Accessibility audit
- Competitor analysis

### Annually
- Design refresh
- Complete content overhaul
- Migration to new tech stack (if needed)

## Backup Strategy

GitHub is your backup, but also:

1. **Local Backup**:
```bash
cd /home/dam/VueDo
tar -czf vuedo-website-backup-$(date +%Y%m%d).tar.gz website/
```

2. **Cloud Backup**:
   - GitLab mirror
   - Bitbucket mirror
   - Google Drive / Dropbox

## Support & Resources

### Documentation
- GitHub Pages: https://docs.github.com/en/pages
- Custom domains: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site

### Testing Tools
- W3C HTML Validator: https://validator.w3.org/
- W3C CSS Validator: https://jigsaw.w3.org/css-validator/
- Google PageSpeed: https://pagespeed.web.dev/
- WebAIM WAVE: https://wave.webaim.org/

### Help
- Email: hello@vuedo.app
- Design system: `/home/dam/VueDo/design-system/`
- GitHub Issues: Create issues in repository

---

**Ready to deploy?** Follow the checklist above and launch with confidence!
