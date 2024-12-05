import Link from "next/link";
import { CONTACT_EMAIL } from "@/utils/constants";

export default function PrivacyPolicyComponent() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          <div className="mx-auto max-w-3xl">
            <article>
              <h1 className="h1 mb-4">Privacy Policy</h1>
              <p className="text-xl text-gray-600 dark:text-gray-400">Last updated: {new Date().toLocaleDateString()}</p>

              <div className="mt-8 space-y-8 text-gray-600 dark:text-gray-400">
                <section>
                  <h2 className="h3 mb-4 text-gray-900 dark:text-gray-100">Introduction</h2>
                  <p>
                    Carty ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you use our Telegram Mini App service ("Service").
                  </p>
                </section>

                <section>
                  <h2 className="h3 mb-4 text-gray-900 dark:text-gray-100">Information We Collect</h2>
                  <p>We collect information that you provide directly to us:</p>
                  <ul className="list-disc pl-6 mt-2">
                    <li>Telegram account information when you connect to our service</li>
                    <li>Store configuration and settings</li>
                    <li>Transaction and payment information</li>
                    <li>Communications with us</li>
                  </ul>
                </section>

                <section>
                  <h2 className="h3 mb-4 text-gray-900 dark:text-gray-100">How We Use Your Information</h2>
                  <p>We use the information we collect to:</p>
                  <ul className="list-disc pl-6 mt-2">
                    <li>Provide and maintain our Service</li>
                    <li>Process your transactions</li>
                    <li>Send you technical notices and support messages</li>
                    <li>Respond to your comments and questions</li>
                    <li>Improve our Service</li>
                  </ul>
                </section>

                <section>
                  <h2 className="h3 mb-4 text-gray-900 dark:text-gray-100">Data Storage and Security</h2>
                  <p>
                    We implement appropriate security measures to protect your personal information. Your data is stored securely on our servers and is only accessible to authorized personnel.
                  </p>
                </section>

                <section>
                  <h2 className="h3 mb-4 text-gray-900 dark:text-gray-100">Third-Party Services</h2>
                  <p>
                    We use the following third-party services:
                  </p>
                  <ul className="list-disc pl-6 mt-2">
                    <li>Telegram API for messaging and user authentication</li>
                    <li>Payment processors for handling transactions</li>
                    <li>Analytics services to improve our Service</li>
                  </ul>
                </section>

                <section>
                  <h2 className="h3 mb-4 text-gray-900 dark:text-gray-100">Your Rights</h2>
                  <p>
                    You have the right to:
                  </p>
                  <ul className="list-disc pl-6 mt-2">
                    <li>Access your personal information</li>
                    <li>Correct inaccurate information</li>
                    <li>Request deletion of your information</li>
                    <li>Opt-out of marketing communications</li>
                  </ul>
                </section>

                <section>
                  <h2 className="h3 mb-4 text-gray-900 dark:text-gray-100">Contact Us</h2>
                  <p>
                    If you have any questions about this Privacy Policy, please contact us:
                  </p>
                  <ul className="list-disc pl-6 mt-2">
                    <li>
                      Email:{" "}
                      <a href="mailto:hello@carty.cc" className="text-primary-600 hover:text-primary-700">
                        hello@carty.cc
                      </a>
                    </li>
                    <li>
                      Telegram:{" "}
                      <a href="https://t.me/ArnoGevorkyan" className="text-primary-600 hover:text-primary-700">
                        @ArnoGevorkyan
                      </a>
                    </li>
                  </ul>
                </section>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
