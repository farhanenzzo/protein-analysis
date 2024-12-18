import React, { useState } from 'react';
import { Copy, Check, ChevronDown, ChevronUp } from 'lucide-react';

interface TruncatedSequenceProps {
  sequence: string;
  maxLength?: number;
  label: string;
}

export function TruncatedSequence({ sequence, maxLength = 200, label }: TruncatedSequenceProps) {
  const [copied, setCopied] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const isLongSequence = sequence.length > maxLength;
  const displaySequence = expanded ? sequence : sequence.slice(0, maxLength);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(sequence);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <h4 className="text-sm font-medium text-gray-500 flex items-center space-x-2">
          {label}
        </h4>
        <div className="flex items-center space-x-2">
          <button
            onClick={handleCopy}
            className="flex items-center space-x-1 px-2 py-1 text-sm text-gray-600 hover:text-gray-900 transition-colors"
            title={copied ? 'Copied!' : 'Copy sequence'}
          >
            {copied ? (
              <Check className="h-4 w-4 text-green-500" />
            ) : (
              <Copy className="h-4 w-4" />
            )}
            <span>Copy</span>
          </button>
          {isLongSequence && (
            <button
              onClick={() => setExpanded(!expanded)}
              className="flex items-center space-x-1 px-2 py-1 text-sm text-gray-600 hover:text-gray-900 transition-colors"
            >
              {expanded ? (
                <>
                  <ChevronUp className="h-4 w-4" />
                  <span>Show Less</span>
                </>
              ) : (
                <>
                  <ChevronDown className="h-4 w-4" />
                  <span>Show More</span>
                </>
              )}
            </button>
          )}
        </div>
      </div>
      <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
        <p className="text-sm font-mono break-all leading-relaxed">
          {displaySequence}
          {!expanded && isLongSequence && (
            <span className="text-gray-400">...</span>
          )}
        </p>
        {!expanded && isLongSequence && (
          <p className="text-xs text-gray-500 mt-2">
            Showing {maxLength} of {sequence.length} characters
          </p>
        )}
      </div>
    </div>
  );
}