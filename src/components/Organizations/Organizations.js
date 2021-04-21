import './Organizations.css'
import OrgLink from './OrgLink'
import { useTranslation } from 'react-i18next'

const Organizations = () => {
  const { t } = useTranslation()

  return (
    <section className="organizations-container row">
      <header>
        {t('Our Organizations')}
      </header>
      <div className="orglinks">
        <OrgLink org="AAJC" color="aajc" link="http://www.advancingjustice-aajc.org/" />
        <OrgLink org={t('Asian Law Caucus')} color="alc" link="http://www.advancingjustice-aajc.org/" />
        <OrgLink org={t('Atlanta')} color="aja" link="http://www.advancingjustice-aajc.org/" />
        <OrgLink org={t('Chicago')} color="ajc" link="http://www.advancingjustice-aajc.org/" />
        <OrgLink org={t('Los Angeles')} color="ajla" link="http://www.advancingjustice-aajc.org/" />
      </div> 
    </section>
  )
}

export default Organizations
