import logoIcon from '../../assets/images/footer-logo.png'
import './OrgLink.css'
import { useTranslation } from 'react-i18next'

const OrgLink = ({org, link, color}) => { 
  const { t } = useTranslation()

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
        <p>{t('Advancing Justice')}</p>
        <p>{org}</p>
      </div>
    </a>
  )
}

export default OrgLink