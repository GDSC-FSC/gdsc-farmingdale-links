export function getCookieConsent() {
  const name = 'cookie-consent=';
  const decodedCookie = decodeURIComponent(document.cookie);
  const cookieArray = decodedCookie.split(';');

  for (let i = 0; i < cookieArray.length; i++) {
    const cookie = cookieArray[i].trim();
    if (cookie.indexOf(name) === 0) {
      return cookie.substring(name.length, cookie.length);
    }
  }
  return "";
}

export function consentGranted(consent: string) {
  const d = new Date();
  const oneYear = new Date(d.getFullYear() + 1, d.getMonth(), d.getDate());
  document.cookie = `cookie-consent=${consent}; expires=${oneYear.toUTCString()}; path=/`;
}
