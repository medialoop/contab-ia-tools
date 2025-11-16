import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChatBubbleLeftRightIcon,
  XMarkIcon,
  PaperAirplaneIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';
import { cn } from '../utils/cn';
import { useChatAssistant } from '../hooks/useChatAssistant';

export default function FloatingChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const messagesEndRef = useRef(null);

  const {
    messages,
    input,
    setInput,
    isLoading,
    quickActions,
    sendMessage,
    handleKeyPress,
  } = useChatAssistant();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <>
      {/* Floating Button */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          type: 'spring',
          stiffness: 260,
          damping: 20,
          delay: 0.5,
        }}
      >
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
          className={cn(
            'relative flex items-center justify-center w-16 h-16 rounded-full shadow-lg',
            'bg-gradient-to-br from-primary-500 to-primary-700',
            'hover:from-primary-600 hover:to-primary-800',
            'transition-all duration-300',
            'focus:outline-none focus:ring-4 focus:ring-primary-300'
          )}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {/* Pulse Animation */}
          <motion.div
            className="absolute inset-0 rounded-full bg-primary-400"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 0, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />

          {/* Icon */}
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <XMarkIcon className="w-8 h-8 text-white" />
              </motion.div>
            ) : (
              <motion.div
                key="chat"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <ChatBubbleLeftRightIcon className="w-8 h-8 text-white" />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Notification Badge */}
          {!isOpen && messages.length === 0 && (
            <motion.div
              className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1, type: 'spring' }}
            >
              <SparklesIcon className="w-3 h-3 text-white" />
            </motion.div>
          )}
        </motion.button>

        {/* Tooltip */}
        <AnimatePresence>
          {isHovered && !isOpen && (
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              className="absolute right-20 top-1/2 -translate-y-1/2 whitespace-nowrap"
            >
              <div className="bg-gray-900 text-white px-3 py-2 rounded-lg text-sm shadow-lg">
                Assistente IA
                <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full">
                  <div className="border-8 border-transparent border-l-gray-900" />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed bottom-28 right-6 w-96 h-[600px] bg-white rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <motion.div
              className="bg-gradient-to-r from-primary-600 to-primary-700 p-4 text-white"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              <div className="flex items-center gap-3">
                <motion.div
                  animate={{
                    rotate: [0, 10, -10, 10, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 3,
                  }}
                >
                  <SparklesIcon className="w-6 h-6" />
                </motion.div>
                <div>
                  <h3 className="font-semibold">Assistente Contábil</h3>
                  <div className="flex items-center gap-2">
                    <motion.div
                      className="w-2 h-2 bg-green-400 rounded-full"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [1, 0.7, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                      }}
                    />
                    <p className="text-xs text-primary-100">Online</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
              {messages.length === 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center py-8"
                >
                  <motion.div
                    animate={{
                      y: [0, -10, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  >
                    <SparklesIcon className="w-12 h-12 mx-auto text-primary-500 mb-4" />
                  </motion.div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Como posso ajudar?
                  </h4>
                  <p className="text-sm text-gray-600 mb-4">
                    Pergunte sobre obrigações fiscais, prazos ou cálculos
                  </p>

                  {/* Quick Actions */}
                  <div className="space-y-2">
                    {quickActions.map((action, index) => (
                      <motion.button
                        key={action}
                        onClick={() => sendMessage(action)}
                        className="block w-full text-left px-4 py-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-all text-sm text-gray-700 hover:text-primary-600 border border-gray-200 hover:border-primary-300"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * index }}
                        whileHover={{ scale: 1.02, x: 4 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {action}
                      </motion.button>
                    ))}
                  </div>
                </motion.div>
              )}

              {messages.map((message, index) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{
                    type: 'spring',
                    stiffness: 300,
                    damping: 30,
                  }}
                  className={cn(
                    'flex',
                    message.sender === 'user' ? 'justify-end' : 'justify-start'
                  )}
                >
                  <div
                    className={cn(
                      'max-w-[80%] px-4 py-3 rounded-2xl shadow-sm',
                      message.sender === 'user'
                        ? 'bg-primary-600 text-white rounded-br-md'
                        : 'bg-white text-gray-900 rounded-bl-md border border-gray-200'
                    )}
                  >
                    <p className="text-sm whitespace-pre-wrap">{message.text}</p>
                  </div>
                </motion.div>
              ))}

              {isLoading && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start"
                >
                  <div className="bg-white px-4 py-3 rounded-2xl rounded-bl-md shadow-sm border border-gray-200">
                    <div className="flex gap-1">
                      {[0, 1, 2].map((i) => (
                        <motion.div
                          key={i}
                          className="w-2 h-2 bg-primary-500 rounded-full"
                          animate={{
                            y: [0, -8, 0],
                          }}
                          transition={{
                            duration: 0.6,
                            repeat: Infinity,
                            delay: i * 0.15,
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <motion.div
              className="p-4 bg-white border-t border-gray-200"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Digite sua pergunta..."
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm"
                  disabled={isLoading}
                />
                <motion.button
                  onClick={() => sendMessage()}
                  disabled={!input.trim() || isLoading}
                  className={cn(
                    'p-3 rounded-xl transition-all',
                    input.trim() && !isLoading
                      ? 'bg-primary-600 text-white hover:bg-primary-700 shadow-md'
                      : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  )}
                  whileHover={input.trim() && !isLoading ? { scale: 1.05 } : {}}
                  whileTap={input.trim() && !isLoading ? { scale: 0.95 } : {}}
                >
                  <PaperAirplaneIcon className="w-5 h-5" />
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
