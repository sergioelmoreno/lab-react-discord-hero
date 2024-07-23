import './Navigation.css'
import logoImage from './../../assets/discord-logo-white.png'
import menuIcon from './../../assets/menu-icon.png'

const Navigation = () => {

  return (
    <header className="Navigation">
      <img src={logoImage} className='logo' alt='Discord logo' />

      <nav className="navbar">
        <button><img src={menuIcon} alt='Menu button' /></button>
      </nav>
    </header>
  )
}

export default Navigation