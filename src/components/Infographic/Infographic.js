import './Infographic.css'
import { infographics } from '../../data/infographics'
import { useTranslation } from 'react-i18next'

const Infographic = () => {
  const { t } = useTranslation()

  const infographicComponents = infographics.map( graphic => {
    return (
      <figure key ={graphic.caption} className="col-md-5 d-flex justify-content-center align-items-center flex-column mx-3 mb-5">
        <img className="w-50 " src={graphic.image} alt={graphic.caption}/>
        <figcaption className="py-4 w-75 text-center fw-bold fs-4 lh-sm">
          {t(graphic.caption)}
        </figcaption>
      </figure>
    )
  })

  return (
    <>
      <section className="infographic-container row d-flex justify-content-center">
        <header>
          <h2>
            {t('understanding')}
          </h2>
        </header>

        <div className="row d-flex flex-wrap justify-content-evenly graphic-row">
          {infographicComponents.slice(0,2)}
        </div>
      </section>

      <section className="infographic-container row d-flex justify-content-center">
        <header className="second">
          <h2>
            {t('OUR IMPACT')}
          </h2>
        </header>
        <br></br>
        <div className="row mt-4 d-flex flex-wrap justify-content-evenly graphic-row">
          {infographicComponents.slice(2,4)}
        </div>
        
      </section>
    </>
  );
}

export default Infographic

