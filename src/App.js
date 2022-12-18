import './App.css';
import Footer from './components/Common/Footer/footer';
import Header from './components/Common/Header/header';
import LandingPageComponent from './components/LandingPage/Intro';

function App() {
  return (
    <div className="App">
      <Header/>
      <LandingPageComponent/>
      <Footer/>
    </div>
  );
}

export default App;
