import Avatar from './Avatar.jsx'

export default function Profile(props) {
  // Forwarding props with spread syntax to Avatar
  return (
    <div className="profile">
      <Avatar {...props} />
      <p>{props.person?.name ?? 'Anonymous'}</p>
    </div>
  )
}
