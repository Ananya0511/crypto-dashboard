import React from 'react'
import Header from '../components/Common/Header/header';
import Footer from "../components/Common/Footer/footer";
import LandingPageComponent from '../components/LandingPage/Intro';

function HomePage() {
  return (
    <div>
        <Header />
        <LandingPageComponent />
        <Footer />
    </div>
  )
}

export default HomePage;