
import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { ThemeContext } from './context/ThemeContext';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Theme1Layout from './layouts/Theme1Layout';
import Theme2Layout from './layouts/Theme2Layout';
import Theme3Layout from './layouts/Theme3Layout';

const AppContent = () => {
  const { theme } = useContext(ThemeContext);
  const Layout =
    theme === 'theme1' ? Theme1Layout : theme === 'theme2' ? Theme2Layout : Theme3Layout;

  return (
    <Router>
      <Header />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
};

const App = () => (
  <ThemeProvider>
    <AppContent />
  </ThemeProvider>
);

export default App;