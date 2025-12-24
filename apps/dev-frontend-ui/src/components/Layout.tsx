
import React, { ReactNode } from 'react';
import TopBar from './TopBar';

interface LayoutProps {
    children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <div className="min-h-screen bg-background text-white selection:bg-blue-500/30">
            <div className="fixed inset-0 pointer-events-none bg-cyber-grid opacity-20 z-0"></div>
            <TopBar />
            <main className="relative z-10 p-6 max-w-[1920px] mx-auto">
                {children}
            </main>
        </div>
    );
};

export default Layout;
