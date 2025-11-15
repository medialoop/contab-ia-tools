import React, { useState, useRef, useEffect } from 'react';
import { Helmet } from '@dr.pogodin/react-helmet';
import {
  SparklesIcon,
  PaperAirplaneIcon,
  Bars3Icon,
  XMarkIcon,
  MagnifyingGlassIcon,
  DocumentTextIcon,
  CalculatorIcon,
  BookOpenIcon,
  ChatBubbleLeftRightIcon
} from '@heroicons/react/24/outline';
import { obligationsData, categories } from '../data/obligations';

const AIAssistant = () => {
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: 'Olá! Sou seu Assistente Contábil com IA. Posso ajudá-lo a encontrar informações sobre obrigações fiscais, calcular impostos e responder suas dúvidas contábeis. Como posso ajudá-lo hoje?'
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const messagesEndRef = useRef(null);
  const textareaRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Auto-resize textarea
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = textareaRef.current.scrollHeight + 'px';
    }
  }, [inputValue]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!inputValue.trim() || isLoading) return;

    const userMessage = inputValue.trim();
    setInputValue('');

    // Add user message
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    // Simulate AI response (you'll replace this with actual AI integration)
    setTimeout(() => {
      const response = generateResponse(userMessage);
      setMessages(prev => [...prev, { role: 'assistant', content: response }]);
      setIsLoading(false);
    }, 1000);
  };

  // Simple response generator - replace with actual AI integration
  const generateResponse = (query) => {
    const lowerQuery = query.toLowerCase();

    // Search through obligations
    let foundObligations = [];
    Object.entries(obligationsData).forEach(([categoryKey, obligations]) => {
      if (categoryKey === 'impostosResources') return;

      obligations.forEach(obligation => {
        if (
          obligation.name.toLowerCase().includes(lowerQuery) ||
          obligation.description.toLowerCase().includes(lowerQuery)
        ) {
          foundObligations.push({
            ...obligation,
            category: categories.find(c => c.id === categoryKey)?.name || categoryKey
          });
        }
      });
    });

    if (foundObligations.length > 0) {
      const topResult = foundObligations[0];
      return `Encontrei informações sobre **${topResult.name}**:\n\n${topResult.description}\n\n**Periodicidade:** ${topResult.content.periodicity}\n\n**Base Legal:** ${topResult.content.legalBasis}\n\nPosso fornecer mais detalhes sobre esta obrigação ou ajudá-lo com outra consulta?`;
    }

    // Default response
    return `Entendo sua pergunta sobre "${query}". No momento, estou em desenvolvimento e aprendendo a processar consultas mais complexas. Em breve, poderei fornecer respostas mais detalhadas e precisas baseadas em toda a base de conhecimento contábil. \n\nEnquanto isso, você pode:\n- Pesquisar obrigações específicas pelo nome\n- Usar as calculadoras disponíveis\n- Explorar o conteúdo por categorias\n\nComo posso ajudá-lo de outra forma?`;
  };

  const quickActions = [
    {
      icon: DocumentTextIcon,
      label: 'Obrigações Nacionais',
      query: 'Quais são as principais obrigações nacionais?'
    },
    {
      icon: CalculatorIcon,
      label: 'Calculadoras',
      query: 'Quero calcular impostos'
    },
    {
      icon: MagnifyingGlassIcon,
      label: 'Buscar DCTF',
      query: 'DCTF'
    },
    {
      icon: BookOpenIcon,
      label: 'Sobre SPED',
      query: 'O que é SPED?'
    }
  ];

  const handleQuickAction = (query) => {
    setInputValue(query);
    textareaRef.current?.focus();
  };

  return (
    <>
      <Helmet>
        <title>Assistente IA - Assistente Contábil</title>
        <meta
          name="description"
          content="Assistente inteligente para ajudar com obrigações fiscais, cálculos e consultas contábeis"
        />
      </Helmet>

      <div className="fixed inset-0 bg-gradient-to-br from-gray-50 to-blue-50/30 flex">
        {/* Sidebar */}
        <div
          className={`${
            sidebarOpen ? 'w-80' : 'w-0'
          } transition-all duration-300 bg-white border-r border-gray-200 flex flex-col overflow-hidden`}
        >
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-heading text-xl font-semibold text-gray-900">
                Recursos
              </h2>
              <button
                onClick={() => setSidebarOpen(false)}
                className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <XMarkIcon className="w-5 h-5 text-gray-500" />
              </button>
            </div>

            <div className="space-y-2">
              {categories.filter(cat => cat.id !== 'calculadoras' && cat.id !== 'impostos').map(category => (
                <button
                  key={category.id}
                  onClick={() => handleQuickAction(`Me fale sobre ${category.name.toLowerCase()}`)}
                  className="w-full text-left px-4 py-3 rounded-lg hover:bg-primary-50 transition-colors group"
                >
                  <div className="font-medium text-gray-900 group-hover:text-primary-700 transition-colors">
                    {category.name}
                  </div>
                  <div className="text-sm text-gray-600 mt-1">
                    {category.description}
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="p-6">
            <h3 className="font-heading text-sm font-semibold text-gray-700 uppercase tracking-wide mb-4">
              Ferramentas
            </h3>
            <div className="space-y-2">
              <button className="w-full text-left px-4 py-2 rounded-lg hover:bg-primary-50 transition-colors text-gray-700 hover:text-primary-700">
                <CalculatorIcon className="w-4 h-4 inline mr-2" />
                Calculadoras
              </button>
              <button className="w-full text-left px-4 py-2 rounded-lg hover:bg-primary-50 transition-colors text-gray-700 hover:text-primary-700">
                <MagnifyingGlassIcon className="w-4 h-4 inline mr-2" />
                Busca CNAE
              </button>
            </div>
          </div>
        </div>

        {/* Main Chat Area */}
        <div className="flex-1 flex flex-col min-w-0">
          {/* Header */}
          <div className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between shadow-sm">
            <div className="flex items-center gap-3">
              {!sidebarOpen && (
                <button
                  onClick={() => setSidebarOpen(true)}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <Bars3Icon className="w-6 h-6 text-gray-600" />
                </button>
              )}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl flex items-center justify-center shadow-lg">
                  <SparklesIcon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="font-heading text-xl font-semibold text-gray-900">
                    Assistente IA
                  </h1>
                  <p className="text-sm text-gray-600">
                    Powered by AI - Sempre disponível para ajudar
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="px-3 py-1 bg-green-100 text-green-700 text-sm font-medium rounded-full">
                Online
              </span>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto px-6 py-8">
            <div className="max-w-4xl mx-auto space-y-6">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex gap-4 ${
                    message.role === 'user' ? 'justify-end' : 'justify-start'
                  }`}
                >
                  {message.role === 'assistant' && (
                    <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg flex items-center justify-center flex-shrink-0 shadow-md">
                      <SparklesIcon className="w-5 h-5 text-white" />
                    </div>
                  )}

                  <div
                    className={`max-w-2xl rounded-2xl px-6 py-4 ${
                      message.role === 'user'
                        ? 'bg-primary-600 text-white shadow-lg'
                        : 'bg-white text-gray-900 shadow-md border border-gray-100'
                    }`}
                  >
                    <div className="whitespace-pre-wrap leading-relaxed">
                      {message.content.split('**').map((part, i) =>
                        i % 2 === 0 ? part : <strong key={i}>{part}</strong>
                      )}
                    </div>
                  </div>

                  {message.role === 'user' && (
                    <div className="w-8 h-8 bg-gray-700 rounded-lg flex items-center justify-center flex-shrink-0 shadow-md">
                      <ChatBubbleLeftRightIcon className="w-5 h-5 text-white" />
                    </div>
                  )}
                </div>
              ))}

              {isLoading && (
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg flex items-center justify-center flex-shrink-0 shadow-md">
                    <SparklesIcon className="w-5 h-5 text-white" />
                  </div>
                  <div className="bg-white rounded-2xl px-6 py-4 shadow-md border border-gray-100">
                    <div className="flex gap-2">
                      <div className="w-2 h-2 bg-primary-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                      <div className="w-2 h-2 bg-primary-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                      <div className="w-2 h-2 bg-primary-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                    </div>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>
          </div>

          {/* Quick Actions (only show when no messages or first message) */}
          {messages.length <= 1 && (
            <div className="px-6 pb-4">
              <div className="max-w-4xl mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {quickActions.map((action, index) => (
                    <button
                      key={index}
                      onClick={() => handleQuickAction(action.query)}
                      className="flex flex-col items-center gap-2 p-4 bg-white hover:bg-primary-50 border border-gray-200 hover:border-primary-300 rounded-xl transition-all shadow-sm hover:shadow-md group"
                    >
                      <action.icon className="w-6 h-6 text-primary-600 group-hover:text-primary-700" />
                      <span className="text-sm font-medium text-gray-700 group-hover:text-primary-700 text-center">
                        {action.label}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Input Area */}
          <div className="bg-white border-t border-gray-200 px-6 py-4 shadow-lg">
            <form onSubmit={handleSubmit} className="max-w-4xl mx-auto">
              <div className="flex gap-3 items-end">
                <div className="flex-1 relative">
                  <textarea
                    ref={textareaRef}
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' && !e.shiftKey) {
                        e.preventDefault();
                        handleSubmit(e);
                      }
                    }}
                    placeholder="Digite sua pergunta sobre obrigações fiscais, impostos, cálculos..."
                    className="w-full px-6 py-4 pr-12 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none max-h-40 shadow-sm"
                    rows="1"
                    disabled={isLoading}
                  />
                </div>
                <button
                  type="submit"
                  disabled={!inputValue.trim() || isLoading}
                  className="px-6 py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-2xl hover:from-primary-700 hover:to-primary-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg hover:shadow-xl flex items-center gap-2 font-medium"
                >
                  <span>Enviar</span>
                  <PaperAirplaneIcon className="w-5 h-5" />
                </button>
              </div>
              <p className="text-xs text-gray-500 mt-3 text-center">
                Pressione Enter para enviar, Shift+Enter para nova linha
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AIAssistant;
