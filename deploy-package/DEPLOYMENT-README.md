# Sentient Biotech - Production Build Deployment Guide

## 📦 Package Contents

This is a standalone Next.js production build ready for deployment. The package includes:

- `server.js` - Production server
- `.next/` - Optimized build files
- `public/` - Static assets (logo, images, etc.)
- `node_modules/` - Required dependencies
- `package.json` - Package configuration

**Total Size:** ~23 MB

---

## 🚀 Deployment Options

### Option 1: Deploy to Node.js Hosting (Recommended)

**Compatible with:** AWS, DigitalOcean, Railway, Render, Heroku, etc.

1. Upload the entire `deploy-package` folder to your server
2. Navigate to the folder
3. Run the server:
   ```bash
   node server.js
   ```
4. The app will start on port 3000 by default
5. Access at: `http://your-server-ip:3000`

**Environment Variables:**
```bash
PORT=3000                    # Server port (optional)
NODE_ENV=production          # Production mode
```

---

### Option 2: Deploy to Vercel (Easiest)

1. Install Vercel CLI: `npm i -g vercel`
2. Navigate to the original project folder (not deploy-package)
3. Run: `vercel`
4. Follow the prompts

---

### Option 3: Deploy to Netlify

1. Go to Netlify Dashboard
2. Drag and drop the `deploy-package` folder
3. Configure build settings:
   - Build command: (leave empty)
   - Publish directory: `.next`

---

## 🔧 Server Configuration

### Using PM2 (Process Manager)

```bash
# Install PM2
npm install -g pm2

# Start the app
pm2 start server.js --name sentient-biotech

# Save PM2 configuration
pm2 save

# Auto-start on server reboot
pm2 startup
```

### Using Docker

Create a `Dockerfile`:
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY deploy-package .
EXPOSE 3000
CMD ["node", "server.js"]
```

Build and run:
```bash
docker build -t sentient-biotech .
docker run -p 3000:3000 sentient-biotech
```

---

## 🌐 Nginx Reverse Proxy Setup

```nginx
server {
    listen 80;
    server_name yourdomain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

---

## ✅ Features Included

- ✅ Responsive design (375px - 1920px+)
- ✅ Company logo integration
- ✅ Mobile-optimized navigation
- ✅ Touch-friendly UI (44x44px minimum touch targets)
- ✅ Optimized images and assets
- ✅ Production-ready performance
- ✅ SEO optimized
- ✅ All 19 pages pre-rendered

---

## 📊 Performance Metrics

- **First Load JS:** 81.8 kB (shared)
- **Largest Page:** 136 kB (Starscream product page)
- **Homepage:** 128 kB
- **Build Status:** ✓ Compiled successfully
- **Lighthouse Score Ready:** 90+ expected

---

## 🔒 Security Notes

- Console logs removed in production
- `X-Powered-By` header disabled
- Compressed assets
- Secure headers recommended (add in your reverse proxy)

---

## 📝 Quick Start Commands

```bash
# Start the server
node server.js

# Start on custom port
PORT=8080 node server.js

# With PM2
pm2 start server.js

# Check if running
curl http://localhost:3000
```

---

## 🆘 Troubleshooting

**Port already in use:**
```bash
# Find process on port 3000
lsof -i :3000
# Kill it
kill -9 <PID>
```

**Module not found errors:**
- Ensure all files are uploaded
- Check node_modules folder exists
- Verify Node.js version (18+)

**500 Server Error:**
- Check server logs
- Verify environment variables
- Ensure proper file permissions

---

## 📞 Support

For issues or questions:
- Email: support@sentientbiotech.in
- Phone: +91-7070360676

---

**Built with Next.js 14.0.4**  
**Last Updated:** October 11, 2025  
**Build Version:** Production Standalone

