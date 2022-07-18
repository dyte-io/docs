import React, { useEffect } from 'react';

export default function RunInPostmanButton(props) {
  useEffect(() => {
    // Code for `Run in Postman` button
    (function (p, o, s, t, m, a, n) {
      !p[s] &&
        (p[s] = function () {
          (p[t] || (p[t] = [])).push(arguments);
        });
      !o.getElementById(s + t) &&
        o
          .getElementsByTagName('head')[0]
          .appendChild(
            ((n = o.createElement('script')), (n.id = s + t), (n.async = 1), (n.src = m), n)
          );
    })(window, document, '_pm', 'PostmanRunObject', 'https://run.pstmn.io/button.js');
  }, []);

  return (
    <div
      className="postman-run-button"
      data-postman-action="collection/fork"
      data-postman-var-1="20897959-6d006199-d763-4186-b785-0b152d886c2e"
      data-postman-collection-url="entityId=20897959-6d006199-d763-4186-b785-0b152d886c2e&entityType=collection&workspaceId=2f2f3a0e-92e0-4621-82b5-7e139570b3af"
      data-postman-param="env%5BDyte's%20Public%20Environment%5D=W3sia2V5IjoiYmFzZVVybCIsInZhbHVlIjoiaHR0cHM6Ly9hcGkuY2x1c3Rlci5keXRlLmluIiwiZW5hYmxlZCI6dHJ1ZSwidHlwZSI6ImRlZmF1bHQiLCJzZXNzaW9uVmFsdWUiOiJodHRwczovL2FwaS5jbHVzdGVyLmR5dGUuaW4iLCJzZXNzaW9uSW5kZXgiOjB9LHsia2V5IjoiYXBpa2V5IiwidmFsdWUiOiIyMWE4ZGE0NmRmN2Q2ZTZkMDczYyIsImVuYWJsZWQiOnRydWUsInR5cGUiOiJkZWZhdWx0Iiwic2Vzc2lvblZhbHVlIjoiMjFhOGRhNDZkZjdkNmU2ZDA3M2MiLCJzZXNzaW9uSW5kZXgiOjF9LHsia2V5Ijoib3JnYW5pemF0aW9uX2lkIiwidmFsdWUiOiIxYTliZTc2MC1jNDY1LTQ0NjAtYjg4Yi1mM2VmYmRiOWYzODEiLCJlbmFibGVkIjp0cnVlLCJ0eXBlIjoiZGVmYXVsdCIsInNlc3Npb25WYWx1ZSI6IjFhOWJlNzYwLWM0NjUtNDQ2MC1iODhiLWYzZWZiZGI5ZjM4MSIsInNlc3Npb25JbmRleCI6Mn0seyJrZXkiOiJtZWV0aW5nX2lkIiwidmFsdWUiOiJHZW5lcmF0ZWQgYWZ0ZXIgQ3JlYXRlIE1lZXRpbmcgQVBJIGNhbGwiLCJlbmFibGVkIjp0cnVlLCJ0eXBlIjoiZGVmYXVsdCIsInNlc3Npb25WYWx1ZSI6IjYzYjc2NDM5LTY4MmItNDhmMy05MGUzLWM1MTk3ZWM3NTVlNiIsInNlc3Npb25JbmRleCI6M30seyJrZXkiOiJwYXJ0aWNpcGFudF9pZCIsInZhbHVlIjoiR2VuZXJhdGVkIGFmdGVyIEFkZCBQYXJ0aWNpcGFudCBBUEkgY2FsbCIsImVuYWJsZWQiOnRydWUsInR5cGUiOiJkZWZhdWx0Iiwic2Vzc2lvblZhbHVlIjoiYzBlMmExNjYtZGNkNi00ODczLTkzNjMtNDk2OGE5YTcyODNkIiwic2Vzc2lvbkluZGV4Ijo0fSx7ImtleSI6InJlY29yZGluZ19pZCIsInZhbHVlIjoiIiwiZW5hYmxlZCI6dHJ1ZSwidHlwZSI6ImRlZmF1bHQiLCJzZXNzaW9uVmFsdWUiOiIiLCJzZXNzaW9uSW5kZXgiOjV9LHsia2V5Ijoicm9vbV9uYW1lIiwidmFsdWUiOiIiLCJlbmFibGVkIjp0cnVlLCJ0eXBlIjoiZGVmYXVsdCIsInNlc3Npb25WYWx1ZSI6IiIsInNlc3Npb25JbmRleCI6Nn0seyJrZXkiOiJ3ZWJob29rX2lkIiwidmFsdWUiOiIiLCJlbmFibGVkIjp0cnVlLCJ0eXBlIjoiZGVmYXVsdCIsInNlc3Npb25WYWx1ZSI6IiIsInNlc3Npb25JbmRleCI6N30seyJrZXkiOiJsaXZlc3RyZWFtX2lkIiwidmFsdWUiOiIiLCJlbmFibGVkIjp0cnVlLCJ0eXBlIjoiZGVmYXVsdCIsInNlc3Npb25WYWx1ZSI6IiIsInNlc3Npb25JbmRleCI6OH0seyJrZXkiOiJzZXNzaW9uX2lkIiwidmFsdWUiOiIiLCJlbmFibGVkIjp0cnVlLCJ0eXBlIjoiZGVmYXVsdCIsInNlc3Npb25WYWx1ZSI6IiIsInNlc3Npb25JbmRleCI6OX1d"
      {...props}
    />
  );
}
