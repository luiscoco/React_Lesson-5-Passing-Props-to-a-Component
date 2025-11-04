import Profile from './components/Profile.jsx'
import Card from './components/Card.jsx'
import Clock from './components/Clock.jsx'

export default function App() {
  const user = { name: 'Lin Lanying', imageId: '1bX5QH6' }

  return (
    <div className="container">
      <h1>React Props Demo</h1>
      <p className="lead">Explore parent → child data flow, default props, children, prop forwarding, and changing props over time.</p>

      {/* 1. Passing Props */}
      <div className="card">
        <span className="pill">Passing props</span>
        <div className="row">
          <Profile person={user} size={120} />
        </div>
      </div>

      {/* 2. Default Prop Values */}
      <div className="card">
        <span className="pill">Default prop values</span>
        <div className="row">
          <Profile person={{ name: 'Aklilu Lemma', imageId: 'OKS67lh' }} />
          <Profile person={{ name: 'Katsuko Saruhashi', imageId: 'YfeOqp2' }} size={90} />
        </div>
      </div>

      {/* 3. Children Prop */}
      <Card>
        <p>This Avatar is wrapped inside a Card component using the <code>children</code> prop.</p>
        <div className="row">
          <Profile person={{ name: 'Ada Lovelace', imageId: 'u7fQ3r4' }} size={96} />
          <Profile person={{ name: 'Grace Hopper', imageId: 'M8l23lB' }} size={96} />
        </div>
      </Card>

      {/* 4. Props that change over time */}
      <div className="card">
        <span className="pill">Changing props over time</span>
        <Clock color="#f97316" />
      </div>

      <p className="footer">Tip: open the components and tweak props to see instant changes.</p>
    </div>
  )
}
