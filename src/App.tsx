import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import WalkingPaws from './components/WalkingPaws';
import GlobalPawWatermark from './components/GlobalPawWatermark';

import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import TeamPage from './pages/TeamPage';
import GalleryPage from './pages/GalleryPage';
import BlogPage from './pages/BlogPage';
import ServiceDetailPage from './pages/ServiceDetailPage';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <WalkingPaws />
      <div className="flex flex-col min-h-screen" style={{ position: 'relative', zIndex: 2, overflow: 'clip' }}>
        {/* Global paw + bone watermark — absolute, scrolls with page */}
        <GlobalPawWatermark />
        <Navbar />
        <main className="flex-1 w-full">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/:id" element={<ServiceDetailPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>

  );
}
