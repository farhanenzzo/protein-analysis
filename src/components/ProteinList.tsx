import React from 'react';
import { Protein } from '../types/protein';
import { ArrowRight, AlertCircle, Dna, Scale, Ruler } from 'lucide-react';
import { ProteinProperty } from './ProteinProperty';

interface ProteinListProps {
  proteins: Protein[];
  selectedProtein: Protein | null;
  onSelectProtein: (protein: Protein) => void;
}

export function ProteinList({ proteins, selectedProtein, onSelectProtein }: ProteinListProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm">
      <div className="p-4 border-b border-gray-200">
        <h2 className="text-lg font-semibold text-gray-900">Protein List</h2>
        <div className="mt-1 flex items-center space-x-2">
          <span className="text-sm text-gray-600">{proteins.length} fusion proteins found</span>
          <span className="text-gray-300">|</span>
          <span className="text-sm text-gray-600">Updated: {new Date().toLocaleTimeString()}</span>
        </div>
      </div>
      
      <div className="p-4 space-y-3">
        {proteins.map((protein) => (
          <button
            key={protein.id}
            onClick={() => onSelectProtein(protein)}
            className={`w-full text-left p-4 rounded-lg border transition-all ${
              selectedProtein?.id === protein.id
                ? 'border-indigo-500 bg-indigo-50 ring-1 ring-indigo-500'
                : 'border-gray-200 hover:border-indigo-300 hover:bg-gray-50'
            }`}
          >
            <div className="flex justify-between items-start">
              <div>
                <div className="flex items-center space-x-2">
                  <Dna className="h-5 w-5 text-indigo-500" />
                  <h3 className="font-medium text-gray-900">{protein.name}</h3>
                  <ArrowRight className="h-4 w-4 text-gray-400" />
                </div>
                {/* <p className="text-sm text-gray-500 mt-1 flex items-center space-x-1">
                  <Binary className="h-4 w-4" />
                  <span>ID: {protein.id}</span>
                </p> */}
              </div>
              <div className="flex items-center space-x-2">
                {protein.frameStatus === 'Out of Frame' && (
                  <AlertCircle className="h-4 w-4 text-yellow-500" />
                )}
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                  {protein.frameStatus}
                </span>
              </div>
            </div>
            <div className="mt-2 flex items-center space-x-4 text-sm">
              <ProteinProperty
                icon={Ruler}
                label="Length"
                value={protein.length}
                variant="badge"
              />
              <ProteinProperty
                icon={Scale}
                label="Molecular Weight"
                value={protein.molecularWeight}
                variant="badge"
              />
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}