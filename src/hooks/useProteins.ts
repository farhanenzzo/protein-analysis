import { useState, useEffect } from 'react';
import { ProteinData, Protein } from '../types/protein';
import { mapProteinData } from '../utils/protein-mapper';

export function useProteins() {
  const [proteins, setProteins] = useState<Protein[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadProteins() {
      try {
        const response = await fetch(`${import.meta.env.BASE_URL}/protein-data.json`);
        if (!response.ok) {
          throw new Error('Failed to load protein data');
        }
        
        const data = await response.json();
        const mappedProteins = data.proteins.map(mapProteinData);
        setProteins(mappedProteins);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load proteins');
      } finally {
        setLoading(false);
      }
    }

    loadProteins();
  }, []);

  return { proteins, loading, error };
}