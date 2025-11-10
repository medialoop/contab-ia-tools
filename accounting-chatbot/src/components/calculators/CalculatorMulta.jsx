import { useState } from 'react';
import { InformationCircleIcon } from '@heroicons/react/24/outline';

export default function CalculatorMulta() {
  const [obligationType, setObligationType] = useState('declaracao');
  const [daysLate, setDaysLate] = useState('');
  const [taxValue, setTaxValue] = useState('');
  const [result, setResult] = useState(null);

  const calculatePenalty = () => {
    const daysLateValue = parseInt(daysLate) || 0;
    const taxValueNum = parseFloat(taxValue) || 0;

    if (daysLateValue <= 0) {
      alert('Por favor, insira um número de dias válido');
      return;
    }

    let penalty = 0;
    let description = '';

    if (obligationType === 'declaracao') {
      // Multa para declarações (ECF, ECD, etc.)
      // Geralmente R$ 500,00 por mês ou fração (pessoa jurídica inativa)
      // ou R$ 1.500,00 por mês ou fração (pessoa jurídica ativa)
      const months = Math.ceil(daysLateValue / 30);
      penalty = months * 1500; // Assumindo PJ ativa
      description = `Multa: R$ 1.500,00 por mês ou fração (PJ ativa) × ${months} ${months > 1 ? 'meses' : 'mês'}`;
    } else {
      // Multa para tributos
      // 0,33% por dia de atraso, limitado a 20%
      const dailyRate = 0.0033;
      const maxRate = 0.20;
      const rate = Math.min(dailyRate * daysLateValue, maxRate);
      penalty = taxValueNum * rate;
      description = `Multa de ${(rate * 100).toFixed(2)}% sobre o valor do tributo (0,33% ao dia, limitado a 20%)`;
    }

    setResult({
      daysLate: daysLateValue,
      months: Math.ceil(daysLateValue / 30),
      obligationType,
      taxValue: taxValueNum,
      penalty,
      description,
      total: taxValueNum + penalty,
    });
  };

  return (
    <div className="h-full overflow-y-auto p-6 bg-gray-50">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Calculadora de Multa por Atraso
        </h2>
        <p className="text-gray-600 mb-6">
          Calcule a multa por atraso na entrega de obrigações ou pagamento de tributos
        </p>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
          <div className="flex items-start">
            <InformationCircleIcon className="w-5 h-5 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
            <div className="text-sm text-blue-800">
              <p className="font-medium mb-1">Fonte oficial:</p>
              <a
                href="https://www.gov.br/receitafederal/pt-br"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-blue-900"
              >
                Receita Federal - Legislação Tributária
              </a>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Tipo de Obrigação
          </label>
          <select
            value={obligationType}
            onChange={(e) => setObligationType(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent mb-4"
          >
            <option value="declaracao">Declaração (ECF, ECD, DCTF, etc.)</option>
            <option value="tributo">Pagamento de Tributo</option>
          </select>

          <label className="block text-sm font-medium text-gray-700 mb-2">
            Dias de Atraso
          </label>
          <input
            type="number"
            value={daysLate}
            onChange={(e) => setDaysLate(e.target.value)}
            placeholder="Ex: 30"
            min="1"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent mb-4"
          />

          {obligationType === 'tributo' && (
            <>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Valor do Tributo (R$)
              </label>
              <input
                type="number"
                value={taxValue}
                onChange={(e) => setTaxValue(e.target.value)}
                placeholder="Ex: 5000.00"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent mb-4"
              />
            </>
          )}

          <button
            onClick={calculatePenalty}
            className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition-colors duration-200"
          >
            Calcular Multa
          </button>
        </div>

        {result && (
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Resultado</h3>
            <div className="space-y-3">
              <div className="flex justify-between border-b border-gray-200 pb-2">
                <span className="text-gray-700">Dias de Atraso:</span>
                <span className="font-semibold">{result.daysLate} dias</span>
              </div>
              {result.obligationType === 'tributo' && (
                <div className="flex justify-between border-b border-gray-200 pb-2">
                  <span className="text-gray-700">Valor do Tributo:</span>
                  <span className="font-semibold">R$ {result.taxValue.toFixed(2)}</span>
                </div>
              )}
              <div className="bg-yellow-50 p-3 rounded-lg border border-yellow-200">
                <p className="text-sm text-gray-700">{result.description}</p>
              </div>
              <div className="flex justify-between border-t border-gray-300 pt-2">
                <span className="text-gray-900 font-semibold">Multa Calculada:</span>
                <span className="font-bold text-red-600">R$ {result.penalty.toFixed(2)}</span>
              </div>
              {result.obligationType === 'tributo' && (
                <div className="flex justify-between pt-2">
                  <span className="text-gray-900 font-semibold">Total a Pagar:</span>
                  <span className="font-bold text-indigo-600">R$ {result.total.toFixed(2)}</span>
                </div>
              )}
            </div>
            <p className="text-xs text-gray-500 mt-4">
              * Cálculo estimativo. Multas variam conforme a natureza da obrigação e legislação específica. Consulte um contador para valores exatos.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
