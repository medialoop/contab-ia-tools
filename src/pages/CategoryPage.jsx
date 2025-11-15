import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from '@dr.pogodin/react-helmet';
import ObligationCard from '../components/ObligationCard';
import ResourceCard from '../components/ResourceCard';
import Chatbot from '../components/Chatbot';
import CalculatorWrapper from '../components/calculators/CalculatorWrapper';
import DeadlineCalendar from '../components/DeadlineCalendar';
import { obligationsData, categories } from '../data/obligations';

export default function CategoryPage() {
  const location = useLocation();
  const navigate = useNavigate();
  // Extract category from path (e.g., /obrigacoes/nacionais -> nacionais, /calculadoras -> calculadoras)
  const pathParts = location.pathname.split('/').filter(Boolean);
  let category = pathParts.length > 1 ? pathParts[1] : pathParts[0];
  const [selectedItem, setSelectedItem] = useState(null);

  // Check if this is a specific calculator URL (e.g., /calculadora-inss)
  const isSpecificCalculator = category.startsWith('calculadora-');
  let specificCalculator = null;

  if (isSpecificCalculator) {
    // Find the calculator that matches this path
    const calculators = obligationsData['calculadoras'] || [];
    specificCalculator = calculators.find(calc => calc.path === location.pathname);
    // Set category to 'calculadoras' to load the correct category info
    category = 'calculadoras';
  }

  const categoryData = isSpecificCalculator && specificCalculator
    ? [specificCalculator]
    : obligationsData[category] || [];
  const categoryInfo = categories.find(c => c.id === category);

  useEffect(() => {
    // Reset selection when URL changes (syncing with router state)
    if (isSpecificCalculator && specificCalculator) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setSelectedItem(specificCalculator);
    } else if (location.state?.selectedObligationId) {
      // If coming from search results, auto-select the specified obligation
      const obligation = categoryData.find(item => item.id === location.state.selectedObligationId);
      if (obligation) {
        setSelectedItem(obligation);
      }
    } else {
      setSelectedItem(null);
    }
  }, [category, isSpecificCalculator, specificCalculator, location.state?.selectedObligationId, categoryData]);

  const handleSelectItem = (item) => {
    setSelectedItem(item);
  };

  const handleResourceClick = (resource) => {
    navigate(resource.url);
  };

  const isCalculator = selectedItem?.type === 'calculator';

  // Get resources for impostos and documentos categories
  const hasResources = (category === 'impostos' && obligationsData.impostosResources) ||
                       (category === 'documentos' && obligationsData.documentosResources);
  const resourcesData = category === 'impostos' ? obligationsData.impostosResources :
                        category === 'documentos' ? obligationsData.documentosResources :
                        null;
  const links = hasResources && resourcesData ? resourcesData.links : [];
  const downloads = hasResources && resourcesData ? resourcesData.downloads : [];

  return (
    <>
      <Helmet>
        <title>
          {isSpecificCalculator && specificCalculator
            ? `${specificCalculator.name} - Assistente Contábil | PraContador`
            : `${categoryInfo?.name || 'Categoria'} - Assistente Contábil | PraContador`}
        </title>
        <meta
          name="description"
          content={
            isSpecificCalculator && specificCalculator
              ? `${specificCalculator.description} - Ferramenta online gratuita para contadores e empresários`
              : categoryInfo?.description || `Consulte informações sobre obrigações ${categoryInfo?.name.toLowerCase() || 'contábeis'} e tire suas dúvidas com nosso assistente inteligente.`
          }
        />
        <meta name="keywords" content={`${categoryInfo?.name || 'contabilidade'}, obrigações fiscais, declarações, impostos, assistente contábil, ${category}, pracontador`} />
        <meta property="og:title" content={isSpecificCalculator && specificCalculator ? `${specificCalculator.name} - Assistente Contábil` : `${categoryInfo?.name || 'Categoria'} - Assistente Contábil`} />
        <meta property="og:description" content={isSpecificCalculator && specificCalculator ? specificCalculator.description : categoryInfo?.description || `Informações sobre ${categoryInfo?.name.toLowerCase() || 'obrigações contábeis'}`} />
        <meta property="og:type" content="website" />
        <link rel="canonical" href={`https://pracontador.com.br${location.pathname}`} />
      </Helmet>

      <div className="flex-1 overflow-hidden bg-gray-100 p-4 md:p-6">
        <div className="max-w-7xl mx-auto h-full">
          <div className="flex flex-col md:flex-row h-full gap-4 md:gap-6">
            {/* Left Column - Cards Grid */}
            <div className="w-full md:w-1/2 flex flex-col bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden">
              <div className="p-4 md:p-6 border-b border-gray-200 bg-gradient-to-r from-primary-50 to-blue-50">
                <h1 className="font-heading text-xl md:text-2xl font-bold text-gray-900 mb-2">
                  {categoryInfo?.name || 'Categoria'}
                </h1>
                <p className="text-sm md:text-base text-gray-600">
                  {categoryInfo?.description || (category === 'calculadoras'
                    ? 'Ferramentas para cálculos contábeis e tributários'
                    : 'Selecione uma obrigação para ver detalhes e conversar com o assistente')}
                </p>
              </div>

              <div className="flex-1 overflow-y-auto p-4 md:p-6">
                <div className="grid gap-4 mb-6">
                  {categoryData.map((item) => (
                    <ObligationCard
                      key={item.id}
                      obligation={item}
                      onClick={handleSelectItem}
                      isSelected={selectedItem?.id === item.id}
                    />
                  ))}
                </div>

                {/* Resources Section - Links and Downloads for Impostos */}
                {hasResources && (
                  <>
                    {/* Links Section */}
                    {links.length > 0 && (
                      <div className="mb-6">
                        <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                          <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                          </svg>
                          Links Úteis
                        </h2>
                        <div className="grid gap-4">
                          {links.map((link) => (
                            <ResourceCard
                              key={link.id}
                              resource={link}
                              type="link"
                              onClick={handleResourceClick}
                            />
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Downloads Section */}
                    {downloads.length > 0 && (
                      <div className="mb-6">
                        <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                          <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                          Downloads
                        </h2>
                        <div className="grid gap-4">
                          {downloads.map((download) => (
                            <ResourceCard
                              key={download.id}
                              resource={download}
                              type="download"
                              onClick={handleResourceClick}
                            />
                          ))}
                        </div>
                      </div>
                    )}
                  </>
                )}

                {/* Calendar - Only show for non-calculator categories */}
                {category !== 'calculadoras' && (
                  <DeadlineCalendar
                    category={category}
                    obligations={categoryData}
                    onSelectObligation={handleSelectItem}
                  />
                )}
              </div>
            </div>

            {/* Right Column - Chat or Calculator */}
            <div className="w-full md:w-1/2 flex flex-col bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden">
              {isCalculator ? (
                <CalculatorWrapper calculatorId={selectedItem.id} />
              ) : (
                <Chatbot selectedObligation={selectedItem} />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
