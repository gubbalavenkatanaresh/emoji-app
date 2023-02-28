// Write your code here.
import './index.css'

const WinOrLoseCard = props => {
  const {score} = props
  const result = score === 12 ? 'You Lose' : 'You Win'
  const imgUrl =
    score === 12
      ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
  return (
    <div>
      {' '}
      <div>
        <h1>{result}</h1>
        <p>Score</p>
        <p>{score}/12</p>
        <button type="button">Play Again</button>
      </div>
      <div>
        <img src={imgUrl} alt={result} />
      </div>
    </div>
  )
}

export default WinOrLoseCard
