import React from 'react';

import axios from 'axios';
import ReactMarkdown from 'react-markdown';

export default class Markdown1 extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            markdown: 'Nothing'
        }
    }

    componentDidMount() {
        axios.get(`https://raw.githubusercontent.com/MLH-Fellowship/MLH-A11Y/memo/api/topics/unit${this.props.unit}.md`)
            .then(res => {
                const p = res.data;
                console.log(p)
                this.setState({ markdown: p });
            })
    }

    render() {
        return (
            <div>
                <ReactMarkdown>{this.state.markdown}</ReactMarkdown>
            </div>
        )
    }
}