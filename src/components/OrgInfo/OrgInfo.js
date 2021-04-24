import './OrgInfo.css';
import leadershipIcon from '../../assets/images/leadership-icon.png';
import supportIcon from '../../assets/images/support-icon.png';
import advocacyIcon from '../../assets/images/advocacy-icon.png';
import trainingIcon from '../../assets/images/training-icon.png';
import engagementIcon from '../../assets/images/engagement-icon.png';
import rightsIcon from '../../assets/images/rights-icon.png';
import { useTranslation } from 'react-i18next';
import { useBreakpoint } from '../../utils/BreakpointProvider';
import { useState, useEffect } from 'react'



const OrgInfo = ({currentLanguage, onChangeLang}) => {
  const [ isMobile, setIsMobile ] = useState(true) 
  const breakpoints = useBreakpoint()
  const { t } = useTranslation()

  useEffect( () => {
    setIsMobile( breakpoints.md )
  }, [breakpoints.md])

  const languages = {
    en: "🇺🇸 English",
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
      <section className="org-info-container row">
      <div class="accordion" id="accordionExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingOne">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
            {t('LEADERSHIP')} 
            </button>
          </h2>
          <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div class="accordion-body">
            {t('leadership text')}
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingTwo">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            {t('DIRECT SUPPORT')}
            </button>
          </h2>
          <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div class="accordion-body">
            {t('direct text')}
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingThree">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            {t('ADVOCACY')}
            </button>
          </h2>
          <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div class="accordion-body">
            {t('advocacy text')}
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingFour">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
            {t('CIVIC ENGAGEMENT')}
            </button>
          </h2>
          <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
            <div class="accordion-body">
            {t('civic engagement text')}
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingFive">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseThree">
            {t('BYSTANDER INTERVENTION TRAININGS')}
            </button>
          </h2>
          <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
            <div class="accordion-body">
            {t('bystander trainings text')}
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingSix">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseThree">
            {t('IMMIGRATION RIGHTS')}
            </button>
          </h2>
          <div id="collapseSix" class="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
            <div class="accordion-body">
            {t('immigration rights text')}
            </div>
          </div>
        </div>
        <div class="row">
      <button class="buttonStyle buttonTopSpace mobileButton"><span class="buttonText mobileText ">{t('DONATE')}</span><br /> {t('Help stand')}</button>
      </div>
      </div>
    </section>
    )
    :
    (
    <section className="org-info-container row">
    <div class="container">
    <div class="row align-items-center">
      <div class="col iconPosition">
      <img src={leadershipIcon} alt="Leadership logo" className="photo" />
      <div class="title">{t('leadership')}</div>
      <div class="text">{t('leadership text')}</div>
      </div>
      <div class="col iconPosition">
      <img src={supportIcon} alt="Support logo" className="photo"/>
      <div class="title">{t('direct support')}</div>
      <div class="text">{t('direct text')}</div>
      </div>
      <div class="col iconPosition">
      <img src={advocacyIcon} alt="Advocacy logo" className="photo"/>
      <div class="title">{t('advocacy')}</div>
      <div class="text">{t('advocacy text')}</div>
      </div>
    </div>
    <div class="row align-items-center">
      <div class="col iconPosition">
      <img src={trainingIcon} alt="Training logo" className="photo"/>
      <div class="title">{t('bystander trainings')}</div>
      <div class="text">{t('bystander trainings text')}</div>
      </div>
      <div class="col iconPosition">
      <img src={engagementIcon} alt="Engagement logo" className="photo"/>
      <div class="title">{t('civic engagement')}</div>
      <div class="text">{t('civic engagement text')}</div>
      </div>
      <div class="col iconPosition">
      <img src={rightsIcon} alt="Rights logo" className="photo"/>
      <div class="title">{t('immigration rights')}</div>
      <div class="text">{t('immigration rights text')}</div>
      </div>
      <div class="row">
      <button class="buttonStyle"><a href="https://secure.donationpay.org/aajc/"> <span class="buttonText">{t('DONATE')}</span><br /> {t('Help stand')}</a></button>
      </div>
    </div>
  </div>
    </section>
  )
}

export default OrgInfo
