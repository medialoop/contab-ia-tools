import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet } from '@dr.pogodin/react-helmet';
import ObligationCard from '../components/ObligationCard';
import Chatbot from '../components/Chatbot';
import CalculatorWrapper from '../components/calculators/CalculatorWrapper';
import DeadlineCalendar from '../components/DeadlineCalendar';
import { obligationsData, categories } from '../data/obligations';

export default function CategoryPage() {
  const location = useLocation();
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
    // If this is a specific calculator URL, auto-select it
    if (isSpecificCalculator && specificCalculator) {
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

  const isCalculator = selectedItem?.type === 'calculator';

  return (
    <>
      <Helmet>
        <title>
          {isSpecificCalculator && specificCalculator
            ? `${specificCalculator.name} - Assistente Contábil`
            : `${categoryInfo?.name || 'Categoria'} - Assistente Contábil`}
        </title>
        <meta
          name="description"
          content={
            isSpecificCalculator && specificCalculator
              ? `${specificCalculator.description} - Ferramenta online gratuita`
              : `Consulte informações sobre obrigações ${categoryInfo?.name.toLowerCase() || 'contábeis'} e tire suas dúvidas com nosso assistente.`
          }
        />
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
                  {category === 'calculadoras'
                    ? 'Ferramentas para cálculos contábeis e tributários'
                    : 'Selecione uma obrigação para ver detalhes e conversar com o assistente'}
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
