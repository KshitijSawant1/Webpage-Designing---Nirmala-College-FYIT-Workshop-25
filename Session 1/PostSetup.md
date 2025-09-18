# Day-1 Post-Setup Checklist (Tailwind + Flowbite)

## 1) Text: sizing, color, styles, family

* [ ] **Color scale (50→900)**: apply `text-gray-50`, `text-gray-200`, … `text-gray-900` (and one brand color like `text-green-600`)
* [ ] **Sizes (xs→2xl & beyond)**: show `text-xs`, `text-sm`, `text-base`, `text-lg`, `text-xl`, `text-2xl`, plus `text-4xl`/`text-6xl`
* [ ] **Weights**: `font-light`, `font-normal`, `font-medium`, `font-semibold`, `font-bold`, `font-extrabold`
* [ ] **Styles**: `italic`, `not-italic`
* [ ] **Decoration**: `underline`, `line-through`, `no-underline`, `decoration-dashed`, `decoration-2`
* [ ] **Transform/spacing (optional quick win)**: `uppercase`, `tracking-wide`
* [ ] **Font family**: `font-sans`, `font-serif`, `font-mono` (and confirm custom family via `tailwind.config.js`)

---

## 2) Div containers: spacing, bg, nesting, grid, responsive, hide & reorder

* [ ] **Padding/Margin**: demonstrate `p-4`, `px-6`, `py-8`, `m-4`, `mt-8`, negative margin `-mt-2`
* [ ] **Background color**: `bg-gray-100`, `bg-white`, `bg-green-100/200/600`, gradient (optional) `bg-gradient-to-r from-green-500 to-emerald-600`
* [ ] **Cascading/Nested divs**: parent with `p-6 bg-white rounded-xl shadow`; child with `p-4 bg-gray-50 border`
* [ ] **Equal grid**: `grid grid-cols-2 md:grid-cols-4 gap-4`
* [ ] **Unequal grid**: set spans: `grid-cols-4` with items using `col-span-2`, `md:col-span-3`
* [ ] **Responsive layout**: change columns by breakpoint (`sm:`, `md:`, `lg:`) and widths (`w-full md:w-1/2`)
* [ ] **Hide by screen**: `hidden md:block` and the inverse `md:hidden`
* [ ] **Reorder by screen**: `order-2 md:order-1` on sibling containers
* [ ] **Stack → row**: mobile `flex flex-col` → desktop `md:flex-row md:items-center md:justify-between`

---

## 3) Buttons: color, borders, hover, focus, dark

* [ ] **Base button**: `inline-flex items-center justify-center px-4 py-2 rounded-lg text-sm font-medium`
* [ ] **Color variants**: solid `bg-green-600 text-white`, neutral `bg-gray-200 text-gray-900`, outline `border border-gray-300`
* [ ] **Text color override**: `text-green-700` vs `text-white`
* [ ] **Border & radius**: `border`, `border-2`, `border-green-600`, `rounded`, `rounded-lg`, `rounded-full`
* [ ] **Hover color**: `hover:bg-green-700`, `hover:text-white`, add `transition hover:shadow`
* [ ] **Hover sizing (subtle)**: `hover:scale-105` with `transition-transform duration-150`
* [ ] **Focus styles (a11y)**: `focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2`
* [ ] **Disabled/Loading state**: `disabled:opacity-50 disabled:cursor-not-allowed`
* [ ] **Dark mode**: `dark:bg-green-500 dark:text-white dark:hover:bg-green-600` (and test with `class="dark"` on `<html>`)

---

## 4) Button group (different styling)

* [ ] **Group container**: `inline-flex` with `rounded-lg overflow-hidden`
* [ ] **Segmented buttons**: siblings with no gap `space-x-0` and borders: use `divide-x divide-gray-300` on parent or `first:rounded-l-lg last:rounded-r-lg`
* [ ] **Variant mix**: left = solid `bg-green-600 text-white`, middle = outline `border border-green-600 text-green-700`, right = ghost `bg-transparent text-green-700 hover:bg-green-50`
* [ ] **Sizes**: provide `sm / md / lg` via padding & text size (`px-3 py-1.5 text-sm`, `px-4 py-2`, `px-5 py-2.5 text-base`)
* [ ] **Icon option**: add an icon span (`<svg>` or emoji) with `-ml-1 mr-2 h-4 w-4` to one button
* [ ] **Keyboard/focus**: ensure each segment has `focus:ring-2` etc. and test tabbing across group
* [ ] **Flowbite variant (optional)**: show `Button.Group` from `flowbite-react` as a second approach

---

## Quick “done” checks (per section)

* [ ] Section 1: can you show a heading in 3 sizes and 3 shades, with bold+underline?
* [ ] Section 2: can you switch 2→4 columns at `md`, hide one card on mobile, and swap order at `md`?
* [ ] Section 3: does the button change color/scale on hover and show a visible focus ring?
* [ ] Section 4: do three grouped buttons look connected, each with a different style and proper focus?

---