import { constructMetadata } from '@/src/utils/metadata';
import { usePageEffect } from '../core/page';
import { appName, appOrigin, appEmail } from '@/src/constants/app';
import { Link } from '@/src/components/custom';

export const Component = function  Accessibility (): JSX.Element  {
  usePageEffect({ title: `Accessibility` });
  constructMetadata({ title: `Accessibility`, description: `Accessibility Policy`, url: import.meta.url, image: `${import.meta.url}/assets/images/og.png`  });
  return (
    <>
      <h1 className={`

      `}>
        Website Accessibility Policy
      </h1>
      <p className={`

      `}>
        {appName} is committed to making our website, <Link href={appOrigin}>{appOrigin}</Link>, accessible to all individuals, including those with disabilities. We strive to ensure that our website complies with the Web Content Accessibility Guidelines <Link href={`https://www.w3.org/TR/WCAG21/#requirements-for-wcag-2-1`} className={`underline`}>(WCAG) 2.1 Level AA</Link>.
      </p>
      <p className={`

      `}>
        We have invested a significant amount of resources to help ensure that its website is made easier to use and more accessible for people with disabilities, with the strong belief that every person has the right to live with dignity, equality, comfort and independence.
      </p>
      <p className={`

      `}>
        To ensure that our website is accessible to those with disabilities, we have implemented the following accessibility features:
      </p>
      <ol>
        <li>
          We use alt tags to describe all images on our website
        </li>
        <li>
          We use clear and easy-to-read fonts and colors
        </li>
        <li>
          We ensure that all website functionality is accessible through a keyboard interface
        </li>
      </ol>
      <p>
          While we are committed to making our website accessible, we understand that not all areas of our website may be <Link className={`underline`} href={`https://www.ada.gov/`}>ADA</Link> or <Link className={`underline`} href={`https://www.w3.org/WAI/standards-guidelines/wcag/glance/`}>WCAG</Link> compliant, and are actively working to increase our compliance level. If you have any questions or concerns about the accessibility of our website, please contact us at <Link className={`underline`} href={`mailto:${appEmail}`}>{appEmail}</Link>.
      </p>
      <p className={`

      `}>
        We will do our best to address any issues and answer any questions. Thank you for visiting our website!
      </p>
      <p className={`

      `}>
        This policy was last updated on 26 December 2023.
      </p>
    </>
  )
}
