# 🚀 Panduan Deploy SpeedWrench ke Vercel

## ✅ Checklist Sebelum Deploy

- [ ] Build berhasil (`npm run build`)
- [ ] Tidak ada error di console
- [ ] Semua animasi bekerja
- [ ] Responsive di mobile/tablet/desktop
- [ ] Meta tags SEO sudah benar

## 📋 Cara Deploy (3 Opsi)

---

## 🥇 Opsi 1: Vercel CLI (Paling Cepat)

### Step 1: Install Vercel CLI
```bash
npm install -g vercel
```

### Step 2: Login ke Vercel
```bash
vercel login
```
Pilih login method (GitHub, GitLab, atau Email)

### Step 3: Deploy
```bash
cd /home/rian/Downloads/portfolio/speedwrench-react
vercel
```

Jawab pertanyaan:
- **Set up and deploy?** → Yes
- **Which scope?** → Pilih akun Anda
- **Link to existing project?** → No
- **Project name?** → speedwrench-react (atau tekan Enter)
- **Directory?** → ./ (tekan Enter)
- **Want to override settings?** → No

### Step 4: Deploy ke Production
```bash
vercel --prod
```

**Selesai!** Website Anda live di `https://speedwrench-react.vercel.app`

---

## 🥈 Opsi 2: GitHub + Vercel Auto-Deploy (Recommended untuk Production)

### Step 1: Push ke GitHub

```bash
cd /home/rian/Downloads/portfolio/speedwrench-react

# Initialize git
git init
git add .
git commit -m "✨ Initial commit - SpeedWrench website"

# Buat branch main
git branch -M main

# Add remote (ganti dengan username GitHub Anda)
git remote add origin https://github.com/YOUR_USERNAME/speedwrench-react.git

# Push ke GitHub
git push -u origin main
```

### Step 2: Deploy di Vercel

1. **Buka** [vercel.com/new](https://vercel.com/new)
2. **Login** dengan GitHub
3. **Import repository** `speedwrench-react`
4. **Configure Project:**
   ```
   Framework Preset: Vite
   Build Command: npm run build
   Output Directory: dist
   Install Command: npm install
   ```
5. **Click "Deploy"**

### Step 3: Auto-Deploy

Setiap kali Anda push ke GitHub:
```bash
git add .
git commit -m "Update feature"
git push origin main
```

Vercel akan **auto deploy** dalam beberapa detik! 🎉

---

## 🥉 Opsi 3: Vercel Dashboard (Manual Upload)

### Step 1: Install Vercel CLI
```bash
npm install -g vercel
```

### Step 2: Link Project
```bash
cd /home/rian/Downloads/portfolio/speedwrench-react
vercel link
```

### Step 3: Deploy
```bash
vercel --prod
```

---

## 🌐 Custom Domain (Opsional)

Jika punya domain (misal: `speedwrench-bdg.com`):

### Step 1: Add Domain di Vercel
1. Buka project di Vercel Dashboard
2. **Settings** → **Domains**
3. **Add** domain: `speedwrench-bdg.com`

### Step 2: Update DNS Records

Di domain provider (Niagahoster, Domainesia, dll):

**Type A:**
```
Host: @
Value: 76.76.21.21
TTL: Automatic
```

**Type CNAME:**
```
Host: www
Value: cname.vercel-dns.com
TTL: Automatic
```

### Step 3: Verify
Tunggu 5-10 menit, Vercel akan auto-verify domain.

---

## 🔧 Environment Variables (Jika Perlu)

Jika butuh API keys:

### Di Vercel Dashboard:
1. **Settings** → **Environment Variables**
2. **Add Variable:**
   ```
   VITE_WHATSAPP_NUMBER=6281299990000
   VITE_GOOGLE_MAPS_API_KEY=your_key
   ```
3. **Save** dan **Redeploy**

### Atau buat file `.env.local`:
```env
VITE_WHATSAPP_NUMBER=6281299990000
```

⚠️ **Jangan commit `.env.local` ke Git!**

---

## 📊 Monitoring & Analytics

### 1. Vercel Analytics (Built-in)
- Buka project di Vercel
- **Analytics** tab
- Lihat traffic, performance, dll

### 2. Google Analytics (Opsional)

Tambahkan di `index.html`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

---

## 🎯 Tips Production

### 1. Performance Optimization
Website sudah optimized, tapi bisa lebih baik:
- Compress images (jika ada)
- Enable lazy loading
- Minimize bundle size

### 2. SEO Monitoring
- Submit sitemap ke [Google Search Console](https://search.google.com/search-console)
- Monitor keywords ranking
- Fix crawl errors

### 3. Backup Deploy
```bash
# Deploy preview branch
git checkout -b feature-update
git push origin feature-update
vercel
```

---

## 🐛 Troubleshooting

### Build Failed
```bash
# Clear cache dan reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### 404 After Deploy
- Pastikan `vercel.json` ada
- Check output directory: harus `dist`
- Redeploy: `vercel --prod`

### Animasi Tidak Jalan
- Clear browser cache (`Ctrl+Shift+R`)
- Check console untuk errors
- Rebuild: `npm run build`

---

## 📱 Post-Deploy Checklist

- [ ] Website live dan accessible
- [ ] Semua halaman bisa diakses
- [ ] Animasi scroll bekerja
- [ ] Mobile responsive OK
- [ ] WhatsApp button berfungsi
- [ ] Meta tags muncul di social sharing
- [ ] Google Maps embed working
- [ ] No console errors

---

## 🔗 Useful Links

- **Vercel Dashboard:** [vercel.com](https://vercel.com)
- **Vercel Docs:** [vercel.com/docs](https://vercel.com/docs)
- **Vercel CLI:** [vercel.com/docs/cli](https://vercel.com/docs/cli)
- **Google Search Console:** [search.google.com/search-console](https://search.google.com/search-console)

---

## 🎉 Selamat!

Website SpeedWrench sudah live di Vercel! 🚀

**Next Steps:**
1. Share ke social media
2. Submit ke Google Search Console
3. Setup Google Business Profile
4. Collect customer reviews
5. Monitor analytics

**Happy Coding!** 💻✨
