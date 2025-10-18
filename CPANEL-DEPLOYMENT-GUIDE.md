# Sentient Biotech - cPanel Deployment Guide
## Deploying to sentientbiotech.in via cPanel

---

## 📋 Prerequisites

Before starting, ensure you have:
- ✅ cPanel login credentials for sentientbiotech.in
- ✅ Access to sentientbiotech.in/cpanel
- ✅ Your cPanel supports Node.js (most modern cPanel versions 86+)
- ✅ The deployment package (`sentient-biotech-deploy.tar.gz`)

---

## 🚀 Method 1: Node.js Application (Recommended for Next.js)

### Step 1: Access cPanel

1. Go to: `https://sentientbiotech.in/cpanel`
2. Login with your credentials
3. Look for **"Setup Node.js App"** or **"Node.js Selector"** in the Software section

### Step 2: Check Node.js Support

If you see "Setup Node.js App":
- ✅ Your cPanel supports Node.js - **Follow Method 1**
- Click on it to continue

If you DON'T see it:
- ❌ Your cPanel doesn't support Node.js - **Use Method 2 (Static Export)**

---

### Step 3: Upload Files via File Manager

1. In cPanel, click **"File Manager"**
2. Navigate to your domain's root directory:
   - Usually: `/home/username/public_html/`
   - Or: `/home/username/sentientbiotech.in/`

3. **Upload the deployment package:**
   - Click "Upload" button
   - Upload `sentient-biotech-deploy.tar.gz`
   - Wait for upload to complete

4. **Extract the archive:**
   - Right-click on `sentient-biotech-deploy.tar.gz`
   - Select "Extract"
   - Files will be extracted to `deploy-package/` folder

5. **Move files to root:**
   ```
   Move all contents from deploy-package/ to your domain root:
   - .next/
   - node_modules/
   - public/
   - server.js
   - package.json
   ```

---

### Step 4: Setup Node.js Application

1. Go back to cPanel Dashboard
2. Click **"Setup Node.js App"**
3. Click **"Create Application"**

4. **Configure Application:**
   ```
   Node.js Version: 18.x or higher (select latest available)
   Application Mode: Production
   Application Root: [select your domain folder]
   Application URL: sentientbiotech.in
   Application Startup File: server.js
   ```

5. Click **"Create"**

---

### Step 5: Configure Environment Variables

1. In the Node.js app setup, scroll to **"Environment Variables"**
2. Add these variables:
   ```
   NODE_ENV = production
   PORT = [cPanel will auto-assign, usually shown]
   ```

3. Click **"Save"**

---

### Step 6: Start the Application

1. Click the **"Start"** or **"Restart"** button
2. Wait for status to show **"Running"**
3. Note the URL shown (should be sentientbiotech.in)

4. **Test your site:**
   - Visit: `https://sentientbiotech.in`
   - Should show your website with logo and responsive design ✓

---

### Step 7: Setup SSL Certificate (HTTPS)

1. In cPanel, go to **"SSL/TLS Status"**
2. Find `sentientbiotech.in`
3. Click **"Run AutoSSL"**
4. Wait for SSL certificate to be issued
5. Your site will now be accessible via HTTPS

---

## 🔄 Method 2: Static Export (If Node.js Not Supported)

If your cPanel doesn't support Node.js, you'll need to export as static HTML.

### Step 1: Modify Next.js Config

On your local machine:

```javascript
// next.config.js
const nextConfig = {
  output: 'export',  // Changed from 'standalone' to 'export'
  images: {
    unoptimized: true,  // Required for static export
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'vercel.app',
        pathname: '/**',
      },
    ],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  poweredByHeader: false,
  trailingSlash: true,  // Important for static hosting
}

module.exports = nextConfig
```

### Step 2: Build Static Export

```bash
npm run build
```

This creates an `out/` folder with static HTML files.

### Step 3: Upload to cPanel

1. Login to cPanel File Manager
2. Navigate to `/public_html/`
3. **Upload all contents from the `out/` folder:**
   - Upload everything from `out/` folder
   - NOT the `out/` folder itself, but its contents
   
4. **Verify structure:**
   ```
   public_html/
   ├── index.html
   ├── about.html
   ├── _next/
   ├── public/
   └── [other pages].html
   ```

5. **Setup .htaccess for clean URLs:**

Create/edit `.htaccess` in `public_html/`:

