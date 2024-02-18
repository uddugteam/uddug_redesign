import React from 'react';

import { getLayout } from 'components/layout/MainLayout';
import Wrapper from 'components/layout/Wrapper';
import Footer from 'components/layout/Footer';

import { AppNextPage } from '../../../../global';
import styles from './PrivacyPolicy.module.css';

const PrivacyPolicy: AppNextPage = () => {
  return (
    <main className={styles.root}>
      <Wrapper>
        <h2>Privacy Policy</h2>
        <p>
          At website, accessible from Uddug, one of our main priorities is the
          privacy of our visitors. This privacy policy document contains types
          of information that is collected and recorded by website and how we
          use it. If you have additional questions or require more information
          about our privacy policy, do not hesitate to contact us. This privacy
          policy applies only to our online activities and is valid for visitors
          to our website with regards to the information that they shared and/or
          collect in website. This policy is not applicable to any information
          collected offline or via channels other than this website. Our privacy
          policy was created with the help of the online generator of privacy
          policy.
        </p>
        <p>
          <h3>Consent</h3>
          By using our website, you hereby consent to our privacy policy and
          agree to its terms.
        </p>
        <p>
          <h3>Information we collect</h3>
          The personal information that you are asked to provide, and the
          reasons why you are asked to provide it, will be made clear to you at
          the point we ask you to provide your personal information. If you
          contact us directly, we may receive additional information about you
          such as your name, email address, phone number, the contents of the
          message and/or attachments you may send us, and any other information
          you may choose to provide.
          <br />
          <br />
          When you register for an account, we may ask for your contact
          information, including items such as name, company name, address,
          email address, and telephone number.
        </p>
        <p>
          <h3>How we use your information</h3>
          We use the information we collect in various ways, including to:
          <ul>
            <li>Provide, operate, and maintain our website</li>
            <li>Improve, personalize, and expand our website</li>
            <li>Understand and analyze how you use our website</li>
            <li>Develop new products, services, features, and functionality</li>
            <li>
              Communicate with you, either directly or through one of our
              partners, including for customer service, to provide you with
              updates and other information relating to the website, and for
              marketing and promotional purposes
            </li>
            <li>Send you emails</li>
            <li>Find and prevent fraud</li>
            <li>Log files</li>
          </ul>
          <br />
          Website follows a standard procedure of using log files. These files
          log visitors when they visit websites. All hosting companies do this
          and a part of hosting services’ analytics. The information collected
          by log files include internet proto- col (IP) addresses, browser type,
          internet service provider (ISP), date and time stamp, referring/exit
          pages, and possibly the number of clicks. These are not linked to any
          information that is personally identifiable. The purpose of the
          information is for analyzing trends, administering the site, tracking
          users’ movement on the website, and gathering demographic information.
        </p>
        <p>
          <h3>Cookies and web beacons</h3>
          Like any other website, website uses ‘cookies’. These cookies are used
          to store information including visitors’ preferences, and the pages on
          the website that the visitor accessed or visited. The information is
          used to optimize the users’ experience by customizing our web page
          content based on visitors’ browser type and/or other information. For
          more general information on cookies, please read “What are cookies”
          from cookie consent.
        </p>
        <p>
          <h3>Advertising partners privacy policies</h3>
          You may consult this list to find the privacy policy for each of the
          advertising partners of website. Third-party ad servers or ad networks
          uses technologies like cookies, javascript, or web beacons that are
          used in their respective advertisements and links that appear on
          website, which are sent directly to users’ browser. They automatically
          receive your ip address when this occurs. These technologies are used
          to measure the effectiveness of their advertising campaigns and/or to
          personalize the advertising content that you see on websites that you
          visit. Note that website has no access to or control over these
          cookies that are used by third-party advertisers.
        </p>
        <p>
          <h3>Third party privacy policies</h3>
          Website’s privacy policy does not apply to other advertisers or
          websites. Thus, we are advising you to consult the respective privacy
          policies of these third-party ad servers for more detailed
          information. It may include their practices and instructions about how
          to opt-out of certain options. You can choose to disable cookies
          through your individual browser options. To know more detailed
          information about cookie management with specific web browsers, it can
          be found at the browsers’ respective websites.
        </p>
        <p>
          <h3>CCPA privacy rights (do not sell my personal information)</h3>
          Under the CCPA, among other rights, California consumers have the
          right to:
          <ul>
            <li>
              Request that a business that collects a consumer’s personal data
              disclose the categories and specific pieces of personal data that
              a business has collected about consumers.
            </li>
            <li>
              Request that a business delete any personal data about the
              consumer that a business has collected.
            </li>
            <li>
              Request that a business that sells a consumer’s personal data, not
              sell the consumer’s personal data
            </li>
          </ul>
        </p>
        <h3>GDPR data protection rights</h3>
        <p>
          We would like to make sure you are fully aware of all of your data
          protection rights. Every user is entitled to the follow- ing:
          <ul>
            <li>
              The right to access – you have the right to request copies of your
              personal data. We may charge you a small fee for this service.
            </li>
            <li>
              The right to rectification – you have the right to request that we
              correct any information you believe is inaccurate. You also have
              the right to request that we complete the information you believe
              is incomplete.
            </li>
            <li>
              The right to erasure – you have the right to request that we erase
              your personal data, under certain conditions.
            </li>
            <li>
              The right to restrict processing – you have the right to request
              that we restrict the processing of your personal data, un- der
              certain conditions.
            </li>
            <li>
              The right to object to processing – you have the right to object
              to our processing of your personal data, under certain conditions.
            </li>
            <li>
              The right to data portability – you have the right to request that
              we transfer the data that we have collected to another
              organization, or directly to you, under certain conditions.
            </li>
            <li>
              If you make a request, we have one month to respond to you. If you
              would like to exercise any of these rights, please contact us.
            </li>
          </ul>
        </p>
        <p>
          <h3>Children’s information</h3>
          Another part of our priority is adding protection for children while
          using the internet. We encourage parents and guardians to observe,
          participate in, and/or monitor and guide their online activity.
          Website does not knowingly collect any personal identifiable
          information from children under the age of 13. If you think that your
          child provided this kind of information on our website, we strongly
          encourage you to contact us immediately and we will do our best
          efforts to promptly remove such information from our records.
        </p>
      </Wrapper>
      {/* <Footer /> */}
    </main>
  );
};

PrivacyPolicy.getLayout = getLayout;

export default PrivacyPolicy;
