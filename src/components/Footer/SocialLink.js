import './SocialLink.css'
import { icons } from '../../assets/icons/icons'

const SocialLink = ({url, title}) => {
  
  return(
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className="social-link"
      aria-label={title}
    >
      {icons[title]}      
      <span>{title}</span>
    </a>
  )
}

export default SocialLink