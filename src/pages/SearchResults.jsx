import { useState, useEffect, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Helmet } from '@dr.pogodin/react-helmet';
import { MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { obligationsData, categories } from '../data/obligations';

export default function SearchResults() {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const [searchInput, setSearchInput] = useState(query);

  useEffect(() => {
    setSearchInput(query);
  }, [query]);

  // Search logic - filter across all categories
  const searchResults = useMemo(() => {
    if (!query.trim()) return [];

    const searchTerms = query.toLowerCase().trim().split(/\s+/);
    const results = [];

    // Search through all categories
    Object.entries(obligationsData).forEach(([categoryKey, obligations]) => {
      if (!Array.isArray(obligations)) return;

      obligations.forEach((obligation) => {
        // Calculate relevance score
        let score = 0;
        const searchableText = [
          obligation.name,
          obligation.description,
          obligation.content?.title || '',
          obligation.content?.summary || '',
          ...(obligation.content?.details || []),
        ].join(' ').toLowerCase();

        // Check if all search terms are present
        const matchesAll = searchTerms.every(term => searchableText.includes(term));

        if (matchesAll) {
          // Calculate score based on matches
          searchTerms.forEach(term => {
            if (obligation.name.toLowerCase().includes(term)) score += 10;
            if (obligation.description.toLowerCase().includes(term)) score += 5;
            if (searchableText.includes(term)) score += 1;
          });

          // Get category info
          const categoryInfo = categories.find(cat => cat.id === categoryKey);

          results.push({
            ...obligation,
            category: categoryKey,
            categoryName: categoryInfo?.name || categoryKey,
            categoryPath: categoryInfo?.path || `/${categoryKey}`,
            score,
          });
        }
      });
    });

    // Sort by relevance score (highest first)
    return results.sort((a, b) => b.score - a.score);
  }, [query]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchInput.trim()) {
      setSearchParams({ q: searchInput.trim() });
    }
  };

  const clearSearch = () => {
    setSearchInput('');
    setSearchParams({});
  };

  return (
    <>
      <Helmet>
        <title>
          {query ? `Busca: ${query} - Assistente Contábil` : 'Buscar - Assistente Contábil'}
        </title>
        <meta
          name="description"
          content={`Resultados da busca por: ${query}`}
        />
      </Helmet>

      <div className="flex-1 overflow-y-auto bg-gray-50">
        {/* Search Header */}
        <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <form onSubmit={handleSearch}>
              <div className="relative flex items-center bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus-within:border-primary-500 focus-within:ring-1 focus-within:ring-primary-500">
                <div className="absolute left-4 flex items-center pointer-events-none">
                  <MagnifyingGlassIcon className="w-5 h-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  placeholder="Buscar obrigações..."
                  className="flex-1 pl-12 pr-12 py-3 bg-transparent text-gray-900 placeholder-gray-500 focus:outline-none"
                  autoFocus
                />
                {searchInput && (
                  <button
                    type="button"
                    onClick={clearSearch}
                    className="absolute right-16 p-1 text-gray-400 hover:text-gray-600"
                  >
                    <XMarkIcon className="w-5 h-5" />
                  </button>
                )}
                <button
                  type="submit"
                  className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 font-semibold transition-colors duration-200 rounded-r-lg"
                >
                  Buscar
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Results */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {query && (
            <div className="mb-6">
              <h1 className="text-2xl font-bold text-gray-900">
                Resultados para: <span className="text-primary-600">"{query}"</span>
              </h1>
              <p className="text-gray-600 mt-2">
                {searchResults.length === 0
                  ? 'Nenhum resultado encontrado'
                  : `${searchResults.length} ${searchResults.length === 1 ? 'resultado encontrado' : 'resultados encontrados'}`}
              </p>
            </div>
          )}

          {!query && (
            <div className="text-center py-12">
              <MagnifyingGlassIcon className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                Digite um termo para buscar
              </h2>
              <p className="text-gray-600">
                Busque por nome de obrigação, sigla ou palavras-chave
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-2">
                <button
                  onClick={() => setSearchInput('e-BEF')}
                  className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors"
                >
                  e-BEF
                </button>
                <button
                  onClick={() => setSearchInput('ECF')}
                  className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors"
                >
                  ECF
                </button>
                <button
                  onClick={() => setSearchInput('DCTF')}
                  className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors"
                >
                  DCTF
                </button>
                <button
                  onClick={() => setSearchInput('eSocial')}
                  className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors"
                >
                  eSocial
                </button>
              </div>
            </div>
          )}

          {searchResults.length > 0 && (
            <div className="space-y-4">
              {searchResults.map((result) => (
                <Link
                  key={`${result.category}-${result.id}`}
                  to={result.categoryPath}
                  state={{ selectedObligationId: result.id }}
                  className="block bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 p-6 border border-gray-200 hover:border-primary-500"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h2 className="text-xl font-semibold text-gray-900 hover:text-primary-600">
                          {result.name}
                        </h2>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-100 text-primary-800">
                          {result.categoryName}
                        </span>
                      </div>
                      <p className="text-gray-700 mb-3">
                        {result.description}
                      </p>
                      {result.content?.summary && (
                        <p className="text-sm text-gray-600 line-clamp-2">
                          {result.content.summary}
                        </p>
                      )}
                      {result.content?.periodicity && (
                        <div className="mt-3 flex items-center text-sm text-gray-500">
                          <span className="font-medium">Periodicidade:</span>
                          <span className="ml-2">{result.content.periodicity}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}

          {query && searchResults.length === 0 && (
            <div className="text-center py-12 bg-white rounded-lg shadow-sm">
              <MagnifyingGlassIcon className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                Nenhum resultado encontrado
              </h2>
              <p className="text-gray-600 mb-6">
                Tente buscar com termos diferentes ou verifique a ortografia
              </p>
              <div className="space-y-2 text-left max-w-md mx-auto">
                <p className="text-sm text-gray-600 font-medium">Sugestões:</p>
                <ul className="text-sm text-gray-600 list-disc list-inside space-y-1">
                  <li>Use siglas completas (ECF, ECD, DCTF, eSocial)</li>
                  <li>Tente palavras-chave como "imposto", "declaração", "folha"</li>
                  <li>Busque por periodicidade: "mensal", "anual"</li>
                  <li>Explore as categorias disponíveis no menu</li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
