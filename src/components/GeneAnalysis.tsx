import React from 'react';
import { Protein } from '../types/protein';
import { 
  Download, 
  Share2, 
  AlertCircle, 
  Check, 
  Binary, 
  Ruler, 
  Scale, 
  Dna,
  FileText,
  GitBranch
} from 'lucide-react';
import { ProteinProperty } from './ProteinProperty';
import { TruncatedSequence } from './TruncatedSequence';

interface GeneAnalysisProps {
  protein: Protein | null;
}

export function GeneAnalysis({ protein }: GeneAnalysisProps) {
  if (!protein) {
    return (
      <div className="h-full flex items-center justify-center p-12">
        <div className="text-center">
          <AlertCircle className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-500">Select a protein from the list to view analysis details</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-start">
        <div>
          <div className="flex items-center space-x-2">
            <Dna className="h-6 w-6 text-indigo-500" />
            <h3 className="text-xl font-semibold text-gray-900">{protein.name}</h3>
          </div>
          <p className="text-sm text-gray-500 mt-1">Analysis Report</p>
        </div>
        <div className="flex space-x-2">
          <button className="flex items-center space-x-1 px-3 py-2 text-sm text-gray-600 hover:text-gray-900 transition-colors">
            <Download className="h-4 w-4" />
            <span>Export</span>
          </button>
          <button className="flex items-center space-x-1 px-3 py-2 text-sm text-gray-600 hover:text-gray-900 transition-colors">
            <Share2 className="h-4 w-4" />
            <span>Share</span>
          </button>
        </div>
      </div>

      <div className="space-y-6">
        <div>
          <h4 className="text-sm font-medium text-gray-500 mb-3">Sequence Description</h4>
          <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
            <div className="grid grid-cols-2 gap-4">
              <ProteinProperty
                icon={Binary}
                label="Protein ID"
                value={protein.proteinId}
                truncate
              />
              <ProteinProperty
                icon={Ruler}
                label="Length"
                value={protein.length}
              />
              <ProteinProperty
                icon={Scale}
                label="Molecular Weight"
                value={protein.molecularWeight}
              />
              <ProteinProperty
                icon={GitBranch}
                label="Strands"
                value={protein.strands}
              />
              <ProteinProperty
                icon={FileText}
                label="Transcript IDs"
                value={protein.transcriptIds}
                truncate
              />
              <ProteinProperty
                icon={Dna}
                label="Genes"
                value={protein.genes}
              />
            </div>
          </div>
        </div>

        {protein.hostSequence && (
          <TruncatedSequence
            sequence={protein.hostSequence}
            label="Host Gene Sequence"
          />
        )}

        {protein.targetSequence && (
          <TruncatedSequence
            sequence={protein.targetSequence}
            label="Target Gene Sequence"
          />
        )}

        <div className="grid grid-cols-2 gap-4">
          <div>
            <h4 className="text-sm font-medium text-gray-500 mb-2">Analysis Status</h4>
            <div className="flex items-center space-x-2">
              {protein.analysisStatus === 'Not Analyzed' ? (
                <AlertCircle className="h-4 w-4 text-gray-400" />
              ) : (
                <Check className="h-4 w-4 text-green-500" />
              )}
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                {protein.analysisStatus}
              </span>
            </div>
          </div>
          <div>
            <h4 className="text-sm font-medium text-gray-500 mb-2">Frame Status</h4>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
              {protein.frameStatus}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}