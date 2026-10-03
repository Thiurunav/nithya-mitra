import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { TermsOfService } from './pages/TermsOfService';
import { Disclaimer } from './pages/Disclaimer';

function App() {
  return (
    <BrowserRouter>
      {/* Outer Viewport Canvas Frame & Corners (Inspiration Architecture) */}
      <div className="site-frame site-frame--top" aria-hidden="true" />
      <div className="site-frame site-frame--bottom" aria-hidden="true" />
      <div className="site-frame site-frame--left" aria-hidden="true" />
      <div className="site-frame site-frame--right" aria-hidden="true" />
      <svg className="site-corner site-corner--top-left" width="50" height="50" viewBox="0 0 50 50" fill="none" aria-hidden="true">
        <path d="M5.50871e-06 0C-0.00788227 37.3001 8.99616 50.0116 50 50H5.50871e-06V0Z" fill="currentColor" />
      </svg>
      <svg className="site-corner site-corner--top-right" width="50" height="50" viewBox="0 0 50 50" fill="none" aria-hidden="true">
        <path d="M5.50871e-06 0C-0.00788227 37.3001 8.99616 50.0116 50 50H5.50871e-06V0Z" fill="currentColor" />
      </svg>
      <svg className="site-corner site-corner--bottom-left" width="50" height="50" viewBox="0 0 50 50" fill="none" aria-hidden="true">
        <path d="M5.50871e-06 0C-0.00788227 37.3001 8.99616 50.0116 50 50H5.50871e-06V0Z" fill="currentColor" />
      </svg>
      <svg className="site-corner site-corner--bottom-right" width="50" height="50" viewBox="0 0 50 50" fill="none" aria-hidden="true">
        <path d="M5.50871e-06 0C-0.00788227 37.3001 8.99616 50.0116 50 50H5.50871e-06V0Z" fill="currentColor" />
      </svg>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsOfService />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
