# Deployment Guide for go54.com

## Prerequisites
- Node.js 18+ installed on go54.com server
- npm or yarn package manager
- Access to go54.com hosting control panel

## Quick Start

### 1. Extract the ZIP file on your go54.com server
```bash
unzip Ruwa-Technology-Limited-deploy.zip
cd Ruwa-Technology-Limited
```

### 2. Install dependencies
```bash
npm install
```

### 3. Build the application
```bash
npm run build
```

### 4. Set up environment variables
```bash
cp .env.production .env
# Edit .env and add your:
# - GEMINI_API_KEY
# - APP_URL (your go54.com domain)
```

### 5. Start the server
```bash
node server.js
```

The application will be available at `http://localhost:3000` or your go54.com domain.

## Production Deployment Steps

### Option 1: Using Procfile (Recommended for go54.com)
If go54.com supports Procfile-based deployments:
1. Upload all files including `Procfile`
2. The `Procfile` specifies: `web: node dist/server.js`
3. go54.com will automatically start your application

### Option 2: Manual Deployment
1. Upload the ZIP contents via FTP/SFTP to your go54.com account
2. SSH into your server
3. Run:
   ```bash
   npm install --production
   node server.js
   ```

### Option 3: Using a Process Manager (PM2)
For better production stability:
```bash
npm install -g pm2
npm install
npm run build
pm2 start server.js --name "ruwa-app"
pm2 save
pm2 startup
```

## Environment Variables

Update `.env` file with:
```env
NODE_ENV=production
PORT=3000
GEMINI_API_KEY=your_actual_gemini_api_key
APP_URL=https://your-domain.go54.com
```

## File Structure
```
.
├── src/                    # React source files
├── dist/                   # Built React app (after npm run build)
├── server.js               # Express server for production
├── package.json            # Dependencies
├── Procfile                # go54.com deployment config
├── .env.production         # Production environment template
└── README.md              # Application documentation
```

## Building for Production

```bash
# Install dependencies
npm install

# Build React app for production
npm run build

# Verify build
ls -la dist/
```

The `dist/` folder contains:
- Optimized React application
- All static assets
- HTML entry point

## Troubleshooting

### Port already in use
Change PORT in `.env`: `PORT=8080`

### Missing GEMINI_API_KEY
Get your API key from Google AI Studio and add to `.env`

### Static files not loading
Ensure `dist/` folder exists and has been built:
```bash
npm run build
```

### Application crashes
Check logs:
```bash
# If using PM2
pm2 logs ruwa-app

# If running directly
node server.js
```

## Support
For go54.com specific deployment issues, contact their support team with these details:
- Node.js version: v20+ recommended
- Build command: `npm run build`
- Start command: `node server.js`
- Port: 3000 (or configure in .env)

## Security Checklist
- [ ] Update GEMINI_API_KEY in .env
- [ ] Update APP_URL to your go54.com domain
- [ ] Set NODE_ENV=production
- [ ] Ensure .env file is not tracked in git
- [ ] Use HTTPS (go54.com should provide SSL)
- [ ] Never commit .env to version control
