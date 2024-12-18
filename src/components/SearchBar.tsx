import React from 'react';
import { Search, FileDown, Share2 } from 'lucide-react';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm">
      <div className="relative">
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Search by gene name, ID, or sequence..."
          className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 bg-gray-50 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
        />
        <Search className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
        <kbd className="absolute right-3 top-3 px-2 py-1 text-xs font-semibold text-gray-500 bg-gray-100 border border-gray-300 rounded">⌘K</kbd>
      </div>
    </div>
  );
}