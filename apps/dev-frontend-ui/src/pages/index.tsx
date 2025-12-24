
import React, { useState } from 'react';
import Layout from '@/components/Layout';
import CodeBuddy from '@/components/CodeBuddy';
import CommandHistory from '@/components/CommandHistory';
import TasksControls from '@/components/TasksControls';
import ActivityLog from '@/components/ActivityLog';
import Permissions from '@/components/Permissions';
import JarvisLanding from '@/components/JarvisLanding';
import { AnimatePresence, motion } from 'framer-motion';

export default function Dashboard() {
  const [isInitialized, setIsInitialized] = useState(false);

  if (!isInitialized) {
    return <JarvisLanding onInitialize={() => setIsInitialized(true)} />;
  }

  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "circOut" }}
        className="grid grid-cols-12 gap-6 h-[calc(100vh-7rem)] min-h-[600px]"
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

