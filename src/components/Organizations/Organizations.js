import './Organizations.css'
import OrgLink from './OrgLink'

const Organizations = () => {

  return (
    <section className="organizations-container row">
      <header>
        OUR ORGANIZATIONS
      </header>
      <div className="orglinks">
        <OrgLink org="AAJC" color="aajc" link="http://www.advancingjustice-aajc.org/" />
        <OrgLink org="Asian Law Caucus" color="alc" link="http://www.advancingjustice-aajc.org/" />
        <OrgLink org="Atlanta" color="aja" link="http://www.advancingjustice-aajc.org/" />
        <OrgLink org="Chicago" color="ajc" link="http://www.advancingjustice-aajc.org/" />
        <OrgLink org="Los Angeles" color="ajla" link="http://www.advancingjustice-aajc.org/" />
      </div>
    </section>
  )
}

export default Organizations
