import React from 'react'
import Header from "@/components/Header";
import Footer from "@/components/FooterAlternate";

const PrivacyPolicy = () => {
  return (
    <div className='relative container'>
      <Header />

      <div className="p-6">
        <h1 className="text-4xl font-[400] font-bowlby mb-4">Privacy Policy</h1>
        <div className="font-sans text-[16px] font-[400] leading-relaxed">
          <p><strong>Effective Date: 7th August 2025</strong></p>
          <p>At Crowned, we respect and protect your privacy. This Privacy Policy explains how we collect, use, and share information when you use the Crowned App (&quot;the App&quot;), a social recognition platform that allows users to nominate, crown, and interact anonymously or semi-anonymously.</p>
          
          <h2 className="text-3xl font-bold font-sans mt-6 mb-2">1. Information We Collect</h2>
          <p>We collect various types of personal information when you use the App, including:</p>
          <p><strong>Personal Information:</strong> When you sign up for an account, we collect your name, email, phone number, and optionally, your school or team affiliation.</p>
          <p><strong>Social Media Information:</strong> If you choose to connect your social media accounts (e.g., Instagram, WhatsApp), we collect your profile information to help you interact and share within the app.</p>
          <p><strong>Device Information:</strong> We collect information about your device and network, including the device’s operating system, version, device identifier, IP address, and network information to improve the user experience.</p>
          <p><strong>Usage Data:</strong> We collect data on how you interact with the app, including the pages you visit, the features you use, and the interactions (such as crowns sent/received, and invitations sent).</p>

          <h2 className="text-3xl font-bold font-sans mt-6 mb-2">2. How We Use Your Information</h2>
          <p>The information we collect is used for the following purposes:</p>
          <ul className="list-disc pl-5">
            <li>To provide, personalize, and improve your experience on the App.</li>
            <li>To allow you to create, send, and receive nominations (crowns) and engage with the community.</li>
            <li>To send you notifications, updates, and marketing communications (with your consent).</li>
            <li>To analyze user activity for improving the App and developing new features.</li>
            <li>To comply with legal obligations and protect the safety of our users.</li>
          </ul>

          <h2 className="text-3xl font-bold font-sans mt-6 mb-2">3. Data Sharing and Disclosure</h2>
          <p>We do not sell, rent, or trade your personal information. However, we may share your information under the following circumstances:</p>
          <p><strong>With service providers:</strong> We may share data with trusted third-party providers who assist with app services (e.g., cloud storage, analytics, marketing tools).</p>
          <p><strong>For legal compliance:</strong> We may disclose your information to comply with legal obligations, enforce our terms of service, or protect the rights, property, and safety of Crowned, our users, or others.</p>

          <h2 className="text-3xl font-bold font-sans mt-6 mb-2">4. Data Retention</h2>
          <p>We retain your information for as long as necessary to provide you with the App&apos;s services or as required by law. You can delete your account at any time, which will remove your personal information from the app, though some data may remain for backup or legal purposes.</p>

          <h2 className="text-3xl font-bold font-sans mt-6 mb-2">5. Cookies and Tracking Technologies</h2>
          <p>We use cookies and similar tracking technologies to collect information about your usage and interactions with the App. You can manage your cookie preferences through your device settings.</p>

          <h2 className="text-3xl font-bold font-sans mt-6 mb-2">6. Your Rights and Choices</h2>
          <p><strong>Access and update your information:</strong> You can access and update your personal information by going to your account settings.</p>
          <p><strong>Delete your account:</strong> You can delete your account at any time, which will remove your data from our systems, subject to retention requirements for legal reasons.</p>
          <p><strong>Opt-out of marketing:</strong> You can opt-out of receiving marketing communications by following the unsubscribe instructions in the emails or adjusting your settings within the App.</p>
          <p><strong>Data portability:</strong> You have the right to request a copy of your data in a structured format.</p>

          <h2 className="text-3xl font-bold font-sans mt-6 mb-2">7. Security</h2>
          <p>We use industry-standard security measures to protect your personal information. However, no system is completely secure, and we cannot guarantee the absolute security of your data.</p>

          <h2 className="text-3xl font-bold font-sans mt-6 mb-2">8. Children’s Privacy</h2>
          <p>The App is not intended for children under the age of 13. We do not knowingly collect personal information from children. If you believe we have collected information from a child under 13, please contact us, and we will delete such information.</p>

          <h2 className="text-3xl font-bold font-sans mt-6 mb-2">9. SMS and Phone Numbers</h2>
          <p>Crowned may request and collect your phone number during the registration process for account creation and to facilitate notifications via SMS. By providing your phone number, you consent to receive SMS notifications related to your account, including, but not limited to, nominations, invitations, identity reveals, and promotional content.</p>
          <p><strong>Usage of Phone Numbers:</strong> We use your phone number to enhance your experience on the app, including sending verification codes, invitations, notifications of nominations, and other related updates. We will never share your phone number with third parties unless required by law or with your explicit consent.</p>
          <p><strong>SMS Notifications:</strong> When you invite others to the app or participate in certain features, we may send SMS notifications to you or recipients. These notifications are integral to the app&apos;s functionality, helping to ensure users are notified of their nominations and can participate in growth activities such as challenges and leaderboard rankings.</p>
          <p><strong>Opting Out:</strong> You may choose to opt-out of receiving SMS notifications at any time by following the opt-out instructions in the messages sent to you. However, some critical notifications, such as those related to your account&apos;s security and key app updates, may still be sent.</p>

          <h2 className="text-3xl font-bold font-sans mt-6 mb-2">10. Changes to This Privacy Policy</h2>
          <p>We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any significant changes by updating the &quot;Effective Date&quot; at the top of this policy.</p>

          <h2 className="text-3xl font-bold font-sans mt-6 mb-2">11. Contact Us</h2>
          <p>If you have any questions or concerns about this Privacy Policy, please contact us at:</p>
          <p><strong>Email:</strong> getcrownedapp@gmail.com</p>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default PrivacyPolicy