import React from 'react';
import Link from '@docusaurus/Link';
import {
  ChatMultipleRegular,
  LiveRegular,
  MicRegular,
  VideoRegular,
} from '@fluentui/react-icons';

const PRODUCTS = [
  {
    title: 'Live Video',
    link: '#',
    icon: VideoRegular,
    image: '/static/landing-page/hero/video-graphic.png',
    text: 'Lorem ipsum dolor sit amet consectetur. Faucibus risus nunc adipiscing rhoncus nisi diam egestas bibendum velit. Turpis mauris volutpat dignissim sit ac pellentesque eu dictumst.',
  },
  {
    title: 'Voice',
    link: '#',
    icon: MicRegular,
    image: '/static/landing-page/hero/voice-graphic.png',
    text: 'Lorem ipsum dolor sit amet consectetur. Faucibus risus nunc adipiscing rhoncus nisi diam egestas bibendum velit. Turpis mauris volutpat dignissim sit ac pellentesque eu dictumst.',
  },
  {
    title: 'Interactive Live Streaming',
    link: '#',
    icon: LiveRegular,
    image: '/static/landing-page/hero/livestream-graphic.png',
    text: 'Lorem ipsum dolor sit amet consectetur. Faucibus risus nunc adipiscing rhoncus nisi diam egestas bibendum velit. Turpis mauris volutpat dignissim sit ac pellentesque eu dictumst.',
  },
  {
    title: 'Chat',
    comingSoon: true,
    link: '#',
    icon: ChatMultipleRegular,
    image: '/static/landing-page/hero/chat-graphic.png',
    text: 'Lorem ipsum dolor sit amet consectetur. Faucibus risus nunc adipiscing rhoncus nisi diam egestas bibendum velit. Turpis mauris volutpat dignissim sit ac pellentesque eu dictumst.',
  },
];

function HeroProduct({
  link,
  title,
  icon: Icon,
  text,
  image,
  comingSoon,
}: (typeof PRODUCTS)[0]) {
  return (
    <Link
      to={link}
      className="group relative cursor-pointer overflow-clip rounded-3xl border-2 from-primary/30 via-transparent to-transparent text-black transition-all hover:border-primary hover:bg-gradient-to-tr hover:text-primary hover:no-underline dark:text-white"
    >
      <div className="p-6 !pb-0">
        <h3 className="mb-1.5 flex items-center gap-3 font-jakarta">
          <Icon className="h-7 w-7" />
          <div>
            {title}
            {comingSoon && (
              <span className="font-normal text-text-400"> (coming soon)</span>
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
          <p className="max-w-xl text-text-400">
            At Dyte, we're building the future of real-time communication.
            Integrate high-quality, programmable, and customizable live video
            and voice into your web, mobile, and desktop applications with just
            a few lines of code.
          </p>
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-5xl grid-cols-1 grid-rows-2 gap-6 px-4 md:grid-cols-2">
        {PRODUCTS.map((product) => (
          <HeroProduct {...product} />
        ))}
      </section>
    </>
  );
}
