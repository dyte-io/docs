import { DyteMeeting, DyteSpinner } from '@dytesdk/react-ui-kit';
import React from 'react';
import { PhoneGeneric } from './nodes/Phone';
import CodeBlock from '@theme/CodeBlock';
import ReactMarkdown from 'react-markdown';

export const stepsTwo = [
  {
    step: 8,
    title: 'Initialize SDK',
    desc: `On the client side, the first interaction with the Dyte
    library is to initialize it with the token from the previous
    steps. After this step the SDK initializes all network and
    media related capabilities and  you can render your pre-call
    preview screen after this.`,
    code: `const [meeting, initMeeting] = useDyteClient();

useEffect(() => {
  initMeeting({
    authToken: '<auth-token>',
    defaults: {
      audio: false,
      video: false,
    },
  });
}, []);

// meeting is 'undefined'
        
return (
  <DyteSetupScreen meeting={meeting} mode="fill" />
)
    `,
    buttonText: 'Execute',
  },
  {
    step: 9,
    title: 'Initialize SDK',
    desc: `On the client side, the first interaction with the Dyte
    library is to initialize it with the token from the previous
    steps. After this step, the SDK initializes all network and
    media related capabilities, you can render your pre-call
    preview screen after this.`,
    code: `const [meeting, initMeeting] = useDyteClient();

useEffect(() => {
  initMeeting({
    authToken: '<auth-token>',
    defaults: {
      audio: false,
      video: false,
    },
  });
}, []);

// meeting is defined

return (
  <DyteSetupScreen meeting={meeting} mode="fill" />
)
    `,
    buttonText: 'Next',
  },
  {
    step: 10,
    title: 'Join the meeting',
    desc: `Once the SDK is initialized you can enter the meeting by calling \`meeting.join()\` method. Unless the user is in a waitlisted state you can now now publish, subcribe to media, send text messages etc.`,
    code: `meeting.join();`,
    buttonText: 'Execute',
  },
  {
    step: 11,
    title: 'Complete ✅',
    desc: `You have now successfully joined the meeting. Checkout [Next Steps](/guides/live-video/next-steps) for further reading.`,
  },
];

export default function OnboardingPartTwo({ step, store, meeting }) {
  return (
    <div className="absolute flex h-full w-full pr-12">
      <div className="flex flex-1 justify-between">
        <div className="flex-1 p-2">
          <div className="flex h-full flex-col items-start justify-start pt-4 pl-4">
            <div>
              <span className="text-xl font-semibold">{step.title}</span>
              <div className="my-4 min-w-[512px] max-w-[812px]">
                <ReactMarkdown>{step.desc}</ReactMarkdown>
              </div>
              {step.code && (
                <div className="w-[512px] rounded-t-[7px] rounded-b-[36px] bg-pink-500/90 shadow-xl">
                  <p
                    className={
                      'mb-0 rounded-t-md px-4 py-1 font-mono text-sm font-semibold text-white'
                    }
                  >
                    Your client side code
                  </p>
                  <CodeBlock language="jsx" children={step.code} />
                </div>
              )}
              {step.buttonText && (
                <div className="flex">
                  <div className="btn" onClick={() => store.incStep()}>
                    {step.buttonText}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="large-phone flex min-w-[400px] items-start justify-center pt-8">
          <div>
            <PhoneGeneric>
              <div className="flex h-full w-full items-center justify-center bg-secondary-1000">
                {store.currentStep === 8 && <DyteSpinner />}
                {(store.currentStep === 9 || store.currentStep === 10) &&
                  meeting && <DyteMeeting meeting={meeting} mode="fill" />}
                {store.currentStep > 10 && meeting && (
                  <DyteMeeting
                    meeting={meeting}
                    showSetupScreen={false}
                    mode="fill"
                  />
                )}
              </div>
            </PhoneGeneric>
          </div>
        </div>
      </div>
    </div>
  );
}
