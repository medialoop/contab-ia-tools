import { useState } from 'react';
import { InformationCircleIcon } from '@heroicons/react/24/outline';

export default function CalculatorDIMOB() {
  const [transactionValue, setTransactionValue] = useState('');
  const [daysLate, setDaysLate] = useState('');
  const [companyType, setCompanyType] = useState('active');
  const [result, setResult] = useState(null);

  const calculateDIMOB = () => {
    const transactionVal = parseFloat(transactionValue) || 0;
    const daysLateVal = parseInt(daysLate) || 0;

    if (daysLateVal <= 0) {
      alert('Por favor, insira um número válido de dias de atraso');
      return;
    }

    // Multa DIMOB
    // R$ 500,00 por mês (inativa) ou R$ 1.500,00 por mês (ativa)
    // Limitada a 20% do valor das transações
    const months = Math.ceil(daysLateVal / 30);
    const baseMulta = companyType === 'active' ? 1500 : 500;
    const multaCalculada = months * baseMulta;

    // Limite de 20% do valor das transações
    const limite = transactionVal * 0.20;
    const multa = transactionVal > 0 ? Math.min(multaCalculada, limite) : multaCalculada;

    setResult({
      transactionValue: transactionVal,
      daysLate: daysLateVal,
      months,
      companyType: companyType === 'active' ? 'Ativa' : 'Inativa',
      baseMulta,
      multaCalculada,
      limite: limite,
      multa,
      isLimited: transactionVal > 0 && multaCalculada > limite,
    });
  };

  return (
    <div className="h-full overflow-y-auto p-6 bg-gray-50">
      <div className="max-w-2xl mx-auto">
        <h2 className="font-heading text-2xl font-bold text-gray-900 mb-2">
          Calculadora de Multa DIMOB
        </h2>
        <p className="text-gray-600 mb-6">
          Calcule a multa por atraso na entrega da DIMOB
        </p>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
          <div className="flex items-start">
            <InformationCircleIcon className="w-5 h-5 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
            <div className="text-sm text-blue-800">
              <p className="font-medium mb-1">Fonte oficial:</p>
              <a
                href="https://www.gov.br/receitafederal/pt-br/assuntos/orientacao-tributaria/declaracoes-e-demonstrativos"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-blue-900"
              >
                Receita Federal - DIMOB
              </a>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Tipo de Empresa
          </label>
          <select
            value={companyType}
            onChange={(e) => setCompanyType(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent mb-4"
          >
            <option value="active">Pessoa Jurídica Ativa</option>
            <option value="inactive">Pessoa Jurídica Inativa</option>
          </select>

          <label className="block text-sm font-medium text-gray-700 mb-2">
            Dias de Atraso
          </label>
          <input
            type="number"
            value={daysLate}
            onChange={(e) => setDaysLate(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && calculateDIMOB()}
            placeholder="Ex: 60"
            min="1"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent mb-4"
          />

          <label className="block text-sm font-medium text-gray-700 mb-2">
            Valor das Transações Informadas (R$) - Opcional
          </label>
          <input
            type="number"
            value={transactionValue}
            onChange={(e) => setTransactionValue(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && calculateDIMOB()}
            placeholder="Ex: 500000.00"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent mb-4"
          />
          <p className="text-xs text-gray-500 mb-4">
            * Se informado, a multa será limitada a 20% do valor das transações
          </p>

          <button
            onClick={calculateDIMOB}
            className="w-full bg-primary-600 text-white py-2 rounded-lg hover:bg-primary-700 transition-colors duration-200"
          >
            Calcular Multa
          </button>
        </div>

        {result && (
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="font-heading text-lg font-semibold text-gray-900 mb-4">Resultado</h3>
            <div className="space-y-3">
              <div className="flex justify-between border-b border-gray-200 pb-2">
                <span className="text-gray-700">Tipo de Empresa:</span>
                <span className="font-semibold">{result.companyType}</span>
              </div>
              <div className="flex justify-between border-b border-gray-200 pb-2">
                <span className="text-gray-700">Dias de Atraso:</span>
                <span className="font-semibold">{result.daysLate} dias ({result.months} {result.months > 1 ? 'meses' : 'mês'})</span>
              </div>
              <div className="flex justify-between border-b border-gray-200 pb-2">
                <span className="text-gray-700">Multa Base:</span>
                <span className="font-semibold">R$ {result.baseMulta.toFixed(2)} por mês</span>
              </div>
              {result.transactionValue > 0 && (
                <>
                  <div className="flex justify-between border-b border-gray-200 pb-2">
                    <span className="text-gray-700">Valor das Transações:</span>
                    <span className="font-semibold">R$ {result.transactionValue.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-200 pb-2">
                    <span className="text-gray-700">Limite (20%):</span>
                    <span className="font-semibold">R$ {result.limite.toFixed(2)}</span>
                  </div>
                </>
              )}
              <div className="bg-yellow-50 p-3 rounded-lg border border-yellow-200">
                <p className="text-sm text-gray-700">
                  Multa calculada: R$ {result.multaCalculada.toFixed(2)}
                  {result.isLimited && (
                    <span className="block text-xs text-gray-600 mt-1">
                      (Limitada a 20% do valor das transações)
                    </span>
                  )}
                </p>
              </div>
              <div className="flex justify-between border-t border-gray-300 pt-2">
                <span className="text-gray-900 font-semibold">Multa a Pagar:</span>
                <span className="font-bold text-red-600">R$ {result.multa.toFixed(2)}</span>
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-4">
              * Cálculo conforme IN RFB nº 1.115/2010. Multa de R$ {result.baseMulta.toFixed(2)} por mês ou fração,
              {result.transactionValue > 0 ? ' limitada a 20% do valor das transações.' : ' sem limite quando não há valor de transações.'}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
