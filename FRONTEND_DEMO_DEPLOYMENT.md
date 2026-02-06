# Frontend Demo Deployment Guide

Quick guide to deploy just the UI/frontend for client preview.

---

## 🎯 Goal
Show the TaxHacker UI to your client without full backend functionality.

---

## ⚡ Option 1: Vercel (Easiest - 5 minutes)

**Best for:** Quick demo, automatic deployments, free tier

### Steps:

1. **Push to GitHub:**
```bash
git init
git add .
git commit -m "Frontend demo"
git remote add origin https://github.com/yourusername/taxhacker-demo.git
git push -u origin main
```

2. **Deploy to Vercel:**
   - Go to https://vercel.com
   - Click "Add New Project"
   - Import your GitHub repository
   - Configure:
     - **Framework Preset:** Next.js (auto-detected)
     - **Build Command:** `npm run build`
     - **Output Directory:** `.next` (auto)
   
3. **Add Environment Variables:**
```bash
# Minimal config for frontend demo
DATABASE_URL=postgresql://demo:demo@localhost:5432/demo
BETTER_AUTH_SECRET=demo-secret-key-for-frontend-only-12345
SELF_HOSTED_MODE=true
UPLOAD_PATH=/tmp/uploads
```

4. **Deploy:**
   - Click "Deploy"
   - Wait 2-3 minutes
   - Get URL: `https://your-app.vercel.app`

### ⚠️ What Will Work:
- ✅ Landing page
- ✅ UI components
- ✅ Navigation
- ✅ Forms (visual only)
- ✅ Styling and layout

### ❌ What Won't Work:
- ❌ File uploads
- ❌ Database operations
- ❌ AI analysis
- ❌ Authentication
- ❌ Data persistence

**Perfect for:** Showing UI/UX design to client

---

## ⚡ Option 2: Netlify (Also Easy - 5 minutes)

Similar to Vercel, same limitations.

### Steps:

1. **Push to GitHub** (same as above)

2. **Deploy to Netlify:**
   - Go to https://netlify.com
   - Click "Add new site" → "Import an existing project"
   - Connect GitHub repository
   - Configure:
     - **Build command:** `npm run build`
     - **Publish directory:** `.next`
   
3. **Add Environment Variables:**
```bash
DATABASE_URL=postgresql://demo:demo@localhost:5432/demo
BETTER_AUTH_SECRET=demo-secret-key-for-frontend-only
SELF_HOSTED_MODE=true
```

4. **Deploy** and get URL

---

## ⚡ Option 3: Railway (Works Better - 10 minutes)

**Best for:** More realistic demo with some backend functionality

### Steps:

1. **Push to GitHub** (same as above)

2. **Deploy to Railway:**
   - Go to https://railway.app
   - Click "New Project"
   - Select "Deploy from GitHub repo"
   - Choose your repository
   
3. **Add PostgreSQL:**
   - Click "New" → "Database" → "PostgreSQL"
   - Copy connection string

4. **Configure Environment:**
```bash
DATABASE_URL=<from Railway PostgreSQL>
BETTER_AUTH_SECRET=<generate secure string>
SELF_HOSTED_MODE=true
UPLOAD_PATH=/app/data/uploads
PORT=7331
```

5. **Deploy:**
   - Railway auto-deploys
   - Get URL: `https://your-app.up.railway.app`

### ✅ What Will Work:
- ✅ Full UI
- ✅ Database operations
- ✅ Authentication
- ✅ Most features (except file uploads/AI)

**Cost:** ~$5/mo (includes database)

---

## ⚡ Option 4: Local Tunnel (Instant - 2 minutes)

**Best for:** Quick demo without deployment

Share your local running instance via internet tunnel.

### Using ngrok:

1. **Install ngrok:**
```bash
# Download from https://ngrok.com
# Or use: choco install ngrok (Windows)
```

2. **Start your local server:**
```bash
npm run dev
# Running on http://localhost:7331
```

3. **Create tunnel:**
```bash
ngrok http 7331
```

4. **Share URL:**
```
Forwarding: https://abc123.ngrok.io -> http://localhost:7331
```

Send this URL to your client!

### Using Cloudflare Tunnel (Free):

1. **Install:**
```bash
npm install -g cloudflared
```

2. **Start tunnel:**
```bash
cloudflared tunnel --url http://localhost:7331
```

3. **Share the URL** it generates

### ✅ Pros:
- ✅ Full functionality
- ✅ Instant setup
- ✅ Free
- ✅ Real backend

### ❌ Cons:
- ❌ Your computer must stay on
- ❌ Temporary URL
- ❌ Slower (goes through your connection)

---

## 🎨 Option 5: Screenshot/Video Demo (No Deployment)

**Best for:** Quick preview without any setup

### Tools:
- **Loom** - Record video walkthrough
- **Figma** - Export screenshots
- **CloudApp** - Annotated screenshots

### Steps:
1. Run app locally: `npm run dev`
2. Record screen tour of UI
3. Share video link

---

## 📊 Comparison Table

| Option | Time | Cost | Functionality | Best For |
|--------|------|------|---------------|----------|
| **Vercel** | 5 min | Free | UI only | Quick UI demo |
| **Netlify** | 5 min | Free | UI only | Quick UI demo |
| **Railway** | 10 min | $5/mo | Most features | Realistic demo |
| **ngrok/Cloudflare** | 2 min | Free | Full | Live demo session |
| **Video** | 10 min | Free | N/A | Async preview |

---

## 🎯 Recommended Approach

### For Client Meeting Tomorrow:
**Use ngrok/Cloudflare Tunnel**
- Instant setup
- Full functionality
- Free
- Just keep your computer on during demo

### For Ongoing Client Access:
**Use Vercel (UI only)**
- Always available
- Free
- Professional URL
- Auto-updates on git push

### For Full Demo:
**Use Railway**
- Most features work
- Professional
- Persistent
- Worth $5 for serious demo

---

## 🚀 Quick Start (Recommended)

### Fastest: ngrok Tunnel (2 minutes)

```bash
# 1. Make sure dev server is running
npm run dev

# 2. In another terminal, install ngrok
# Download from: https://ngrok.com/download

# 3. Start tunnel
ngrok http 7331

# 4. Copy the https URL and send to client
# Example: https://abc123.ngrok-free.app
```

**Done!** Your client can access the full UI immediately.

---

## 💡 Tips for Client Demo

1. **Prepare Demo Data:**
   - Create sample transactions
   - Upload example receipts
   - Set up categories

2. **Create Demo Account:**
   - Use self-hosted mode (no login needed)
   - Or create test account

3. **Prepare Talking Points:**
   - Show landing page
   - Demo transaction list
   - Show AI analysis
   - Demonstrate file upload
   - Show reports/export

4. **Have Backup:**
   - Screenshots ready
   - Video recording
   - Local version running

---

## 🔧 Troubleshooting

### "Build Failed" on Vercel/Netlify
- Expected - backend features won't work
- UI will still deploy
- Ignore database errors

### "Cannot connect to database"
- Normal for Vercel/Netlify
- Add dummy DATABASE_URL
- UI will still show

### ngrok "Session Expired"
- Free tier has 2-hour limit
- Restart tunnel
- Or upgrade to paid ($8/mo)

---

## ✅ My Recommendation

**For your situation (showing UI to client):**

1. **Best:** Use **ngrok** for live demo
   - Full functionality
   - 2 minutes setup
   - Free

2. **Backup:** Deploy to **Vercel** for persistent access
   - UI always available
   - Professional URL
   - Free

**Both together:** Live demo with ngrok, then send Vercel link for later review.

---

Would you like me to help you set up any of these options?
