import { ChevronRightIcon } from "lucide-react";
import { Icons } from "@/src/components/icons/icons";
import { Button } from "@/src/components/ui/button";
import { CardClasses } from "@/src/constants";
import { LinkedinIcon } from "lucide-react";
export const ShareVia = ({ shareUrl, description }: { shareUrl: string, description?: string }) => {
  const handleLinkedInShare = () => {
    const descriptionWithAmpersands = description?.replace(/\s+/g, '&');
    const linkedInShareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}&shareActive=true&text=${encodeURIComponent(descriptionWithAmpersands!) ?? 'Just sharing this link'}`;
    window.open(linkedInShareUrl, '_blank', 'noopener noreferrer');
  };

  const handleEmailShare = () => {
    const emailSubject = encodeURIComponent('Check out this link');
    const emailBody = encodeURIComponent(`I thought you might find this interesting: ${shareUrl} \n ${description}`);
    const mailToUrl = `mailto:?subject=${emailSubject}&body=${emailBody}`;
    window.location.href = mailToUrl;
  };

  return (
    <>
      <Button
        className={`flex flex-row items-center justify-between w-full gap-2 ${CardClasses} bg-foreground-800 hover:bg-black/20 aria-selected:bg-black/20 rounded-md`}
        variant={`secondary`}

        onClick={handleLinkedInShare}>
        <span
          className={`
            flex flex-row gap-2 items-center justify-center
          `}
        >
          <LinkedinIcon size={20}/>
          Share via LinkedIn
        </span>
        <ChevronRightIcon />
      </Button>
      <Button
        className={`flex flex-row items-center justify-between w-full gap-2 ${CardClasses} bg-foreground-800 hover:bg-black/20 aria-selected:bg-black/20 rounded-md`}
        onClick={handleEmailShare}
        variant={`secondary`}
      >
        <span
          className={`
              flex flex-row gap-2 items-center justify-center
          `}
        >
          {Icons.functionalIcons.email({
            size: `6`
          })}
          Share via Email
        </span>
        <ChevronRightIcon />
      </Button>
    </>
  );
};
