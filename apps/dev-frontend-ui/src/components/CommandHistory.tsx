
import React from 'react';
import { Search, Clock, FileText, ChevronRight } from 'lucide-react';

const CommandHistory = () => {
    return (
        <div className="glass-panel w-full h-full rounded-2xl p-6 border border-white/5 flex flex-col">
            {/* Header & Search */}
            <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Clock className="w-5 h-5 text-blue-400" /> Command History
            </h2>

            <div className="relative mb-6">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                <input
                    type="text"
                    placeholder="Search history..."
                    className="w-full bg-slate-900/50 border border-white/10 rounded-lg py-2.5 pl-9 pr-4 text-sm text-slate-300 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 placeholder-slate-600"
                />
            </div>

            {/* Lists */}
            <div className="flex-1 overflow-y-auto pr-2 space-y-6 custom-scrollbar">
                {/* Today */}
                <div>
                    <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3 pl-1">Today</h3>
                    <div className="space-y-2">
                        {[
                            { title: "Chrome Info", sub: "Session duration: 2h" },
                            { title: "Open Visual Studio Code", sub: "Project: DevAI" },
                            { title: "What's the date today?", sub: "Assistant Query" },
                            { title: "Schedule a tech meeting", sub: "Calendar Action" }
                        ].map((item, i) => (
                            <div key={i} className="group p-3 rounded-xl bg-slate-800/30 hover:bg-slate-700/50 border border-white/5 cursor-pointer transition-all flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 rounded-lg bg-blue-900/20 text-blue-400 group-hover:text-blue-300 group-hover:shadow-[0_0_10px_rgba(59,130,246,0.3)] transition-all">
                                        <FileText className="w-4 h-4" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-slate-200 group-hover:text-white">{item.title}</p>
                                        <p className="text-[10px] text-slate-500">{item.sub}</p>
                                    </div>
                                </div>
                                <ChevronRight className="w-4 h-4 text-slate-600 group-hover:text-blue-400 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Categories */}
                <div className="grid grid-cols-2 gap-3">
                    <div className="p-3 rounded-xl bg-slate-800/30 border border-white/5 hover:border-blue-500/30 transition-colors">
                        <div className="flex justify-between items-start mb-2">
                            <span className="text-xs text-slate-400">Applications</span>
                            <span className="text-[10px] bg-slate-700 px-1.5 py-0.5 rounded text-slate-300">12</span>
                        </div>
                        <div className="h-1 w-full bg-slate-700 rounded-full overflow-hidden">
                            <div className="h-full bg-blue-500 w-[60%]"></div>
                        </div>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-800/30 border border-white/5 hover:border-orange-500/30 transition-colors">
                        <div className="flex justify-between items-start mb-2">
                            <span className="text-xs text-slate-400">Recent Clips</span>
                            <span className="text-[10px] bg-slate-700 px-1.5 py-0.5 rounded text-slate-300">45</span>
                        </div>
                        <div className="h-1 w-full bg-slate-700 rounded-full overflow-hidden">
                            <div className="h-full bg-orange-500 w-[80%]"></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Actions */}
            <div className="mt-4 pt-4 border-t border-white/5 flex gap-2">
                <button className="flex-1 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs text-slate-300 transition-colors border border-white/5">
                    Recent Clips
                </button>
                <button className="flex-1 py-2 rounded-lg bg-blue-600/20 hover:bg-blue-600/30 text-xs text-blue-300 transition-colors border border-blue-500/20">
                    View All Files
                </button>
            </div>
        </div>
    );
};

export default CommandHistory;
