import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { SearchBar } from './components/SearchBar';
import { ProteinList } from './components/ProteinList';
import { GeneAnalysis } from './components/GeneAnalysis';
import { Footer } from './components/Footer';
import { useProteins } from './hooks/useProteins';
import { searchProteins } from './utils/search';
import { Protein } from './types/protein';
import { LoadingSpinner } from './components/LoadingSpinner';
import { ErrorDisplay } from './components/ErrorDisplay';

export function App() {
  const { proteins, loading, error } = useProteins();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProtein, setSelectedProtein] = useState<Protein | null>(null);

  const filteredProteins = searchProteins(proteins, searchTerm);

  if (loading) {
    return <LoadingSpinner message="Loading protein data..." />;
  }

  if (error) {
    return <ErrorDisplay message={error} />;
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <SearchBar value={searchTerm} onChange={setSearchTerm} />
          
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <ProteinList
              proteins={filteredProteins}
              selectedProtein={selectedProtein}
              onSelectProtein={setSelectedProtein}
            />

            <div className="bg-white rounded-lg shadow-sm p-6">
              <GeneAnalysis protein={selectedProtein} />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}