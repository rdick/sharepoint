import logo from './logo.svg';
import './App.css';

function App() {
	useEffect(() => {
		fetch(`/_api/web`, {
			accept: 'application/json;odata=verbose',
		})
		  .then(r => r.json())
		  .then(console.log)
		  .catch(console.log);
	});
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
