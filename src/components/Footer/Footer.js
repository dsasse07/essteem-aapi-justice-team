import './Footer.css'
import footerLogo from '../../assets/images/footer-logo.png'
import SocialLink from './SocialLink'
import { useTranslation } from 'react-i18next'

const Footer = () => {
  const { t } = useTranslation()

  return (
    <footer className="footer-container row">

      <div className="footer-logo-container">
        <img src={footerLogo} alt="AAJC logo" />
      </div>

      <a 
        href="https://secure.donationpay.org/aajc/"
        target="_blank"
        rel="noreferrer"
      >
        {t('Donate Today')}
      </a>

      <div className="social-container">
        <SocialLink 
          title="Twitter"
          url="https://twitter.com/AAAJ_AAJC"
        />
        <SocialLink 
          title="Facebook"
          url="https://www.facebook.com/advancingjusticeaajc"
        />
        <SocialLink 
          title="Instagram"
          url="https://www.instagram.com/advancingjustice_aajc/"
        />
      </div>

      <div className="disclaimer-container">
        <p>
          {t('AAAJ')}
        </p>
        <p>
          {t('rights')}
        </p>
        <p>
          {t('Creative Commons')}
        </p>
        <p>
          {t('Learn More')}
        </p>
      </div>

    </footer>
  )
}

export default Footer
