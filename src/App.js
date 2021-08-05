import logo from './logo.svg';
import './App.css';
import ReactMarkdown from 'react-markdown';
import Markdown1 from './markdown1';
import Markdown2 from './markdown2';

function App() {
  return (
    <div className="App">
      <Markdown2 unit={"1"} />
    </div>
  );
}

export default App;
