import logoIcon from '../../assets/images/footer-logo.png'
import './OrgLink.css'

const OrgLink = ({org, link, color}) => { 

  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className={"col orglink " + color}
    >
      <div className= "org-link image-container">
        <img src={logoIcon} alt="AAJC logo" />
      </div>

      <div className="col orglink-text">
        <p>Advancing Justice</p>
        <p>{org}</p>
      </div>
    </a>
  )
}

export default OrgLink