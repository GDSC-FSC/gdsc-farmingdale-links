import React from "react";
import { Link } from "../components/custom";
import { appName, appOrigin, appEmail as email } from "../constants/app";
import { usePageEffect } from "../core/page";

export const Component = function Privacy(): JSX.Element {
	usePageEffect({ title: "Privacy Policy" });
	return (
		<>
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
				<h1
					className={`

      `}
				>
					Privacy Policy
				</h1>
				<p
					className={`

      `}
				>
					Your privacy is important to us. It is {appName}&#39; policy to
					respect your privacy and comply with any applicable law and regulation
					regarding any personal information we may collect about you, including
					across our website,{" "}
					<Link className={`underline ml-[-10px]`} href={appOrigin}>
						{appOrigin}
					</Link>
					, and other sites we own and operate.
				</p>
				<p
					className={`

      `}
				>
					This policy is effective as of 28 February 2021 and was last updated
					on 28 February 2021.
				</p>
				<h2
					className={`

      `}
				>
					Information We Collect
				</h2>
				<p
					className={`

      `}
				>
					Information we collect includes both information you knowingly and
					actively provide us when using or participating in any of our services
					and promotions, and any information automatically sent by your devices
					in the course of accessing our products and services.
				</p>
				<h3
					className={`

      `}
				>
					Log Data
				</h3>
				<p
					className={`

      `}
				>
					When you visit our website, our servers may automatically log the
					standard data provided by your web browser. It may include your
					device’s Internet Protocol (IP) address, your browser type and
					version, the pages you visit, the time and date of your visit, the
					time spent on each page, other details about your visit, and technical
					details that occur in conjunction with any errors you may encounter.
				</p>
				<p
					className={`

      `}
				>
					Please be aware that while this information may not be personally
					identifying by itself, it may be possible to combine it with other
					data to personally identify individual persons.
				</p>
				<h3
					className={`

      `}
				>
					Personal Information
				</h3>
				<p
					className={`

      `}
				>
					We may ask for personal information which may include one or more of
					the following:
				</p>
				<ul>
					<li>
						<span>Name</span>
					</li>
					<li>
						<span>Email</span>
					</li>
					<li>
						<span>Social media profiles</span>
					</li>
				</ul>
				<h3
					className={`

      `}
				>
					Legitimate Reasons for Processing Your Personal Information
				</h3>
				<p
					className={`

      `}
				>
					We only collect and use your personal information when we have a
					legitimate reason for doing so. In which instance, we only collect
					personal information that is reasonably necessary to provide our
					services to you.
				</p>
				<h3
					className={`

      `}
				>
					Collection and Use of Information
				</h3>
				<p
					className={`

      `}
				>
					We may collect personal information from you when you do any of the
					following on our website:
				</p>
				<ul>
					<li>
						<span>
							Sign up to receive updates from us via email or social media
							channels
						</span>
					</li>
					<li>
						<span>
							Use a mobile device or web browser to access our content
						</span>
					</li>
					<li>
						<span>
							Contact us via email, social media, or on any similar technologies
						</span>
					</li>
					<li>
						<span>When you mention us on social media</span>
					</li>
				</ul>
				<p
					className={`

      `}
				>
					We may collect, hold, use, and disclose information for the following
					purposes, and personal information will not be further processed in a
					manner that is incompatible with these purposes:
				</p>
				<p
					className={`

      `}
				>
					We may collect, hold, use, and disclose information for the following
					purposes, and personal information will not be further processed in a
					manner that is incompatible with these purposes:
				</p>
				<ul>
					<li>
						<span>
							to enable you to customize or personalize your experience of our
							website
						</span>
					</li>
					<li>
						<span>To contact and communicate with you</span>
					</li>
					<li>
						<span>
							for analytics, market research, and business development,
							including to operate and improve our website, associated
							applications, and associated social media platforms
						</span>
					</li>
					<li>
						<span>
							For advertising and marketing, including to send you promotional
							information about our products and services and information about
							third parties that we consider may be of interest to you
						</span>
					</li>
					<li>
						<span>
							To enable you to access and use our website, associated
							applications, and associated social media platforms
						</span>
					</li>
					<li>
						<span>For internal record keeping and administrative purposes</span>
					</li>
				</ul>
				<p
					className={`

      `}
				>
					Please be aware that we may combine information we collect about you
					with general information or research data we receive from other
					trusted sources.
				</p>
				<h3
					className={`

      `}
				>
					Security of Your Personal Information
				</h3>
				<p
					className={`

      `}
				>
					When we collect and process personal information, and while we retain
					this information, we will protect it within commercially acceptable
					means to prevent loss and theft, as well as unauthorized access,
					disclosure, copying, use, or modification.
				</p>
				<p
					className={`

      `}
				>
					Although we will do our best to protect the personal information you
					provide to us, we advise that no method of electronic transmission or
					storage is 100% secure, and no one can guarantee absolute data
					security. We will comply with laws applicable to us in respect of any
					data breach.
				</p>
				<p
					className={`

      `}
				>
					You are responsible for selecting any password and its overall
					security strength, ensuring the security of your own information
					within the bounds of our services.
				</p>
				<h3
					className={`

      `}
				>
					How Long We Keep Your Personal Information
				</h3>
				<p
					className={`

      `}
				>
					We keep your personal information only for as long as we need to. This
					time period may depend on what we are using your information for, in
					accordance with this privacy policy. If your personal information is
					no longer required, we will delete it or make it anonymous by removing
					all details that identify you.
				</p>
				<p
					className={`

      `}
				>
					However, if necessary, we may retain your personal information for our
					compliance with a legal, accounting, or reporting obligation or for
					archiving purposes in the public interest, scientific, or historical
					research purposes or statistical purposes.
				</p>
				<h2
					className={`

      `}
				>
					Children’s Privacy
				</h2>
				<p
					className={`

      `}
				>
					We do not aim any of our products or services directly at children
					under the age of 13, and we do not knowingly collect personal
					information about children under 13.
				</p>
				<h2
					className={`

      `}
				>
					Disclosure of Personal Information to Third Parties
				</h2>
				<p
					className={`

      `}
				>
					We may disclose personal information to:{" "}
				</p>
				<ul>
					<li>
						<span>A parent, subsidiary, or affiliate of our company</span>
					</li>
					<li>
						<span>
							Third party service providers for the purpose of enabling them to
							provide their services, for example, IT service providers, data
							storage, hosting and server providers, advertisers, or analytics
							platforms
						</span>
					</li>
					<li>
						<span>Our employees, contractors, and/or related entities</span>
					</li>
					<li>
						<span>Our existing or potential agents or business partners</span>
					</li>
					<li>
						<span>
							Sponsors or promoters of any competition, sweepstakes, or
							promotion we run
						</span>
					</li>
					<li>
						<span>
							Courts, tribunals, regulatory authorities, and law enforcement
							officers, as required by law, in connection with any actual or
							prospective legal proceedings, or in order to establish, exercise,
							or defend our legal rights
						</span>
					</li>
					<li>
						<span>
							Third parties, including agents or sub-contractors, who assist us
							in providing information, products, services, or direct marketing
							to you third parties to collect and process data
						</span>
					</li>
				</ul>
				<h2
					className={`

      `}
				>
					International Transfers of Personal Information
				</h2>
				<p
					className={`

      `}
				>
					The personal information we collect is stored and/or processed where
					we or our partners, affiliates, and third-party providers maintain
					facilities. Please be aware that the locations to which we store,
					process, or transfer your personal information may not have the same
					data protection laws as the country in which you initially provided
					the information. If we transfer your personal information to third
					parties in other countries: (i) we will perform those transfers in
					accordance with the requirements of applicable law; and (ii) we will
					protect the transferred personal information in accordance with this
					privacy policy.
				</p>
				<h2
					className={`

      `}
				>
					Your Rights and Controlling Your Personal Information
				</h2>
				<p
					className={`

      `}
				>
					You always retain the right to withhold personal information from us,
					with the understanding that your experience of our website may be
					affected. We will not discriminate against you for exercising any of
					your rights over your personal information. If you do provide us with
					personal information you understand that we will collect, hold, use
					and disclose it in accordance with this privacy policy. You retain the
					right to request details of any personal information we hold about
					you.
				</p>
				<p
					className={`

      `}
				>
					If we receive personal information about you from a third party, we
					will protect it as set out in this privacy policy. If you are a third
					party providing personal information about somebody else, you
					represent and warrant that you have such person’s consent to provide
					the personal information to us.
				</p>
				<p
					className={`

      `}
				>
					If you have previously agreed to us using your personal information
					for direct marketing purposes, you may change your mind at any time.
					We will provide you with the ability to unsubscribe from our
					email-database or opt out of communications. Please be aware we may
					need to request specific information from you to help us confirm your
					identity.
				</p>
				<p
					className={`

      `}
				>
					If you believe that any information we hold about you is inaccurate,
					out of date, incomplete, irrelevant, or misleading, please contact us
					using the details provided in this privacy policy. We will take
					reasonable steps to correct any information found to be inaccurate,
					incomplete, misleading, or out of date.
				</p>
				<p
					className={`

      `}
				>
					If you believe that we have breached a relevant data protection law
					and wish to make a complaint, please contact us using the details
					below and provide us with full details of the alleged breach. We will
					promptly investigate your complaint and respond to you, in writing,
					setting out the outcome of our investigation and the steps we will
					take to deal with your complaint. You also have the right to contact a
					regulatory body or data protection authority in relation to your
					complaint.
				</p>
				<h2
					className={`

      `}
				>
					Use of Cookies
				</h2>
				<p
					className={`

      `}
				>
					We use &ldquo;cookies&rdquo; to collect information about you and your
					activity across our site. A cookie is a small piece of data that our
					website stores on your computer, and accesses each time you visit, so
					we can understand how you use our site. This helps us serve you
					content based on preferences you have specified.
				</p>
				<h2
					className={`

      `}
				>
					Limits of Our Policy
				</h2>
				<p
					className={`

      `}
				>
					Our website may link to external sites that are not operated by us.
					Please be aware that we have no control over the content and policies
					of those sites, and cannot accept responsibility or liability for
					their respective privacy practices.
				</p>
				<h2
					className={`

      `}
				>
					Changes to This Policy
				</h2>
				<p
					className={`

      `}
				>
					At our discretion, we may change our privacy policy to reflect updates
					to our business processes, current acceptable practices, or
					legislative or regulatory changes. If we decide to change this privacy
					policy, we will post the changes here at the same link by which you
					are accessing this privacy policy.
				</p>
				<p
					className={`

      `}
				>
					If required by law, we will get your permission or give you the
					opportunity to opt in to or opt out of, as applicable, any new uses of
					your personal information.
				</p>
				<h2
					className={`

      `}
				>
					Contact Us
				</h2>
				<p
					className={`

      `}
				>
					For any questions or concerns regarding your privacy, you may contact
					us using the following details:
				</p>
				<p
					className={`

      `}
				>
					{appName} Support Team (
					<Link className={`underline ml-[-14px]`} href={`mailto:${email}`}>
						{email}
					</Link>
					)
				</p>
			</>
		</>
	);
};
