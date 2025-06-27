'use client';
import Image from "next/image";
import { useEffect, useState, useRef } from "react";

export default function Home() {
  const [showMessage, setShowMessage] = useState(false);
  const [listening, setListening] = useState(false);
  const [transcript, setTranscript] = useState("");
  const recognitionRef = useRef<any>(null);

  useEffect(() => {
    const timer = setTimeout(() => setShowMessage(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  // Voice assistant logic
  useEffect(() => {
    if (typeof window !== "undefined" && 'webkitSpeechRecognition' in window) {
      const SpeechRecognition = (window as any).webkitSpeechRecognition;
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.continuous = false;
      recognitionRef.current.interimResults = false;
      recognitionRef.current.lang = 'en-US';
      recognitionRef.current.onresult = (event: any) => {
        setTranscript(event.results[0][0].transcript);
        setListening(false);
      };
      recognitionRef.current.onend = () => setListening(false);
      recognitionRef.current.onerror = () => setListening(false);
    }
  }, []);

  const startListening = () => {
    setTranscript("");
    setListening(true);
    recognitionRef.current && recognitionRef.current.start();
  };

  return (
    <>
      <section className="flex flex-col items-center justify-center min-h-[80vh] py-20 px-4 text-center bg-white">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0071ce] mb-4 drop-shadow-sm">
          The Walmart Omni-Assistant
        </h1>
        <p className="text-lg sm:text-2xl text-gray-700 mb-8 max-w-2xl">
          A hyper-personalized AI co-pilot that supports you across the full shopping journey.
        </p>
        <a
          href="/demo"
          className="inline-block bg-[#ffc220] text-[#0071ce] font-bold text-lg px-8 py-4 rounded-full shadow hover:bg-[#ffd966] transition-colors focus:outline-none focus:ring-4 focus:ring-[#ffc220]/50"
        >
          Try the Demo
        </a>
      </section>
      {showMessage && (
        <div className="flex justify-center mt-4">
          <div className="bg-[#0071ce] text-white px-6 py-4 rounded-2xl shadow max-w-md text-base font-medium animate-fade-in">
            Rain is forecast tomorrow. Need umbrellas?
          </div>
        </div>
      )}
      {/* Customer Journey Section */}
      <section className="w-full mt-12 px-2 sm:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#0071ce] mb-6 text-center">Customer Journey with the Omni-Assistant</h2>
        <div className="flex overflow-x-auto gap-6 pb-4 scrollbar-thin scrollbar-thumb-[#0071ce]/40 scrollbar-track-transparent">
          {/* Pre-purchase */}
          <div className="min-w-[260px] max-w-xs flex-shrink-0 bg-white border-2 border-[#0071ce] rounded-2xl shadow-lg p-6 flex flex-col items-center text-center">
            <div className="bg-[#0071ce] text-white rounded-full w-14 h-14 flex items-center justify-center mb-4 text-3xl">
              <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' className='w-8 h-8'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 9m5-9v9m4-9v9m4-9l2 9' /></svg>
            </div>
            <h3 className="text-xl font-semibold text-[#0071ce] mb-2">Pre-purchase</h3>
            <p className="text-gray-700">Get personalized recommendations, price alerts, and shopping lists before you buy.</p>
          </div>
          {/* In-store */}
          <div className="min-w-[260px] max-w-xs flex-shrink-0 bg-[#0071ce] border-2 border-[#ffc220] rounded-2xl shadow-lg p-6 flex flex-col items-center text-center">
            <div className="bg-[#ffc220] text-[#0071ce] rounded-full w-14 h-14 flex items-center justify-center mb-4 text-3xl">
              <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' className='w-8 h-8'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 8c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3zm0 0V4m0 8v8m8-8h-8m8 0a8 8 0 11-16 0 8 8 0 0116 0z' /></svg>
            </div>
            <h3 className="text-xl font-semibold text-[#ffc220] mb-2">In-store</h3>
            <p className="text-white">Navigate aisles, find deals, and get real-time assistance while you shop.</p>
          </div>
          {/* Post-delivery */}
          <div className="min-w-[260px] max-w-xs flex-shrink-0 bg-white border-2 border-[#0071ce] rounded-2xl shadow-lg p-6 flex flex-col items-center text-center">
            <div className="bg-[#0071ce] text-white rounded-full w-14 h-14 flex items-center justify-center mb-4 text-3xl">
              <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' className='w-8 h-8'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 17v-2a4 4 0 018 0v2m-4-4a4 4 0 100-8 4 4 0 000 8zm-6 4v-2a6 6 0 0112 0v2a2 2 0 01-2 2H7a2 2 0 01-2-2z' /></svg>
            </div>
            <h3 className="text-xl font-semibold text-[#0071ce] mb-2">Post-delivery</h3>
            <p className="text-gray-700">Track orders, get support, and receive tailored offers after your purchase.</p>
          </div>
        </div>
      </section>
      {/* Floating Voice Assistant Button */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
        {transcript && (
          <div className="bg-[#0071ce] text-white px-5 py-3 rounded-2xl shadow-lg mb-2 max-w-xs animate-fade-in">
            <span className="font-semibold text-[#ffc220]">You said:</span> {transcript}
          </div>
        )}
        <button
          onClick={startListening}
          className={`flex items-center justify-center w-16 h-16 rounded-full shadow-lg transition-colors focus:outline-none focus:ring-4 focus:ring-[#ffc220]/50 border-4 border-[#ffc220] bg-[#0071ce] hover:bg-[#005fa3] ${listening ? 'animate-pulse' : ''}`}
          aria-label="Activate voice assistant"
          disabled={listening}
        >
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v2m0 0h3m-3 0H9m6-2a6 6 0 10-12 0 6 6 0 0012 0zm-6-6v6" />
            <ellipse cx="12" cy="10" rx="3" ry="5" fill="#ffc220" stroke="#0071ce" strokeWidth="2" />
          </svg>
          {listening && (
            <span className="absolute text-xs text-[#ffc220] mt-20 animate-fade-in">Listening...</span>
          )}
        </button>
      </div>
    </>
  );
}
