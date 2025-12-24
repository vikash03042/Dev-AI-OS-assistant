import React, { useState } from 'react';
import { Mic, Globe, Cpu, Send } from 'lucide-react';
import { sendCommand } from '@/lib/api';

const CodeBuddy = () => {
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [lastResponse, setLastResponse] = useState("Everything is running smoothly.");

    const handleSend = async () => {
        if (!input.trim()) return;

        setIsLoading(true);
        try {
            const result = await sendCommand(input);
            setLastResponse(result.response?.text || "Command processed.");
        } catch (e) {
            setLastResponse("Error: System unavailable.");
        } finally {
            setIsLoading(false);
            setInput('');
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') handleSend();
    };

    return (
        <div className="glass-panel rounded-2xl p-1 relative overflow-hidden group h-full flex flex-col">
            <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-transparent opacity-50 group-hover:opacity-100 transition-opacity" />

            <div className="relative bg-slate-900/40 rounded-xl p-6 flex flex-col items-center text-center h-full border border-white/5">
                {/* Status Indicators */}
                <div className="w-full flex justify-between items-start mb-4">
                    <div className="flex gap-2">
                        <div className="px-2 py-1 rounded bg-blue-500/20 border border-blue-500/30 text-[10px] text-blue-300 flex items-center gap-1">
                            <Globe className="w-3 h-3" /> Online
                        </div>
                        <div className="px-2 py-1 rounded bg-purple-500/20 border border-purple-500/30 text-[10px] text-purple-300 flex items-center gap-1">
                            <Cpu className="w-3 h-3" /> v2.4
                        </div>
                    </div>
                </div>

                {/* Avatar */}
                <div className="relative mb-6">
                    <div className={`absolute inset-0 bg-blue-500 blur-[40px] opacity-20 ${isLoading ? 'animate-pulse' : ''}`} />
                    <div className="w-32 h-32 rounded-full bg-gradient-to-br from-slate-800 to-slate-900 border-2 border-blue-500/30 flex items-center justify-center relative z-10 shadow-neon-blue animate-float">
                        <div className="text-4xl">🤖</div>
                    </div>
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-3 py-1 bg-slate-900 rounded-full border border-blue-500/50 text-xs font-bold text-blue-400 shadow-neon-blue z-20">
                        DEV
                    </div>
                </div>

                {/* Interaction Area */}
                <div className="w-full mt-auto">
                    <h2 className="text-lg font-medium text-white mb-2">
                        Hello Suvam, how can I assist?
                    </h2>
                    <p className="text-slate-400 text-sm mb-6 min-h-[1.25rem]">
                        {isLoading ? "Processing..." : lastResponse}
                    </p>

                    <div className="relative group/input">
                        <div className="absolute inset-0 bg-blue-500/20 blur-md rounded-xl opacity-0 group-hover/input:opacity-100 transition-opacity" />
                        <div className="relative flex items-center gap-2 bg-slate-800/50 border border-white/10 rounded-xl p-1 pr-2 backdrop-blur-sm focus-within:border-blue-500/50 focus-within:bg-slate-800/80 transition-all">
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyDown={handleKeyDown}
                                placeholder="Type a command..."
                                className="flex-1 bg-transparent border-none outline-none text-sm text-white px-3 py-2 placeholder-slate-500"
                                disabled={isLoading}
                            />

                            <button
                                onClick={handleSend}
                                disabled={isLoading}
                                className="w-8 h-8 rounded-lg bg-blue-600 hover:bg-blue-500 disabled:opacity-50 flex items-center justify-center transition-colors shadow-neon-blue"
                            >
                                {isLoading ? <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> : <Send className="w-4 h-4 text-white" />}
                            </button>
                            <button className="w-8 h-8 rounded-lg bg-slate-700/50 hover:bg-slate-600 flex items-center justify-center transition-colors">
                                <Mic className="w-4 h-4 text-slate-400" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Decorative Lines */}
                <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent pointer-events-none" />
                <div className="absolute top-0 left-1/2 h-full w-[1px] bg-gradient-to-b from-transparent via-blue-500/10 to-transparent pointer-events-none" />
            </div>
        </div>
    );
};

export default CodeBuddy;
