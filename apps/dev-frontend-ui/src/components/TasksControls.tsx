
import React from 'react';
import { Volume2, Wifi, Sun, Command, Play, Power, Lock, Moon } from 'lucide-react';

const TasksControls = () => {
    return (
        <div className="flex flex-col gap-6 h-full">
            {/* Quick Actions */}
            <div className="glass-panel p-5 rounded-xl border border-white/5">
                <div className="flex justify-between items-center mb-4">
                    <h3 className="text-sm font-semibold text-slate-300 uppercase tracking-wider">Quick Actions</h3>
                    <Command className="w-4 h-4 text-slate-500" />
                </div>
                <div className="space-y-2">
                    {[
                        { label: 'Open Chrome', icon: <Command className="w-3 h-3" /> },
                        { label: 'Open VS Code', icon: <Command className="w-3 h-3" /> },
                        { label: 'Set Alarm', icon: <Command className="w-3 h-3" /> }
                    ].map((action, i) => (
                        <button key={i} className="w-full flex items-center justify-between p-3 rounded-lg bg-slate-800/40 hover:bg-slate-700/50 border border-white/5 group transition-all">
                            <span className="text-sm text-slate-300 group-hover:text-white">{action.label}</span>
                            <div className="text-slate-500 group-hover:text-blue-400">
                                <Play className="w-3 h-3" />
                            </div>
                        </button>
                    ))}
                </div>
            </div>

            {/* System Controls */}
            <div className="glass-panel p-5 rounded-xl border border-white/5 flex-1">
                <h3 className="text-sm font-semibold text-slate-300 uppercase tracking-wider mb-5">System Controls</h3>

                <div className="space-y-6">
                    {/* Volume */}
                    <div>
                        <div className="flex justify-between text-xs text-slate-400 mb-2">
                            <span className="flex items-center gap-2"><Volume2 className='w-3 h-3' /> Volume</span>
                            <span>30%</span>
                        </div>
                        <div className="w-full bg-slate-800 rounded-full h-1.5">
                            <div className="bg-gradient-to-r from-blue-500 to-cyan-400 h-1.5 rounded-full w-[30%] shadow-neon-blue"></div>
                        </div>
                    </div>

                    {/* Wifi */}
                    <div className="flex items-center justify-between pb-4 border-b border-white/5">
                        <div className="flex items-center gap-3">
                            <div className="p-2 rounded bg-blue-500/20 text-blue-400">
                                <Wifi className="w-4 h-4" />
                            </div>
                            <div>
                                <p className="text-sm text-white">Wi-Fi Connected</p>
                                <p className="text-xs text-slate-500">TP-Link_5G</p>
                            </div>
                        </div>
                        <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
                    </div>

                    {/* Brightness */}
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="p-2 rounded bg-yellow-500/20 text-yellow-400">
                                <Sun className="w-4 h-4" />
                            </div>
                            <div>
                                <p className="text-sm text-white">Screen Brightness</p>
                                <p className="text-xs text-slate-500">Auto Adjusted</p>
                            </div>
                        </div>
                        <span className="text-xs text-slate-400">75%</span>
                    </div>
                </div>

                {/* Power Options */}
                <div className="mt-8 grid grid-cols-3 gap-2">
                    {[
                        { icon: <Lock className="w-4 h-4" />, label: 'Lock' },
                        { icon: <Moon className="w-4 h-4" />, label: 'Sleep' },
                        { icon: <Power className="w-4 h-4" />, label: 'Shutdown' }
                    ].map((opt, i) => (
                        <button key={i} className="flex flex-col items-center justify-center gap-2 p-3 rounded-xl bg-slate-800/40 hover:bg-slate-700/60 border border-white/5 transition-colors group">
                            <div className="text-slate-400 group-hover:text-orange-400 transition-colors">{opt.icon}</div>
                            <span className="text-[10px] text-slate-500 group-hover:text-slate-300">{opt.label}</span>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TasksControls;
