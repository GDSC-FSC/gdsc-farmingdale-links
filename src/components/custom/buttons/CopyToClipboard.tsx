import { useCopyToClipboard } from '@/src/hooks/index'
import { Button } from '@/src/components/ui/button'
import { CardClasses } from '@/src/constants';
import { toast } from 'sonner';
export function CopyToClipboard({ content, children }: { content: string } & { children?: React.ReactNode }) {
  const { copied, copyToClipboard } = useCopyToClipboard();
  return (
    <>
      {children}
      <Button
        onClick={() => copyToClipboard(content)}
        className={`${CardClasses} bg-foreground-800 w-full text-left gap-2 flex flex-row items-center justify-center hover:bg-black/20 aria-selected:bg-black/20 rounded-md`}
        variant={`secondary`}
      >
        {copied ? toast.success('Copied') : 'Copy'}
      </Button>
    </>
  );
}
