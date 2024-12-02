import React, {useState} from "react";
import axios from 'axios';
import Search from "./components/Search";


function App() {
  // results = empty array, selected = empty object
  const [state, setState] = useState({
    s: "",
    results: [],
    selected: {}
  })
  const apiUrl = "https://api.themoviedb.org/3/movie/550?api_key=3082fc9b47f35cdd47291cbd84c76b53";

  const search = (e) => {
    if (e.key === "Enter") {
      axios(apiUrl + "&s=" + state.s).then((data) => {
        let results = data.search;

        setState(prevState => {
          return {...prevState, results: results}
        })
      })
    }
  }

  // handle input when searching 
  const handleInput = (e) => {
    let s = e.target.value;

    //previous state so we don't override, changing s (search) to new s value
    setState(prevState => {
      return {...prevState, s: s}
    })


  }

  return (
    <div className="App">
      <header>
        <h1>Movie Search Database</h1>
      </header>
      <main>
        <Search handleInput={handleInput} search={search} />
      </main>
    </div>
  );
}

export default App;
