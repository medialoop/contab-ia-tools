import * as HeroIcons from '@heroicons/react/24/outline';

export default function ObligationCard({ obligation, onClick, isSelected }) {
  const IconComponent = HeroIcons[obligation.icon] || HeroIcons.DocumentTextIcon;

  return (
    <button
      onClick={() => onClick(obligation)}
      className={`
        w-full text-left p-6 rounded-lg border-2 transition-all duration-200
        ${
          isSelected
            ? 'border-primary-600 bg-primary-50 shadow-md'
            : 'border-gray-200 bg-white hover:border-primary-300 hover:shadow-md'
        }
      `}
    >
      <div className="flex items-start space-x-4">
        <div className={`
          flex-shrink-0 p-3 rounded-lg
          ${isSelected ? 'bg-primary-600' : 'bg-primary-100'}
        `}>
          <IconComponent className={`w-6 h-6 ${isSelected ? 'text-white' : 'text-primary-600'}`} />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-semibold text-gray-900 mb-1">
            {obligation.name}
          </h3>
          <p className="text-sm text-gray-600 line-clamp-2">
            {obligation.description}
          </p>
        </div>
      </div>
    </button>
  );
}
