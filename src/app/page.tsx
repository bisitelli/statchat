"use client";

import { useState, useRef, useEffect } from "react";

export default function Page() {
  const [messages, setMessages] = useState<{ user: boolean; text: string }[]>([]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const sendMessage = () => {
    if (!input) return;
    setMessages([...messages, { user: true, text: input }]);
    setInput("");

    // Dummy response
    setTimeout(() => {
      setMessages((prev) => [...prev, { user: false, text: `You asked: "${input}"` }]);
    }, 500);
  };

  // Scroll to bottom on new message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handlePlusClick = () => alert("Coming Soon!");

  const categories = [
    { name: "Football", color: "bg-blue-400", active: true },
    { name: "Ice Hockey", color: "bg-gray-300", active: false },
    { name: "Basketball", color: "bg-gray-300", active: false },
    { name: "Baseball", color: "bg-gray-300", active: false },
    { name: "+", color: "bg-gray-300", active: false, plus: true },
  ];

  return (
    <div className="flex flex-col h-screen bg-white">
      {/* Top categories */}
      <div className="flex justify-center space-x-2 p-4 border-b overflow-x-auto">
        {categories.map((cat, idx) => (
          <button
            key={idx}
            className={`flex-shrink-0 px-3 py-1 rounded-full text-xs font-medium ${cat.color
              } ${cat.plus || !cat.active ? "opacity-50 cursor-not-allowed" : ""}`}
            onClick={() => {
              if (cat.plus || !cat.active) handlePlusClick();
            }}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Chat window */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`flex ${msg.user ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`px-4 py-2 rounded-2xl max-w-xs break-words shadow-sm ${msg.user
                  ? "bg-blue-600 text-white rounded-br-none"
                  : "bg-gray-100 text-gray-900 rounded-bl-none"
                }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input field */}
      <div className="p-4 border-t bg-gray-50 flex justify-center">
        <div className="relative w-full max-w-md text-black">
          <input
            type="text"
            className="w-full border border-gray-300 rounded-full px-4 py-2 pr-20 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
            placeholder="Type your question..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          />
          <button
            onClick={sendMessage}
            className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-blue-400 hover:bg-blue-500 text-white px-4 py-1.5 rounded-full font-medium cursor-pointer"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
