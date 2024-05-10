/* eslint-disable @typescript-eslint/no-unused-vars */

import { Link } from "../components/custom";
import { appName, appOrigin } from "../constants/app";
import { usePageEffect } from "../core/page";

export const Component = function Cookies(): JSX.Element {
	usePageEffect({
		title: "Cookie Policy",
	});

	return (
		<>
			<style>
				{`
          h1, h2, h3 {
            font-weight: 400;
            margin: 0;
            padding: 0;
          }

          h1 {
            font-size: 2.5em;
            margin-bottom: 0.4em;
          }

          h2 {
            font-size: 2em;
            margin-bottom: 0.3em;
          }

          h3 {
            font-size: 1.5em;
            margin-bottom: 0.2em;
          }

          p {
            margin: 0 0 0.7em 0;
            padding: 0;
            line-height: 1.5em;
            text-indent: 1em;
          }

          ul {
            margin: 0;
            padding: 0;
          }

          li {
            margin: 0 0 0.2em 0;
            padding: 0;
            line-height: 1.5em;
            text-indent: 1em;
          }

          li::before {
            content: "\\2192\\00a0";
          }
        `}
			</style>
			<h1>
				Cookie Policy for <strong>{appName}</strong>
			</h1>
			<p>
				This is the Cookie Policy for {appName}, accessible from{" "}
				<Link className={`underline ml-[-14px]`} href={appOrigin}>
					{appOrigin}
				</Link>
			</p>
			<p>
				<strong>What Are Cookies</strong>
			</p>
			<p>
				As is common practice with almost all professional websites this site
				uses cookies, which are tiny files that are downloaded to your computer,
				to improve your experience. This page describes what information they
				gather, how we use it and why we sometimes need to store these cookies.
				We will also share how you can prevent these cookies from being stored
				however this may downgrade or 'break' certain elements of the sites
				functionality.
			</p>

			<p>
				<strong>How We Use Cookies</strong>
			</p>

			<p>
				We use cookies for a variety of reasons detailed below. Unfortunately in
				most cases there are no industry standard options for disabling cookies
				without completely disabling the functionality and features they add to
				this site. It is recommended that you leave on all cookies if you are
				not sure whether you need them or not in case they are used to provide a
				service that you use.
			</p>

			<p>
				<strong>Disabling Cookies</strong>
			</p>

			<p>
				You can prevent the setting of cookies by adjusting the settings on your
				browser (see your browser Help for how to do this). Be aware that
				disabling cookies will affect the functionality of this and many other
				websites that you visit. Disabling cookies will usually result in also
				disabling certain functionality and features of the this site. Therefore
				it is recommended that you do not disable cookies. This Cookies Policy
				was created with the help of the{" "}
				<Link
					className={`underline ml-[-14px]`}
					href="https://www.cookiepolicygenerator.com/cookie-policy-generator/"
				>
					Cookies Policy Generator
				</Link>
				.
			</p>
			<p>
				<strong>The Cookies We Set</strong>
			</p>

			<ul>
				<li>
					<span>Account related cookies</span>
					<span>
						If you create an account with us then we will use cookies for the
						management of the signup process and general administration. These
						cookies will usually be deleted when you log out however in some
						cases they may remain afterwards to remember your site preferences
						when logged out.
					</span>
				</li>
			</ul>
			<p>
				<strong>Third Party Cookies</strong>
			</p>
			<p>
				In some special cases we also use cookies provided by trusted third
				parties. The following section details which third party cookies you
				might encounter through this site.
			</p>
			<ul>
				<li>
					<span>
						This site uses Google Analytics which is one of the most widespread
						and trusted analytics solution on the web for helping us to
						understand how you use the site and ways that we can improve your
						experience. These cookies may track things such as how long you
						spend on the site and the pages that you visit so we can continue to
						produce engaging content.
					</span>
					<span>
						For more information on Google Analytics cookies, see the official
						Google Analytics page.
					</span>
				</li>
			</ul>
			<p>
				<strong>More Information</strong>
			</p>
			<p>
				Hopefully that has clarified things for you and as was previously
				mentioned if there is something that you aren't sure whether you need or
				not it's usually safer to leave cookies enabled in case it does interact
				with one of the features you use on our site.
			</p>
			<p>
				For more general information on cookies, please read the{" "}
				<Link
					className={`underline ml-[-14px]`}
					href="https://www.cookiepolicygenerator.com/sample-cookies-policy/"
				>
					Cookies Policy article
				</Link>
				.
			</p>
			<p>
				However if you are still looking for more information then you can
				contact us through one of our preferred contact methods:
			</p>
			<ul>
				<li>Email: mikeodnis3242004@gmail.com</li>
			</ul>
		</>
	);
};
