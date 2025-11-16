import { useState, useCallback } from 'react';

export function useChatAssistant() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const quickActions = [
    'Como emitir nota fiscal?',
    'Prazos do Simples Nacional',
    'Cálculo de INSS',
    'Obrigações mensais',
  ];

  const generateResponse = useCallback((userMessage) => {
    const lowerMessage = userMessage.toLowerCase();

    if (lowerMessage.includes('nota fiscal') || lowerMessage.includes('nf')) {
      return 'Para emitir uma nota fiscal eletrônica (NF-e), você precisa:\n\n1. Obter um certificado digital\n2. Cadastrar-se no portal da SEFAZ do seu estado\n3. Utilizar um software emissor homologado\n4. Preencher os dados da operação\n5. Transmitir a NF-e para a SEFAZ\n\nVocê pode encontrar mais informações na seção de Obrigações Nacionais.';
    }

    if (lowerMessage.includes('simples') || lowerMessage.includes('prazo')) {
      return 'Os principais prazos do Simples Nacional são:\n\n• DAS: até o dia 20 de cada mês\n• DEFIS: até 31 de março de cada ano\n• PGDAS-D: mensalmente, até o dia 20\n\nConsulte a calculadora do Simples Nacional para estimar seus valores.';
    }

    if (lowerMessage.includes('inss') || lowerMessage.includes('previdência')) {
      return 'O INSS possui diferentes alíquotas dependendo do tipo de contribuinte:\n\n• Empregado: 7,5% a 14%\n• Autônomo: 20% sobre o salário de contribuição\n• MEI: Valor fixo mensal\n\nUtilize nossa Calculadora de INSS para fazer o cálculo exato.';
    }

    if (lowerMessage.includes('obrigações') || lowerMessage.includes('mensal')) {
      return 'As principais obrigações mensais incluem:\n\n• DAS (Simples Nacional)\n• SEFIP/GFIP\n• DCTF\n• EFD-Contribuições\n• NF-e e NFC-e\n\nAcesse a seção de Obrigações para ver detalhes específicos por categoria.';
    }

    return 'Olá! Sou seu assistente contábil inteligente. Posso ajudar com:\n\n• Informações sobre obrigações fiscais\n• Cálculos tributários\n• Prazos e documentações\n• Orientações sobre impostos\n\nComo posso ajudar você hoje?';
  }, []);

  const sendMessage = useCallback(
    (messageText = null) => {
      const textToSend = messageText || input.trim();
      if (!textToSend || isLoading) return;

      const userMessage = {
        id: Date.now(),
        text: textToSend,
        sender: 'user',
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, userMessage]);
      setInput('');
      setIsLoading(true);

      setTimeout(() => {
        const responseText = generateResponse(textToSend);
        const aiMessage = {
          id: Date.now() + 1,
          text: responseText,
          sender: 'ai',
          timestamp: new Date(),
        };

        setMessages((prev) => [...prev, aiMessage]);
        setIsLoading(false);
      }, 1000 + Math.random() * 1000);
    },
    [input, isLoading, generateResponse]
  );

  const handleKeyPress = useCallback(
    (e) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        sendMessage();
      }
    },
    [sendMessage]
  );

  const clearMessages = useCallback(() => {
    setMessages([]);
    setInput('');
  }, []);

  return {
    messages,
    input,
    setInput,
    isLoading,
    quickActions,
    sendMessage,
    handleKeyPress,
    clearMessages,
  };
}
