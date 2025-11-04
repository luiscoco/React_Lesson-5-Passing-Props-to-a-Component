# React Props Demo (Vite + React 19)

A tiny app to practice:
- Passing props parent → child
- Destructuring & default props
- Forwarding props with `{...props}`
- `children` prop and composition
- Props that change over time

## Run locally

```bash
npm install
npm run dev
```

Then open the URL printed by Vite.

## Files to explore
- `src/components/Avatar.jsx` — reads and defaults props
- `src/components/Profile.jsx` — forwards props with spread syntax
- `src/components/Card.jsx` — uses the `children` prop
- `src/components/Clock.jsx` — shows a live-updating prop
- `src/App.jsx` — ties everything together
