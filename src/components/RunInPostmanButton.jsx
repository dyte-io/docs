import React from 'react';

const postmanUrl =
  "https://god.gw.postman.com/run-collection/20897959-a72828d7-8739-49ac-b88c-c5e6ec365e21?action=collection%2Ffork&collection-url=entityId%3D20897959-a72828d7-8739-49ac-b88c-c5e6ec365e21%26entityType%3Dcollection%26workspaceId%3D2f2f3a0e-92e0-4621-82b5-7e139570b3af#?env%5BDyte's%20Public%20Environment%5D=W3sia2V5IjoiYmFzZVVybCIsInZhbHVlIjoiaHR0cHM6Ly9hcGkuY2x1c3Rlci5keXRlLmluIiwiZW5hYmxlZCI6dHJ1ZSwidHlwZSI6ImRlZmF1bHQifSx7ImtleSI6ImFwaWtleSIsInZhbHVlIjoiIiwiZW5hYmxlZCI6dHJ1ZSwidHlwZSI6ImRlZmF1bHQifSx7ImtleSI6Im9yZ2FuaXphdGlvbl9pZCIsInZhbHVlIjoiIiwiZW5hYmxlZCI6dHJ1ZSwidHlwZSI6ImRlZmF1bHQifSx7ImtleSI6Im1lZXRpbmdfaWQiLCJ2YWx1ZSI6IiIsImVuYWJsZWQiOnRydWUsInR5cGUiOiJkZWZhdWx0In0seyJrZXkiOiJwYXJ0aWNpcGFudF9pZCIsInZhbHVlIjoiIiwiZW5hYmxlZCI6dHJ1ZSwidHlwZSI6ImRlZmF1bHQifSx7ImtleSI6InJlY29yZGluZ19pZCIsInZhbHVlIjoiIiwiZW5hYmxlZCI6dHJ1ZSwidHlwZSI6ImRlZmF1bHQifSx7ImtleSI6InJvb21fbmFtZSIsInZhbHVlIjoiIiwiZW5hYmxlZCI6dHJ1ZSwidHlwZSI6ImRlZmF1bHQifSx7ImtleSI6IndlYmhvb2tfaWQiLCJ2YWx1ZSI6IiIsImVuYWJsZWQiOnRydWUsInR5cGUiOiJkZWZhdWx0In0seyJrZXkiOiJsaXZlc3RyZWFtX2lkIiwidmFsdWUiOiIiLCJlbmFibGVkIjp0cnVlLCJ0eXBlIjoiZGVmYXVsdCJ9LHsia2V5Ijoic2Vzc2lvbl9pZCIsInZhbHVlIjoiIiwiZW5hYmxlZCI6dHJ1ZSwidHlwZSI6ImRlZmF1bHQifV0=";

export default function RunInPostmanButton() {
  return (
    <a
      href={postmanUrl}
      target="_blank"
      rel="noreferrer"
      aria-label="Run in Postman"
    >
      <img
        src="https://run.pstmn.io/button.svg"
        alt="Run in Postman"
        width={128}
        height={32}
      />
    </a>
  );
}
