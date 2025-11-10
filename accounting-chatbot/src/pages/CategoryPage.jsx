import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import ObligationCard from '../components/ObligationCard';
import Chatbot from '../components/Chatbot';
import CalculatorWrapper from '../components/calculators/CalculatorWrapper';
import { obligationsData, categories } from '../data/obligations';

export default function CategoryPage() {
  const { category } = useParams();
  const [selectedItem, setSelectedItem] = useState(null);

  const categoryData = obligationsData[category] || [];
  const categoryInfo = categories.find(c => c.id === category);

  useEffect(() => {
    setSelectedItem(null);
  }, [category]);

  const handleSelectItem = (item) => {
    setSelectedItem(item);
  };

  const isCalculator = selectedItem?.type === 'calculator';

  return (
    <>
      <Helmet>
        <title>{categoryInfo?.name || 'Categoria'} - Assistente Contábil</title>
        <meta
          name="description"
          content={`Consulte informações sobre obrigações ${categoryInfo?.name.toLowerCase() || 'contábeis'} e tire suas dúvidas com nosso assistente.`}
        />
      </Helmet>

      <div className="flex-1 flex overflow-hidden">
        {/* Left Column - Cards Grid */}
        <div className="w-1/2 border-r border-gray-200 overflow-y-auto p-6 bg-gray-50">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            {categoryInfo?.name || 'Categoria'}
          </h1>
          <p className="text-gray-600 mb-6">
            {category === 'calculadoras'
              ? 'Ferramentas para cálculos contábeis e tributários'
              : 'Selecione uma obrigação para ver detalhes e conversar com o assistente'}
          </p>

          <div className="grid gap-4">
            {categoryData.map((item) => (
              <ObligationCard
                key={item.id}
                obligation={item}
                onClick={handleSelectItem}
                isSelected={selectedItem?.id === item.id}
              />
            ))}
          </div>
        </div>

        {/* Right Column - Chat or Calculator */}
        <div className="w-1/2 flex flex-col bg-white">
          {isCalculator ? (
            <CalculatorWrapper calculatorId={selectedItem.id} />
          ) : (
            <Chatbot selectedObligation={selectedItem} />
          )}
        </div>
      </div>
    </>
  );
}
