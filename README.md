# School39 Landing (React + Vite)

Ushbu loyiha **39-Maktab** uchun yaratilgan **landing sahifa** bo‘lib, maktab haqida qisqa ma’lumot, yangiliklar, imkoniyatlar va kontakt ma’lumotlarini taqdim etadi.

Frontend qismi **React 19 + Vite** asosida yozilgan va **Material UI v7** komponentlari ishlatilgan.

## 🚀 Xususiyatlar

* **Hero Section** – maktab rasmi, slogan va CTA tugmasi.
* **Yangiliklar bo‘limi (Posts)** – markdown fayllardan yangiliklarni o‘qish va ko‘rsatish.
* **Imkoniyatlar (Features)** – 6–8 ta maktab afzalliklari.
* **Kontakt bo‘limi (Contact)** – manzil, telefon raqami, email va (ixtiyoriy) xarita iframe.
* **Responsive dizayn** – mobil qurilmalarda ham qulay ishlaydi.

## 📂 Loyihaning tuzilishi

```
school39-landing/
│
├── public/
│   └── posts/          # Markdown postlar va ularning rasmlari
│       ├── posts.json  # Postlar ro‘yxati (slug, title, description, date, image)
│
├── src/
│   ├── Components/     # Hero, Posts, Features, Contact komponentlari
│   ├── App.tsx
│   └── main.tsx
│
├── package.json
├── vite.config.js
└── README.md
```

## ⚡️ Texnologiyalar

* [React 18](https://react.dev)
* [Vite 7](https://vitejs.dev)
* [Material UI v5](https://mui.com)
* [React Router v7](https://reactrouter.com)
* [React Markdown](https://github.com/remarkjs/react-markdown)

## 🛠 Ishga tushirish

1. Repository’ni clone qiling:

   ```bash
   git clone https://github.com/Alisher0909/school39-landing-react.git
   cd school39-landing-react
   ```

2. Paketlarni o‘rnating:

   ```bash
   npm install
   ```

3. Development server ishga tushiring:

   ```bash
   npm run dev
   ```

4. Production uchun build qiling:

   ```bash
   npm run build
   ```

5. Build’ni preview qilish:

   ```bash
   npm run preview
   ```

## 🌍 Deployment

Loyiha **Vercel** orqali deploy qilinadi. Deployment uchun:

1. Repository’ni GitHub’ga yuklang.
2. [Vercel](https://vercel.com) ga kiring va GitHub repo’ni ulang.
3. Default build komandasi: `npm run build`
4. Output directory: `dist`

Deploymentdan keyin `https://school39.vercel.app` kabi URL orqali sahifani ko‘rish mumkin.
