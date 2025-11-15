import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { HelmetProvider } from '@dr.pogodin/react-helmet';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import CategoryPage from './pages/CategoryPage';
import ResourcePage from './pages/ResourcePage';
import DetailPage from './pages/DetailPage';
import CNAESearch from './pages/CNAESearch';
import SearchResults from './pages/SearchResults';
import AIAssistant from './pages/AIAssistant';

function AppContent() {
  const location = useLocation();
  const isAIAssistant = location.pathname === '/assistente-ia' || location.pathname === '/ia';

  if (isAIAssistant) {
    return (
      <Routes>
        <Route path="/assistente-ia" element={<AIAssistant />} />
        <Route path="/ia" element={<AIAssistant />} />
      </Routes>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<SearchResults />} />

        {/* Individual obligation routes (must come before category index routes) */}
        <Route path="/obrigacoes/nacionais/:id" element={<DetailPage />} />
        <Route path="/obrigacoes/estaduais/:id" element={<DetailPage />} />
        <Route path="/obrigacoes/municipais/:id" element={<DetailPage />} />
        <Route path="/obrigacoes/trabalhistas/:id" element={<DetailPage />} />

        {/* Category index routes */}
        <Route path="/obrigacoes/nacionais" element={<CategoryPage />} />
        <Route path="/obrigacoes/estaduais" element={<CategoryPage />} />
        <Route path="/obrigacoes/municipais" element={<CategoryPage />} />
        <Route path="/obrigacoes/trabalhistas" element={<CategoryPage />} />

        {/* Impostos resources (more specific routes first) */}
        <Route path="/impostos/:type/:id" element={<ResourcePage />} />

        {/* Individual imposto routes */}
        <Route path="/impostos/:id" element={<DetailPage />} />

        {/* Impostos category index */}
        <Route path="/impostos" element={<CategoryPage />} />

        {/* Calculators */}
        <Route path="/calculadoras" element={<CategoryPage />} />
        <Route path="/calculadora-inss" element={<CategoryPage />} />
        <Route path="/calculadora-irrf" element={<CategoryPage />} />
        <Route path="/calculadora-simples" element={<CategoryPage />} />
        <Route path="/calculadora-multa" element={<CategoryPage />} />
        <Route path="/calculadora-juros" element={<CategoryPage />} />
        <Route path="/calculadora-dimob" element={<CategoryPage />} />

        {/* Other pages */}
        <Route path="/cnae" element={<CNAESearch />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <HelmetProvider>
      <Router>
        <AppContent />
      </Router>
    </HelmetProvider>
  );
}

export default App;
