import logo from './logo.svg';
import './App.css';
import { sp } from "@pnp/sp";

function App() {
	
	const [data, setData] = React.useState([]);
	const config = require("./../private/config.json");
	const sppull = require("sppull").sppull;
	const context = {
	  siteUrl: config.siteUrl,
	  creds: {
		username: config.username,
		password: config.password,
	  }
	};

	const options = {
	  spRootFolder: "/sites/Dev01",
	  dlRootFolder: "./Downloads"
	};

	
	useEffect(() => {
		fetch(`/_api/web`, {
			accept: 'application/json;odata=verbose',
		})
		  .then(r => r.json())
		  .then(console.log)
		  .catch(console.log);
		  
		sp.setup({
			spfxContext: context 
		});
	});
	
	const getFileNameControl = ()=>{
		sp.web.lists.getByTitle("TestList").items.select('Title').get()).then(result => {
          let dataCache = [];
          for (var k in result) {
            console.log(result[k].Title);
            dataCache.push(result[k].Title);
          }
          setData(dataCache);
		
    })
	};
	
	const uploadFileFromControl = ()=>{

		 var files = this._input.files;
		 var file = files[0];
		 var url = this.props.context.pageContext.web.serverRelativeUrl;
		 sp.web.getFolderByServerRelativeUrl(url + "/ShareDocument")
		 .files.add(file.name, file, true)
		 .then((data) =>{
		   alert("File uploaded sucessfully");
		 })
		 .catch((error) =>{
		   alert("Error is uploading");
		 });
	};
	
	const downloadFileFromControl = ()=>{

		sppull.download(context, options)
		  .then((downloadResults) => {
			console.log("Files are downloaded");
			console.log("For more, please check the results", JSON.stringify(downloadResults));
		  })
		  .catch((err) => {
			console.log("Core error has happened", err);
		  });
	};
	
	
  return (
    <div className="App">
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
		  <div>
			<p>
				<button onClick={() => getFileNameControl()} >
							   GetFileName
				</button>
			 </p>
		  </div>
		  <div>
			<input type="file"  ref={(elm) => { this._input = elm; }}/>
			<p>
				<button onClick={() => uploadFileFromControl()} >
							   Upload
				</button>
			 </p>
		  </div>
		  <div>
			<p>
				<button onClick={() => downloadFileFromControl()} >
							   Download
				</button>
			 </p>
		  </div>
		</div>
    </div>
  );
}

export default App;
