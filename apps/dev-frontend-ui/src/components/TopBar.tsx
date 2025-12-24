
import React from 'react';
import { LayoutDashboard, Shield, Plug, User, Settings, Bell } from 'lucide-react';

const TopBar = () => {
    return (
        <div className="w-full h-16 glass-panel border-b border-white/10 flex items-center justify-between px-6 sticky top-0 z-50">
            {/* Logo */}
            <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center shadow-neon-blue">
                    <Shield className="w-5 h-5 text-white" />
                </div>
                <h1 className="text-xl font-bold tracking-wide text-white text-glow">
                    Dev <span className="text-blue-400 font-light">Assistant</span>
                </h1>
            </div>

            {/* Navigation */}
            <div className="flex items-center gap-1 bg-slate-900/50 p-1 rounded-xl border border-white/5">
                <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600/20 text-blue-400 border border-blue-500/30">
                    <LayoutDashboard className="w-4 h-4" />
                    <span className="text-sm font-medium">Dashboard</span>
                </button>
                <button className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-white/5 text-slate-400 transition-colors">
                    <Shield className="w-4 h-4" />
                    <span className="text-sm font-medium">Permissions</span>
                </button>
                <button className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-white/5 text-slate-400 transition-colors">
                    <Plug className="w-4 h-4" />
                    <span className="text-sm font-medium">Plugins</span>
                </button>
            </div>

            {/* User Actions */}
            <div className="flex items-center gap-4">
                <button className="p-2 rounded-lg hover:bg-white/5 text-slate-400 hover:text-white transition-colors">
                    <Bell className="w-5 h-5" />
                </button>
                <button className="p-2 rounded-lg hover:bg-white/5 text-slate-400 hover:text-white transition-colors">
                    <Settings className="w-5 h-5" />
                </button>
                <div className="flex items-center gap-3 pl-4 border-l border-white/10">
                    <div className="text-right hidden sm:block">
                        <p className="text-sm font-medium text-white">Suvam</p>
                        <p className="text-xs text-blue-400">Owner</p>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-500 to-purple-600 p-[2px]">
                        <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center overflow-hidden">
                            <User className="w-5 h-5 text-slate-300" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopBar;
