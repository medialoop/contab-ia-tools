import { CalendarDaysIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

export default function DeadlineCalendar({ category, onSelectObligation, obligations }) {
  // Definir os prazos importantes por categoria
  const deadlines = {
    nacionais: [
      { day: 7, description: 'FGTS', monthly: true },
      { day: 15, description: 'DCTFWeb', monthly: true },
      { day: 20, description: 'DARF', monthly: true },
    ],
    estaduais: [
      { day: 10, description: 'GIA (alguns estados)', monthly: true },
      { day: 15, description: 'EFD-ICMS/IPI', monthly: true },
    ],
    municipais: [
      { day: 5, description: 'ISS', monthly: true },
      { day: 10, description: 'DES/DMISS', monthly: true },
    ],
    trabalhistas: [
      { day: 7, description: 'FGTS/CAGED', monthly: true },
      { day: 15, description: 'eSocial - Eventos Periódicos', monthly: true },
    ],
  };

  const categoryDeadlines = deadlines[category] || [];

  // Obter mês e ano atual
  const now = new Date();
  const currentMonth = now.toLocaleDateString('pt-BR', { month: 'long' });
  const currentYear = now.getFullYear();
  const currentDay = now.getDate();

  // Obter o primeiro e último dia do mês
  const firstDay = new Date(now.getFullYear(), now.getMonth(), 1);
  const lastDay = new Date(now.getFullYear(), now.getMonth() + 1, 0);
  const daysInMonth = lastDay.getDate();
  const startingDayOfWeek = firstDay.getDay();

  // Criar array de dias
  const days = [];
  for (let i = 0; i < startingDayOfWeek; i++) {
    days.push(null);
  }
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(i);
  }

  // Verificar se um dia tem prazo
  const hasDeadline = (day) => {
    return categoryDeadlines.some(d => d.day === day);
  };

  const getDeadlineDescription = (day) => {
    const deadline = categoryDeadlines.find(d => d.day === day);
    return deadline ? deadline.description : '';
  };

  const isToday = (day) => day === currentDay;
  const isPast = (day) => day < currentDay;

  return (
    <div className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden">
      <div className="p-4 border-b border-gray-200 bg-gradient-to-r from-primary-50 to-blue-50">
        <div className="flex items-center space-x-2">
          <CalendarDaysIcon className="w-5 h-5 text-primary-600" />
          <h3 className="font-heading text-lg font-bold text-gray-900">
            {currentMonth.charAt(0).toUpperCase() + currentMonth.slice(1)} {currentYear}
          </h3>
        </div>
      </div>

      <div className="p-4">

      {/* Grid de dias da semana */}
      <div className="grid grid-cols-7 gap-1 mb-2">
        {['D', 'S', 'T', 'Q', 'Q', 'S', 'S'].map((day, i) => (
          <div key={i} className="text-center text-xs font-semibold text-gray-600 py-1">
            {day}
          </div>
        ))}
      </div>

      {/* Grid de dias do mês */}
      <div className="grid grid-cols-7 gap-1">
        {days.map((day, index) => {
          if (day === null) {
            return <div key={index} className="aspect-square" />;
          }

          const hasEvent = hasDeadline(day);
          const todayClass = isToday(day);
          const pastClass = isPast(day);

          return (
            <div
              key={index}
              className={`
                aspect-square flex items-center justify-center text-xs font-medium rounded
                relative group cursor-default
                ${todayClass ? 'bg-primary-600 text-white font-bold' : ''}
                ${hasEvent && !todayClass ? 'bg-red-100 text-red-700 font-semibold' : ''}
                ${!hasEvent && !todayClass ? 'text-gray-700' : ''}
                ${pastClass && !todayClass && !hasEvent ? 'text-gray-400' : ''}
              `}
            >
              {day}
              {hasEvent && (
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-red-600 rounded-full" />
              )}
              {hasEvent && (
                <div className="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-2 hidden group-hover:block z-10 w-32">
                  <div className="bg-gray-900 text-white text-xs rounded py-1 px-2 text-center">
                    {getDeadlineDescription(day)}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      </div>

      {/* Lista de Obrigações */}
      {obligations && obligations.length > 0 && (
        <div className="border-t border-gray-200 bg-gray-50">
          <div className="p-4">
            <h4 className="font-heading text-sm font-bold text-gray-900 mb-3">
              Obrigações desta categoria
            </h4>
            <div className="space-y-2 max-h-80 overflow-y-auto">
              {obligations.map((obligation) => (
                <button
                  key={obligation.id}
                  onClick={() => onSelectObligation && onSelectObligation(obligation)}
                  className="w-full text-left p-3 bg-white hover:bg-primary-50 border border-gray-200 hover:border-primary-300 rounded-lg transition-all duration-200 group"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="font-semibold text-gray-900 text-sm group-hover:text-primary-700">
                        {obligation.name}
                      </div>
                      <div className="text-xs text-gray-600 mt-1">
                        {obligation.description}
                      </div>
                    </div>
                    <ChevronRightIcon className="w-4 h-4 text-gray-400 group-hover:text-primary-600 ml-2" />
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Próximos Prazos */}
          {categoryDeadlines.length > 0 && (
            <div className="px-4 pb-4">
              <h4 className="font-heading text-sm font-bold text-gray-900 mb-2">
                Próximos prazos importantes
              </h4>
              <div className="space-y-2">
                {categoryDeadlines
                  .filter(d => d.day >= currentDay)
                  .sort((a, b) => a.day - b.day)
                  .slice(0, 3)
                  .map((deadline, i) => (
                    <div key={i} className="flex items-center text-sm bg-red-50 border border-red-200 rounded p-2">
                      <span className="w-8 font-bold text-red-600">{deadline.day}</span>
                      <span className="text-gray-700">{deadline.description}</span>
                    </div>
                  ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
