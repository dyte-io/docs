import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";

export default function Guide() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`SDK Guide - ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <div
        className="guide"
        style={{
          display: "flex",
          width: "100vw",
          flexDirection: "column",
          alignItems: "center",
          paddingTop: "80px",
        }}
      >
        <h1 className="header">Client SDK Guide</h1>
        <div
          class="custom-card-grid"
          style={{
            display: "grid",
            width: "50vw",
            gridGap: "1px",
            marginTop: "80px",
            marginBottom: "100px",
            gridTemplateColumns: "repeat(3, 2fr)",
            gridTemplateRows: "repeat(2, 1fr)",
          }}
        >
          <Link to="/docs/Quickstart">
            <div class="custom-card">
              <img src="/img/react.svg"></img>
              <div class="custom-card-text">
                <div class="custom-card-text-heading">React</div>
                <div class="custom-card-text-desc">Web</div>
              </div>
            </div>
          </Link>
          <Link>
            <div class="custom-card">
              <img src="/img/vanilla.jpg"></img>
              <div class="custom-card-text">
                <div class="custom-card-text-heading">Vanilla JS</div>
                <div class="custom-card-text-desc">Web</div>
              </div>
            </div>
          </Link>
          <Link>
            <div class="custom-card">
              <img src="/img/flutter.jpg"></img>
              <div class="custom-card-text">
                <div class="custom-card-text-heading">Flutter</div>
                <div class="custom-card-text-desc">Android+iOS</div>
              </div>
            </div>
          </Link>
          <Link>
            <div class="custom-card">
              <img src="/img/android.svg"></img>
              <div class="custom-card-text">
                <div class="custom-card-text-heading">Java/Kotlin</div>
                <div class="custom-card-text-desc">Android</div>
              </div>
            </div>
          </Link>
          <Link>
            <div class="custom-card">
              <img src="/img/swift.png"></img>
              <div class="custom-card-text">
                <div class="custom-card-text-heading">Swift/Objective-C</div>
                <div class="custom-card-text-desc">iOS</div>
              </div>
            </div>
          </Link>
          <Link>
            <div class="custom-card">
              <img src="/img/react.svg"></img>
              <div class="custom-card-text">
                <div class="custom-card-text-heading">React Native</div>
                <div class="custom-card-text-desc">Android+iOS</div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </Layout>
  );
}
