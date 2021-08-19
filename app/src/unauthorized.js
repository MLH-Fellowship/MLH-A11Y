import React from 'react';
// import axios from 'axios';
import ReactMarkdown from 'react-markdown';

const Markdown2 = (props) => {

    const [markdown, setMarkdown] = React.useState('Under Construction')


    let history = useHistory();
    let location = useLocation();
    let auth = useAuth();
  
    let { from } = location.state || { from: { pathname: "/" } };
    let login = () => {
      auth.signin(() => {
        history.replace(from);
      });
    };
    
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
