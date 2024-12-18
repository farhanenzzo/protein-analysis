import React from 'react';
import { Dna, Database, Settings, HelpCircle } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="bg-indigo-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <Dna className="h-8 w-8" />
            <div>
              <h1 className="text-xl font-bold">Mahdi Moosa</h1>
              <p className="text-xs text-indigo-200">Protein Analysis Platform</p>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <button className="flex items-center space-x-1 text-indigo-100 hover:text-white transition-colors">
              <Database className="h-4 w-4" />
              <span>Database</span>
            </button>
            <button className="flex items-center space-x-1 text-indigo-100 hover:text-white transition-colors">
              <Settings className="h-4 w-4" />
              <span>Settings</span>
            </button>
            <button className="flex items-center space-x-1 text-indigo-100 hover:text-white transition-colors">
              <HelpCircle className="h-4 w-4" />
              <span>Help</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}