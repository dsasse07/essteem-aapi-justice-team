import './Header.css'
import logo from '../../assets/images/aj-logo.png'
import { useTranslation } from 'react-i18next'
import { useBreakpoint } from '../../utils/BreakpointProvider'
import { useState, useEffect } from 'react'


const Header = ({currentLanguage, onChangeLang}) => {
  const [ isMobile, setIsMobile ] = useState(true)
  const breakpoints = useBreakpoint()
  const { t } = useTranslation()

  useEffect( () => {
    console.log( breakpoints.md)

    setIsMobile( breakpoints.md )
  }, [breakpoints.md])

  const languages = {
    en: "🇬🇧 English",
    hi: "🇮🇳 हिंदी (Hindi)",
    vi: "🇻🇳 Tiếng Việt (Vietnamese)",
    ko: "🇰🇷 한국어 (Korean)",
    ur: "🇵🇰 اردو (Urdu)",
  }

  const languageOptions = Object.keys(languages).map( lang => {
    return(
      <option key={lang} value={lang}>
        {languages[lang]}
      </option>
    )
  })
  
  return isMobile ? 
    (
      <header className="row">
        <label className="hidden" htmlFor="langSelect">
          {t('Select Language ')}
        </label>
        <select
          id="langSelect"
          name="langSelect"
          onChange={onChangeLang}
          value={currentLanguage}
        >
          {languageOptions}
        </select>

        <div className="logo-row">
          <img src={logo} alt="Advancing Justice Logo" />
          <a 
            href="https://secure.donationpay.org/aajc/"
            target="_blank"
            rel="noreferrer"
          >
            {t('Donate')}
          </a>
        </div>
      </header>
    )
  :
    (
      <header className="row desktop">
        <div className="col desktop">
          <img src={logo} alt="Advancing Justice Logo" />
        </div>
        <div className="col desktop">
          <label className="hidden" htmlFor="langSelect">
            {t('Select Language ')}
          </label>
          <select
            id="langSelect"
            name="langSelect"
            onChange={onChangeLang}
            value={currentLanguage}
          >
            {languageOptions}
          </select>
          <a 
            href="https://secure.donationpay.org/aajc/"
            target="_blank"
            rel="noreferrer"
          >
            {t('Donate')}
          </a>

        </div>
      </header>
    )
}

export default Header
