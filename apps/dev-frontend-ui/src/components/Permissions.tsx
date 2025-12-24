
import React from 'react';
import { Shield, FileText, Globe, Cpu, ToggleRight, Info } from 'lucide-react';

const Permissions = () => {
    const permissions = [
        { name: "Pipeline", icon: <Globe className="w-4 h-4 text-blue-400" />, status: true },
        { name: "File Access", icon: <FileText className="w-4 h-4 text-orange-400" />, status: true },
        { name: "App Automation", icon: <Cpu className="w-4 h-4 text-purple-400" />, status: false },
        { name: "System Control", icon: <Shield className="w-4 h-4 text-green-400" />, status: false }
    ];

    return (
        <div className="glass-panel p-6 rounded-2xl h-full flex flex-col justify-between">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg font-bold text-white flex items-center gap-2">
                    <Shield className="w-5 h-5 text-blue-400" /> Permissions
                </h2>
                <Info className="w-4 h-4 text-slate-500 hover:text-white cursor-pointer transition-colors" />
            </div>

            <div className="space-y-4">
                {permissions.map((perm, index) => (
                    <div key={index} className="flex items-center justify-between p-4 rounded-xl bg-slate-800/40 border border-white/5 hover:bg-slate-800/60 transition-colors">
                        <div className="flex items-center gap-3">
                            <div className="p-2 rounded-lg bg-slate-900 border border-white/5">
                                {perm.icon}
                            </div>
                            <span className="font-medium text-slate-200">{perm.name}</span>
                        </div>
                        <div className={`cursor-pointer ${perm.status ? 'text-blue-400 shadow-[0_0_10px_rgba(59,130,246,0.3)] rounded-full' : 'text-slate-600'}`}>
                            <ToggleRight className={`w-8 h-8 ${perm.status ? 'fill-current' : ''}`} />
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 text-center">
                <p className="text-xs text-slate-500">
                    Granting permissions allows &quot;Code Buddy&quot; to interact with your system.
                </p>
            </div>
        </div>
    );
};

export default Permissions;
