import './Avatar.css'

const Avatar = () => {
  const src = 'https:randomuser.me/api/portraits/women/32.jpg'
  return (
    <div className="avatar">
      <img src={src} alt="" />
    </div>
  )
}

export default Avatar