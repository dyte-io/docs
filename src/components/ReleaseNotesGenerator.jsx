/* eslint-disable react/jsx-key */
import React, { useEffect, useState } from 'react';
import Heading from '@docusaurus/theme-classic/lib/theme/Heading'
import ReactMarkdown from 'react-markdown';

const changeTypes = [
    {
        'name': 'features',
        'color': '#00e0a5',
        'label': 'Features'
    },
    {
        'name': 'fixes',
        'color': '#e0ac12',
        'label': 'Fixed Issues',
    },
    {
        'name': 'new_api',
        'color': '#00e0a5',
        'label': 'New API'
    },
    {
        'name': 'dep_api',
        'color': '#e01d5a',
        'label': 'Depreciated API',
        'className': 'depreciated'
    }
]

export default function ReleaseNotesGenerator({ noteKey }) {
    const [releaseNotes, setReleaseNotes] = useState([]);

    useEffect(() => {
        fetch(`https://cdn.dyte.in/releasenotes/${noteKey}.json`)
            .then(response => response.json())
            .then(result => setReleaseNotes(result))
            .catch(() => { });
    }, [noteKey]);

    return (
        <div className='notesContainer'>
            {releaseNotes.map((m) => {
                return (<>
                    <Heading as="h2" id={m.version}>v{m.version}</Heading>
                    <h4>Released {new Date(m.createdAt * 1000).toLocaleDateString("en-US", { day: 'numeric', year: 'numeric', month: 'long' })}</h4>
                    <table className='releaseNotes'>
                        {changeTypes.map((c) => {
                            return m[c.name]?.length > 0 ? <tr className={c.className ?? ''}>
                                <td className='type' style={{
                                    borderColor: c.color
                                }}>{c.label}</td>
                                <td className='sublist'>
                                    {
                                        m[c.name]?.map(
                                            (f) => <tr>
                                                <td>
                                                    <ReactMarkdown className='changeline'>
                                                        {f}
                                                    </ReactMarkdown>
                                                </td>
                                            </tr>
                                        )
                                    }
                                </td>
                            </tr> : null
                        })}
                    </table>
                </>)
            })}
        </div>
    );
}
