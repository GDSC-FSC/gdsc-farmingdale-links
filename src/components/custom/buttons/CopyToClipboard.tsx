import { useCopyToClipboard } from '@/src/hooks/index'
import { Button } from '@/src/components/ui/button'

export function CopyToClipboard({ content, children }: { content: string } & { children?: React.ReactNode }) {
  const { copied, copyToClipboard } = useCopyToClipboard();
  return (
    <>
      {children}
      <Button onClick={() => copyToClipboard(content)}>
        {copied ? 'Copied' : 'Copy'}
      </Button>
    </>
  );
}
