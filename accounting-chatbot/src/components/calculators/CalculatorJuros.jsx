import { useState } from 'react';
import { InformationCircleIcon } from '@heroicons/react/24/outline';

export default function CalculatorJuros() {
  const [taxValue, setTaxValue] = useState('');
  const [daysLate, setDaysLate] = useState('');
  const [result, setResult] = useState(null);

  const calculateInterest = () => {
    const taxValueNum = parseFloat(taxValue);
    const daysLateValue = parseInt(daysLate);

    if (isNaN(taxValueNum) || taxValueNum <= 0) {
      alert('Por favor, insira um valor de tributo válido');
      return;
    }

    if (isNaN(daysLateValue) || daysLateValue <= 0) {
      alert('Por favor, insira um número de dias válido');
      return;
    }

    // Taxa SELIC mensal aproximada: 1% ao mês (valor referencial)
    // Fonte: https://www.bcb.gov.br/
    const selicMonthlyRate = 0.01;
    const months = daysLateValue / 30;

    // Juros simples baseados na SELIC
    const interest = taxValueNum * selicMonthlyRate * months;

    // Multa de mora: 0,33% ao dia, limitado a 20%
    const penaltyRate = Math.min(0.0033 * daysLateValue, 0.20);
    const penalty = taxValueNum * penaltyRate;

    const total = taxValueNum + interest + penalty;

    setResult({
      taxValue: taxValueNum,
      daysLate: daysLateValue,
      months: months.toFixed(2),
      selicRate: (selicMonthlyRate * 100).toFixed(2),
      interest,
      penalty,
      total,
    });
  };

  return (
    <div className="h-full overflow-y-auto p-6 bg-gray-50">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Calculadora de Juros sobre Tributos
        </h2>
        <p className="text-gray-600 mb-6">
          Calcule os juros (SELIC) e multa sobre tributos em atraso
        </p>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
          <div className="flex items-start">
            <InformationCircleIcon className="w-5 h-5 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
            <div className="text-sm text-blue-800">
              <p className="font-medium mb-1">Fonte oficial:</p>
              <a
                href="https://www.bcb.gov.br/controleinflacao/taxaselic"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-blue-900"
              >
                Banco Central - Taxa SELIC
              </a>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Valor do Tributo (R$)
          </label>
          <input
            type="number"
            value={taxValue}
            onChange={(e) => setTaxValue(e.target.value)}
            placeholder="Ex: 10000.00"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent mb-4"
          />

          <label className="block text-sm font-medium text-gray-700 mb-2">
            Dias em Atraso
          </label>
          <input
            type="number"
            value={daysLate}
            onChange={(e) => setDaysLate(e.target.value)}
            placeholder="Ex: 90"
            min="1"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent mb-4"
          />

          <button
            onClick={calculateInterest}
            className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition-colors duration-200"
          >
            Calcular Juros
          </button>
        </div>

        {result && (
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Resultado</h3>
            <div className="space-y-3">
              <div className="flex justify-between border-b border-gray-200 pb-2">
                <span className="text-gray-700">Valor do Tributo:</span>
                <span className="font-semibold">R$ {result.taxValue.toFixed(2)}</span>
              </div>
              <div className="flex justify-between border-b border-gray-200 pb-2">
                <span className="text-gray-700">Dias em Atraso:</span>
                <span className="font-semibold">{result.daysLate} dias ({result.months} meses)</span>
              </div>
              <div className="flex justify-between border-b border-gray-200 pb-2">
                <span className="text-gray-700">Taxa SELIC mensal (aprox.):</span>
                <span className="font-semibold">{result.selicRate}%</span>
              </div>
              <div className="flex justify-between border-b border-gray-200 pb-2">
                <span className="text-gray-700">Juros (SELIC):</span>
                <span className="font-semibold text-orange-600">R$ {result.interest.toFixed(2)}</span>
              </div>
              <div className="flex justify-between border-b border-gray-200 pb-2">
                <span className="text-gray-700">Multa de Mora (0,33%/dia):</span>
                <span className="font-semibold text-red-600">R$ {result.penalty.toFixed(2)}</span>
              </div>
              <div className="flex justify-between pt-2 border-t border-gray-300">
                <span className="text-gray-900 font-semibold">Total a Pagar:</span>
                <span className="font-bold text-indigo-600">R$ {result.total.toFixed(2)}</span>
              </div>
            </div>
            <div className="mt-4 bg-gray-50 p-3 rounded-lg">
              <p className="text-sm text-gray-700 font-medium mb-2">Composição:</p>
              <ul className="text-xs text-gray-600 space-y-1">
                <li>• Tributo original: R$ {result.taxValue.toFixed(2)}</li>
                <li>• Juros SELIC: R$ {result.interest.toFixed(2)}</li>
                <li>• Multa de mora: R$ {result.penalty.toFixed(2)}</li>
              </ul>
            </div>
            <p className="text-xs text-gray-500 mt-4">
              * Cálculo estimativo usando taxa SELIC referencial. A taxa SELIC varia mensalmente. Para cálculo preciso, consulte as taxas SELIC oficiais do período ou use o sistema da Receita Federal.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
