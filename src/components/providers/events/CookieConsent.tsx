import * as React from 'react'
import { Link } from '@/src/components/custom';
import { Button } from '@/src/components/ui/button';
import { consentGranted, getCookieConsent } from '@/src/utils/cookies';

export const CookieConsent = function CookieConsent() {
  const [cookies, setCookies] = React.useState("unk");
  const [isMounted, setIsMounted] = React.useState(false);

  const d = new Date();
  const oneYear = new Date(d.getFullYear() + 1, d.getMonth(), d.getDate());

  const handleAccept = () => {
    setCookies("granted");
    document.cookie = "cookie-consent=granted; expires=" + oneYear + "; path=/";
    consentGranted("granted");
  };

  const handleDecline = () => {
    setCookies("denied");
    document.cookie = "cookie-consent=denied; path=/";
  };

  React.useEffect(() => {
    setIsMounted(true);
    setCookies(getCookieConsent());
  }, []);

  return (
    <>
      {isMounted &&
        (
          <div
            id="cookie-banner"
            className={`${cookies === "granted" ? "hidden" : "block"
              } fixed bottom-0 right-0 z-50 m-2 max-w-screen-sm rounded-lg border-2 border-slate-300 bg-purple-50 text-slate-800 shadow-xl`}
          >
            <div className="p-4 text-center">
              <p className="mb-4 text-sm sm:text-base">
                We use cookies to analyze our website and make your experience even
                better. To learn more, see our{" "}
                <Link
                  className="text-blue-600 underline hover:text-blue-700"
                  href="/privacy-policy"
                >
                  Privacy Policy.
                </Link>
              </p>

              <div className="mx-auto">
                <Button
                  className="rounded-md bg-blue-600 p-2 text-white transition hover:bg-blue-700"
                  onClick={handleAccept}
                >
                  Accept
                </Button>
                <Button
                  className="ml-2 rounded-md bg-transparent p-2 text-slate-600 transition hover:bg-gray-200"
                  onClick={handleDecline}
                >
                  Decline
                </Button>
              </div>
            </div>
          </div>
        )}
    </>
  );
};
