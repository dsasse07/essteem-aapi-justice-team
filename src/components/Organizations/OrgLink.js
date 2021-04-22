import logoIcon from '../../assets/images/footer-logo.png'
import './OrgLink.css'
import { useTranslation } from 'react-i18next'
import { useBreakpoint } from '../../utils/BreakpointProvider'
import { useState, useEffect } from 'react'
import { orgImages } from '../../assets/images/orgImages'

const OrgLink = ({org, link, orgCode}) => { 
  const [ isMobile, setIsMobile ] = useState()
  const breakpoints = useBreakpoint()
  const { t } = useTranslation()

  useEffect( () => {
    setIsMobile( breakpoints.md )
  }, [breakpoints.md])

  return (
    <>
      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        className={"col orglink " + orgCode}
      >
        { !isMobile &&
          <div className="orglink-section">
            <img className="city-image" src={orgImages[orgCode]} alt={org} />
          </div>
        }
        <div className="orglink-section">
          <div className= "org-link image-container">
            <img src={logoIcon} alt="AAJC logo" />
          </div>

          <div className="col orglink-text">
            <p>{t('Advancing Justice')}</p>
            <p>{org}</p>
          </div>
        </div>
      </a>
    </>
  )
}

export default OrgLink