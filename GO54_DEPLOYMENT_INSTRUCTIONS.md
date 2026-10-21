# 🚀 Ruwa Technology Limited - go54.com Deployment Instructions

## Environment Variables Required

Before deploying, ensure you have these values ready:

| Variable | Value | Where to Get |
|----------|-------|-------------|
| `NODE_ENV` | `production` | Fixed value |
| `PORT` | `3000` | Fixed value |
| `GEMINI_API_KEY` | Your API key | https://aistudio.google.com/app/apikey |
| `APP_URL` | Your domain | https://yourdomain.go54.com |

---

## Step-by-Step Deployment to go54.com

### Step 1: Extract the ZIP Package

```bash
unzip ruwa-go54-deploy.zip
cd Ruwa-Technology-Limited
```

### Step 2: Build the Application Locally (Before Upload)

```bash
npm install
npm run build
```

This creates the `dist/` folder with your production-ready frontend.

### Step 3: Verify Files are Ready

You should have:
```
✓ dist/                  (built frontend)
✓ server.js              (production server)
✓ package.json           (dependencies)
✓ Procfile               (deployment config)
✓ .env.production        (environment template)
```

### Step 4: Upload to go54.com

**Option A: Via FTP/SFTP**
1. Connect to your go54.com server via FTP/SFTP
2. Upload all files EXCEPT `node_modules/`
3. Include the `dist/` folder (your built frontend)

**Option B: Via Control Panel**
1. If go54.com has a file manager, upload the package there
2. Extract the ZIP on the server

**Option C: Via Git (if supported)**
```bash
git push go54-remote main
```

### Step 5: Configure Environment Variables on go54.com

**Log into go54.com hosting dashboard and set:**

1. `NODE_ENV` = `production`
2. `PORT` = `3000`
3. `GEMINI_API_KEY` = Your actual API key from https://aistudio.google.com/app/apikey
4. `APP_URL` = `https://yourdomain.go54.com` (replace `yourdomain`)

### Step 6: Set Startup Command

In go54.com's control panel, find "Startup Command" or "Run Command" and set it to:

```bash
npm install && npm run build && node server.js
```

Or if go54.com auto-detects `Procfile`:
```bash
node server.js
```

### Step 7: Restart/Deploy

- Click "Deploy" or "Restart" in go54.com dashboard
- Wait for the server to start (1-2 minutes)

### Step 8: Verify Deployment

Once deployment completes, test these URLs:

**Health Check:**
```
https://yourdomain.go54.com/health
```

Expected response:
```json
{
  "status": "ok",
  "environment": "production",
  "appUrl": "https://yourdomain.go54.com",
  "timestamp": "2026-10-05T14:00:00.000Z",
  "geminiConfigured": true
}
```

**Config Check:**
```
https://yourdomain.go54.com/api/config
```

**Your App:**
```
https://yourdomain.go54.com
```

---

## Troubleshooting

### "Cannot find module 'express'" Error
```bash
# Run on server (via SSH or go54.com terminal)
npm install --production
```

### "GEMINI_API_KEY is not configured" Error
1. Go to go54.com dashboard
2. Verify `GEMINI_API_KEY` is set
3. Get your key from: https://aistudio.google.com/app/apikey
4. Restart the server

### "Port 3000 already in use" Error
Change `PORT` to `8080` or another available port in go54.com environment variables

### Static files not loading (CSS/JS not working)
1. Ensure `dist/` folder was uploaded
2. Run: `npm run build` on server
3. Restart the server

### Application crashes immediately
1. Check go54.com server logs
2. Verify Node.js version: `node -v` (requires 18.0.0+)
3. Verify all environment variables are set
4. Run: `npm install` on server

---

## Getting Your Gemini API Key

1. Visit: https://aistudio.google.com/app/apikey
2. Click "Create API Key"
3. Select your project (or create new)
4. Copy the key
5. Paste into go54.com environment variables as `GEMINI_API_KEY`
6. Restart your server

---

## Security Checklist

- [ ] API key is set in go54.com dashboard (NOT in .env file)
- [ ] `APP_URL` is set to your actual domain
- [ ] `NODE_ENV` is set to `production`
- [ ] Real `.env` file is NEVER committed to Git
- [ ] HTTPS is enabled (go54.com should provide SSL)
- [ ] Health check endpoint responds with `"status": "ok"`

---

## File Structure in Deployment

```
go54.com Server:
├── dist/                    (your built frontend - REQUIRED)
├── server.js               (Express server)
├── package.json            (dependencies list)
├── Procfile                (deployment config)
├── .env.production         (environment template - UPDATE THIS)
├── node_modules/           (created by npm install)
└── [other source files]
```

**DO NOT upload:**
- `node_modules/` (will be created by `npm install`)
- Real `.env` file with secrets
- `.git/` directory

---

## Next Steps

1. ✅ Extract this package
2. ✅ Run `npm install && npm run build` locally
3. ✅ Upload to go54.com (excluding node_modules)
4. ✅ Set environment variables in go54.com dashboard
5. ✅ Set startup command
6. ✅ Deploy/Restart
7. ✅ Test health check endpoint
8. ✅ Visit your domain

---

## Support

For go54.com specific issues:
- **go54.com Support:** Contact their support team
- **Node.js Issues:** Check node_modules by running `npm install`
- **API Key Issues:** Regenerate from https://aistudio.google.com/app/apikey
- **Server Issues:** Check go54.com server logs

---

**Happy deploying! 🚀**
