export default function Card({ children }) {
  return (
    <div className="card">
      <span className="pill">children</span>
      {children}
    </div>
  )
}
