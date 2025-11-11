import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Helmet } from '@dr.pogodin/react-helmet';
import {
  DocumentTextIcon,
  MapIcon,
  BuildingOfficeIcon,
  UsersIcon,
  CalculatorIcon,
  SparklesIcon,
  MagnifyingGlassIcon,
  TagIcon,
} from '@heroicons/react/24/outline';
import { categories } from '../data/obligations';

const categoryIcons = {
  nacionais: DocumentTextIcon,
  estaduais: MapIcon,
  municipais: BuildingOfficeIcon,
  trabalhistas: UsersIcon,
  calculadoras: CalculatorIcon,
  cnae: TagIcon,
};

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <>
      <Helmet>
        <title>Assistente Contábil - Obrigações e Calculadoras</title>
        <meta
          name="description"
          content="Consulte informações sobre obrigações contábeis nacionais, estaduais, municipais e trabalhistas. Use calculadoras tributárias e converse com nosso assistente."
        />
      </Helmet>

      <div className="flex-1 overflow-y-auto">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-primary-500 to-primary-900 text-white py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              Assistente Contábil Inteligente
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-blue-100 max-w-2xl mx-auto mb-8">
              Consulte informações sobre obrigações fiscais e tributárias, use calculadoras práticas
              e tire suas dúvidas com nosso assistente virtual.
            </p>

            {/* Search/Prompt Box */}
            <div className="max-w-3xl mx-auto">
              <form onSubmit={handleSearch} className="relative">
                <div className="relative flex items-center bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="absolute left-4 flex items-center pointer-events-none">
                    <MagnifyingGlassIcon className="w-6 h-6 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Digite sua dúvida ou busque por obrigação..."
                    className="flex-1 pl-12 md:pl-14 pr-4 py-3 md:py-4 text-gray-900 placeholder-gray-500 focus:outline-none text-base md:text-lg"
                  />
                  <button
                    type="submit"
                    className="bg-primary-900 hover:bg-primary-800 text-white px-4 md:px-8 py-3 md:py-4 font-semibold transition-colors duration-200 flex items-center space-x-2"
                  >
                    <SparklesIcon className="w-5 h-5" />
                    <span className="hidden sm:inline">Buscar</span>
                  </button>
                </div>
              </form>
              <p className="text-blue-100 text-sm mt-3">
                Experimente: "Como calcular INSS?" ou "Prazo da DCTF"
              </p>
            </div>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              Selecione o Tipo de Obrigação
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto px-4">
              Escolha a categoria de obrigação que deseja consultar para ver informações detalhadas,
              prazos, base legal e conversar com o assistente virtual.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => {
              const Icon = categoryIcons[category.id] || DocumentTextIcon;
              return (
                <Link
                  key={category.id}
                  to={category.path}
                  className="group bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-200 p-6 border-2 border-transparent hover:border-primary-500"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 p-3 bg-primary-100 rounded-lg group-hover:bg-primary-500 transition-colors duration-200">
                      <Icon className="w-8 h-8 text-primary-600 group-hover:text-white transition-colors duration-200" />
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors duration-200">
                        {category.name}
                      </h3>
                      <p className="text-gray-600">
                        {getCategoryDescription(category.id)}
                      </p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Features Section */}
        <div className="bg-gray-50 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-heading text-2xl font-bold text-gray-900 mb-8 text-center">
              Recursos Disponíveis
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <DocumentTextIcon className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-gray-900 mb-2">
                  Informações Completas
                </h3>
                <p className="text-gray-600">
                  Dados detalhados sobre prazos, periodicidade, base legal e referências oficiais
                  de cada obrigação.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <SparklesIcon className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-gray-900 mb-2">
                  Assistente Virtual
                </h3>
                <p className="text-gray-600">
                  Converse com nosso assistente para tirar dúvidas e obter explicações
                  personalizadas sobre cada obrigação.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CalculatorIcon className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-gray-900 mb-2">
                  Calculadoras Práticas
                </h3>
                <p className="text-gray-600">
                  Ferramentas de cálculo para INSS, IRRF, Simples Nacional, multas e juros sobre
                  tributos.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-white border-t border-gray-200 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-600">
            <p className="text-sm">
              As informações fornecidas são baseadas na legislação vigente e referências oficiais.
              Consulte sempre um contador para orientações específicas.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

function getCategoryDescription(categoryId) {
  const descriptions = {
    nacionais: 'Obrigações federais como DCTFWeb, ECF, ECD, EFD-Contribuições, DIRF e eSocial',
    estaduais: 'Obrigações estaduais relacionadas ao ICMS e IPI',
    municipais: 'Obrigações municipais relacionadas ao ISS e serviços',
    trabalhistas: 'Obrigações trabalhistas e previdenciárias como RAIS, GFIP e CAGED',
    calculadoras: 'Ferramentas para cálculos de INSS, IRRF, Simples Nacional, multas e juros',
    cnae: 'Pesquise códigos CNAE com dados oficiais do IBGE',
  };

  return descriptions[categoryId] || 'Informações sobre obrigações contábeis';
}
