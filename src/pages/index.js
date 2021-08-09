import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";
import HomepageFeatures from "../components/HomepageFeatures";

function Cards() {
  return (
    <div
      style={{
        display: "flex",
        width: "100vw",
        justifyContent: "center",
      }}
    >
      <div
        class="custom-card-grid"
        style={{
          display: "grid",
          width: "50vw",
          gridGap: "1px",
          marginTop: "100px",
          gridTemplateColumns: "repeat(3, 2fr)",
          gridTemplateRows: "repeat(2, 1fr)",
        }}
      >
        <Link to="/guide">
          <div class="custom-card">
            <img src="/img/device.png"></img>
            <div class="custom-card-text">
              <div class="custom-card-text-heading">Client SDK Guide</div>
              <div class="custom-card-text-desc">
                Learn to use the client SDKs
              </div>
            </div>
          </div>
        </Link>
        <Link to="/api">
          <div class="custom-card">
            <img src="/img/icon-api.png"></img>
            <div class="custom-card-text">
              <div class="custom-card-text-heading">API Reference</div>
              <div class="custom-card-text-desc">
                See the API details and parameters
              </div>
            </div>
          </div>
        </Link>
        <Link to="/faq">
          <div class="custom-card">
            <img src="/img/faq.png"></img>
            <div class="custom-card-text">
              <div class="custom-card-text-heading">FAQ</div>
              <div class="custom-card-text-desc">
                Frequently Asked Questions
              </div>
            </div>
          </div>
        </Link>
        <Link to="https://discord.com">
        <div class="custom-card">
          <img src="/img/discord.svg"></img>
          <div class="custom-card-text">
            <div class="custom-card-text-heading">Forum</div>
            <div class="custom-card-text-desc">Join the community forum</div>
          </div>
        </div>
        </Link>
        <Link to="https://github.com/dyte-in">
          <div class="custom-card">
            <img src="/img/code.png"></img>
            <div class="custom-card-text">
              <div class="custom-card-text-heading">Sample Code</div>
              <div class="custom-card-text-desc">
                Learn from sample projects on Github
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header
      className={clsx("hero hero--primary", styles.heroBanner)}
      style={{ background: "#000", alignItems: "center" }}
    >
      <div id="customGradient" />
      <div className="container" style={{ zIndex: 2 }}>
        <h1 className="hero__title" style={{ display: "inline-flex" }}>
          <img
            src="https://www.dyte.io/images/Dyte-Logo.svg"
            style={{ marginRight: "10px", width: "150px", marginTop: "5px" }}
          ></img>
          DEV
        </h1>
        <br></br>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <br></br>
        <div className={styles.buttons}>
          <br></br>
          <Link className="button button--secondary button--lg" to="/guide">
            Get Started ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <>
      <HomepageHeader />
      <Cards />
    </>
  );
}
