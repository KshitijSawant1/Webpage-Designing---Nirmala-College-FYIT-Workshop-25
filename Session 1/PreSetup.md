# 0) Prereqs

* Node.js LTS installed → `node -v` and `npm -v` should print versions.
* VS Code (recommended).

---

# 1) Create a Vite + React app

```bash
# make a new project
npm create vite@latest my-webapp -- --template react

cd my-webapp
npm install
```

(Optional: remove Vite demo “bloat” later in step 6.)

---

# 2) Add Tailwind CSS

```bash
# install Tailwind + PostCSS toolchain
npm install -D tailwindcss postcss autoprefixer

# generate config files: tailwind.config.js and postcss.config.js
npx tailwindcss init -p
```

**Edit `tailwind.config.js`** → set the content globs so Tailwind can “see” your files:

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    // Flowbite React (optional, see step 4)
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: { extend: {} },
  plugins: [],
}
```

**Replace `src/index.css`** with Tailwind layers:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

---

# 3) Wire Tailwind into the app entry

In **`src/main.jsx`**:

```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

Quick sanity check: put a Tailwind class in **`App.jsx`** to confirm it works:

```jsx
export default function App() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-green-600">Hello Tailwind 👋</h1>
      <p className="text-gray-600">Vite + React + Tailwind is live.</p>
    </div>
  );
}
```

Run it:

```bash
npm run dev
```

If you see the green heading, Tailwind is configured ✅.

---

# 4) Add Flowbite (and Flowbite React components)

There are two parts:

**A) Core Flowbite (JS behaviors & Tailwind plugin)**

```bash
npm install flowbite
```

Update **`tailwind.config.js`** to load the plugin:

```js
plugins: [require("flowbite/plugin")]
```

Import Flowbite’s JS once in your app (enables dropdowns, modals, etc.):

```jsx
// src/main.jsx
import "flowbite";
```

**B) (Optional) Flowbite React UI components**

```bash
npm install flowbite-react
```

You already included its path in the `content` array in step 2. Now use a Flowbite component:

```jsx
// src/App.jsx
import { Button } from "flowbite-react";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-green-600 text-white">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-xl font-bold">Flowbite Ready</h1>
          <Button>Click me</Button>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-10">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          Tailwind + Flowbite ✅
        </h2>
        <p className="text-gray-600">You can now use Tailwind utilities and Flowbite components.</p>
      </main>
    </div>
  );
}
```

Reload the page — you should see a styled header and a Flowbite button.

---

# 5) (Optional) Dark mode & theme tweaks

* Enable class-based dark mode:

  ```js
  // tailwind.config.js
  export default {
    darkMode: "class",
    content: [/* …as above… */],
    theme: { extend: {} },
    plugins: [require("flowbite/plugin")],
  }
  ```
* Test by adding `class="dark"` on `<html>` in `index.html` and styles like `dark:bg-gray-900 dark:text-white`.

---

# 6) Remove Vite template “bloat” (clean start)

* Delete: `src/assets/`, `src/App.css`, any default SVGs.
* Minimal **`index.html`**:

  ```html
  <!doctype html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Webpage Workshop</title>
    </head>
    <body class="bg-gray-50">
      <div id="root"></div>
      <script type="module" src="/src/main.jsx"></script>
    </body>
  </html>
  ```

---
