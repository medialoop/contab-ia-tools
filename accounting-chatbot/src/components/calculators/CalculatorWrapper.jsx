import CalculatorINSS from './CalculatorINSS';
import CalculatorIRRF from './CalculatorIRRF';
import CalculatorSimples from './CalculatorSimples';
import CalculatorMulta from './CalculatorMulta';
import CalculatorJuros from './CalculatorJuros';
import CalculatorDIMOB from './CalculatorDIMOB';

export default function CalculatorWrapper({ calculatorId }) {
  const calculators = {
    'calc-inss': CalculatorINSS,
    'calc-irrf': CalculatorIRRF,
    'calc-simples': CalculatorSimples,
    'calc-multa': CalculatorMulta,
    'calc-juros': CalculatorJuros,
    'calc-dimob': CalculatorDIMOB,
  };

  const CalculatorComponent = calculators[calculatorId];

  if (!CalculatorComponent) {
    return (
      <div className="h-full flex items-center justify-center p-8">
        <div className="text-center">
          <p className="text-gray-600">Calculadora não encontrada</p>
        </div>
      </div>
    );
  }

  return <CalculatorComponent />;
}
