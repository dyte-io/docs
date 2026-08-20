<!-- PROJECT LOGO -->
<p align="center">
  <h2 align="center">OSPI Docs</h2>

  <p align="center">
    Documentation portal for OSPI (Open Standard Product Identification), built with Docusaurus.
    <br />
    <br />
    <a href="https://github.com/BrickeVD/ospi-platform">Platform source</a>
    ·
    <a href="https://github.com/BrickeVD/OSPI-APIdocs/issues">Report an issue</a>
  </p>
</p>

## Table of Contents

- [About the Project](#about-the-project)
  - [Built With](#built-with)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Content structure](#content-structure)
- [Contributing](#contributing)
- [License](#license)

<!-- ABOUT THE PROJECT -->

## About The Project

This is the documentation site for **OSPI (Open Standard Product Identification)** — an open standard and API platform for product identity, master data, and cross-organization product data exchange. It documents the real, running reference implementation at [`ospi-platform`](https://github.com/BrickeVD/ospi-platform): guides, a full REST API reference, and the architecture decisions behind how the platform is built.

All content is sourced from the actual `ospi-platform` codebase (controllers, DTOs, ADRs, domain docs) — not invented. Where the platform has an open question or a "not built yet," the docs say so.

### Built With

- [Docusaurus](https://docusaurus.io/)
- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)

<!-- GETTING STARTED -->

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/en/) ≥ 18
- npm

### Installation

```sh
git clone https://github.com/BrickeVD/OSPI-APIdocs.git
cd OSPI-APIdocs
npm install
npm start
```

## Content structure

The site is three separate Docusaurus doc instances, defined in [`docusaurus.config.js`](./docusaurus.config.js):

| Instance | Path | Route | Content |
| --- | --- | --- | --- |
| `guides` | `docs/guides` | `/guides` | Introduction, quickstart, authentication, core concepts, errors, idempotency/rate limits, webhooks, roles |
| `api-reference` | `docs/api-reference` | `/api-reference` | Every REST resource, grouped by domain |
| `architecture` | `docs/architecture` | `/architecture` | Domain model + all 34 Architecture Decision Records, ported from `ospi-platform/docs/adr` |

Branding (`src/css/custom.css`, `static/logo/`) uses a placeholder pink wordmark — the real OSPI logo and full brand guidelines were not available at the time this site was built; swap `static/logo/light.svg` and `static/logo/dark.svg` once they are.

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md) and [CODE_OF_CONDUCT.md](./CODE_OF_CONDUCT.md).

## License

Distributed under the Apache License, Version 2.0. See [`LICENSE`](./LICENSE) for more information.
