import './Footer.css'
import footerLogo from '../../assets/images/footer-logo.png'
import SocialLink from './SocialLink'

const Footer = () => {
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
        DONATE TODAY!
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
          Asian Americans Advancing Justice
        </p>
        <p>
          Some rights reserved.
        </p>
        <p>
          All images used are licensed under the Creative Commons License.
        </p>
        <p>
          Please contact your local affiliate to learn more about our work.
        </p>
      </div>

    </footer>
  )
}

export default Footer
