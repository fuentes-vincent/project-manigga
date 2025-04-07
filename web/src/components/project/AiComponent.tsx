'use client';

import React, { useState, useEffect, useRef } from 'react';
import { MessageSquare, Send, User, RefreshCw, Settings } from 'lucide-react';

interface AiComponentProps {
  className?: string;
  hideHeader?: boolean;
}

interface Message {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

export const AiComponent: React.FC<AiComponentProps> = ({ className, hideHeader = false }) => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'system',
      content: 'You are a helpful AI assistant for project management. Provide concise and practical advice.'
    },
    {
      role: 'assistant',
      content: 'Ask me anything about the project...'
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const [apiKey, setApiKey] = useState('');
  const [showSettings, setShowSettings] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  // Load API key on component mount (first from env, then from localStorage)
  useEffect(() => {
    // Check for environment variable (Next.js exposes env vars with NEXT_PUBLIC_ prefix to the client)
    const envApiKey = process.env.NEXT_PUBLIC_GROQ_API_KEY || '';
    
    if (envApiKey) {
      setApiKey(envApiKey);
    } else {
      // Fall back to localStorage if env var is not available
      const savedApiKey = localStorage.getItem('groq_api_key');
      if (savedApiKey) {
        setApiKey(savedApiKey);
      }
    }
  }, []);

  // Scroll to bottom of messages when they change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const saveApiKey = () => {
    localStorage.setItem('groq_api_key', apiKey);
    setShowSettings(false);
  };

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!input.trim() || !apiKey) return;
    
    // Add user message to state
    const userMessage: Message = { role: 'user', content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);
    
    try {
      // Using Groq API (OpenAI compatible) instead of OpenAI
      const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
          model: "llama-3.1-8b-instant", // Groq's fast model
          messages: [...messages.filter(msg => msg.role !== 'assistant' || messages.indexOf(msg) !== 1), userMessage],
          temperature: 0.7,
          max_tokens: 500
        })
      });
      
      if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
      }
      
      const data = await response.json();
      const assistantMessage: Message = {
        role: 'assistant',
        content: data.choices[0].message.content
      };
      
      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Error calling Groq API:', error);
      setMessages((prev) => [
        ...prev, 
        { 
          role: 'assistant', 
          content: 'Sorry, I encountered an error. Please check your API key and try again.' 
        }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={`w-full h-full flex flex-col ${className}`}>
      {!hideHeader && (
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-medium text-white">
            AI Assistant
          </h2>
          <button 
            onClick={() => setShowSettings(!showSettings)}
            className="p-1.5 text-gray-400 hover:text-white rounded-md hover:bg-gray-700"
            title="Settings"
          >
            <Settings size={18} />
          </button>
        </div>
      )}
      
      {showSettings ? (
        <div className="bg-gray-900 rounded-lg p-5 mb-4 flex-shrink-0">
          <label className="block text-sm text-gray-400 mb-2">
            Groq API Key {process.env.NEXT_PUBLIC_GROQ_API_KEY ? '(Using environment variable)' : ''}
          </label>
          <input
            type="password"
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
            placeholder="gsk_..."
            className="w-full text-sm bg-gray-800 border border-gray-700 rounded-md px-3 py-2 text-gray-300 mb-3"
          />
          <button
            onClick={saveApiKey}
            className="w-full p-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm"
          >
            Save API Key
          </button>
          <p className="text-xs text-gray-500 mt-2">
            {process.env.NEXT_PUBLIC_GROQ_API_KEY 
              ? 'Using API key from environment variables. Manual entry is a fallback.' 
              : 'Your API key is stored locally in your browser.'}
          </p>
          <p className="text-xs text-gray-500 mt-1">
            Get a free API key from <a href="https://console.groq.com/keys" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">console.groq.com/keys</a>
          </p>
        </div>
      ) : (
        <div className="bg-gray-900 rounded-lg p-5 flex-1 flex flex-col overflow-hidden">
          <div className="mb-4 flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-800">
            {messages.slice(1).map((message, index) => (
              <div 
                key={index} 
                className={`mb-4 ${
                  message.role === 'user' ? 'text-right' : 'text-left'
                }`}
              >
                <div 
                  className={`inline-block max-w-[85%] rounded-lg px-4 py-3 text-base ${
                    message.role === 'user' 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-gray-800 text-gray-300'
                  }`}
                >
                  <div className="flex items-start gap-2">
                    {message.role === 'assistant' && (
                      <MessageSquare size={16} className="shrink-0 mt-0.5" />
                    )}
                    {message.role === 'user' && (
                      <User size={16} className="shrink-0 mt-0.5" />
                    )}
                    <span>{message.content}</span>
                  </div>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          
          <form onSubmit={sendMessage} className="mt-auto">
            <div className="flex items-center space-x-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={!apiKey ? "Add Groq API key in settings first..." : "Type your message..."}
                disabled={isLoading || !apiKey}
                className="flex-1 text-base bg-gray-800 border border-gray-700 rounded-md px-4 py-3 text-gray-300"
              />
              <button
                type="submit"
                disabled={isLoading || !apiKey || !input.trim()}
                className="p-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <RefreshCw size={18} className="animate-spin" />
                ) : (
                  <Send size={18} />
                )}
              </button>
            </div>
          </form>
          
          {!apiKey && (
            <p className="text-xs text-gray-500 mt-2">
              Please add your Groq API key in settings to use the AI assistant.
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default AiComponent; 