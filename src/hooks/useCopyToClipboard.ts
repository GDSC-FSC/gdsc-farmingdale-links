import { useCallback, useState } from 'react';
// eslint-disable-next-line react-refresh/only-export-components
export function useCopyToClipboard() {
  const [copied, setCopied] = useState(false);
  const copyToClipboard = useCallback((text: string) => {
    if ('clipboard' in navigator) {
      return navigator.clipboard.writeText(text)
        .then(() => {
          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
        })
        .catch((error) => {
          console.error('Error copying to clipboard:', error);
        });
    }
  }, []);
  return { copied, copyToClipboard };
}