import React from 'react';

import axios from 'axios';
import ReactMarkdown from 'react-markdown';

const UserMarkdown = (props) => {
    const [markdown, setMarkdown] = React.useState('Loading')

    React.useEffect(() => {
        axios.get(`https://raw.githubusercontent.com/MLH-Fellowship/MLH-A11Y/ashley/public/userprofile.md`)
            .then(res => {
                const p = res.data;
                setMarkdown(p)
            })
    }, [])

    return (
        <div>
            <ReactMarkdown>{markdown}</ReactMarkdown>
        </div>
    )
}

export default UserMarkdown