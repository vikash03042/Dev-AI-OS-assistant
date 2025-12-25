import React, { useState } from 'react';
import { Shield, Mic, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface PermissionModalProps {
    isOpen: boolean;
    onComplete: () => void;
}

const PermissionModal: React.FC<PermissionModalProps> = ({ isOpen, onComplete }) => {
    const [step, setStep] = useState(0);

    if (!isOpen) return null;

    const steps = [
        {
            title: "Voice Access",
            desc: "Allow Dev to listen and respond.",
            icon: <Mic className="w-8 h-8 text-blue-400" />,
            action: async () => {
                // Mock permission request
                await new Promise(r => setTimeout(r, 800));
                setStep(1);
            }
        },
        {
            title: "System Control",
            desc: "Allow Dev to manage apps and files.",
            icon: <Shield className="w-8 h-8 text-purple-400" />,
            action: async () => {
                // Mock permission request
                await new Promise(r => setTimeout(r, 800));
                onComplete();
            }
        }
    ];

    const currentStep = steps[step];

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
            >
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="bg-slate-900 border border-white/10 p-8 rounded-2xl max-w-md w-full text-center"
                >
                    <div className="flex justify-center mb-6">
                        <div className="p-4 bg-slate-800 rounded-full border border-white/5">
                            {currentStep.icon}
                        </div>
                    </div>

                    <h2 className="text-2xl font-bold text-white mb-2">{currentStep.title}</h2>
                    <p className="text-slate-400 mb-8">{currentStep.desc}</p>

                    <button
                        onClick={currentStep.action}
                        className="w-full py-4 bg-white text-black font-bold rounded-xl hover:scale-105 transition-transform"
                    >
                        Allow Access
                    </button>

                    <div className="mt-4 flex justify-center gap-2">
                        {steps.map((_, i) => (
                            <div key={i} className={`w-2 h-2 rounded-full ${i === step ? 'bg-blue-500' : 'bg-slate-700'}`}></div>
                        ))}
                    </div>

                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export default PermissionModal;
