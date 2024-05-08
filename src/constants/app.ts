interface AppProps<T = string> extends Record<string, T> {}
const App: AppProps[] = [
{  appName: import.meta.env.VITE_APP_NAME,
  appDescription: "This web application is a means to keep up to date with what GDSC FSC is doing, and will include upcoming events, and serve as a central hub for all our domains.",
  appOg: `${import.meta.env.BASE_URL}/assets/images/og.png`,
  appOrigin: `https://gdsc-fsc-l.web.app`,
  appEmail: import.meta.env.VITE_APP_EMAIL,
  }
]

export const {
  appName,
  appDescription,
  appOg,
  appOrigin,
  appEmail,
} = App[0];
