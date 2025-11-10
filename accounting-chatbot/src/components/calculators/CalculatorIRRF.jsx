import { useState } from 'react';
import { InformationCircleIcon } from '@heroicons/react/24/outline';

export default function CalculatorIRRF() {
  const [salary, setSalary] = useState('');
  const [dependents, setDependents] = useState('0');
  const [result, setResult] = useState(null);

  const calculateIRRF = () => {
    const salaryValue = parseFloat(salary);
    const dependentsCount = parseInt(dependents) || 0;

    if (isNaN(salaryValue) || salaryValue <= 0) {
      alert('Por favor, insira um salário válido');
      return;
    }

    // Valores de referência 2025
    // Fonte: https://www.gov.br/receitafederal/pt-br
    const deductionPerDependent = 189.59;
    const inssDeduction = calculateINSS(salaryValue);

    const taxableBase = salaryValue - inssDeduction - (dependentsCount * deductionPerDependent);

    // Tabela IRRF 2025
    const brackets = [
      { limit: 2259.20, rate: 0, deduction: 0 },
      { limit: 2826.65, rate: 0.075, deduction: 169.44 },
      { limit: 3751.05, rate: 0.15, deduction: 381.44 },
      { limit: 4664.68, rate: 0.225, deduction: 662.77 },
      { limit: Infinity, rate: 0.275, deduction: 896.00 },
    ];

    let irrf = 0;
    let applicableRate = 0;
    let applicableDeduction = 0;

    for (const bracket of brackets) {
      if (taxableBase <= bracket.limit) {
        applicableRate = bracket.rate;
        applicableDeduction = bracket.deduction;
        irrf = (taxableBase * bracket.rate) - bracket.deduction;
        break;
      }
    }

    irrf = Math.max(irrf, 0);

    setResult({
      salary: salaryValue,
      inssDeduction,
      dependentsDeduction: dependentsCount * deductionPerDependent,
      taxableBase,
      rate: applicableRate * 100,
      deduction: applicableDeduction,
      irrf,
      netSalary: salaryValue - inssDeduction - irrf,
    });
  };

  const calculateINSS = (salaryValue) => {
    const brackets = [
      { limit: 1412.00, rate: 0.075 },
      { limit: 2666.68, rate: 0.09 },
      { limit: 4000.03, rate: 0.12 },
      { limit: 7786.02, rate: 0.14 },
    ];

    let inss = 0;
    let remainingSalary = salaryValue;

    for (let i = 0; i < brackets.length; i++) {
      const previousLimit = i > 0 ? brackets[i - 1].limit : 0;
      const currentLimit = brackets[i].limit;
      const rate = brackets[i].rate;

      if (remainingSalary > 0) {
        const taxableAmount = Math.min(remainingSalary, currentLimit - previousLimit);
        inss += taxableAmount * rate;
        remainingSalary -= taxableAmount;
      }
    }

    return inss;
  };

  return (
    <div className="h-full overflow-y-auto p-6 bg-gray-50">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Calculadora de IRRF
        </h2>
        <p className="text-gray-600 mb-6">
          Calcule o Imposto de Renda Retido na Fonte sobre salário
        </p>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
          <div className="flex items-start">
            <InformationCircleIcon className="w-5 h-5 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
            <div className="text-sm text-blue-800">
              <p className="font-medium mb-1">Fonte oficial:</p>
              <a
                href="https://www.gov.br/receitafederal/pt-br/assuntos/orientacao-tributaria/tributos/irpf-imposto-de-renda-pessoa-fisica"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-blue-900"
              >
                Receita Federal - Tabela do IRRF 2025
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
            placeholder="Ex: 5000.00"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent mb-4"
          />

          <label className="block text-sm font-medium text-gray-700 mb-2">
            Número de Dependentes
          </label>
          <input
            type="number"
            value={dependents}
            onChange={(e) => setDependents(e.target.value)}
            placeholder="0"
            min="0"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent mb-4"
          />

          <button
            onClick={calculateIRRF}
            className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition-colors duration-200"
          >
            Calcular
          </button>
        </div>

        {result && (
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Resultado</h3>
            <div className="space-y-3">
              <div className="flex justify-between border-b border-gray-200 pb-2">
                <span className="text-gray-700">Salário Bruto:</span>
                <span className="font-semibold">R$ {result.salary.toFixed(2)}</span>
              </div>
              <div className="flex justify-between border-b border-gray-200 pb-2">
                <span className="text-gray-700">(-) INSS:</span>
                <span className="text-red-600">R$ {result.inssDeduction.toFixed(2)}</span>
              </div>
              <div className="flex justify-between border-b border-gray-200 pb-2">
                <span className="text-gray-700">(-) Dependentes:</span>
                <span className="text-red-600">R$ {result.dependentsDeduction.toFixed(2)}</span>
              </div>
              <div className="flex justify-between border-b border-gray-200 pb-2">
                <span className="text-gray-700">Base de Cálculo:</span>
                <span className="font-semibold">R$ {result.taxableBase.toFixed(2)}</span>
              </div>
              <div className="flex justify-between border-b border-gray-200 pb-2">
                <span className="text-gray-700">Alíquota aplicada:</span>
                <span className="font-semibold">{result.rate}%</span>
              </div>
              <div className="flex justify-between border-b border-gray-200 pb-2">
                <span className="text-gray-700">(-) IRRF:</span>
                <span className="font-semibold text-red-600">R$ {result.irrf.toFixed(2)}</span>
              </div>
              <div className="flex justify-between pt-2">
                <span className="text-gray-900 font-semibold">Salário Líquido:</span>
                <span className="font-bold text-green-600">R$ {result.netSalary.toFixed(2)}</span>
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-4">
              * Cálculo baseado na tabela progressiva do IRRF 2025. Não inclui outras deduções possíveis (pensão alimentícia, previdência privada, etc.).
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
