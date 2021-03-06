import './Organizations.css'
import OrgLink from './OrgLink'
import { useTranslation } from 'react-i18next'

const Organizations = () => {
  const { t } = useTranslation()

  return (
    <section className="organizations-container row">
      <header>
        <h2>
          {t('Our Organizations')}
        </h2>
      </header>
      <h3>
        {t('Click Below')}
      </h3>
      <div className="orglinks">
        <OrgLink org="AAJC" orgCode="aajc" link="http://www.advancingjustice-aajc.org/" />
        <OrgLink org={t('Asian Law Caucus')} orgCode="alc" link="http://www.advancingjustice-aajc.org/" />
        <OrgLink org={t('Atlanta')} orgCode="aja" link="http://www.advancingjustice-aajc.org/" />
        <OrgLink org={t('Chicago')} orgCode="ajc" link="http://www.advancingjustice-aajc.org/" />
        <OrgLink org={t('Los Angeles')} orgCode="ajla" link="http://www.advancingjustice-aajc.org/" />
      </div> 
    </section>
  )
}

export default Organizations
