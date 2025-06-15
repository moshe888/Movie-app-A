
# 🎬 Movie Catalog (Vue + TypeScript)

A modern single-page application for browsing and searching movies using the TMDb API. Built with Vue 3, TypeScript, Pinia, and Vue Router.

---

## 🚀 Live Demo  
[👉 Open the app on Netlify](https://movie-app-moshe.netlify.app/)

---

## 🔑 Features

- Browse popular movies with poster, rating, and release date
- Real-time search by title
- View detailed movie information (overview, rating, release date)
- Smooth SPA navigation with Vue Router
- Centralized state management with Pinia
- Deployed on Netlify

---

## 👤 User Stories

- As a user, I want to browse trending movies to discover new content.
- As a user, I want to search for a movie by title and get instant results.
- As a user, I want to view detailed info when I click a movie card.
- As a user, I want a clear, responsive, and easy-to-use interface.

---

## ⚙️ Setup

```bash
git clone https://github.com/your-username/semperis-vue-movies.git
cd semperis-vue-movies
npm install
npm run dev
````

---

## 🌐 Environment Variables

Create a `.env` file:

```env
VITE_TMDB_TOKEN=your_tmdb_token_here
```

---

## 📦 Build for Production

```bash
npm run build
```

---

## ☁️ Deployment

Deployed to [Netlify](https://www.netlify.com/) using:

* Build command: `npm run build`
* Publish directory: `dist`
* Environment variable: `VITE_TMDB_TOKEN`

---

## 📁 Project Structure

```
src/
├── components/         // MovieCard, SearchBar
├── views/              // HomeView, MovieDetailsView
├── stores/             // Pinia store for movies
├── router/             // Vue Router setup
├── api.ts              // Axios TMDb instance
└── main.ts             // App initialization
 
