import React, { useState } from 'react';
import { Send } from 'lucide-react';
import Beatrix from './BeatrixImg';
export const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [userName, setUserName] = useState('');

  const toggleChatbot = () => setIsOpen(!isOpen);

  const getBotResponse = (message) => {
    const lowerMessage = message.toLowerCase();

    if (lowerMessage === 'hi' || lowerMessage === 'hello') {
      return "Hi! What's your name?";
    } else if (!userName && lowerMessage.length > 0) {
      setUserName(message);
      return `Hi ${message}! Nice to meet you. How can I help you today?`;
    } else {
      return "I'm still learning. Try saying 'hi' to start a conversation!";
    }
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = {
      text: input,
      sender: 'user',
    };

    const botResponse = {
      text: getBotResponse(input),
      sender: 'bot',
    };

    setMessages([...messages, userMessage, botResponse]);
    setInput('');
  };

  return (
    <>
      {/* Chatbot Toggle Button */}
      <div
        onClick={toggleChatbot}
        className={`fixed bottom-4 right-4 z-50 cursor-pointer p-3 rounded-full bg-transparent  transition-transform duration-300 ${
          isOpen ? 'translate-x-[calc(100%-130px)] translate-y-[calc(100%-220px)] ' : ''
        }`}
      >
       
        <Beatrix />
      </div>

      {/* Chatbot UI */}
      <div
        className={`fixed bottom-4 z-40 right-4 w-96 h-[500px] bg-white rounded-lg shadow-lg overflow-hidden flex flex-col transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-[120%]'
        }`}
      >
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 flex items-center justify-between rounded-t-lg">
          <h2 className="text-white font-bold text-xl">Plan with Beatrix</h2>
          <button
            onClick={toggleChatbot}
            className="text-white hover:text-gray-200 focus:outline-none"
          >
            ✕
          </button>
        </div>

        <div className="flex-1 p-4 overflow-y-auto">
          {messages.length === 0 && (
            <div className="text-center text-gray-500 mt-4">
              Say hi to start chatting!
            </div>
          )}
          {messages.map((message, index) => (
            <div
              key={index}
              className={`mb-4 flex ${
                message.sender === 'user' ? 'justify-end' : 'justify-start'
              }`}
            >
              <div
                className={`max-w-[80%] p-3 rounded-lg ${
                  message.sender === 'user'
                    ? 'bg-blue-600 text-white rounded-br-none'
                    : 'bg-gray-100 text-gray-800 rounded-bl-none'
                }`}
              >
                {message.text}
              </div>
            </div>
          ))}
        </div>

        <form onSubmit={handleSendMessage} className="p-4 border-t">
          <div className="flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Send size={20} />
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
