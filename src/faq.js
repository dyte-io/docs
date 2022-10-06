import React from 'react';
import Link from '@docusaurus/Link';

/**
 * All FAQs here
 * 
 * - You can use a string/jsx for both question and answer props.
 * - A question/answer can have multiple tags.
 */
const FAQs = [
  {
    question: 'What does Dyte do?',
    answer: (
      <>
        <p>
          Dyte provides multiple SDKs for real-time communication that allow you
          to integrate high-quality video/audio calls into your web and mobile
          applications. Currently, the following platforms are supported:
        </p>
        <ul>
          <li>Mobile: Flutter, Kotlin, Swift, React Native</li>
          <li>Web: React JS, Angular, Vue, Javascript</li>
          <li>Desktop: Flutter For more information, see Dyte docs.</li>
        </ul>
        <p>
          For more information, see <Link href="#">Dyte docs</Link>.
        </p>
      </>
    ),
    tags: ['General'],
  },
  {
    question: 'What does Dyte do other than this?',
    answer: (
      <>
        <p>
          Dyte provides multiple SDKs for real-time communication that allow you
          to integrate high-quality video/audio calls into your web and mobile
          applications. Currently, the following platforms are supported:
        </p>
        <ul>
          <li>Mobile: Flutter, Kotlin, Swift, React Native</li>
          <li>Web: React JS, Angular, Vue, Javascript</li>
          <li>Desktop: Flutter For more information, see Dyte docs.</li>
        </ul>
        <p>
          For more information, see <Link href="#">Dyte docs</Link>.
        </p>
      </>
    ),
    tags: ['Pricing'],
  },
  {
    question: 'Are you sure?',
    answer: (
      <>
        <p>
          Dyte provides multiple SDKs for real-time communication that allow you
          to integrate high-quality video/audio calls into your web and mobile
          applications. Currently, the following platforms are supported:
        </p>
        <ul>
          <li>Mobile: Flutter, Kotlin, Swift, React Native</li>
          <li>Web: React JS, Angular, Vue, Javascript</li>
          <li>Desktop: Flutter For more information, see Dyte docs.</li>
        </ul>
        <p>
          For more information, see <Link href="#">Dyte docs</Link>.
        </p>
      </>
    ),
    tags: ['Technical'],
  },
];

export default FAQs;
