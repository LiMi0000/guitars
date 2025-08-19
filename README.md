# VibeStrings

VibeStrings is a React + TypeScript + GraphQL project built with Vite.  
It provides a smooth browsing experience for guitar brands, models, and specifications, dynamic pages for brands, models, and musicians.

---

## Tech Stack

- [React](https://react.dev/) with TypeScript
- [Vite](https://vitejs.dev/) (using **v6.2.0**)
- [Apollo Client](https://www.apollographql.com/docs/react/)
- [GraphQL](https://graphql.org/)
- [TailwindCSS](https://tailwindcss.com/)
- ESLint + Prettier for linting/formatting

---

## Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/your-username/vibestrings.git
cd vibestrings
```

### 2. Install dependencies

Make sure you have [Node.js](https://nodejs.org/) (v18+) installed.  
Then install project dependencies:

```bash
npm install
```

### 3. Run the development server

```bash
npm run dev
```

This will start Vite on [http://localhost:5173](http://localhost:5173).

### 4. Build for production

```bash
npm run build
```

### 5. Preview the production build

```bash
npm run preview
```

---

## Note on Vite Version

This project uses **Vite v6.2.0**.  
The latest versions of Vite may cause issues with this setup.  
If you encounter errors related to Vite or hot-reloading, check your installed version:

```bash
npm list vite
```

If it’s not `6.2.0`, downgrade:

```bash
npm install vite@6.2.0 --save-dev
```

---

## Project Structure (important parts)

```
src/
 ├── components/        # Reusable UI components
 ├── context/           # Language context and provider
 ├── graphql/           # Queries and mutations
 ├── pages/             # Main pages (Brands, Models, Guitar details)
 ├── translations/      # Translation strings
 └── main.tsx           # App entry point
```

---

## Linting & Formatting

Run ESLint:

```bash
npm run lint
```

Format with Prettier:

```bash
npm run format
```
