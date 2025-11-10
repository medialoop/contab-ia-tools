import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import {
  DocumentTextIcon,
  MapIcon,
  BuildingOfficeIcon,
  UsersIcon,
  CalculatorIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';
import { categories } from '../data/obligations';

const categoryIcons = {
  nacionais: DocumentTextIcon,
  estaduais: MapIcon,
  municipais: BuildingOfficeIcon,
  trabalhistas: UsersIcon,
  calculadoras: CalculatorIcon,
};

export default function Home() {
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
        <div className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex justify-center mb-6">
              <SparklesIcon className="w-16 h-16" />
            </div>
            <h1 className="text-4xl font-bold mb-4">
              Assistente Contábil Inteligente
            </h1>
            <p className="text-xl text-indigo-100 max-w-2xl mx-auto">
              Consulte informações sobre obrigações fiscais e tributárias, use calculadoras práticas
              e tire suas dúvidas com nosso assistente virtual.
            </p>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Escolha uma categoria
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => {
              const Icon = categoryIcons[category.id] || DocumentTextIcon;
              return (
                <Link
                  key={category.id}
                  to={category.path}
                  className="group bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-200 p-6 border-2 border-transparent hover:border-indigo-600"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 p-3 bg-indigo-100 rounded-lg group-hover:bg-indigo-600 transition-colors duration-200">
                      <Icon className="w-8 h-8 text-indigo-600 group-hover:text-white transition-colors duration-200" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors duration-200">
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
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Recursos Disponíveis
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <DocumentTextIcon className="w-8 h-8 text-indigo-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Informações Completas
                </h3>
                <p className="text-gray-600">
                  Dados detalhados sobre prazos, periodicidade, base legal e referências oficiais
                  de cada obrigação.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <SparklesIcon className="w-8 h-8 text-indigo-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Assistente Virtual
                </h3>
                <p className="text-gray-600">
                  Converse com nosso assistente para tirar dúvidas e obter explicações
                  personalizadas sobre cada obrigação.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CalculatorIcon className="w-8 h-8 text-indigo-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
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
  };

  return descriptions[categoryId] || 'Informações sobre obrigações contábeis';
}
