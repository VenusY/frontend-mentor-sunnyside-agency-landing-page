import './styles/reset.css';
import './styles/scss/App.scss';
import Header from './components/Header';
import AboutSection from './components/AboutSection';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Header />

      <main>
        <AboutSection />
        <Testimonials />
        <Gallery />
      </main>

      <Footer />
    </>
  );
}
