import Header from './components/Header/Header'
import ArticleCarousel from './components/ArticleCarousel/ArticleCarousel';
import OrgInfo from './components/OrgInfo/OrgInfo';
import Successes from './components/Successes/Successes';
import Organizations from './components/Organizations/Organizations'
import Footer from './components/Footer/Footer'
import './App.css';

const App = () => {

  return (
    < >
      <Header />
      <main>
        <ArticleCarousel />
        <OrgInfo />
        <Successes />
        <Organizations />
      </main>
      <Footer />
    </>
  );

}

export default App;
