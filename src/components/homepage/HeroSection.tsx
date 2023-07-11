import React from 'react';
import Link from '@docusaurus/Link';
import {
  ChatMultipleRegular,
  LiveRegular,
  MicRegular,
  VideoRegular,
} from '@fluentui/react-icons';
import clsx from 'clsx';

const PRODUCTS = [
  {
    title: 'Live Video',
    link: '#',
    icon: VideoRegular,
    image: '/static/landing-page/hero/video-graphic.png',
    text: 'Enable live video communication within your application. Perfect for education, telemedicine, social networks and gaming',
  },
  {
    title: 'Voice',
    link: '#',
    icon: MicRegular,
    image: '/static/landing-page/hero/voice-graphic.png',
    text: 'Incorporate high-quality real-time audio into your application. Build voice calls, audio conferences, voice chats in games and more',
  },
  {
    title: 'Interactive Live Streaming',
    link: '#',
    icon: LiveRegular,
    image: '/static/landing-page/hero/livestream-graphic.png',
    text: 'Integrate highly scalable live video broadcasting capabilities into your app, ideal for apps that involve streaming webinars, sports or events',
  },
  {
    title: 'Chat',
    beta: true,
    link: '#',
    icon: ChatMultipleRegular,
    image: '/static/landing-page/hero/chat-graphic.png',
    text: 'Add real-time chat functionalities to your application. Be it ustomer support, social networks or any other colloboration use case, we got you covered',
  },
];

function HeroProduct({
  link,
  title,
  icon: Icon,
  text,
  image,
  beta,
}: (typeof PRODUCTS)[0]) {
  return (
    <Link
      to={link}
      className={clsx(
        'group relative cursor-pointer overflow-clip rounded-3xl from-primary/30 via-transparent to-transparent text-black transition-all hover:bg-gradient-to-tr hover:text-primary hover:no-underline dark:text-white',
        'border-2 border-secondary-700 hover:border-primary'
      )}
    >
      <div className="p-6 !pb-0">
        <h3 className="mb-1.5 flex items-center gap-3 font-jakarta group-hover:text-primary">
          <Icon className="h-7 w-7" />
          <div>
            {title}
            {beta && (
              <span className="font-normal text-text-400"> (Beta)</span>
            )}
          </div>
        </h3>
        <p className="mb-0 text-sm text-zinc-400">{text}</p>
      </div>

      <img
        src={image}
        alt={title}
        className="mt-1 w-full transition-transform group-hover:scale-110"
      />
    </Link>
  );
}

export default function HeroSection() {
  return (
    <>
      <section className="noise-bg no-underline-links px-4 pt-16 lg:py-0">
        <div className="flex flex-col items-center justify-between py-14">
          <h2 className="mb-4 font-jakarta text-5xl font-bold">
            Build with Dyte
          </h2>
          <p className="max-w-xl text-text-400 text-center">
            At Dyte, we're building the future of real-time communication.
            Integrate programmable, and easily customizable live video
            and voice into your web, mobile, and desktop applications with just
            a few lines of code.
          </p>
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-5xl grid-cols-1 grid-rows-2 gap-6 px-4 md:grid-cols-2">
        {PRODUCTS.map((product) => (
          <HeroProduct {...product} key={product.title} />
        ))}
      </section>
    </>
  );
}
