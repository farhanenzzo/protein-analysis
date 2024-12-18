import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

interface TruncatedIdProps {
  id: string;
  maxLength?: number;
}

export function TruncatedId({ id, maxLength = 10 }: TruncatedIdProps) {
  const [copied, setCopied] = useState(false);

  const truncatedId = id.length > maxLength 
    ? `${id.slice(0, maxLength)}...` 
    : id;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(id);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="flex items-center space-x-2">
      <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono">
        {truncatedId}
      </code>
      <button
        onClick={handleCopy}
        className="p-1 hover:bg-gray-100 rounded-full transition-colors"
        title={copied ? 'Copied!' : 'Copy full ID'}
      >
        {copied ? (
          <Check className="h-4 w-4 text-green-500" />
        ) : (
          <Copy className="h-4 w-4 text-gray-400 hover:text-gray-600" />
        )}
      </button>
    </div>
  );
}