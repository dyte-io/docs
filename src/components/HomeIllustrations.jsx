import React from 'react';

/**
 * Small abstract illustrations for the homepage capability cards. Each one
 * is a stylized picture of the real thing the card describes (a checksum
 * tag, two connected orgs, a scan/resolve action) rather than a literal UI
 * screenshot — OSPI has no end-user UI of its own to screenshot.
 */

export function IdentityIllustration() {
  return (
    <svg viewBox="0 0 400 220" className="h-full w-full" aria-hidden="true">
      <defs>
        <linearGradient id="identity-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#EB1F8F" stopOpacity="0.16" />
          <stop offset="100%" stopColor="#7C5CFC" stopOpacity="0.08" />
        </linearGradient>
      </defs>
      <rect width="400" height="220" fill="url(#identity-bg)" />

      <circle cx="60" cy="40" r="5" fill="#EB1F8F" opacity="0.35" />
      <circle cx="345" cy="170" r="7" fill="#7C5CFC" opacity="0.3" />
      <circle cx="325" cy="45" r="4" fill="#EB1F8F" opacity="0.4" />

      <g transform="translate(90 40) rotate(-4)">
        <rect
          x="0"
          y="0"
          width="220"
          height="130"
          rx="16"
          fill="var(--ifm-card-background-color, #ffffff)"
          stroke="#EB1F8F"
          strokeOpacity="0.25"
          strokeWidth="2"
        />
        <circle cx="26" cy="26" r="8" fill="none" stroke="#EB1F8F" strokeWidth="2" />
        <line x1="20" y1="60" x2="120" y2="60" stroke="currentColor" strokeOpacity="0.15" strokeWidth="8" strokeLinecap="round" />
        <line x1="20" y1="80" x2="90" y2="80" stroke="currentColor" strokeOpacity="0.1" strokeWidth="8" strokeLinecap="round" />

        <g transform="translate(140 20)">
          <rect x="0" y="0" width="4" height="70" fill="#EB1F8F" />
          <rect x="8" y="10" width="4" height="60" fill="#EB1F8F" opacity="0.7" />
          <rect x="16" y="0" width="7" height="70" fill="#EB1F8F" />
          <rect x="27" y="16" width="4" height="54" fill="#EB1F8F" opacity="0.6" />
          <rect x="35" y="0" width="4" height="70" fill="#EB1F8F" />
          <rect x="43" y="8" width="7" height="62" fill="#EB1F8F" opacity="0.8" />
          <rect x="54" y="0" width="4" height="70" fill="#EB1F8F" />
          <rect x="62" y="20" width="4" height="50" fill="#EB1F8F" opacity="0.5" />
        </g>

        <circle
          cx="205"
          cy="118"
          r="26"
          fill="#EB1F8F"
          stroke="var(--docs-color-background-100, #fff)"
          strokeWidth="5"
        />
        <path
          d="M194 118l7 8 14 -16"
          fill="none"
          stroke="white"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
}

export function SharingIllustration() {
  return (
    <svg viewBox="0 0 400 220" className="h-full w-full" aria-hidden="true">
      <defs>
        <linearGradient id="sharing-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#7C5CFC" stopOpacity="0.16" />
          <stop offset="100%" stopColor="#17B8A6" stopOpacity="0.08" />
        </linearGradient>
      </defs>
      <rect width="400" height="220" fill="url(#sharing-bg)" />

      <path
        d="M110 100 C 160 60, 240 60, 290 100"
        fill="none"
        stroke="#7C5CFC"
        strokeOpacity="0.45"
        strokeWidth="2.5"
        strokeDasharray="2 8"
        strokeLinecap="round"
      />
      <circle cx="150" cy="80" r="3" fill="#7C5CFC" />
      <circle cx="200" cy="70" r="3" fill="#17B8A6" />
      <circle cx="250" cy="80" r="3" fill="#7C5CFC" />

      <g transform="translate(50 90)">
        <rect
          x="0"
          y="0"
          width="80"
          height="80"
          rx="18"
          fill="var(--ifm-card-background-color, #ffffff)"
          stroke="#7C5CFC"
          strokeOpacity="0.3"
          strokeWidth="2"
        />
        <rect x="24" y="24" width="32" height="32" rx="6" fill="#7C5CFC" opacity="0.85" />
        <text x="40" y="47" textAnchor="middle" fontSize="14" fontWeight="700" fill="white" fontFamily="inherit">
          A
        </text>
      </g>

      <g transform="translate(270 90)">
        <rect
          x="0"
          y="0"
          width="80"
          height="80"
          rx="18"
          fill="var(--ifm-card-background-color, #ffffff)"
          stroke="#17B8A6"
          strokeOpacity="0.3"
          strokeWidth="2"
        />
        <rect x="24" y="24" width="32" height="32" rx="6" fill="#17B8A6" opacity="0.85" />
        <text x="40" y="47" textAnchor="middle" fontSize="14" fontWeight="700" fill="white" fontFamily="inherit">
          B
        </text>
      </g>

      <g transform="translate(178 108)">
        <circle cx="22" cy="22" r="22" fill="#EB1F8F" />
        <rect x="13" y="20" width="18" height="14" rx="3" fill="white" />
        <path
          d="M16 20v-5a6 6 0 0 1 12 0v5"
          fill="none"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
}

export function ResolverIllustration() {
  return (
    <svg viewBox="0 0 400 220" className="h-full w-full" aria-hidden="true">
      <defs>
        <linearGradient id="resolver-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#17B8A6" stopOpacity="0.16" />
          <stop offset="100%" stopColor="#EB1F8F" stopOpacity="0.08" />
        </linearGradient>
      </defs>
      <rect width="400" height="220" fill="url(#resolver-bg)" />

      <circle cx="200" cy="105" r="38" fill="none" stroke="#17B8A6" strokeOpacity="0.25" strokeWidth="2" />
      <circle cx="200" cy="105" r="58" fill="none" stroke="#17B8A6" strokeOpacity="0.15" strokeWidth="2" />
      <circle cx="200" cy="105" r="78" fill="none" stroke="#17B8A6" strokeOpacity="0.08" strokeWidth="2" />

      <g transform="translate(170 78)">
        <rect
          x="0"
          y="0"
          width="46"
          height="30"
          rx="6"
          fill="var(--ifm-card-background-color, #ffffff)"
          stroke="#17B8A6"
          strokeWidth="2"
        />
        <rect x="8" y="8" width="4" height="14" fill="#17B8A6" />
        <rect x="16" y="8" width="7" height="14" fill="#17B8A6" opacity="0.7" />
        <rect x="27" y="8" width="4" height="14" fill="#17B8A6" />
        <rect x="35" y="8" width="4" height="14" fill="#17B8A6" opacity="0.5" />
      </g>

      <g transform="translate(215 95)">
        <circle cx="20" cy="20" r="20" fill="none" stroke="#EB1F8F" strokeWidth="6" />
        <line x1="34" y1="34" x2="50" y2="50" stroke="#EB1F8F" strokeWidth="7" strokeLinecap="round" />
      </g>

      <circle cx="90" cy="60" r="4" fill="#17B8A6" opacity="0.4" />
      <circle cx="320" cy="150" r="5" fill="#EB1F8F" opacity="0.35" />
      <circle cx="100" cy="160" r="3" fill="#7C5CFC" opacity="0.4" />
    </svg>
  );
}
