import './Header.css'
import logo from '../../assets/images/aj-logo.png'

const Header = () => {
  
  const languages = {
    en: "🇬🇧 English",
    hi: "🇮🇳 हिंदी (Hindi)",
    vi: "🇻🇳 Tiếng Việt (Vietnamese)",
    ko: "🇰🇷 한국어 (Korean)",
    ur: "🇵🇰 اردو (Urdu)",
  }

  const languageOptions = Object.keys(languages).map( lang => {
    return(
      <option
        value = {lang}
      >
        {languages[lang]}
      </option>
    )
  })
  
  return (
    <header className="row">

      <label className="hidden" htmlFor="langSelect">
        Select Language
      </label>
      <select id="langSelect" name="langSelect">
        {languageOptions}
      </select>

      <div className="logo-row">
        <img src={logo} alt="Advancing Justice Logo" />
        <a 
          href="https://secure.donationpay.org/aajc/"
          target="_blank"
          rel="noreferrer"
        >
          DONATE
        </a>
      </div>
    </header>
  )
}

export default Header
