import { useState } from 'react';
import { Helmet } from '@dr.pogodin/react-helmet';
import { MagnifyingGlassIcon, InformationCircleIcon } from '@heroicons/react/24/outline';

export default function CNAESearch() {
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedCNAE, setSelectedCNAE] = useState(null);

  const searchCNAE = async (query) => {
    if (!query.trim()) {
      setResults([]);
      setError(null);
      return;
    }

    setLoading(true);
    setError(null);

    try {
      // Check if query is a specific class ID (numeric)
      if (/^\d{4,7}$/.test(query)) {
        // Search by specific class ID
        const response = await fetch(`https://servicodados.ibge.gov.br/api/v2/cnae/classes/${query}`);
        if (!response.ok) throw new Error('CNAE não encontrado');
        const data = await response.json();
        setResults([data]);
        setSelectedCNAE(data);
      } else {
        // Search all classes and filter by description
        const response = await fetch('https://servicodados.ibge.gov.br/api/v2/cnae/classes');
        if (!response.ok) throw new Error('Erro ao buscar CNAEs');
        const data = await response.json();

        // Filter by description or ID
        const filtered = data.filter(item =>
          item.descricao.toLowerCase().includes(query.toLowerCase()) ||
          item.id.toString().includes(query)
        ).slice(0, 50); // Limit to 50 results

        setResults(filtered);
        setSelectedCNAE(null);
      }
    } catch (err) {
      setError(err.message);
      setResults([]);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    searchCNAE(searchQuery);
  };

  const handleSelectCNAE = async (cnae) => {
    setSelectedCNAE(cnae);
    // If it's a summary result, fetch full details
    if (!cnae.observacoes) {
      try {
        const response = await fetch(`https://servicodados.ibge.gov.br/api/v2/cnae/classes/${cnae.id}`);
        if (response.ok) {
          const fullData = await response.json();
          setSelectedCNAE(fullData);
        }
      } catch (err) {
        console.error('Error fetching CNAE details:', err);
      }
    }
  };

  return (
    <>
      <Helmet>
        <title>Busca CNAE - Assistente Contábil</title>
        <meta
          name="description"
          content="Pesquise códigos CNAE (Classificação Nacional de Atividades Econômicas) com dados oficiais do IBGE."
        />
      </Helmet>

      <div className="flex-1 overflow-y-auto bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="font-heading text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              Consulta CNAE
            </h1>
            <p className="text-base md:text-lg text-gray-600">
              Pesquise códigos CNAE (Classificação Nacional de Atividades Econômicas) usando dados oficiais do IBGE
            </p>
          </div>

          {/* Info Box */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
            <div className="flex items-start">
              <InformationCircleIcon className="w-5 h-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
              <div className="text-sm text-blue-800">
                <p className="font-medium mb-1">Como usar:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Digite o código CNAE (ex: 4711301) para busca exata</li>
                  <li>Digite palavras-chave para buscar por descrição (ex: "restaurante", "contabilidade")</li>
                  <li>Fonte de dados: IBGE - Instituto Brasileiro de Geografia e Estatística</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Search Box */}
          <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
            <form onSubmit={handleSearch}>
              <div className="relative flex items-center">
                <div className="absolute left-4 flex items-center pointer-events-none">
                  <MagnifyingGlassIcon className="w-5 h-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Digite o código CNAE ou palavras-chave..."
                  className="flex-1 pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="ml-4 bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? 'Buscando...' : 'Buscar'}
                </button>
              </div>
            </form>
          </div>

          {/* Error Message */}
          {error && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
              <p className="text-red-800">{error}</p>
            </div>
          )}

          {/* Results */}
          {results.length > 0 && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Results List */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="p-4 bg-gradient-to-r from-primary-50 to-blue-50 border-b border-gray-200">
                  <h2 className="font-heading text-lg font-semibold text-gray-900">
                    Resultados ({results.length})
                  </h2>
                </div>
                <div className="max-h-96 overflow-y-auto p-4">
                  <div className="space-y-3">
                    {results.map((cnae) => (
                      <button
                        key={cnae.id}
                        onClick={() => handleSelectCNAE(cnae)}
                        className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-200 ${
                          selectedCNAE?.id === cnae.id
                            ? 'border-primary-600 bg-primary-50'
                            : 'border-gray-200 bg-white hover:border-primary-300 hover:shadow-md'
                        }`}
                      >
                        <div className="font-semibold text-primary-600 mb-1">
                          {cnae.id}
                        </div>
                        <div className="text-sm text-gray-900 line-clamp-2">
                          {cnae.descricao}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Details Panel */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="p-4 bg-gradient-to-r from-primary-50 to-blue-50 border-b border-gray-200">
                  <h2 className="font-heading text-lg font-semibold text-gray-900">
                    Detalhes
                  </h2>
                </div>
                <div className="p-6 overflow-y-auto max-h-96">
                  {selectedCNAE ? (
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-heading text-xl font-bold text-gray-900 mb-2">
                          {selectedCNAE.id}
                        </h3>
                        <p className="text-gray-700">
                          {selectedCNAE.descricao}
                        </p>
                      </div>

                      {selectedCNAE.observacoes && selectedCNAE.observacoes.length > 0 && (
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Observações:</h4>
                          <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                            {selectedCNAE.observacoes.map((obs, idx) => (
                              <li key={idx}>{obs}</li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {selectedCNAE.grupo && (
                        <div className="pt-4 border-t border-gray-200">
                          <h4 className="font-semibold text-gray-900 mb-2">Hierarquia:</h4>
                          <div className="space-y-2 text-sm">
                            {selectedCNAE.grupo?.divisao?.secao && (
                              <div>
                                <span className="font-medium">Seção:</span> {selectedCNAE.grupo.divisao.secao.id} - {selectedCNAE.grupo.divisao.secao.descricao}
                              </div>
                            )}
                            {selectedCNAE.grupo?.divisao && (
                              <div>
                                <span className="font-medium">Divisão:</span> {selectedCNAE.grupo.divisao.id} - {selectedCNAE.grupo.divisao.descricao}
                              </div>
                            )}
                            {selectedCNAE.grupo && (
                              <div>
                                <span className="font-medium">Grupo:</span> {selectedCNAE.grupo.id} - {selectedCNAE.grupo.descricao}
                              </div>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="text-center text-gray-500 py-8">
                      Selecione um CNAE para ver os detalhes
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* No Results */}
          {!loading && searchQuery && results.length === 0 && !error && (
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <p className="text-gray-600">Nenhum resultado encontrado para "{searchQuery}"</p>
              <p className="text-sm text-gray-500 mt-2">
                Tente usar outras palavras-chave ou verificar o código CNAE
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
