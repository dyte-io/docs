import React from 'react';
import Link from '@docusaurus/Link';

/**
 * @typedef {{ question: string | import('react').ReactNode,answer: string | import('react').ReactNode, tags?: string[]}} FAQ
 */

/**
 * All FAQs here
 *
 * - You can use a string/jsx for both question and answer props.
 * - A question/answer can have multiple tags.
 * @type {FAQ[]}
 */
const FAQs = [
  {
    question: 'What does Dyte do?',
    answer: (
      <>
        <p>
          Dyte offers a real-time video and voice solution for integrating
          high-quality video/voice calls into your web, mobile, and desktop
          applications and websites. Call recording, live streaming, webinars,
          live transcription and translation, chatting, polling, quizzes, and
          many other features are available with Dyte
        </p>

        <p>Dyte includes:</p>
        <p>
          <b>Core SDKs</b>: These SDKs enable you to create high-quality custom
          video and voice calls with real-time communication. Core SDKs are
          completely customizable and simple to integrate.
        </p>
        <p>
          <b>UI Kit</b>: Using Dyte&quot;s prebuilt design library of UI
          components, you can integrate video and voice calls into your app or
          website in minutes.
        </p>

        <p>The following platforms are currently supported:</p>

        <ul>
          <li>
            Mobile: Flutter, Android (Java/Kotlin), iOS(Objective-C/Swift),
            React Native
          </li>
          <li>
            Web: Javascript Core SDK + UI Kit for React JS, Angular, Vue, Web
            Components for everything else
          </li>
          <li>Desktop: Electron</li>
        </ul>
        <p>
          For more information, see <Link href="/">Dyte docs</Link>.
        </p>
      </>
    ),
    tags: ['General'],
  },
  {
    question: 'What businesses can use Dyte?',
    answer:
      'Dyte can add value to a wide range of industries, including telehealth, eLearning, gaming, remote working, education, event management, metaverse, adult entertainment, and others.',
    tags: ['General'],
  },
  {
    question: 'What is a Developer Portal?',
    answer: (
      <>
        <p>
          To get started with Dyte, you must first register in the developer
          portal. The developer portal provides the following information:
        </p>
        <ul>
          <li>
            Dashboard: A view of your usage, billing, and organization details,
            etc.
          </li>
          <li>
            <b>API Keys</b>: The API Keys are required to instantiate a meeting.
            The values for Organization ID, API Key, and Base URL are generated
            dynamically for your Organization. You require these settings when
            performing different actions, such as, create a meeting, delete a
            meeting, add a participant, etc. Learn more{' '}
            <Link href="/react-ui-kit">Web SDKs</Link>,{' '}
            <Link href="/react-native">Mobile SDKs</Link>,{' '}
            <Link href="/api">APIs</Link>.
          </li>
          <li>
            <b>Logs and Sample Apps</b>: You can view logs and sample apps in
            developer portal.
          </li>
        </ul>
        <p>
          You can also create a webhook, roles, presets, and so on using the
          developer portal.
        </p>
      </>
    ),
    tags: ['General'],
  },
  {
    question: 'What are Presets?',
    answer: (
      <>
        A set of roles, UI elements, buttons, and configurations that determines
        how the meeting will appear for a specific participant. Learn more
        <Link href="/rn-core/reference/DytePermissionsPreset#module_DytePermissionsPreset">
          DytePermissionsPreset
        </Link>
        .
      </>
    ),
    tags: ['General'],
  },
  {
    question: 'What are Core SDKs used for?',
    answer: (
      <>
        The core SDKs are required to begin integrating Dyte into your web and
        mobile applications. Core SDKs allow you to create fully customizable
        video and voice calls with real-time communication for your
        applications. See
        <Link href="/">Dyte docs</Link> for more information.
      </>
    ),
    tags: ['General'],
  },
  {
    question: 'What is the UI Kit?',
    answer: (
      <>
        Dyte provides a prebuilt design library of UI components that you can
        use to build video and voice calls in minutes. This layer is used on top
        of the Core SDKs. See
        <Link href="/">Dyte docs</Link> for more information.
      </>
    ),
    tags: ['General'],
  },
  {
    question: 'What is the Plugin SDK?',
    answer:
      'You can use Dyte plugin SDKs to add third-party plugins to experience the most immersive, collaborative, and more human interaction right in your video and audio calls. Dyte provides multiple out-of-the-box plugins, for example, YouTube, Miro, WhiteBoard, and so on.',
    tags: ['General'],
  },
  {
    question:
      'How to access API Keys and other details from the Developer Portal?',
    answer: (
      <p>
        Log into{' '}
        <Link href="https://dev.dyte.io/apikeys">
          https://dev.dyte.io/apikeys
        </Link>{' '}
        with the credentials you used to sign up for Dyte.
      </p>
    ),
    tags: ['General'],
  },
  {
    question:
      'How many people can join a Dyte meeting with audio & video turned ON?',
    answer: (
      <p>
        On Dyte, you can have up to 200 people on the same call with video and
        voice enabled. However, if you have any specific requirements that
        require more people joining the same call, please{' '}
        <Link href="https://dyte.io/contact">contact us</Link>. We will support
        you with your requirements.
      </p>
    ),
    tags: ['General'],
  },
  {
    question: 'How many attendees can be seen on a live grid?',
    answer:
      'In order to provide the best possible experience, we have limited the number of attendees to 6-9. However, we can tailor it to a maximum of 12 attendees.',
    tags: ['General'],
  },
  {
    question: 'How many people can join a Dyte webinar?',
    answer: (
      <p>
        500. One user with the audio-video enabled and everyone else attending
        the call (aka one host webinar). However, if you have any specific
        requirements that require more people joining the same call, please{' '}
        <Link href="https://dyte.io/contact">contact us</Link>. We will support
        you with your requirements.
      </p>
    ),
    tags: ['General'],
  },
  {
    question: 'What is an organization in Dyte?',
    answer: (
      <p>
        In Dyte, organization allows you to group all of your company&apos;s
        members. This is a top-level entity to which all members of your group
        are added. Dyte also considers the organization to be a{' '}
        <b>billing unit</b>.
      </p>
    ),
    tags: ['General'],
  },
  {
    question: 'Where can I find my auth token and room name?',
    answer: (
      <>
        <p>
          The Add Participant API call returns your authentication token. See{' '}
          <Link href="/api#/operations/addParticipant">Add a participant.</Link>
        </p>
        <p>
          Room name is generated when you create a meeting. You can get the room
          name from the developer portal or using REST APIs. For example,
        </p>

        <img
          src="/static/faq/create-meeting.png"
          alt="Create Meeting response"
        />

        <p>
          For more information, see{' '}
          <Link href="/api#/operations/createMeeting">Create a meeting.</Link>
        </p>
      </>
    ),
    tags: ['General'],
  },
  {
    question:
      'Can I join a meeting from the mobile which is started on the web?',
    answer: 'Yes, you can.',
    tags: ['General'],
  },

  // Technical,
  {
    question:
      'What are the minimum browser and internet requirements for Dyte?',
    answer: (
      <>
        <p>
          Browser Requirements:
          <ul>
            <li>Chrome (or Chromium based) 74+</li>
            <li>Firefox 78+</li>
            <li>Opera 64+</li>
            <li>Safari 12+</li>
            <li>Edge 79+</li>
            <li>iOS (Safari) 12.1+</li>
            <li>iOS (Non-Safari) 15+</li>
          </ul>
        </p>
        <p>
          Internet Requirements:
          <ul>
            <li>Downlink (Minimum) 4 Mbps</li>
            <li>Downlink (Optimal) 8 Mbps</li>
            <li>Uplink (Minimum) 2 Mbps</li>
            <li>Uplink (Optimal) 4 Mbps</li>
          </ul>
        </p>
      </>
    ),
    tags: ['Technical'],
  },
  {
    question: 'What is the difference between a meeting and a session? ',
    answer:
      'Every Dyte communication channel is referred to as a meeting. A meeting is basically a recurring instance of that communication channel, and an ongoing meeting is referred to as a session.',
    tags: ['Technical'],
  },
  {
    question: 'Which part of the meeting is customizable?',
    answer: (
      <>
        <p>
          To match your branding, you can change the logo, colors, font, border,
          and spacing. Design tokens in UI Kit are used to customize these
          components.
        </p>
        <p>
          Our Core SDKs can also be used to create fully customized video/voice
          calls for your applications.
        </p>
      </>
    ),
    tags: ['Technical'],
  },
  {
    question: 'Can I record a meeting?',
    answer: (
      <>
        <p>
          Yes. See <Link href="/cli/recording">recoridng a meeting</Link>.
        </p>
      </>
    ),
    tags: ['Technical'],
  },
  {
    question: 'Where are the meeting recordings stored?',
    answer: (
      <>
        We store the recordings where you provide us storage access. For
        example, your AWS S3 bucket, DigitalOcean Spaces, or Azure storage
        account. See{' '}
        <Link href="/api#/operations/startRecording">
          Start recording a meeting for the given ID
        </Link>{' '}
        and{' '}
        <Link href="/guides/recording-your-meetings#publishing-a-recording-to-your-cloud-provider">
          Publishing a recording to your cloud provider
        </Link>
      </>
    ),
    tags: ['Technical'],
  },
  {
    question: 'Where is Dyte hosted?',
    answer: (
      <>
        Resiliency is important. Dyte uses multi-cloud and multi-region
        architecture to provide that seamless experience. Dyte is hosted in
        Mumbai, Virginia (US East), Singapore, and Frankfurt. You can also read
        through{' '}
        <Link href="https://dyte.io/blog/multi-region-resiliency/">this</Link>{' '}
        blog to understand how Dyte manages a multi-region setup.
      </>
    ),
    tags: ['Technical'],
  },
  {
    question: 'Can I self-host Dyte on my own servers?',
    answer: (
      <>
        No. Dyte is a Software as a Service (SaaS), fully managed and hosted by
        Dyte.
      </>
    ),
    tags: ['Technical'],
  },
  {
    question:
      'What platforms, language, and technologies can I build on using Dyte?',
    answer: (
      <>
        The following are the supported platforms:
        <ul>
          <li>Web: React JS, Angular, Vue, Javascript</li>
          <li>Mobile: Flutter, Kotlin, Swift, React Native</li>
          <li>Desktop: Electron</li>
        </ul>
      </>
    ),
    tags: ['Technical'],
  },
  {
    question: 'What backend services can I use with Dyte?',
    answer: (
      <>
        We have no restrictions on our end. Our APIs are HTTP REST APIs and thus
        can be called from services written in any language or framework. To
        find your language-specific backend code, refer to our{' '}
        <Link href="/api">API Reference documentation.</Link>
      </>
    ),
    tags: ['Technical'],
  },
  {
    question: 'What are webhooks?',
    answer: (
      <>
        Webhook service enables you to subscribe to server events. These events
        allow to trigger specific server actions in response to Dyte meeting
        events and state changes. We currently support notifications for the
        following events via webhooks:
        <ul>
          <li>meeting.started</li>
          <li>meeting.ended</li>
          <li>meeting.participantJoined</li>
          <li>meeting.participantLeft</li>
          <li>recording.statusUpdate </li>
        </ul>
        <p>
          Learn more:
          <Link href="/guides/integrating-with-webhooks">
            Integrating with Webhooks
          </Link>
          .
        </p>
      </>
    ),
    tags: ['Technical'],
  },
  {
    question:
      'How do I set up and transfer a recording to my storage configuration?',
    answer: (
      <>
        You can pass an optional object storageConfig in the start recording
        request, and we will publish the recording directly to your cloud
        provider once it stops. For more information, see{' '}
        <Link href="/guides/recording-your-meetings#publishing-a-recording-to-your-cloud-provider">
          Publishing a recording to your cloud provider
        </Link>
        .
      </>
    ),
    tags: ['Technical'],
  },
  {
    question: 'How do I create a region-specific room?',
    answer: (
      <>
        To create a meeting in your preferred region, pass preferredRegion in
        the body of the createMeeting endpoint. For more information, see{' '}
        <Link href="/api#/operations/createMeeting">Create a meeting.</Link>
      </>
    ),
    tags: ['Technical'],
  },
  {
    question:
      'Do we record the entire screen, or can we record specific streams or users regardless of who is on screen?',
    answer: (
      <>
        Yes, we record the entire screen rather than individual streams or
        users.
      </>
    ),
    tags: ['Technical'],
  },
  {
    question: 'How do I make a payment?',
    answer: (
      <>
        Once Dyte has generated an invoice, you can pay using a link, a saved
        card, or do a direct bank transfer.{' '}
      </>
    ),
    tags: ['Pricing'],
  },
];

export default FAQs;
