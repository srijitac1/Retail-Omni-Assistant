'use client';
import React, { useState, useRef } from 'react';
import { Mic } from 'lucide-react';

const suggestionsMap: { [key: string]: string[] } = {
  birthday: ['🎂 Cake', '🎈 Balloons', '🕯️ Candles'],
  party: ['🥤 Drinks', '🍕 Pizza', '🧁 Cupcakes'],
  rain: ['☂️ Umbrella', '🧥 Raincoat', '🥿 Waterproof Shoes'],
  barbecue: ['🥩 Steak', '🌽 Corn', '🔥 Charcoal'],
};

export default function VoiceAssistantDemo() {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const recognitionRef = useRef<any>(null);

  const handleMicClick = () => {
    const SpeechRecognition =
      typeof window !== 'undefined' &&
      ((window as any).SpeechRecognition || (window as any).webkitSpeechRecognition);
    if (!SpeechRecognition) {
      alert('Your browser does not support Web Speech API');
      return;
    }

    const recognition = new SpeechRecognition();
    recognitionRef.current = recognition;
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = 'en-US';

    recognition.onstart = () => setIsListening(true);

    recognition.onresult = (event: any) => {
      const voiceInput = event.results[0][0].transcript;
      setTranscript(voiceInput);
      setIsListening(false);
      suggestProducts(voiceInput);
    };

    recognition.onerror = () => {
      setIsListening(false);
    };

    recognition.onend = () => setIsListening(false);

    recognition.start();
  };

  const suggestProducts = (voiceInput: string) => {
    const keyword = Object.keys(suggestionsMap).find((k) =>
      voiceInput.toLowerCase().includes(k)
    );
    setSuggestions(keyword ? suggestionsMap[keyword] : ['🛍️ No suggestions found.']);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4 py-8 text-center">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">Walmart Omni-Assistant</h1>

      <div className="relative">
        <button
          onClick={handleMicClick}
          disabled={isListening}
          aria-label="Start voice input"
          title="Start voice input"
          className={`w-24 h-24 rounded-full bg-white/30 backdrop-blur border-4 border-blue-600 shadow-xl flex items-center justify-center text-blue-600 transition-transform duration-300 ease-in-out ${
            isListening ? 'animate-pulse scale-110' : 'hover:scale-105'
          }`}
        >
          <Mic size={36} />
        </button>
        <p className="mt-2 text-sm text-gray-500">Tap and speak</p>
      </div>

      {transcript && (
        <div className="mt-6">
          <p className="text-lg text-gray-700 font-medium">You said: " {transcript} "</p>
        </div>
      )}

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
        {suggestions.map((item, idx) => (
          <div
            key={idx}
            className="bg-yellow-100 rounded-xl shadow-md p-4 text-lg font-semibold text-gray-800 hover:bg-yellow-200 transition-all duration-300"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

// Add to globals.css if not present:
// .animate-fade-in { animation: fadeIn 0.5s ease; }
// @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } } 