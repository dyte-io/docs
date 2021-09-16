import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function Guide() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`SDK Guide - ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <div className="tailwind">
        <div className="mt-16 mb-10 space-y-4 text-center">
          <h2 className="text-4xl font-bold">Your guide to Dyte</h2>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>
        <div className="grid md:grid-cols-6 gap-4 w-full max-w-4xl mx-auto">
          <button className="flex items-center p-4 border-2 border-blue-200 rounded-lg md:col-span-3">
            <div className="mr-6">Icon</div>
            <div className="flex flex-col items-start">
              <div className="text-lg font-bold">Client SDK</div>
              <p className="text-left">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit
              </p>
            </div>
          </button>
          <button className="flex items-center p-4 border-2 border-blue-200 rounded-lg md:col-span-3">
            <div className="mr-6">Icon</div>
            <div className="flex flex-col items-start">
              <div className="text-lg font-bold">Client SDK</div>
              <p className="text-left">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit
              </p>
            </div>
          </button>
          <button className="flex items-center p-4 border-2 border-blue-200 rounded-lg md:col-span-2">
            <div className="mr-6">Icon</div>
            <div className="flex flex-col items-start">
              <div className="text-lg font-bold">Client SDK</div>
              <p className="text-left">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit
              </p>
            </div>
          </button>
          <button className="flex items-center p-4 border-2 border-blue-200 rounded-lg md:col-span-2">
            <div className="mr-6">Icon</div>
            <div className="flex flex-col items-start">
              <div className="text-lg font-bold">Client SDK</div>
              <p className="text-left">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit
              </p>
            </div>
          </button>
          <button className="flex items-center p-4 border-2 border-blue-200 rounded-lg md:col-span-2">
            <div className="mr-6">Icon</div>
            <div className="flex flex-col items-start">
              <div className="text-lg font-bold">Client SDK</div>
              <p className="text-left">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit
              </p>
            </div>
          </button>
        </div>
      </div>
    </Layout>
  );
}
