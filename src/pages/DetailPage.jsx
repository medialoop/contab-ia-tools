import React, { useEffect } from 'react';
import { useParams, useNavigate, useLocation, Link } from 'react-router-dom';
import * as Icons from '@heroicons/react/24/outline';
import { categories, obligationsData } from '../data/obligations';

export default function DetailPage() {
  const params = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Determine if this is impostos or obrigacoes route
  // For impostos: /impostos/:id (params.id exists, params.category doesn't)
  // For obrigacoes: /obrigacoes/:category/:id (both params.category and params.id exist)
  const isImpostos = location.pathname.startsWith('/impostos');
  const categorySlug = isImpostos ? 'impostos' : params.category;
  const itemId = isImpostos ? params.id : params.id;

  // Find the category data
  const categoryData = categories.find(cat => {
    const catSlug = cat.path.split('/').pop(); // Get last part of path
    return catSlug === categorySlug;
  });

  if (!categoryData) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900">Categoria não encontrada</h1>
          <Link to="/" className="text-blue-600 hover:text-blue-800 mt-4 inline-block">
            Voltar para início
          </Link>
        </div>
      </div>
    );
  }

  // Find the specific item from obligationsData
  const categoryItems = obligationsData[categorySlug] || [];
  const item = categoryItems.find(item => item.id === itemId);

  if (!item) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900">Item não encontrado</h1>
          <Link to={categoryData.path} className="text-blue-600 hover:text-blue-800 mt-4 inline-block">
            Voltar para {categoryData.name}
          </Link>
        </div>
      </div>
    );
  }

  const Icon = Icons[item.icon] || Icons.DocumentTextIcon;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumb */}
      <nav className="flex mb-8" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-3">
          <li className="inline-flex items-center">
            <Link to="/" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600">
              <Icons.HomeIcon className="w-4 h-4 mr-2" />
              Início
            </Link>
          </li>
          <li>
            <div className="flex items-center">
              <Icons.ChevronRightIcon className="w-5 h-5 text-gray-400" />
              <Link to={categoryData.path} className="ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2">
                {categoryData.name}
              </Link>
            </div>
          </li>
          <li aria-current="page">
            <div className="flex items-center">
              <Icons.ChevronRightIcon className="w-5 h-5 text-gray-400" />
              <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2">{item.name}</span>
            </div>
          </li>
        </ol>
      </nav>

      {/* Header */}
      <div className="bg-white rounded-lg shadow-sm p-8 mb-6">
        <div className="flex items-start">
          <div className="flex-shrink-0">
            <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center">
              <Icon className="w-8 h-8 text-blue-600" />
            </div>
          </div>
          <div className="ml-6 flex-1">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{item.name}</h1>
            <p className="text-lg text-gray-600">{item.description}</p>
          </div>
        </div>
      </div>

      {/* Content */}
      {item.content && (
        <div className="bg-white rounded-lg shadow-sm p-8 mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">{item.content.title}</h2>

          {item.content.summary && (
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Resumo</h3>
              <p className="text-gray-700">{item.content.summary}</p>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {item.content.periodicity && (
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Periodicidade</h3>
                <p className="text-gray-700">{item.content.periodicity}</p>
              </div>
            )}

            {item.content.legalBasis && (
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Base Legal</h3>
                <p className="text-gray-700">{item.content.legalBasis}</p>
              </div>
            )}

            {item.content.reference && (
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Referência</h3>
                <p className="text-gray-700">{item.content.reference}</p>
              </div>
            )}
          </div>

          {item.content.details && item.content.details.length > 0 && (
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Detalhes</h3>
              <div className="space-y-4">
                {item.content.details.map((detail, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">{detail.title}</h4>
                    <p className="text-gray-700">{detail.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {item.content.faqs && item.content.faqs.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Perguntas Frequentes</h3>
              <div className="space-y-4">
                {item.content.faqs.map((faq, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">{faq.question}</h4>
                    <p className="text-gray-700">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Back Button */}
      <div className="flex justify-start">
        <Link
          to={categoryData.path}
          className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          <Icons.ArrowLeftIcon className="w-4 h-4 mr-2" />
          Voltar para {categoryData.name}
        </Link>
      </div>
    </div>
  );
}
