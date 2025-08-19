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

## Environment Variables

This project requires a `.env` file for the GraphQL API endpoint.

- If you encounter issues with Apollo Client not connecting, make sure a `.env` file exists in the project root.
- The correct URL for the API is provided in the assignment documents.
- Add it as the value for the environment variable (see `apollo.ts` for usage).

⚠️ Note: `.env` is excluded from version control for security reasons and will not be pushed to GitHub.

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

## Feature Checklist - Completed

### Page 1 – Guitar Brands

- [x] Display all guitar brands fetched from the API ✅
- [x] Navigate to Page 2 when a brand is selected ✅

### Page 2 – Guitar Models

- [x] Display models for the selected brand ✅
- [x] Search bar to filter models by name ✅
- [x] Filter to narrow by guitar type ✅
- [x] Pagination to browse results ✅
- [x] Clicking a model navigates to Page 3 ✅

### Page 3 – Guitar Details (Bonus)

- [x] Display details of a selected guitar in two tabs ✅
  - [x] **Specs** tab – show full specifications ✅
  - [x] **Musicians** tab – list musicians using the guitar ✅
- [x] Show only 2 musicians at a time ✅
- [x] Include dots/buttons to reveal 2 more at a time if more exist (pagination/dots) ✅

### Requirements

- [x] Use Apollo Client for data fetching ✅
- [x] Handle loading and error states gracefully ✅
- [x] Use CSS / UI utility classes (Tailwind) for readable styling ✅
