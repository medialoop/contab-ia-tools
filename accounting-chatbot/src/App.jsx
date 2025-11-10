import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Header from './components/Header';
import Home from './pages/Home';
import CategoryPage from './pages/CategoryPage';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen flex flex-col bg-gray-50">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/nacionais" element={<CategoryPage />} />
            <Route path="/estaduais" element={<CategoryPage />} />
            <Route path="/municipais" element={<CategoryPage />} />
            <Route path="/trabalhistas" element={<CategoryPage />} />
            <Route path="/calculadoras" element={<CategoryPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
