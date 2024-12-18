import React from 'react';
import { Github } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-gray-500">
            <p>© 2024 Mahdi Moosa. All rights reserved.</p>
            <p className="mt-1">Version 1.0.0 | Last updated: {new Date().toLocaleDateString()}</p>
          </div>
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-gray-600">Documentation</a>
            <a href="#" className="text-gray-400 hover:text-gray-600">API</a>
            <a href="#" className="text-gray-400 hover:text-gray-600">Support</a>
            <a href="#" className="text-gray-400 hover:text-gray-600 flex items-center space-x-1">
              <Github className="h-4 w-4" />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}