# 🚴 SpeedWrench - Bengkel Sepeda Profesional

Website bengkel sepeda modern dengan design premium dan animasi yang smooth.

## 🛠️ Tech Stack

- **React 19** - UI Library
- **Vite** - Build tool & dev server
- **CSS3** - Custom styling dengan animations

## 📦 Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🚀 Deploy ke Vercel

### Cara 1: Vercel CLI (Recommended)

```bash
# Install Vercel CLI
npm install -g vercel

# Login ke Vercel
vercel login

# Deploy
vercel

# Deploy ke production
vercel --prod
```

### Cara 2: GitHub Integration

1. **Push ke GitHub:**
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/speedwrench-react.git
git push -u origin main
```

2. **Deploy di Vercel:**
   - Buka [vercel.com](https://vercel.com)
   - Login dengan GitHub
   - Click "New Project"
   - Import repository `speedwrench-react`
   - Click "Deploy"

3. **Auto Deploy:**
   - Setiap push ke GitHub akan auto deploy
   - Preview URL untuk setiap pull request

### Cara 3: Vercel Dashboard

1. Buka [vercel.com/new](https://vercel.com/new)
2. Import folder project
3. Setting:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`
4. Click "Deploy"

## ⚙️ Vercel Configuration

File `vercel.json` sudah dikonfigurasi untuk:
- SPA routing (reload tidak 404)
- Optimized caching
- Compression

## 🌐 Custom Domain

Setelah deploy, tambahkan custom domain:

1. Buka project di Vercel Dashboard
2. Settings → Domains
3. Add domain: `speedwrench-bdg.com`
4. Update DNS records di domain provider

## 📊 Environment Variables

Jika butuh API keys atau config lain, tambahkan di:
- Vercel Dashboard → Settings → Environment Variables
- Atau buat file `.env.local`:

```env
VITE_API_URL=https://api.example.com
VITE_WHATSAPP_NUMBER=6281299990000
```

## 🎯 Performance Optimization

Website sudah optimized dengan:
- ✅ Code splitting otomatis
- ✅ CSS minification
- ✅ Asset optimization
- ✅ Lazy loading images (jika ada)
- ✅ Preconnect ke Google Fonts

## 📱 Features

- 🎨 Premium dark theme dengan yellow accent
- 🎬 Smooth scroll animations
- 📱 Fully responsive (mobile, tablet, desktop)
- 🔍 SEO optimized
- ⚡ Fast loading dengan Vite
- ♿ Accessibility features
- 🎯 Custom cursor
- 📍 Google Maps integration
- 💬 WhatsApp floating button

## 📄 Project Structure

```
speedwrench-react/
├── public/
│   ├── favicon.svg
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── components/
│   │   ├── CustomCursor.jsx
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Ticker.jsx
│   │   ├── Services.jsx
│   │   ├── FeaturedSplit.jsx
│   │   ├── PromoBand.jsx
│   │   ├── Paket.jsx
│   │   ├── Process.jsx
│   │   ├── Gallery.jsx
│   │   ├── Brands.jsx
│   │   ├── Testimonials.jsx
│   │   ├── Location.jsx
│   │   ├── FAQ.jsx
│   │   ├── CTAFinal.jsx
│   │   ├── Footer.jsx
│   │   └── WAFloat.jsx
│   ├── pages/
│   │   └── Home.jsx
│   ├── styles/
│   │   └── variables.css
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vercel.json
└── vite.config.js
```

## 🔧 Development Commands

```bash
# Start dev server (http://localhost:5173)
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Run linter
npm run lint
```

## 📞 Contact

- **Email:** speedwrench.bdg@gmail.com
- **WhatsApp:** 0812-9999-0000
- **Address:** Jl. Setiabudi No. 88, Bandung

---

© 2025 SpeedWrench Bengkel Sepeda. Built with ⚛️ React + 🚀 Vercel
