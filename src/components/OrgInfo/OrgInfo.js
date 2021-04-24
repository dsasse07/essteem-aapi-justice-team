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
  
  return isMobile ? 
    (
      <section className="org-info-container row">
        <header>
          <h2>
            {t('How AJ Helps')}
          </h2>
        </header>

        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
              {t('LEADERSHIP')} 
              </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
              <div className="accordion-body">
              {t('leadership text')}
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              {t('DIRECT SUPPORT')}
              </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
              <div className="accordion-body">
              {t('direct text')}
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              {t('ADVOCACY')}
              </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
              <div className="accordion-body">
              {t('advocacy text')}
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingFour">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
              {t('CIVIC ENGAGEMENT')}
              </button>
            </h2>
            <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
              <div className="accordion-body">
              {t('civic engagement text')}
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingFive">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseThree">
              {t('BYSTANDER INTERVENTION TRAININGS')}
              </button>
            </h2>
            <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
              <div className="accordion-body">
              {t('bystander trainings text')}
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingSix">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseThree">
              {t('IMMIGRATION RIGHTS')}
              </button>
            </h2>
            <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
              <div className="accordion-body">
              {t('immigration rights text')}
              </div>
            </div>
          </div>

          <div className="row">
            <button className="buttonStyle buttonTopSpace mobileButton">
              <span className="buttonText mobileText ">
                {t('DONATE')}
              </span>
              <br /> 
              {t('Help stand')}
            </button>
          </div>
        </div>
      </section>
    )
    :
    (
      <section className="org-info-container row">
        <header>
          <h2>
            {t('How AJ Helps')}
          </h2>
        </header>

        <div className="container info-row">
          <div className="row align-items-center info-row">
            <div className="col iconPosition">
              <img src={leadershipIcon} alt="Leadership logo" className="photo" />
              <div className="title">{t('LEADERSHIP')}</div>
              <div className="text">{t('leadership text')}</div>
            </div>
            <div className="col iconPosition">
              <img src={supportIcon} alt="Support logo" className="photo"/>
              <div className="title">{t('DIRECT SUPPORT')}</div>
              <div className="text">{t('direct text')}</div>
            </div>
            <div className="col iconPosition">
              <img src={advocacyIcon} alt="Advocacy logo" className="photo"/>
              <div className="title">{t('ADVOCACY')}</div>
              <div className="text">{t('advocacy text')}</div>
            </div>
          </div>

          <div className="row align-items-center info-row">
            <div className="col iconPosition">
              <img src={trainingIcon} alt="Training logo" className="photo"/>
              <div className="title">{t('BYSTANDER INTERVENTION TRAININGS')}</div>
              <div className="text">{t('bystander trainings text')}</div>
            </div>
            <div className="col iconPosition">
              <img src={engagementIcon} alt="Engagement logo" className="photo"/>
              <div className="title">{t('CIVIC ENGAGEMENT')}</div>
              <div className="text">{t('civic engagement text')}</div>
            </div>
            <div className="col iconPosition">
              <img src={rightsIcon} alt="Rights logo" className="photo"/>
              <div className="title">{t('IMMIGRATION')}</div>
              <div className="text">{t('immigration rights text')}</div>
            </div>

            <div className="row">
              <button className="buttonStyle"><a href="https://secure.donationpay.org/aajc/"> <span className="buttonText">{t('DONATE')}</span><br /> {t('Help stand')}</a></button>
            </div>

          </div>
        </div>
      </section>
  )
}

export default OrgInfo
