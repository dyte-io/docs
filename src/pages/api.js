import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { API } from "@stoplight/elements";
import '@stoplight/elements/styles.min.css';
import Layout from '@theme/Layout';

export default function APIPage() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
    title={`Hello from ${siteConfig.title}`}
    description="Description will go into a meta tag in <head />">
    <main>
    <API
        apiDescriptionUrl="/openapi.yaml"
        router="history"
        basePath="/api"
        layout="sidebar"
    />
    </main>
  </Layout>
    
  );
}
