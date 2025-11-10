import { useState } from 'react';
import { InformationCircleIcon } from '@heroicons/react/24/outline';

export default function CalculatorINSS() {
  const [salary, setSalary] = useState('');
  const [result, setResult] = useState(null);

  const calculateINSS = () => {
    const salaryValue = parseFloat(salary);
    if (isNaN(salaryValue) || salaryValue <= 0) {
      alert('Por favor, insira um salário válido');
      return;
    }

    // Tabela INSS 2025 (valores de referência)
    // Fonte: https://www.gov.br/inss/pt-br
    const brackets = [
      { limit: 1412.00, rate: 0.075 },
      { limit: 2666.68, rate: 0.09 },
      { limit: 4000.03, rate: 0.12 },
      { limit: 7786.02, rate: 0.14 },
    ];

    let inssEmployee = 0;
    let remainingSalary = Math.min(salaryValue, brackets[brackets.length - 1].limit);

    for (let i = 0; i < brackets.length; i++) {
      const previousLimit = i > 0 ? brackets[i - 1].limit : 0;
      const currentLimit = brackets[i].limit;
      const rate = brackets[i].rate;

      if (remainingSalary > 0) {
        const taxableAmount = Math.min(remainingSalary, currentLimit - previousLimit);
        inssEmployee += taxableAmount * rate;
        remainingSalary -= taxableAmount;
      }
    }

    // INSS patronal (empresa) - aproximadamente 20% sobre o salário bruto
    const inssEmployer = salaryValue * 0.20;

    setResult({
      salary: salaryValue,
      inssEmployee: inssEmployee,
      inssEmployer: inssEmployer,
      total: inssEmployee + inssEmployer,
      netSalary: salaryValue - inssEmployee,
    });
  };

  return (
    <div className="h-full overflow-y-auto p-6 bg-gray-50">
      <div className="max-w-2xl mx-auto">
        <h2 className="font-heading text-2xl font-bold text-gray-900 mb-2">
          Calculadora de INSS
        </h2>
        <p className="text-gray-600 mb-6">
          Calcule a contribuição ao INSS do empregado e da empresa
        </p>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
          <div className="flex items-start">
            <InformationCircleIcon className="w-5 h-5 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
            <div className="text-sm text-blue-800">
              <p className="font-medium mb-1">Fonte oficial:</p>
              <a
                href="https://www.gov.br/inss/pt-br"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-blue-900"
              >
                Portal do INSS - Tabela de Contribuição 2025
              </a>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Salário Bruto (R$)
          </label>
          <input
            type="number"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && calculateINSS()}
            placeholder="Ex: 3000.00"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent mb-4"
          />
          <button
            onClick={calculateINSS}
            className="w-full bg-primary-600 text-white py-2 rounded-lg hover:bg-primary-700 transition-colors duration-200"
          >
            Calcular
          </button>
        </div>

        {result && (
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="font-heading text-lg font-semibold text-gray-900 mb-4">Resultado</h3>
            <div className="space-y-3">
              <div className="flex justify-between border-b border-gray-200 pb-2">
                <span className="text-gray-700">Salário Bruto:</span>
                <span className="font-semibold">R$ {result.salary.toFixed(2)}</span>
              </div>
              <div className="flex justify-between border-b border-gray-200 pb-2">
                <span className="text-gray-700">INSS Empregado:</span>
                <span className="font-semibold text-red-600">- R$ {result.inssEmployee.toFixed(2)}</span>
              </div>
              <div className="flex justify-between border-b border-gray-200 pb-2">
                <span className="text-gray-700">Salário Líquido (após INSS):</span>
                <span className="font-semibold text-green-600">R$ {result.netSalary.toFixed(2)}</span>
              </div>
              <div className="flex justify-between border-b border-gray-200 pb-2">
                <span className="text-gray-700">INSS Patronal (Empresa):</span>
                <span className="font-semibold">R$ {result.inssEmployer.toFixed(2)}</span>
              </div>
              <div className="flex justify-between pt-2">
                <span className="text-gray-900 font-semibold">Total INSS:</span>
                <span className="font-bold text-primary-600">R$ {result.total.toFixed(2)}</span>
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-4">
              * Cálculo baseado na tabela progressiva do INSS 2025. Valores podem sofrer alterações conforme legislação vigente.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
