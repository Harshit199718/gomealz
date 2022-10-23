import './App.css';
import ChefNearYou from './components/ChefNearYou/ChefNearYou.component';
import Footer from './components/Footer/Footer.component';
import HeroSection from './components/HeroSection/HeroSection.component';
import HowWeWorks from './components/HowWeWorks/HowWeWorks.component';
import SocialDetails from './components/SocialDetails/SocialDetails.component';
import SpecialDishes from './components/SpecialDishes/SpecialDishes.component';
import WhatPeopleSay from './components/WhatPeopleSay/WhatPeopleSay.component';
import WhyUs from './components/WhyUs/WhyUs.component';

function App() {
  return (
    <div className="App">
      <HeroSection />
      <div className="sections_container">
        <HowWeWorks />
        <SpecialDishes />
        <WhatPeopleSay />
        <SocialDetails />
        <WhyUs />
        <ChefNearYou />
        <Footer />
      </div>
    </div>
  );
}

export default App;
