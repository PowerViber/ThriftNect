# 🛍️ ThriftNect

ThriftNect is a React + TypeScript + Vite web app built with TailwindCSS.  
This repository contains the source code for the project, along with reusable components such as the Navbar, Footer, Wishlist, Auction, and Mix & Match pages.

---

## 🚀 How to Run This Project

Follow these steps to download, set up, and run ThriftNect locally.

---

### 1. Clone the Repository
Make sure you have **Git** installed. Then open your terminal and run:

```
git clone https://github.com/PowerViber/ThriftNect.git
```

Move into the project folder:
```
cd ThriftNect
```
---

### 2. Install Dependencies
You need Node.js (>=18) and npm installed.

Check your versions:
```
node -v
npm -v
```

Then install dependencies:
```
npm install
```
---

### 3. Run the Development Server

Start the Vite dev server:
```
npm run dev
```

You’ll see something like:
```
  VITE vX.X.X  ready in 500ms
  ➜  Local:   http://localhost:5173/
```

Open the local URL in your browser to view the app.

---

### 4. Build for Production

To build the app for deployment:
```
npm run build
```

The optimized output will be generated in the ```dist/``` folder.

---

### 5. Preview the Production Build

You can preview the production build locally:
```
npm run preview
```

---

📂 Project Structure
```
ThriftNect/
├── public/           # Static assets
├── src/
│   ├── assets/       # Images, logos, etc.
│   ├── components/   # Navbar, Footer, etc.
│   ├── data/         # Mix & Match items, auction data
│   ├── pages/        # Wishlist, Auction, Mix & Match pages
│   ├── App.tsx       # Main app entry
│   ├── main.tsx      # React DOM rendering
│   └── index.css     # Global styles (Tailwind)
├── package.json
├── vite.config.ts
└── tailwind.config.js
```
---

🛠️ Tech Stack

- ⚡ Vite — blazing fast dev server

- ⚛️ React + TypeScript

- 🎨 TailwindCSS for styling

- 🔧 ESLint + Prettier for code quality

---

💡 Contributing

Want to improve ThriftNect? Fork this repo, create a branch, and submit a pull request 🚀

---

📜 License

This project is open source and available under the MIT License
