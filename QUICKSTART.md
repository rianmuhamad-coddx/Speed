# ⚡ Quick Start - Deploy ke Vercel

## 🎯 Cara Tercepat (5 Menit Live!)

### 1️⃣ Install Vercel CLI
```bash
npm install -g vercel
```

### 2️⃣ Login
```bash
vercel login
```

### 3️⃣ Deploy
```bash
cd /home/rian/Downloads/portfolio/speedwrench-react
vercel --prod
```

**Done!** Website live di `https://speedwrench-react.vercel.app` 🎉

---

## 📁 File yang Sudah Disiapkan

```
speedwrench-react/
├── vercel.json          ✅ Config untuk Vercel
├── deploy.sh            ✅ Script auto deploy
├── DEPLOY.md            ✅ Panduan lengkap
├── README.md            ✅ Dokumentasi
├── .gitignore          ✅ Ignore file yang tidak perlu
├── public/
│   ├── robots.txt      ✅ SEO
│   ├── sitemap.xml     ✅ SEO
│   └── favicon.svg     ✅ Icon
└── src/
    ├── App.jsx         ✅ SEO meta tags
    └── components/
        └── Location.jsx ✅ Schema.org structured data
```

---

## 🔥 Perintah Deploy

### Opsi A: Pakai Script
```bash
./deploy.sh
```

### Opsi B: Manual
```bash
npm install
npm run build
vercel --prod
```

---

## 🌐 URL Setelah Deploy

- **Development:** `http://localhost:5173`
- **Preview:** `https://speedwrench-react-xxx.vercel.app`
- **Production:** `https://speedwrench-react.vercel.app`

---

## 🎯 Next Steps

1. ✅ Test deploy dengan: `vercel --prod`
2. ✅ Custom domain (opsional)
3. ✅ Submit ke Google Search Console
4. ✅ Setup Google Analytics (opsional)

---

## 📞 Butuh Bantuan?

Baca panduan lengkap di: `DEPLOY.md`

Happy Deploying! 🚀
