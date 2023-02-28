// Write your code here.
import './index.css'

const NavBar = props => {
  const {score, topScore} = props

  return (
    <nav className="nav-bar">
      <div className="logo">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji-logo"
        />
        <h1>Emoji Game</h1>
      </div>
      <div className="result">
        <p>Score: {score}</p>
        <p>Top Score: {topScore}</p>
      </div>
    </nav>
  )
}

export default NavBar
