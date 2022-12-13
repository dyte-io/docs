---
title: 'Getting started'
---

Before we start, you should familiarize yourself with a few terms that are
relevant to our APIs.

- **Meeting** - A meeting is simply a room which users can join with a unique
  link. You can customize the behavior of a meeting using **presets**. You may
  create as many meetings as you wish; only live meetings will be billed.
- **Session** - A session is a meeting that currently has one or more
  **participants**. The session ends when all participants leave. When a
  participant joins an empty meeting, a new session is created. Our **analytics
  APIs** enable you to view useful stats about your sessions!
- **Participant** - Pretty self-explanatory; a participant is a person who joins
  a meeting. You can manage participants in a **session** using our **active
  session APIs**.

# Accessing our APIs

All our V2 API endpoints are available at `https://api.cluster.dyte.in/v2/`. For
a comprehensive list of routes, please visit our
[API documentation](https://docs.dyte.io/api/?v=v2).

Our APIs can be accessed over HTTP using simple RESTful endpoints. We currently
offer endpoints for working with:

- Meetings & Participants
- Sessions
- Analytics
- Recordings & Live streams
- Webhooks

## Authentication

All our APIs require authentication. To get started, head over to our dev portal
and create an organization. From the left sidebar, navigate to the **API Keys**
section. Here, you can find your organization ID and API key. You can use these
to authenticate with our APIs using the **Basic** scheme, where your
organization ID acts as the username, and API key as the password.

Basic authentication is a simple authentication scheme built into the HTTP
protocol. To use it, send your HTTP requests with an Authorization header that
contains the word `Basic` followed by a space and a base64-encoded
string `username:password`.

eg: `Authorization: Basic ZGVtbzpwQDU1dzByZA==`
