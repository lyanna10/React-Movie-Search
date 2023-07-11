import MovieDisplay from "./components/MovieDisplay";
import Form from "./components/Form";
import { useState , useEffect} from "react";

function App() {

  const apiKEY = "7f36641f";

  const [movie, setMovie] = useState(null);

  const getMovie = async(searchTerm) => {
	try {
		const response = await fetch(
			`http://www.omdbapi.com/?apikey=${apiKEY}&t=${searchTerm}`
		);
		const data = await response.json();
		setMovie(data);
	} catch(e) {
		console.error(e)
	}
}

   useEffect(() => {
    getMovie("Air");
  }, []);
  return (
    <div className="App">
      <Form moviesearch={getMovie} />
      <MovieDisplay movie={movie} />
    </div>
  );
}

export default App;