```apache
# Force HTTPS
RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

# Remove .html extension
RewriteCond %{REQUEST_FILENAME} !-d
RewriteCond %{REQUEST_FILENAME}.html -f
RewriteRule ^(.*)$ $1.html [L]

# Handle trailing slashes
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^(.+)/$ /$1 [L,R=301]

# Custom error pages
ErrorDocument 404 /404.html
ErrorDocument 500 /500.html

# Compression
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/css text/javascript application/javascript application/json
</IfModule>

# Browser Caching
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpg "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/gif "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType image/webp "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
</IfModule>
```

6. **Test:** Visit `https://sentientbiotech.in`

---

## 🔧 Troubleshooting Guide

### Issue: "Application Failed to Start"

**Solution:**
1. Check Node.js version is 18+
2. Verify `server.js` exists in root
3. Check error logs in cPanel
4. Ensure all files extracted properly

### Issue: "Module Not Found"

**Solution:**
1. Ensure `node_modules/` folder uploaded
2. Re-extract the tar.gz file
3. Check file permissions (755 for folders, 644 for files)

### Issue: "Website Shows cPanel Default Page"

**Solution:**
1. Clear browser cache
2. Wait 5-10 minutes for DNS propagation
3. Check application is "Running" in Node.js App manager
4. Verify files are in correct directory

### Issue: "Images/Logo Not Loading"

**Solution:**
1. Check `public/` folder uploaded correctly
2. Verify `public/logo.png` exists
3. Check file permissions (644)
4. Clear browser cache

### Issue: "Port Already in Use"

**Solution:**
1. Stop other Node.js apps in cPanel
2. Restart the application
3. Contact hosting support to free up ports

### Issue: "500 Internal Server Error"

**Solution:**
1. Check error logs in cPanel (Metrics → Errors)
2. Verify NODE_ENV=production is set
3. Check .htaccess syntax (if using static export)
4. Contact hosting support

---

## 📱 Post-Deployment Checklist

After deployment, verify:

- [ ] ✅ Homepage loads at sentientbiotech.in
- [ ] ✅ Logo appears in navbar and footer
- [ ] ✅ All pages accessible (about, contact, etc.)
- [ ] ✅ Responsive design works on mobile
- [ ] ✅ HTTPS/SSL certificate active
- [ ] ✅ Contact forms work
- [ ] ✅ Navigation menu functions
- [ ] ✅ Footer links work
- [ ] ✅ All images load properly

---

## 🎯 Quick Commands Reference

### Via SSH (if enabled)

```bash
# Navigate to site directory
cd ~/sentientbiotech.in

# Extract archive
tar -xzf sentient-biotech-deploy.tar.gz

# Move files
mv deploy-package/* .
rm -rf deploy-package

# Check Node version
node --version

# Start server (if using PM2)
pm2 start server.js --name sentient-biotech
pm2 save
```

---

## 📞 Support Resources

### cPanel Provider Support
- Contact your hosting provider if:
  - Node.js option not available
  - Need SSH access
  - Port configuration issues
  - DNS/Domain setup help

### Sentient Biotech Contacts
- Email: support@sentientbiotech.in
- Phone: +91-7070360676

---

## 🔐 Security Recommendations

1. **Enable SSL/HTTPS** (Let's Encrypt in cPanel)
2. **Setup Cloudflare** for DDoS protection
3. **Enable cPanel Security**:
   - ModSecurity
   - IP Blocker for suspicious IPs
   - Hotlink Protection for images

4. **Regular Backups**:
   - Use cPanel Backup Wizard
   - Schedule automatic backups

5. **Update Node.js**: Keep Node.js version updated in cPanel

---

## 🚀 Performance Optimization

### In cPanel:

1. **Enable Compression**:
   - Software → Optimize Website
   - Select "Compress All Content"

2. **Setup Caching**:
   - Add caching headers in .htaccess
   - Use browser caching

3. **CDN Integration**:
   - Consider Cloudflare CDN
   - Speeds up global access

4. **Monitor Resources**:
   - Check CPU/Memory usage in Metrics
   - Upgrade plan if needed

---

## 📊 Monitoring Your Site

### Tools in cPanel:

1. **Metrics**:
   - CPU and Memory usage
   - Bandwidth usage
   - Error logs

2. **Visitors**:
   - Access logs
   - Visitor analytics

3. **Awstats**:
   - Detailed statistics
   - Traffic reports

---

## 🔄 Updating Your Site

To update in future:

1. Make changes locally
2. Run `npm run build`
3. Upload new `sentient-biotech-deploy.tar.gz`
4. Extract and replace files
5. Restart Node.js app in cPanel
6. Clear cache

---

**Domain:** sentientbiotech.in  
**cPanel Access:** sentientbiotech.in/cpanel  
**Deployment Method:** Node.js App (preferred) or Static Export  
**Support:** Available via email/phone

**Status:** ✅ Ready for deployment

