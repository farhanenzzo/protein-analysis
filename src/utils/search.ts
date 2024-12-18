import { Protein } from '../types/protein';

export function searchProteins(proteins: Protein[], searchTerm: string): Protein[] {
  if (!searchTerm.trim()) {
    return proteins;
  }

  const normalizedSearch = searchTerm.toLowerCase().trim();

  return proteins.filter((protein) => {
    return (
      protein.name.toLowerCase().includes(normalizedSearch) ||
      protein.id.toLowerCase().includes(normalizedSearch) ||
      protein.hostSequence?.toLowerCase().includes(normalizedSearch) ||
      protein.targetSequence?.toLowerCase().includes(normalizedSearch)
    );
  });
}