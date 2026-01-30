# W8CUL Website

Official website for the WVU Amateur Radio Club (W8CUL).

## Making Changes

This site uses Jekyll for templating but is deployed as pre-built static HTML.

### Quick Edits (Content Only)

For simple text changes, you can directly edit the HTML files in the root directories:
- `index.html` - Home page
- `contact/index.html` - Contact page
- `officers/index.html` - Officers listing
- etc.

### Structural Changes (Recommended)

For adding pages, changing navigation, or updating layouts:

1. **Edit the Jekyll source files:**
   - `_data/navigation.yml` - Site navigation menu
   - `_data/officers.yml` - Officer information
   - `_data/projects.yml` - Project listings
   - `_layouts/` - Page templates
   - `_includes/` - Reusable components (header, footer, etc.)

2. **Rebuild the site:**
   ```bash
   bundle install        # First time only
   bundle exec jekyll build
   ```

3. **Copy built files to root:**
   ```bash
   # Copy HTML pages
   cp _site/index.html .
   cp _site/styles.css .
   cp -r _site/contact .
   cp -r _site/events .
   # ... repeat for other directories
   ```

4. **Commit and push changes**

### Local Development

To preview changes locally:

```bash
bundle install
bundle exec jekyll serve
```

Then visit `http://localhost:4000`

## Enabling Jekyll on Cloudflare Pages

Enable automatic Jekyll builds:

1. Go to Cloudflare Pages project settings
2. Under **Build settings**, configure:
   - **Build command:** `bundle exec jekyll build`
   - **Build output directory:** `_site`
3. Save and redeploy

With this enabled, you only need to push Jekyll source files and Cloudflare will build automatically.

## File Structure

```
/
├── _config.yml          # Jekyll configuration
├── _data/               # Data files (navigation, officers, etc.)
├── _includes/           # Reusable HTML components
├── _layouts/            # Page templates
├── assets/              # Images and media
├── javascripts/         # JavaScript files
├── styles.css           # Main stylesheet
├── index.html           # Home page (built)
├── contact/             # Contact page (built)
├── officers/            # Officers pages (built)
└── ...                  # Other content pages
```

## WVU Branding

This site follows WVU web standards. Key colors:
- WVU Blue: `#002855`
- WVU Gold: `#EAAA00`
- Accent Blue Dark: `#1C2B39`

For more information, visit [WVU Web Standards](https://webstandards.wvu.edu).
