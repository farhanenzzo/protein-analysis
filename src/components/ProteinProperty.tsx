import React from 'react';
import { LucideIcon } from 'lucide-react';
import { TruncatedId } from './TruncatedId';

interface ProteinPropertyProps {
  icon: LucideIcon;
  label: string;
  value: string | number;
  variant?: 'default' | 'badge';
  truncate?: boolean;
}

export function ProteinProperty({ 
  icon: Icon, 
  label, 
  value, 
  variant = 'default',
  truncate = false
}: ProteinPropertyProps) {
  const shouldTruncate = truncate && typeof value === 'string' && 
    (label === 'Protein ID' || label === 'Transcript IDs');

  if (variant === 'badge') {
    return (
      <span className="inline-flex items-center px-2 py-1 rounded-md bg-gray-100 text-gray-700 space-x-1">
        <Icon className="h-4 w-4 text-gray-500" />
        <span>{value}</span>
      </span>
    );
  }

  return (
    <div>
      <p className="text-sm text-gray-500 flex items-center space-x-1">
        <Icon className="h-4 w-4" />
        <span>{label}</span>
      </p>
      <div className="mt-1">
        {shouldTruncate ? (
          <TruncatedId id={value} />
        ) : (
          <p className="text-sm font-medium text-gray-900">{value || 'N/A'}</p>
        )}
      </div>
    </div>
  );
}