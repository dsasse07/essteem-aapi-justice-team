import './ShareButton.css'
import { useState } from 'react'
const ShareButton = () => {
  const [ urlCopied, setUrlCopied ] = useState(false)

  const handleCopyLink = async () => {
    if (urlCopied || !navigator.clipboard ) return
    const text = window.location.href
    try {
      await navigator.clipboard.writeText(text)
      setUrlCopied(true)
      setTimeout( () => {
        setUrlCopied(false)
      }, 1500)
    } catch (err) {
      console.log('failed to copy', err)
    }
  } 

  return (
    <nav className="menu">
      <input type="checkbox" href="#" className="menu-open" name="menu-open" id="menu-open" />
      <label className="menu-open-button" htmlFor="menu-open">
        <i className="bi bi-share-fill share-icon"></i>
      </label>

      <a 
        href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Faapi-justice-team.netlify.app%2F&quote=AAJC" 
        title="Share on Facebook"
        target="_blank" 
        rel="noreferrer"
        className="menu-item facebook_share_btn"
      > 
        <i className="bi bi-facebook"></i> 
      </a>

      <a 
        href="https://twitter.com/intent/tweet?source=https%3A%2F%2Faapi-justice-team.netlify.app%2F&text=AAJC:%20https%3A%2F%2Faapi-justice-team.netlify.app%2F"
        title="Tweet"
        target="_blank"
        rel="noreferrer"
        className="menu-item twitter_share_btn"
      > 
        <i className="bi bi-twitter"></i> 
      </a>
      <a 
        href="http://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2Faapi-justice-team.netlify.app%2F&title=AAJC&summary=Asian%20Americans%20Advancing%20Justice&source=https%3A%2F%2Faapi-justice-team.netlify.app%2F"
        title="Share on LinkedIn"
        target="_blank"
        rel="noreferrer"
        className="menu-item tumblr_share_btn"
      > 
        <i className="bi bi-linkedin"></i> 
      </a>
      <a 
        href="mailto:?subject=AAJC&body=Asian%20Americans%20Advancing%20Justice:%20https%3A%2F%2Faapi-justice-team.netlify.app%2F"
        title="Send Email"
        target="_blank"
        rel="noreferrer"
        className="menu-item google_plus_share_btn"
      > 
        <i className="bi bi-envelope"></i> 
      </a>
      <a 
        href="sms://?body=Asian%20Americans%20Advancing%20Justice:%20https%3A%2F%2Faapi-justice-team.netlify.app%2F"
        title="Send SMS"
        target="_blank"
        rel="noreferrer"
        className="menu-item pinterest_share_btn"
      > 
        <i className="bi bi-chat-dots"></i> 
      </a>
      <button
        onClick={handleCopyLink}
        name="Copy Link"
        className="menu-item youtube_share_btn"
      > 
        <i className={ urlCopied ? "bi bi-clipboard-check" : "bi bi-clipboard"}></i> 
      </button>
    </nav>
  )
}

export default ShareButton
