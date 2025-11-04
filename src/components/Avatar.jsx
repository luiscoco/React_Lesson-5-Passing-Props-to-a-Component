export default function Avatar({ person, size = 100 }) {
  return (
    <img
      src={`https://i.imgur.com/${person.imageId}.jpg`}
      alt={person.name}
      width={size}
      height={size}
      style={{ borderRadius: '50%', margin: 5, border: '1px solid rgba(255,255,255,0.08)' }}
    />
  )
}
