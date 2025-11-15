import { useParams, useNavigate } from 'react-router-dom';
import { Helmet } from '@dr.pogodin/react-helmet';
import { ArrowLeftIcon, ArrowTopRightOnSquareIcon, ArrowDownTrayIcon } from '@heroicons/react/24/outline';
import { obligationsData } from '../data/obligations';

export default function ResourcePage() {
  const { type, id } = useParams();
  const navigate = useNavigate();

  // Determine which category we're in based on current URL
  const currentPath = window.location.pathname;
  const category = currentPath.startsWith('/documentos') ? 'documentos' : 'impostos';
  const categoryResources = category === 'documentos' ? obligationsData.documentosResources : obligationsData.impostosResources;
  const categoryPath = `/${category}`;
  const categoryName = category === 'documentos' ? 'Documentos e Formulários' : 'Impostos';

  // Find the resource based on type and id
  let resource = null;
  let resourceType = '';

  if (categoryResources) {
    if (type === 'links') {
      resource = categoryResources.links.find(r => r.id === `link-${id}`);
      resourceType = 'Link';
    } else if (type === 'downloads') {
      resource = categoryResources.downloads.find(r => r.id === `download-${id}`);
      resourceType = 'Download';
    }
  }

  if (!resource) {
    return (
      <div className="flex-1 flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Recurso não encontrado</h1>
          <button
            onClick={() => navigate(categoryPath)}
            className="text-primary-600 hover:text-primary-700 font-medium"
          >
            Voltar para {categoryName}
          </button>
        </div>
      </div>
    );
  }

  const isDownload = type === 'downloads';

  return (
    <>
      <Helmet>
        <title>{resource.name} - Assistente Contábil | PraContador</title>
        <meta name="description" content={resource.description} />
        <meta name="keywords" content={`${resource.name}, impostos, contabilidade, ${resource.category}`} />
      </Helmet>

      <div className="flex-1 overflow-y-auto bg-gray-100 p-4 md:p-6">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <button
            onClick={() => navigate(categoryPath)}
            className="mb-6 flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium transition-colors"
          >
            <ArrowLeftIcon className="w-5 h-5" />
            Voltar para {categoryName}
          </button>

          {/* Main Card */}
          <div className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-primary-50 to-blue-50 p-6 md:p-8 border-b border-gray-200">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-100 text-primary-800">
                      {resource.category}
                    </span>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800">
                      {resourceType}
                    </span>
                  </div>
                  <h1 className="font-heading text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                    {resource.name}
                  </h1>
                  <p className="text-base md:text-lg text-gray-700">
                    {resource.description}
                  </p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 md:p-8">
              {/* Download Info */}
              {isDownload && (
                <div className="mb-8 p-6 bg-gray-50 rounded-lg border border-gray-200">
                  <h2 className="text-lg font-semibold text-gray-900 mb-4">Informações do Arquivo</h2>
                  <dl className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <dt className="text-sm font-medium text-gray-500 mb-1">Tipo de Arquivo</dt>
                      <dd className="text-base font-semibold text-gray-900">{resource.fileType}</dd>
                    </div>
                    <div>
                      <dt className="text-sm font-medium text-gray-500 mb-1">Tamanho</dt>
                      <dd className="text-base font-semibold text-gray-900">{resource.fileSize}</dd>
                    </div>
                    <div>
                      <dt className="text-sm font-medium text-gray-500 mb-1">Categoria</dt>
                      <dd className="text-base font-semibold text-gray-900">{resource.category}</dd>
                    </div>
                  </dl>
                </div>
              )}

              {/* Mock Content Section */}
              <div className="prose max-w-none mb-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  {isDownload ? 'Sobre este Material' : 'Sobre este Portal'}
                </h2>
                <div className="text-gray-700 space-y-4">
                  <p>
                    Este é um recurso {isDownload ? 'disponível para download' : 'externo'} que complementa
                    as informações sobre impostos e obrigações fiscais disponíveis em nosso sistema.
                  </p>
                  {isDownload ? (
                    <>
                      <p>
                        O material oferece informações detalhadas e atualizadas que podem ser utilizadas
                        como referência no dia a dia da contabilidade e na gestão tributária da sua empresa.
                      </p>
                      <p>
                        <strong>Nota:</strong> Esta é uma página de demonstração. Em produção, o arquivo
                        real estaria disponível para download através do botão abaixo.
                      </p>
                    </>
                  ) : (
                    <>
                      <p>
                        Este portal oferece informações oficiais e atualizadas diretamente da fonte governamental,
                        permitindo consultar legislação, emitir documentos e acompanhar processos relacionados
                        ao sistema tributário brasileiro.
                      </p>
                      <p>
                        <strong>Nota:</strong> Esta é uma página de demonstração. O link externo real para
                        <code className="px-2 py-1 bg-gray-100 rounded text-sm mx-1">{resource.externalUrl}</code>
                        pode ser acessado através do botão abaixo.
                      </p>
                    </>
                  )}
                </div>
              </div>

              {/* Mock Features Section */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  {isDownload ? 'Conteúdo Incluído' : 'Principais Recursos'}
                </h3>
                <ul className="space-y-3">
                  {isDownload ? (
                    <>
                      <li className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700">Informações atualizadas e validadas por especialistas</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700">Formato prático para consulta rápida</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700">Compatível com {resource.fileType === 'PDF' ? 'todos os leitores de PDF' : 'Excel e Google Sheets'}</span>
                      </li>
                    </>
                  ) : (
                    <>
                      <li className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700">Acesso a informações oficiais e atualizadas</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700">Consulta de legislação vigente</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700">Serviços digitais e emissão de documentos</span>
                      </li>
                    </>
                  )}
                </ul>
              </div>

              {/* Action Button */}
              <div className="flex gap-4">
                {isDownload ? (
                  <button
                    onClick={() => alert('Esta é uma página de demonstração. Em produção, o download seria iniciado aqui.')}
                    className="flex items-center gap-2 px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors shadow-md hover:shadow-lg"
                  >
                    <ArrowDownTrayIcon className="w-5 h-5" />
                    Baixar {resource.fileType}
                  </button>
                ) : (
                  <a
                    href={resource.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors shadow-md hover:shadow-lg"
                  >
                    <ArrowTopRightOnSquareIcon className="w-5 h-5" />
                    Acessar Portal
                  </a>
                )}
                <button
                  onClick={() => navigate(categoryPath)}
                  className="px-6 py-3 bg-white text-gray-700 font-semibold rounded-lg border-2 border-gray-300 hover:border-gray-400 transition-colors"
                >
                  Voltar
                </button>
              </div>

              {/* Demo Notice */}
              <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <p className="text-sm text-blue-800">
                  <strong>Página de Demonstração:</strong> Esta é uma página mockup criada para ilustrar
                  como as páginas de recursos seriam apresentadas. Em um ambiente de produção, esta página
                  conteria informações detalhadas e {isDownload ? 'o arquivo real para download' : 'um link funcional para o site externo'}.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
