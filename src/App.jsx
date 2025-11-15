import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { HelmetProvider } from '@dr.pogodin/react-helmet';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import CategoryPage from './pages/CategoryPage';
import CNAESearch from './pages/CNAESearch';
import SearchResults from './pages/SearchResults';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen flex flex-col bg-gray-50">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<SearchResults />} />
            <Route path="/obrigacoes/nacionais" element={<CategoryPage />} />
            <Route path="/obrigacoes/estaduais" element={<CategoryPage />} />
            <Route path="/obrigacoes/municipais" element={<CategoryPage />} />
            <Route path="/obrigacoes/trabalhistas" element={<CategoryPage />} />
            <Route path="/impostos" element={<CategoryPage />} />
            <Route path="/calculadoras" element={<CategoryPage />} />
            <Route path="/calculadora-inss" element={<CategoryPage />} />
            <Route path="/calculadora-irrf" element={<CategoryPage />} />
            <Route path="/calculadora-simples" element={<CategoryPage />} />
            <Route path="/calculadora-multa" element={<CategoryPage />} />
            <Route path="/calculadora-juros" element={<CategoryPage />} />
            <Route path="/calculadora-dimob" element={<CategoryPage />} />
            <Route path="/cnae" element={<CNAESearch />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
