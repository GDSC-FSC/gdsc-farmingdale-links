import { ChevronRightIcon } from "lucide-react";
import { Icons } from "@/src/components/icons/icons";
import { Button } from "@/src/components/ui/button";

export const ShareVia = ({ shareUrl }: { shareUrl: string }) => {
  const handleLinkedInShare = () => {
    const linkedInShareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`;
    window.open(linkedInShareUrl, '_blank', 'noopener noreferrer');
  };

  const handleEmailShare = () => {
    const emailSubject = encodeURIComponent('Check out this link');
    const emailBody = encodeURIComponent(`I thought you might find this interesting: ${shareUrl}`);
    const mailToUrl = `mailto:?subject=${emailSubject}&body=${emailBody}`;
    window.location.href = mailToUrl;
  };

  return (
    <>
      <Button
        className={`

        `}
        onClick={handleLinkedInShare}>
        <span
          className={`

          `}
        >
          {Icons.socialIcons.linkedIn({
            size: `4`
          })}
          Share via LinkedIn
        </span>
        <ChevronRightIcon />
      </Button>
      <Button
        className={``}
        onClick={handleEmailShare}
      >
        <span
          className={`

          `}
        >
          {Icons.functionalIcons.email({
            size: `4`
          })}
          Share via Email
        </span>
        <ChevronRightIcon />
      </Button>
    </>
  );
};
