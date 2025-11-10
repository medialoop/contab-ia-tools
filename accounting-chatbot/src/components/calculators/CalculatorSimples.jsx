import { useState } from 'react';
import { InformationCircleIcon } from '@heroicons/react/24/outline';

export default function CalculatorSimples() {
  const [revenue, setRevenue] = useState('');
  const [annex, setAnnex] = useState('1');
  const [result, setResult] = useState(null);

  const calculateSimples = () => {
    const revenueValue = parseFloat(revenue);
    if (isNaN(revenueValue) || revenueValue <= 0) {
      alert('Por favor, insira uma receita válida');
      return;
    }

    // Tabelas simplificadas - Anexo I a V
    // Fonte: http://www8.receita.fazenda.gov.br/SimplesNacional/
    const tables = {
      '1': [ // Comércio
        { limit: 180000, rate: 4.0 },
        { limit: 360000, rate: 7.3 },
        { limit: 720000, rate: 9.5 },
        { limit: 1800000, rate: 10.7 },
        { limit: 3600000, rate: 14.3 },
        { limit: 4800000, rate: 19.0 },
      ],
      '3': [ // Serviços
        { limit: 180000, rate: 6.0 },
        { limit: 360000, rate: 11.2 },
        { limit: 720000, rate: 13.5 },
        { limit: 1800000, rate: 16.0 },
        { limit: 3600000, rate: 21.0 },
        { limit: 4800000, rate: 33.0 },
      ],
    };

    const table = tables[annex] || tables['1'];
    let applicableRate = table[table.length - 1].rate;

    for (const bracket of table) {
      if (revenueValue <= bracket.limit) {
        applicableRate = bracket.rate;
        break;
      }
    }

    const tax = (revenueValue * applicableRate) / 100;

    setResult({
      revenue: revenueValue,
      annex: annex === '1' ? 'I - Comércio' : 'III - Serviços',
      rate: applicableRate,
      tax,
      netRevenue: revenueValue - tax,
    });
  };

  return (
    <div className="h-full overflow-y-auto p-6 bg-gray-50">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Calculadora Simples Nacional
        </h2>
        <p className="text-gray-600 mb-6">
          Estime a tributação pelo regime do Simples Nacional
        </p>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
          <div className="flex items-start">
            <InformationCircleIcon className="w-5 h-5 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
            <div className="text-sm text-blue-800">
              <p className="font-medium mb-1">Fonte oficial:</p>
              <a
                href="http://www8.receita.fazenda.gov.br/SimplesNacional/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-blue-900"
              >
                Portal do Simples Nacional - Receita Federal
              </a>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Receita Bruta Mensal (R$)
          </label>
          <input
            type="number"
            value={revenue}
            onChange={(e) => setRevenue(e.target.value)}
            placeholder="Ex: 50000.00"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent mb-4"
          />

          <label className="block text-sm font-medium text-gray-700 mb-2">
            Anexo
          </label>
          <select
            value={annex}
            onChange={(e) => setAnnex(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent mb-4"
          >
            <option value="1">Anexo I - Comércio</option>
            <option value="3">Anexo III - Serviços</option>
          </select>

          <button
            onClick={calculateSimples}
            className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition-colors duration-200"
          >
            Calcular
          </button>
        </div>

        {result && (
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Resultado Estimado</h3>
            <div className="space-y-3">
              <div className="flex justify-between border-b border-gray-200 pb-2">
                <span className="text-gray-700">Receita Bruta:</span>
                <span className="font-semibold">R$ {result.revenue.toFixed(2)}</span>
              </div>
              <div className="flex justify-between border-b border-gray-200 pb-2">
                <span className="text-gray-700">Anexo:</span>
                <span className="font-semibold">{result.annex}</span>
              </div>
              <div className="flex justify-between border-b border-gray-200 pb-2">
                <span className="text-gray-700">Alíquota Efetiva:</span>
                <span className="font-semibold">{result.rate}%</span>
              </div>
              <div className="flex justify-between border-b border-gray-200 pb-2">
                <span className="text-gray-700">Tributo a Pagar:</span>
                <span className="font-semibold text-red-600">R$ {result.tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between pt-2">
                <span className="text-gray-900 font-semibold">Receita Líquida:</span>
                <span className="font-bold text-green-600">R$ {result.netRevenue.toFixed(2)}</span>
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-4">
              * Este é um cálculo simplificado e estimativo. O cálculo real depende da receita bruta acumulada dos últimos 12 meses. Consulte um contador para cálculo preciso.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
