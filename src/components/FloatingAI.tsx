import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Mic, X } from 'lucide-react';

export default function FloatingAI() {
  const [isOpen, setIsOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTooltip(false);
    }, 8000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end gap-3 pointer-events-none">
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, x: 20, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 20, scale: 0.8 }}
            className="bg-white px-4 py-2 rounded-2xl shadow-2xl border border-gray-100 pointer-events-auto mb-1"
          >
            <div className="flex items-center gap-2">
              <span className="text-[13px] font-bold text-gray-800">Hi! I'm MAI AI. How can I help?</span>
              <button onClick={() => setShowTooltip(false)} className="text-gray-400 hover:text-gray-600">
                <X size={14} />
              </button>
            </div>
            <div className="absolute bottom-[-6px] right-6 w-3 h-3 bg-white rotate-45 border-r border-b border-gray-100" />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex items-center gap-3 pointer-events-auto">
        <AnimatePresence>
          {!isOpen && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="bg-[#FDBA31] text-white px-4 py-2 rounded-l-full rounded-r-lg shadow-lg flex items-center gap-2"
            >
              <span className="text-[13px] font-bold uppercase tracking-wider">Ask MAI AI</span>
              <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(!isOpen)}
          className={`w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 ${
            isOpen ? 'bg-gray-800' : 'bg-[#FDBA31]'
          }`}
        >
          {isOpen ? (
            <X className="text-white w-6 h-6" />
          ) : (
            <div className="relative">
              <Sparkles className="text-white w-7 h-7" />
              <div className="absolute -top-1 -right-1">
                <div className="w-2 h-2 bg-white rounded-full animate-ping" />
                <div className="absolute inset-0 w-2 h-2 bg-white rounded-full" />
              </div>
            </div>
          )}
        </motion.button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="w-[350px] bg-white rounded-[2rem] shadow-2xl border border-gray-100 overflow-hidden mt-2 pointer-events-auto"
          >
            <div className="p-6 bg-[#FDBA31]/10 border-b border-[#FDBA31]/20">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#FDBA31] flex items-center justify-center">
                  <Sparkles className="text-white w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 text-sm">MAI AI Assistant</h4>
                  <p className="text-[11px] text-gray-500 font-medium">Online & Ready to Help</p>
                </div>
              </div>
            </div>
            <div className="p-6">
              <p className="text-sm text-gray-600 leading-relaxed mb-6">
                I can help you find traders, write project briefs, or explain how MAI works. What's on your mind?
              </p>
              <div className="space-y-3">
                <button className="w-full text-left p-3 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors text-xs font-bold text-gray-700 border border-gray-100 flex items-center justify-between group">
                  Help me find a plumber
                  <Sparkles size={14} className="text-[#FDBA31] opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
                <button className="w-full text-left p-3 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors text-xs font-bold text-gray-700 border border-gray-100 flex items-center justify-between group">
                  How do I post a project?
                  <Sparkles size={14} className="text-[#FDBA31] opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
                <button className="w-full text-left p-3 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors text-xs font-bold text-gray-700 border border-gray-100 flex items-center justify-between group">
                  Explain secure payments
                  <Sparkles size={14} className="text-[#FDBA31] opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              </div>
              <div className="mt-8 flex items-center gap-2">
                <div className="flex-1 h-10 rounded-2xl bg-gray-100 px-4 flex items-center">
                  <span className="text-[11px] text-gray-400">Type your message...</span>
                </div>
                <button className="w-10 h-10 rounded-2xl bg-gray-800 flex items-center justify-center">
                  <Mic className="text-white w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
