import { Link, useLocation } from 'react-router-dom';
import { categories } from '../data/obligations';

export default function Header() {
  const location = useLocation();

  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center h-16 sm:h-20 py-2 sm:py-4">
          <Link to="/" className="flex items-center space-x-2 sm:space-x-3">
            <div className="bg-gradient-to-r from-primary-500 to-primary-900 text-white p-1.5 sm:p-2 rounded-lg shadow-md">
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-lg sm:text-2xl font-bold font-heading bg-gradient-to-r from-primary-500 to-primary-900 bg-clip-text text-transparent">
                Assistente Contábil
              </span>
              <span className="text-xs sm:text-sm text-gray-600 font-medium font-heading">
                Obrigações e Cálculos Contábeis
              </span>
            </div>
          </Link>
        </div>
      </div>

      <nav className="border-t border-primary-950 bg-primary-900">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="flex justify-center space-x-1 sm:space-x-2 overflow-x-auto md:overflow-x-visible py-1">
            {categories
              .filter(category => !['impostos', 'cnae'].includes(category.id))
              .map((category) => (
                <Link
                  key={category.id}
                  to={category.path}
                  className={`
                    py-2.5 px-3 sm:py-3 sm:px-6 inline-flex items-center font-heading font-medium text-xs sm:text-sm whitespace-nowrap
                    transition-all duration-200 rounded-t-lg relative
                    ${
                      isActive(category.path)
                        ? 'bg-primary-700 text-white shadow-sm border-b-2 border-white'
                        : 'text-blue-100 hover:text-white hover:bg-primary-800'
                    }
                  `}
                >
                  {category.name}
                </Link>
              ))}
          </div>
        </div>
      </nav>
    </header>
  );
}
