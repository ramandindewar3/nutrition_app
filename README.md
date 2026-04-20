# Nutrition Tracker App

A React TypeScript application for tracking nutrition entries using Material UI and Axios for API calls.

## Features

- View list of nutrition records
- Add new nutrition entries
- Delete existing entries
- Display total calories

## Tech Stack

- React 19
- TypeScript
- Vite
- Material UI
- Axios
- JSON Server (for backend)

## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the backend (JSON Server):
   ```bash
   npx json-server --watch nutrition.json --port 3001
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## API

The app uses JSON Server with the following endpoints:

- GET /nutrition - Fetch all nutrition entries
- POST /nutrition - Add a new entry
- DELETE /nutrition/:id - Delete an entry

## Project Structure

```
src/
├── components/
│   ├── NutritionList.tsx
│   ├── NutritionItem.tsx
│   ├── AddNutrition.tsx
├── services/
│   ├── api.ts
├── types.ts
├── App.tsx
├── main.tsx
```
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
