# 🚀 Quick cPanel Deployment Steps
## sentientbiotech.in

---

## ⚡ Fast Track Guide (5 Minutes)

### 1️⃣ Login to cPanel
```
URL: https://sentientbiotech.in/cpanel
Enter your credentials
```

---

### 2️⃣ Check Node.js Support

**Look for:** "Setup Node.js App" in Software section

✅ **Found it?** → Continue to Step 3  
❌ **Don't see it?** → Use Static Export Method (see full guide)

---

### 3️⃣ Upload File

1. Click **File Manager**
2. Go to your domain folder (usually `public_html/`)
3. Click **Upload**
4. Upload: `sentient-biotech-deploy.tar.gz` (5.3 MB)
5. Right-click file → **Extract**
6. Move all files from `deploy-package/` to root

**Your folder should have:**
```
public_html/
├── server.js
├── package.json
├── .next/
├── node_modules/
└── public/
    └── logo.png ✓
```

---

### 4️⃣ Setup Node.js App

1. Go to **Setup Node.js App**
2. Click **Create Application**
3. Fill in:
   - **Node.js Version:** 18.x or latest
   - **Application Mode:** Production
   - **Application Root:** `/public_html` (or your domain folder)
   - **Application URL:** `sentientbiotech.in`
   - **Startup File:** `server.js`

4. Add Environment Variable:
   - `NODE_ENV` = `production`

5. Click **Create**

---

### 5️⃣ Start Application

1. Click **Start** button
2. Wait for status: **Running** ✓
3. Visit: **https://sentientbiotech.in**

**Done! 🎉**

---

## 🆘 Quick Troubleshooting

| Problem | Solution |
|---------|----------|
| Node.js App not available | Use Static Export (see full guide) |
| Module not found errors | Re-extract tar.gz, check all files uploaded |
| Site shows default page | Wait 5 mins, restart app, clear cache |
| SSL/HTTPS not working | Go to SSL/TLS Status → Run AutoSSL |
| Images not loading | Check `public/` folder uploaded correctly |

---

## 📞 Need Help?

**Full Guide:** See `CPANEL-DEPLOYMENT-GUIDE.md`  
**Email:** support@sentientbiotech.in  
**Phone:** +91-7070360676

---

## ✅ Post-Deployment Checklist

- [ ] Site loads at sentientbiotech.in
- [ ] Logo visible in navbar & footer
- [ ] Mobile responsive working
- [ ] SSL certificate active (HTTPS)
- [ ] All pages accessible
- [ ] Contact form working

---

## 🔄 Alternative: Static Export

**If Node.js not supported in your cPanel:**

1. On your local machine:
   ```bash
   # Edit next.config.js - change output to 'export'
   npm run build
   ```

2. Upload contents of `out/` folder to `public_html/`

3. Create `.htaccess` file (see full guide for content)

4. Visit sentientbiotech.in - Works as static site!

---

**Your Files:**
- ✅ `sentient-biotech-deploy.tar.gz` - Upload this to cPanel
- 📁 `deploy-package/` - Contains all files
- 📖 `CPANEL-DEPLOYMENT-GUIDE.md` - Detailed instructions

**Website URL:** sentientbiotech.in ✓  
**cPanel URL:** sentientbiotech.in/cpanel ✓  
**Deployment Package:** Ready ✓

