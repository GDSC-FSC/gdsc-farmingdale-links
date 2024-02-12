import { useCopyToClipboard } from '@/src/hooks/index'
import { Button } from '@/src/components/ui/button'

export function CopyToClipboard({ content }: Readonly<{ content: string }>) {
  const { copied, copyToClipboard } = useCopyToClipboard();
  return (
    <Button onClick={() => copyToClipboard(content)}>
      {copied ? 'Copied' : 'Copy'}
    </Button>
  );
}
