# Deploy CellGeniq Platform to Vercel

## Easy 3-Step Deployment

### Method 1: Deploy via Vercel Dashboard (Easiest)

#### Step 1: Push to GitHub
```bash
# Initialize git if not already done
git init
git add .
git commit -m "Initial commit"

# Create a new repository on GitHub, then:
git remote add origin https://github.com/yourusername/cellgeniq-platform.git
git push -u origin main
```

#### Step 2: Import to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Click **"Add New Project"**
3. Click **"Import Git Repository"**
4. Select your GitHub repository
5. Vercel will auto-detect the settings
6. Click **"Deploy"**

#### Step 3: Done!
- Vercel will build and deploy automatically
- You'll get a URL like: `https://cellgeniq-platform.vercel.app`
- Every push to GitHub will auto-deploy

---

### Method 2: Deploy via Vercel CLI (Quick)

#### Step 1: Install Vercel CLI
```bash
npm install -g vercel
```

#### Step 2: Login and Deploy
```bash
# Login to Vercel
vercel login

# Deploy (from project root)
vercel

# Follow the prompts:
# - Set up and deploy? Yes
# - Which scope? Select your account
# - Link to existing project? No
# - Project name? cellgeniq-platform
# - Directory? ./
# - Override settings? No
```

#### Step 3: Deploy to Production
```bash
vercel --prod
```

---

## Configuration Details

The project includes:
- ✅ `vercel.json` - Vercel configuration
- ✅ `api/index.js` - Serverless API function
- ✅ Build settings configured

### Environment Variables (if needed)
Add in Vercel Dashboard:
1. Go to Project Settings
2. Click **"Environment Variables"**
3. Add variables like:
   - `NODE_ENV` = `production`
   - Any API keys or secrets

---

## What Happens During Deployment?

1. **Install**: Vercel runs `pnpm install`
2. **Build**: Vercel runs `pnpm build`
3. **Deploy**: 
   - Frontend → Vercel CDN (fast global delivery)
   - Backend API → Serverless functions

---

## Custom Domain (Optional)

1. In Vercel Dashboard, go to **"Domains"**
2. Click **"Add Domain"**
3. Enter your domain (e.g., `cellgeniq.com`)
4. Follow DNS configuration instructions
5. SSL certificate is automatic!

---

## Updating Your App

### If using GitHub:
```bash
git add .
git commit -m "Update"
git push
```
Vercel auto-deploys on push!

### If using CLI:
```bash
vercel --prod
```

---

## Troubleshooting

### Build Fails?
- Check build logs in Vercel Dashboard
- Ensure all dependencies are in `package.json`
- Verify Node.js version compatibility

### API Not Working?
- Check `api/index.js` is properly configured
- Verify API routes in Vercel Dashboard logs

### Need Help?
- Check Vercel logs: Dashboard → Deployments → Click deployment → View logs
- Vercel docs: https://vercel.com/docs

---

## Quick Commands Reference

```bash
# Deploy to preview
vercel

# Deploy to production
vercel --prod

# Check deployment status
vercel ls

# View logs
vercel logs

# Remove deployment
vercel rm [deployment-url]
```

---

**That's it! Your app is now live on Vercel with automatic deployments, SSL, and global CDN! 🚀**
