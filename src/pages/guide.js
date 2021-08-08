import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

export default function Guide() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
    title={`SDK Guide - ${siteConfig.title}`}
    description="Description will go into a meta tag in <head />">
    <main class="grid-main">
        <div class="grid">
    <div onClick={() => {window.location.href ='/docs/Quickstart';}}>
      <img src="/img/react.svg" alt="Sample photo" />
      <div class="text">
        <h3>React (Web)</h3>
    </div>
    </div>
    <div>
      <img src="/img/vanilla.jpg" alt="Sample photo" id="jsimg" />
      <div class="text">
        <h3>Vanilla JS (Web)</h3>
      </div>
    </div>
    <div>
      <img src="/img/flutter.jpg" alt="Sample photo" />
      <div class="text">
        <h3>Flutter (Mobile)</h3>
      </div>
    </div>
    <div>
      <img src="/img/android.svg" alt="Sample photo" id="androidimg" />
      <div class="text">
        <h3>Java/Kotlin (Mobile)</h3>
      </div>
    </div>
    <div>
      <img src="/img/swift.svg" alt="Sample photo" id="swiftimg" />
      <div class="text">
        <h3>Swift/Obj-c (Mobile)</h3>
      </div>
    </div>
    <div>
      <img src="/img/react.svg" alt="Sample photo" />
      <div class="text">
        <h3>React Native (Mobile)</h3>
      </div>
    </div>
    </div>
    </main>
  </Layout>
    
  );
}
