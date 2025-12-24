
import React from 'react';
import { Activity, Terminal } from 'lucide-react';

const ActivityLog = () => {
    const logs = [
        { time: "10:42 AM", type: "info", title: "Git Sync", msg: "Repo updated successfully" },
        { time: "10:40 AM", type: "success", title: "Build", msg: "Completed in 2.4s" },
        { time: "10:38 AM", type: "warning", title: "Memory", msg: "Usage peaked at 85%" },
        { time: "10:35 AM", type: "info", title: "System", msg: "Network switch detected" }
    ];

    return (
        <div className="glass-panel p-6 rounded-2xl h-full border border-white/5 flex flex-col">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg font-bold text-white flex items-center gap-2">
                    <Activity className="w-5 h-5 text-purple-400" /> Activity Log
                </h2>
                <div className="px-2 py-1 rounded bg-slate-800 border border-white/10 text-[10px] text-slate-400 font-mono">
                    LIVE
                </div>
            </div>

            <div className="flex-1 space-y-4 overflow-y-auto pr-2 custom-scrollbar">
                {logs.map((log, i) => (
                    <div key={i} className="relative pl-6 pb-4 border-l border-slate-700 last:border-l-0 last:pb-0">
                        <div className={`absolute left-[-5px] top-0 w-2.5 h-2.5 rounded-full border-2 border-slate-900 ${log.type === 'success' ? 'bg-green-500' :
                                log.type === 'warning' ? 'bg-yellow-500' : 'bg-blue-500'
                            }`}></div>

                        <div className="p-3 rounded-lg bg-slate-800/30 border border-white/5 hover:bg-slate-800/50 transition-colors">
                            <div className="flex justify-between items-start mb-1">
                                <span className={`text-xs font-semibold ${log.type === 'success' ? 'text-green-400' :
                                        log.type === 'warning' ? 'text-yellow-400' : 'text-blue-400'
                                    }`}>{log.title}</span>
                                <span className="text-[10px] text-slate-500">{log.time}</span>
                            </div>
                            <p className="text-sm text-slate-300 font-mono">{log.msg}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-4 pt-3 border-t border-white/5">
                <div className="flex items-center gap-2 text-xs text-slate-500 font-mono bg-slate-900/50 p-2 rounded">
                    <Terminal className="w-3 h-3" />
                    <span className="animate-pulse">_</span>
                </div>
            </div>
        </div>
    );
};

export default ActivityLog;
