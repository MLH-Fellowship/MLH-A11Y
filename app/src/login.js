import React from 'react';

import axios from 'axios';
import ReactMarkdown from 'react-markdown';

const HomeMarkdown = (props) => {
    const [markdown, setMarkdown] = React.useState('Under Construction')

    React.useEffect(() => {
        axios.get(``)
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

export default HomeMarkdown