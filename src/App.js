import logo from './logo.svg';
import './App.css';
import ReactMarkdown from 'react-markdown';
import Markdown1 from './markdown1';
import Markdown2 from './markdown2';
import HomeMarkdown from './home';

function App() {
  return (
    <div className="App">
      <Markdown2 unit={"1"} />
      <HomeMarkdown />
    </div>
  );
}

export default App;
