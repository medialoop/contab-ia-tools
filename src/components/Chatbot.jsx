import { useState, useEffect, useRef } from 'react';
import { PaperAirplaneIcon, SparklesIcon } from '@heroicons/react/24/outline';

export default function Chatbot({ selectedObligation }) {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    // Reset messages when obligation changes (syncing with external state)
    if (selectedObligation && selectedObligation.content) {
      const content = selectedObligation.content;
      const initialMessages = [
        {
          type: 'bot',
          content: content.title,
          isTitle: true,
        },
        {
          type: 'bot',
          content: content.summary,
        },
        {
          type: 'bot',
          content: `**Periodicidade:** ${content.periodicity}`,
        },
        {
          type: 'bot',
          content: `**Base Legal:** ${content.legalBasis}`,
        },
      ];

      if (content.reference) {
        initialMessages.push({
          type: 'bot',
          content: `**Referência oficial:** [${content.reference}](${content.reference})`,
        });
      }

      if (content.details && content.details.length > 0) {
        initialMessages.push({
          type: 'bot',
          content: '**Principais informações:**\n' + content.details.map(d => `• ${d}`).join('\n'),
        });
      }

      // eslint-disable-next-line react-hooks/set-state-in-effect
      setMessages(initialMessages);
    } else {
      setMessages([]);
    }
  }, [selectedObligation]);

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage = {
      type: 'user',
      content: inputValue,
    };

    setMessages(prev => [...prev, userMessage]);

    setTimeout(() => {
      const response = generateResponse(inputValue, selectedObligation);
      setMessages(prev => [...prev, {
        type: 'bot',
        content: response,
      }]);
    }, 500);

    setInputValue('');
  };

  const generateResponse = (question, obligation) => {
    const lowerQuestion = question.toLowerCase();

    if (!obligation || !obligation.content) {
      return 'Por favor, selecione uma obrigação para que eu possa ajudá-lo.';
    }

    const content = obligation.content;

    if (lowerQuestion.includes('prazo') || lowerQuestion.includes('quando') || lowerQuestion.includes('entrega')) {
      const faq = content.faqs?.find(f => f.question.toLowerCase().includes('prazo'));
      return faq ? faq.answer : `O prazo é: ${content.periodicity}`;
    }

    if (lowerQuestion.includes('obrigad') || lowerQuestion.includes('quem')) {
      const faq = content.faqs?.find(f => f.question.toLowerCase().includes('obrigad') || f.question.toLowerCase().includes('quem'));
      return faq ? faq.answer : 'Consulte a base legal e regulamentação para verificar se sua empresa está obrigada.';
    }

    if (lowerQuestion.includes('multa') || lowerQuestion.includes('penalidade') || lowerQuestion.includes('atraso')) {
      const faq = content.faqs?.find(f => f.question.toLowerCase().includes('multa') || f.question.toLowerCase().includes('atraso'));
      return faq ? faq.answer : 'A não entrega ou entrega em atraso pode acarretar multas. Consulte a legislação específica para valores.';
    }

    if (lowerQuestion.includes('o que') || lowerQuestion.includes('para que')) {
      return content.summary;
    }

    if (content.faqs && content.faqs.length > 0) {
      const matchedFaq = content.faqs.find(faq =>
        faq.question.toLowerCase().includes(lowerQuestion) ||
        lowerQuestion.includes(faq.question.toLowerCase().split(' ')[0])
      );

      if (matchedFaq) {
        return matchedFaq.answer;
      }
    }

    return `Sobre ${obligation.name}: ${content.summary}\n\nPara mais informações, consulte: ${content.reference || 'a legislação vigente'}.`;
  };

  const renderMessage = (message, index) => {
    const isBot = message.type === 'bot';

    return (
      <div
        key={index}
        className={`flex ${isBot ? 'justify-start' : 'justify-end'} mb-4`}
      >
        <div
          className={`
            max-w-[80%] rounded-lg px-4 py-3
            ${isBot ? 'bg-white border border-gray-200' : 'bg-primary-600 text-white'}
            ${message.isTitle ? 'font-bold text-lg' : ''}
          `}
        >
          {isBot && !message.isTitle && (
            <div className="flex items-center mb-1">
              <SparklesIcon className="w-4 h-4 text-primary-600 mr-1" />
              <span className="text-xs font-medium text-primary-600">Assistente</span>
            </div>
          )}
          <div className="prose prose-sm max-w-none">
            {message.content.split('\n').map((line, i) => {
              const boldMatch = line.match(/\*\*(.*?)\*\*/g);
              const linkMatch = line.match(/\[(.*?)\]\((.*?)\)/);

              if (linkMatch) {
                return (
                  <p key={i} className="mb-1">
                    <strong>{line.split('[')[0]}</strong>
                    <a
                      href={linkMatch[2]}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-600 hover:text-primary-800 underline"
                    >
                      {linkMatch[1]}
                    </a>
                  </p>
                );
              }

              if (boldMatch) {
                const parts = line.split(/(\*\*.*?\*\*)/g);
                return (
                  <p key={i} className="mb-1">
                    {parts.map((part, j) => {
                      if (part.startsWith('**') && part.endsWith('**')) {
                        return <strong key={j}>{part.slice(2, -2)}</strong>;
                      }
                      return part;
                    })}
                  </p>
                );
              }

              return <p key={i} className="mb-1">{line}</p>;
            })}
          </div>
        </div>
      </div>
    );
  };

  if (!selectedObligation) {
    return (
      <div className="h-full flex items-center justify-center p-8">
        <div className="text-center">
          <SparklesIcon className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h3 className="font-heading text-lg font-medium text-gray-900 mb-2">
            Selecione uma obrigação
          </h3>
          <p className="text-gray-600">
            Escolha uma obrigação ou calculadora para ver os detalhes e conversar com o assistente.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-y-auto p-6 bg-gray-50">
        {messages.map((message, index) => renderMessage(message, index))}
        <div ref={messagesEndRef} />
      </div>

      <div className="border-t border-gray-200 bg-white p-4">
        <div className="flex space-x-2">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            placeholder="Faça uma pergunta sobre esta obrigação..."
            className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          />
          <button
            onClick={handleSendMessage}
            className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors duration-200 flex items-center"
          >
            <PaperAirplaneIcon className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
