import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/FeatureSection";
import Workflow from "./components/Workflow";
import Footer from "./components/Footer/Footer";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import Youlearn from "./components/Whatyouwilllearn/youlearn";
import Contact from "./components/Contact/ContactForm";
const App = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection />
        <FeatureSection />
        <Workflow />
        <Youlearn />
        <Testimonials />
        <Contact />

        <Footer />
      </div>
    </>
  );
};

export default App;
