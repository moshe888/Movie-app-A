
# 🎬 Movie Catalog (Vue 3 + TypeScript)

**[Live Demo →](https://movie-app-moshe.netlify.app/)**
A polished single-page application (SPA) for browsing, searching, and favoriting movies using the [TMDb API](https://www.themoviedb.org/).
Built with **Vue 3**, **TypeScript**, **Pinia**, and **Vue Router**.

---

## 🧩 Features

* 🔍 Real-time movie search with suggestions dropdown
* 🎥 Browse by categories: Popular, Top Rated, Upcoming
* 📄 Movie details with overview, release date & rating
* 💖 Add/remove favorites (persisted in `localStorage`)
* 🧭 Client-side routing with Vue Router
* 📦 Pinia for reactive global state
* 🧪 Unit tests with Vitest
* 📱 Responsive layout and clean design
* ☁️ Deployed on Netlify

---

## 👤 User Stories

* **Discover movies** by browsing popular, top-rated, and upcoming lists
* **Search movies** and select instantly from suggestions
* **View full movie details** by clicking a card
* **Save favorites** with one click and revisit them later
* **Navigate easily** across app pages without reloads

---

## 🚀 Demo

🔗 [https://movie-app-moshe.netlify.app/](https://movie-app-moshe.netlify.app/)

---

## 🛠️ Setup Instructions

```bash
git clone https://github.com/moshe888/Movie-app-A.git
cd Movie-app-A
npm install
npm run dev
```

---

## 🔐 Environment Variables

Create a `.env` file in the root:

```env
VITE_TMDB_TOKEN=your_tmdb_token_here
```

Obtain your token from [TMDb API](https://developer.themoviedb.org/docs/authentication).

---

## 📦 Build for Production

```bash
npm run build
```

---

## ☁️ Deployment on Netlify

* **Build Command**: `npm run build`
* **Publish Directory**: `dist`
* **Environment Variables**:

  * `VITE_TMDB_TOKEN=your_tmdb_token`

---

## 🧪 Testing

This project uses [Vitest](https://vitest.dev/) for unit testing:

* ✅ Store tests (`movieStore`)
* ✅ Component tests (`MovieCard`)
* ✅ Mocked API calls using `vi.mock`

### Run tests:

```bash
npx vitest
```

---

## 📁 Project Structure

```
src/
├── components/         # Reusable UI components (MovieCard, MovieRow, SearchBar)
├── views/              # Page views (Home, MovieDetails, Favorites)
├── stores/             # Pinia store (movieStore.ts)
├── router/             # Vue Router configuration
├── types/              # TypeScript interfaces (e.g., Movie)
├── api.ts              # Axios instance for TMDb API
└── main.ts             # App bootstrap
```

---

## 📌 Tech Stack

* **Vue 3** + **TypeScript**
* **Pinia** – state management
* **Vue Router** – SPA routing
* **Axios** – HTTP requests
* **Vitest** – testing framework
* **Netlify** – deployment

---

## 📄 License

MIT © 2025 Moshe888
Inspired by modern UI like Netflix and TMDb.
