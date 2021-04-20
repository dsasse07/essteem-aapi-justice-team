import Header from './components/Header/Header'
import ArticleCarousel from './components/ArticleCarousel/ArticleCarousel';
import OrgInfo from './components/OrgInfo/OrgInfo';
import Successes from './components/Successes/Successes';
import Organizations from './components/Organizations/Organizations'
import Footer from './components/Footer/Footer'
import './App.css';
import './theme/colors.css'

const App = () => {

  return (
    <div className="container-lg">
      <Header />
      <main>
        <ArticleCarousel />
        <OrgInfo />
        <Successes />
        <Organizations />
      </main>
      <Footer />
    </div>
  );

}

export default App;
