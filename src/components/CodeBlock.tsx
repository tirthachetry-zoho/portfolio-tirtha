"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";

interface CodeBlockProps {
  children: React.ReactNode;
  className?: string;
  [key: string]: any;
}

export default function CodeBlock({

  children,
  className = "",
  ...props
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    const codeElement = (props.node as any)?.children?.[0];
    const codeText = codeElement?.children?.[0] || String(children);
    
    try {
      await navigator.clipboard.writeText(codeText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  // Extract language from className (e.g., "language-python")
  const languageMatch = className.match(/language-(\w+)/);
  const language = languageMatch ? languageMatch[1] : "code";

  return (
    <div className="relative group my-6">
      <div className="absolute top-3 right-3 z-10">
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-gray-400 bg-gray-800/50 hover:bg-gray-700/50 border border-gray-700 rounded-md transition-all opacity-0 group-hover:opacity-100"
          aria-label="Copy code"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-green-400" />
              <span className="text-green-400">Copied!</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5" />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>
      <div className="bg-gray-900 rounded-lg border border-gray-800 overflow-hidden">
        {language !== "code" && (
          <div className="px-4 py-2 bg-gray-800/50 border-b border-gray-800">
            <span className="text-xs font-medium text-gray-400 uppercase tracking-wide">
              {language}
            </span>
          </div>
        )}
        <pre className={`!m-0 !p-4 !bg-transparent ${className}`} {...props}>
          <code className="font-mono text-sm leading-relaxed">{children}</code>
        </pre>
      </div>
    </div>
  );
}
