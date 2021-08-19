import React from 'react';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';

const Markdown2 = (props) => {

    
    React.useEffect(() => {
        axios.get(`/api/unauthorized`)

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

export default Markdown2
