import React, { useEffect, useState } from 'react';
import Heading from '@docusaurus/theme-classic/lib/theme/Heading';
import ReactMarkdown from 'react-markdown';

const changeTypes = [
  {
    name: 'breaking-changes',
    color: '#e01d5a',
    label: 'Breaking Changes',
    className: 'deprecated',
  },
  {
    name: 'new_api',
    color: '#1264a3',
    label: 'New API',
    className: 'newAPI',
  },
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
    name: 'dep_api',
    color: '#e01d5a',
    label: 'Deprecated API',
    className: 'deprecated',
  },
  {
    name: 'perf',
    color: '#5555aa',
    label: 'Performance',
  }
];

function convertHtmlTagsInTextToReactTags(text) {
  // Regular expression to match all instances of dashed lower case html tags, including self-closing tags
  const htmlTagRegex = /<\s*\/?\s*([a-z][a-z0-9-]*)(\s[^>]*?)?\s*\/?>/g;

  // Function to convert each html tag to React-like tag name
  const convertTag = (match, tagName, attributes, offset, string) => {
    // Convert tagName to React-like tag name
    let reactTagName = tagName
      .split('-')
      .map((part, index) =>
        index === 0 ? part : part.charAt(0).toUpperCase() + part.slice(1)
      )
      .join('');

    reactTagName = reactTagName.charAt(0).toUpperCase() + reactTagName.slice(1);

    // Check if the original tag was self-closing
    const isSelfClosing = match.trim().endsWith('/>');

    // Reconstruct the tag with the converted tag name
    const reactTag = `<${match.charAt(1) === '/' ? '/' : ''}${reactTagName}${
      attributes ? attributes : ''
    }${isSelfClosing ? ' /' : ''}>`;
    return reactTag;
  };

  // Replace each html tag in the text with its React-like version
  const convertedText = text.replace(htmlTagRegex, convertTag);

  return convertedText;
}

export default function ReleaseNotesGenerator({ noteKey, tagType }) {
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
                            {(tagType === 'react'
                              ? convertHtmlTagsInTextToReactTags(f)
                              : f
                            )
                              .split('\n')
                              .map((i, key) => {
                                return (
                                  <ReactMarkdown
                                    className="changeline"
                                    key={key}
                                  >
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
