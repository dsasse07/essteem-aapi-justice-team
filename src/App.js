import Header from './components/Header/Header'
import ArticleCarousel from './components/ArticleCarousel/ArticleCarousel';
import Infographic from './components/Infographic/Infographic'
import OrgInfo from './components/OrgInfo/OrgInfo';
import Successes from './components/Successes/Successes';
import Organizations from './components/Organizations/Organizations'
import Footer from './components/Footer/Footer'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import './App.css';
import './theme/colors.css'

const App = () => {
  const { i18n } = useTranslation()
  const [ currentLanguage, setCurrentLanguage ] = useState(
    localStorage.getItem('i18nextLng') || 'en'
  )

  const handleLangChange = (e) => {
    console.log(e.target.value)
    changeLanguage(e.target.value)
    setCurrentLanguage(e.target.value)
  }
  
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
  }


  return (
    <div className="container-fluid">
      <Header currentLanguage={currentLanguage} onChangeLang={handleLangChange}/>
      <main>
        <ArticleCarousel />
        {/* <Infographic /> */}
        <OrgInfo />
        {/* <Successes /> */}
        <Organizations />
      </main>
      <Footer />
    </div>
  );

}

export default App;
