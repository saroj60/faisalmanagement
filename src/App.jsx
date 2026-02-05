import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import JobSeekers from './pages/JobSeekers';
import JobDetails from './pages/JobDetails';
import Contact from './pages/Contact';
import { COMPANY_INFO } from './utils/constants';

function App() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>{COMPANY_INFO.name} - Global Manpower Solutions</title>
        <meta name="description" content="Leading manpower recruitment agency providing skilled and unskilled workforce for construction, hospitality, oil & gas, and corporate sectors." />
      </Helmet>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/jobs" element={<JobSeekers />} />
            <Route path="/jobs/:id" element={<JobDetails />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Layout>
      </Router>
    </HelmetProvider>
  );
}

export default App;
