// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {eachEmoji, shuffledEmojisList} = props
  const {id, emojiUrl, emojiName} = eachEmoji

  const onClickEmoji = () => {
    console.log(id)
    shuffledEmojisList()
  }

  return (
    <li>
      <button type="button" onClick={onClickEmoji}>
        <img src={emojiUrl} alt={emojiName} />
      </button>
    </li>
  )
}

export default EmojiCard
