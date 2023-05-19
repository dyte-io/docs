import React, { useEffect, useState } from 'react';
import Heading from '@docusaurus/theme-classic/lib/theme/Heading';
import ReactMarkdown from 'react-markdown';

const changeTypes = [
  {
    name: 'features',
    color: '#00e0a5',
    label: 'Features',
  },
  {
    name: 'fixes',
    color: '#e0ac12',
    label: 'Fixed Issues',
  },
  {
    name: 'perf',
    color: '#5555aa',
    label: 'Performance Improvements',
  },
  {
    name: 'new_api',
    color: '#1264a3',
    label: 'New API',
    className: 'newAPI',
  },
  {
    name: 'dep_api',
    color: '#e01d5a',
    label: 'Deprecated API',
    className: 'deprecated',
  },
];

export default function ReleaseNotesGenerator({ noteKey }) {
  const [releaseNotes, setReleaseNotes] = useState([]);

  useEffect(() => {
    fetch(`/release-notes/${noteKey}.json`)
      .then((response) => response.json())
      .then((result) => setReleaseNotes(result));
  }, [noteKey]);

  return (
    <div className="notesContainer">
      {releaseNotes.map((m) => {
        return (
          <>
            {m.version && (
              <Heading as="h2" id={m.version}>
                v{m.version}
              </Heading>
            )}
            <p className="text-sm">
              Released on{' '}
              <time>
                {new Date(m.createdAt * 1000).toLocaleDateString('en-US', {
                  day: 'numeric',
                  year: 'numeric',
                  month: 'long',
                })}
              </time>
            </p>
            <table className="releaseNotes">
              {changeTypes.map((c) => {
                return m[c.name]?.length > 0 ? (
                  <tr className={c.className ?? ''}>
                    <td
                      className="type"
                      style={{
                        borderColor: c.color,
                      }}
                    >
                      {c.label}
                    </td>
                    <td className="sublist">
                      {m[c.name]?.map((f) => (
                        <tr>
                          <td>
                            {f.split('\n').map((i, key) => {
                              return (
                                <ReactMarkdown className="changeline" key={key}>
                                  {i}
                                </ReactMarkdown>
                              );
                            })}
                          </td>
                        </tr>
                      ))}
                    </td>
                  </tr>
                ) : null;
              })}
            </table>
          </>
        );
      })}
    </div>
  );
}
