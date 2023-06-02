import logo from '../../assets/profile_bg.png'
import './Navbar.css'
import { navbarRoutes } from './navbarRoutes'
const Navbar = ({ toggleTheme, theme }) => {
  return (
    <div className="navbar-container">
      <nav className="navbar">
        <div className="navbar-logo-box">
          <div className={`logo-box ${theme}`}>
            <a href="#hero">
              <img src={logo} alt="LOGO" className="navbar-logo " />
            </a>
          </div>
          <h3 className="navbar-brand">
            jakobpusterhofer<span className="navbar-dot">.</span>dev
          </h3>
        </div>
        <div className="navbar-list-box">
          {/* <ul className="navbar-list">
            {navbarRoutes.map((navbarItem) => {
              const { id, href, name } = navbarItem
              return (
                <li key={id} className="navbar-item">
                  {' '}
                  <a href={href}>{name}</a>
                </li>
              )
            })}
          </ul>{' '} */}
          <div className="join-btn-box">
            <button
              onClick={toggleTheme}
              type="button"
              className={`theme-toggle-btn ${theme}`}
            >
              <i
                className={`${
                  theme === 'light' ? 'fa-solid fa-moon' : 'fa-solid fa-sun'
                }`}
              ></i>
            </button>
            {/* <button type="button" className="join-btn">
              Join Email List
            </button> */}
          </div>
        </div>
      </nav>
    </div>
  )
}
export default Navbar
