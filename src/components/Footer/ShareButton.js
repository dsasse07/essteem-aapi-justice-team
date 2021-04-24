import './ShareButton.css'
import { useState } from 'react'
import Modal from './Modal'
import { socialsData } from '../../data/socialsData'

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
      }, 7000)
    } catch (err) {
      console.log('failed to copy', err)
    }
  } 

  const socialLinkComponents = socialsData.map( social => {
    return (
      <a 
        key={social.outlet}
        href={social.url}
        title={social.title}
        target="_blank" 
        rel="noreferrer"
        className={"col-4 d-flex flex-column align-items-center p-3 mx-3 " + social.outlet}
      > 
        <div className={`menu-item ${social.outlet}_share_btn`}>
          <i className={social.icon}></i> 
        </div>
        <span>{social.title}</span>
      </a>
    )
  })

  return (
    <nav className="menu">
      <button className="menu-open-button" data-bs-toggle="modal" data-bs-target="#exampleModal">
        <i className="bi bi-share-fill share-icon"></i>
      </button>

      <Modal>
        <div className="row g-3 d-flex justify-content-center">
          {socialLinkComponents.slice(0,3)}
          {socialLinkComponents.slice(3)}
          <button
            onClick={handleCopyLink}
            name="Copy Link"
            className={ "col-4 d-flex flex-column align-items-center copy_text p-3 mx-3" + (urlCopied ? " copied" : "")}
            > 
            <div className="menu-item copy_text_share_btn">
              <i className={ urlCopied ? "bi bi-clipboard-check" : "bi bi-clipboard"}></i> 
            </div>
            { urlCopied ? "Copied!" : "Copy Link"}
          </button>
        </div>
      </Modal>
    </nav>
  )
}

export default ShareButton
