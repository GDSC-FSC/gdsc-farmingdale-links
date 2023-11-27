import config from '../data/config';

const Scripts = () => (
  <>
    <script src={`https://www.googletagmanager.com/gtag/js?id=${config.googleAnalyticsID}`} />
    <script
      id="gtag"
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${config.googleAnalyticsID}', {
            page_path: window.location.pathname,
          });
        `,
      }}
    />
  </>
);

export default Scripts;
