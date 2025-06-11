
 
# 🎬 Movie Catalog SPA – Vue + TypeScript

A Single Page Application (SPA) for browsing and searching popular movies, built with **Vue 3**, **TypeScript**, **Vite**, **Pinia**, and styled with **Tailwind CSS**. Movie data is fetched from [The Movie Database (TMDb)](https://www.themoviedb.org/) API.

## 🚀 Live Demo
[👉 Open the app on Netlify](https://movie-app-moshe.netlify.app/)

## 🛠️ Tech Stack
- Vue 3 + Vite + TypeScript
- Pinia (state management)
- Tailwind CSS (styling)
- Vue Router
- Axios + TMDb API

## 🔍 Features
- Browse trending/popular movies
- Search movies by title
- View movie details: title, release date, rating, poster, and overview
- Fully responsive UI

## 📦 Project Setup (Local Development)

```bash
# Install dependencies
npm install

# Run the development server
npm run dev

# Build for production
npm run build
````

## 🔐 Environment Variables

To run locally, create a `.env` file and add your TMDb token:

```env
VITE_TMDB_TOKEN=your_tmdb_bearer_token_here
```

## 📁 Project Structure

```
src/
│
├── components/        // Reusable UI components
├── views/             // Pages (Home, Movie Details)
├── stores/            // Pinia store
├── router/            // Vue Router config
├── api.ts             // Axios instance with TMDb setup
└── main.ts            // App entry point
```

