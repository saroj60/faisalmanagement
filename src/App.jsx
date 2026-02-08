import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Demands from './pages/Demands';
import DemandDetails from './pages/DemandDetails';
import Login from './pages/admin/Login';
import CreateDemand from './pages/admin/CreateDemand';
import ProtectedRoute from './components/layout/ProtectedRoute';
import { AuthProvider } from './context/AuthContext';
import { COMPANY_INFO } from './utils/constants';

function App() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>{COMPANY_INFO.name} - Global Manpower Solutions</title>
        <meta name="description" content="Leading manpower recruitment agency providing skilled and unskilled workforce for construction, hospitality, oil & gas, and corporate sectors." />
      </Helmet>
      <AuthProvider>
        <Router>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />

              {/* Public Demand Routes */}
              <Route path="/demands" element={<Demands />} />
              <Route path="/demands/:id" element={<DemandDetails />} />

              <Route path="/contact" element={<Contact />} />

              {/* Admin Routes */}
              <Route path="/admin/login" element={<Login />} />

              <Route element={<ProtectedRoute />}>
                <Route path="/admin/create-demand" element={<CreateDemand />} />
              </Route>

            </Routes>
          </Layout>
        </Router>
      </AuthProvider>
    </HelmetProvider>
  );
}

export default App;
