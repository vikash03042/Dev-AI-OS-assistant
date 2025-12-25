
import React, { useState } from 'react';
import Layout from '@/components/Layout';
import CodeBuddy from '@/components/CodeBuddy';
import CommandHistory from '@/components/CommandHistory';
import TasksControls from '@/components/TasksControls';
import ActivityLog from '@/components/ActivityLog';
import Permissions from '@/components/Permissions';
import PermissionModal from '@/components/PermissionModal';
import { motion } from 'framer-motion';

export default function Dashboard() {
    const [showPermissions, setShowPermissions] = useState(false);

    // Check for Auth Token on Load
    React.useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const token = params.get('token');
        const name = params.get('name');

        if (token) {
            localStorage.setItem('dev_token', token);
            if (name) localStorage.setItem('dev_user_name', name);

            // Clean URL (Remove query params so it looks clean: /dashboard)
            window.history.replaceState({}, document.title, window.location.pathname);

            // Trigger Permissions Request if new login (roughly)
            // For now, simple check:
            if (!localStorage.getItem('perm_mic')) {
                setShowPermissions(true);
            }
        }
    }, []);

    return (
        <Layout>
            <PermissionModal isOpen={showPermissions} onComplete={() => setShowPermissions(false)} />
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "circOut" }}
                className="grid grid-cols-12 gap-6 pb-20"
            >

                {/* Left Column: Command History */}
                <div className="col-span-12 lg:col-span-3 h-full">
                    <CommandHistory />
                </div>

                {/* Center Column: Code Buddy & Activity */}
                <div className="col-span-12 lg:col-span-6 flex flex-col gap-6 h-full">
                    <div className="flex-1 min-h-[300px]">
                        <CodeBuddy />
                    </div>
                    <div className="h-[250px] lg:h-1/3">
                        <ActivityLog />
                    </div>
                </div>

                {/* Right Column: Controls & Permissions */}
                <div className="col-span-12 lg:col-span-3 flex flex-col gap-6 h-full">
                    <div className="flex-1">
                        <TasksControls />
                    </div>
                    <div className="h-1/3 hidden xl:block">
                        <Permissions />
                    </div>
                </div>

            </motion.div>
        </Layout>
    );
}
