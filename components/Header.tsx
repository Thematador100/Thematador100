
import React from 'react';

interface HeaderProps {
    currentView: 'strategy' | 'commandCenter';
    onSetView: (view: 'strategy' | 'commandCenter') => void;
    onShowProjects: () => void;
}


const Header: React.FC<HeaderProps> = ({ currentView, onSetView, onShowProjects }) => {

  const handleReset = () => {
    if (window.confirm("Are you sure you want to clear all saved data and reset the application? This includes your agent workforce and saved projects. This cannot be undone.")) {
      localStorage.clear();
      window.location.reload();
    }
  };

  return (
    <header className="py-6 bg-slate-900/50 backdrop-blur-sm border-b border-slate-800 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="flex-1 flex justify-start items-center gap-4">
           <button 
                onClick={() => onSetView('strategy')} 
                className={`flex items-center space-x-2 text-xs text-slate-300 hover:text-white rounded-md px-3 py-2 transition ${currentView === 'strategy' ? 'bg-blue-600' : 'bg-slate-800 hover:bg-slate-700 border border-slate-700'}`}
            >
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                 </svg>
                <span>Strategy</span>
            </button>
            <button 
                onClick={() => onSetView('commandCenter')} 
                className={`flex items-center space-x-2 text-xs text-slate-300 hover:text-white rounded-md px-3 py-2 transition ${currentView === 'commandCenter' ? 'bg-blue-600' : 'bg-slate-800 hover:bg-slate-700 border border-slate-700'}`}
            >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 14v6m-3-3v3m-3-3v3m-3-3v3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                </svg>
                <span>Command Center</span>
            </button>
             <button 
                onClick={onShowProjects} 
                className="flex items-center space-x-2 text-xs text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-md px-3 py-2 transition"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" />
                </svg>
                <span>Projects</span>
            </button>
        </div>
        <div className="text-center flex-1">
            <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-300">
              AudienceAI
            </h1>
            <p className="text-slate-400 mt-2">Predictive Prospecting Engine</p>
        </div>
        <div className="flex-1 flex justify-end">
            <button 
                onClick={handleReset} 
                className="flex items-center space-x-2 text-xs text-slate-400 hover:text-red-400 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-md px-3 py-2 transition"
                title="Clear all saved results and form inputs"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
                <span>Reset App</span>
            </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
