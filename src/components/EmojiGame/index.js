import {Component} from 'react'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import './index.css'

/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.

class EmojiGame extends Component {
  state = {score: 0, topScore: 0, clickedEmojis: [], isTrue: true}

  shuffledEmojisList = id => {
    const {emojisList} = this.props
    const {clickedEmojis} = this.state
    const checkEmoji = clickedEmojis.each(eachEmoji => {
      eachEmoji.id !== id
    })
    const clickEmoji = emojisList.filter(eachEmoji => {
      eachEmoji.id === id
    })
    emojisList.sort(() => Math.random() - 0.5)
    this.setState(prevstate => ({
      score: checkEmoji.length,
      clickedEmojis: [...prevstate.clickedEmojis, clickEmoji],
    }))
  }

  render() {
    const {score, topScore} = this.state
    const {emojisList} = this.props

    return (
      <>
        <NavBar score={score} topScore={topScore} />
        <div className="container">
          <ul>
            {emojisList.map(eachEmoji => (
              <EmojiCard
                eachEmoji={eachEmoji}
                key={eachEmoji.id}
                shuffledEmojisList={this.shuffledEmojisList}
              />
            ))}
          </ul>
        </div>
      </>
    )
  }
}

export default EmojiGame
