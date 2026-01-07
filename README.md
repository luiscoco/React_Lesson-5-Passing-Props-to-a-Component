# React 19.2 - Lesson 5 - Props Demo (Vite + React 19)

A small React app that demonstrates how props flow through components, including defaults, prop forwarding, composition with children, and time-based updates.

## Features
- Pass props from parent to child components and render data.
- Provide default prop values for predictable rendering.
- Forward props with spread syntax for reusable components.
- Compose UI with the `children` prop.
- Update props over time with state and effects.

## Code snippets

Passing and forwarding props
```jsx
// src/components/Profile.jsx
export default function Profile(props) {
  return (
    <div className="profile">
      <Avatar {...props} />
      <p>{props.person?.name ?? 'Anonymous'}</p>
    </div>
  )
}
```

Default props in a leaf component
```jsx
// src/components/Avatar.jsx
export default function Avatar({ person, size = 100 }) {
  return (
    <img
      src={`https://i.imgur.com/${person.imageId}.jpg`}
      alt={person.name}
      width={size}
      height={size}
    />
  )
}
```

Composing with children
```jsx
// src/components/Card.jsx
export default function Card({ children }) {
  return (
    <div className="card">
      <span className="pill">children</span>
      {children}
    </div>
  )
}
```

Props that change over time
```jsx
// src/components/Clock.jsx
useEffect(() => {
  const id = setInterval(() => setTime(new Date().toLocaleTimeString()), 1000)
  return () => clearInterval(id)
}, [])
```

## Run locally

```bash
npm install
npm run dev
```

Then open the URL printed by Vite.

Optional:
- `npm run build` to create a production build.
- `npm run preview` to preview the build.

## File guide (all files)

- `index.html` - HTML shell with the `#root` element and Vite entry script.
- `package.json` - Project metadata, scripts, and dependencies.
- `vite.config.js` - Vite config for React SWC and dev server settings.
- `README.md` - Project documentation.
- `src/main.jsx` - React entry point that renders `App` into `#root`.
- `src/App.jsx` - Demo page that wires components and passes props.
- `src/styles.css` - Global styles and layout/theme styling.
- `src/components/Avatar.jsx` - Avatar image component with default size prop.
- `src/components/Profile.jsx` - Forwards props to `Avatar` and renders a name.
- `src/components/Card.jsx` - Container component that renders `children`.
- `src/components/Clock.jsx` - Time display that updates every second.
