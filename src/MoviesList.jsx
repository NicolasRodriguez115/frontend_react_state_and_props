import React, {useState} from "react";
import "../src/MoviesList.css"


function MoviesList() {
    const [movies, setMovies] = useState([
        {
            title: "The Shawshank Redemption",
            genre: "Drama",
            description: "A banker is sentenced to life in Shawshank State Penitentiary for the murders of his wife and her lover, despite his claims of innocence. Over the years, he forms a friendship with a fellow inmate and finds solace and eventual redemption through acts of common decency.",
            showDetails: false, // Initialize the showDetails so each movie can keep track of it's own state
        }, 
        {
            title: "Inception",
            genre: "Thriller",
            description: "A skilled thief, who steals corporate secrets through the use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO. However, his tragic past may doom the project and his team to disaster",
            showDetails: false, // Initialize the showDetails so each movie can keep track of it's own state
        },
        {
            title: "The Dark Knight",
            genre: "Action",
            description: "Batman faces his greatest psychological and physical tests when he encounters the Joker, a criminal mastermind who plunges Gotham City into anarchy and forces the Dark Knight ever closer to crossing the fine line between hero and vigilante.",
            showDetails: false, // Initialize the showDetails so each movie can keep track of it's own state
        },
        {
            title: "Forrest Gump",
            genre: "Drama",
            description: "The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal, and other historical events unfold from the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart.",
            showDetails: false, // Initialize the showDetails so each movie can keep track of it's own state
        },
        {
            title: "The Matrix",
            genre: "Science Fiction",
            description: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers. He discovers that the world he lives in is a simulated reality created by sentient machines.",
            showDetails: false, // Initialize the showDetails so each movie can keep track of it's own state
        },
        {
            title: "Pulp Fiction",
            genre: "Crime",
            description: "The lives of two mob hitmen, a boxer, a gangster's wife, and a pair of diner bandits intertwine in four tales of violence and redemption. The film is known for its eclectic dialogue, ironic mix of humor and violence, and a nonlinear storyline.",
            showDetails: false, // Initialize the showDetails so each movie can keep track of it's own state
        },
        {
            title: "The Lion King",
            genre: "Animation",
            description: "A young lion prince flees his kingdom after the murder of his father, only to learn the true meaning of responsibility and bravery. With the help of his friends, he must reclaim his rightful place as king.",
            showDetails: false, // Initialize the showDetails so each movie can keep track of it's own state
        },
        {
            title: "Titanic",
            genre: "Drama",
            description: "A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic. Their forbidden romance blossoms as the ship heads towards its tragic fate.",
            showDetails: false, // Initialize the showDetails so each movie can keep track of it's own state
        },
        {
            title: "Star Wars: IV - A New Hope",
            genre: "Science Fiction",
            description: "Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee, and two droids to save the galaxy from the Empire's world-destroying battle station, while also attempting to rescue Princess Leia from the mysterious Darth Vader.",
            showDetails: false, // Initialize the showDetails so each movie can keep track of it's own state
        },
        {
            title: "Jurassic Park",
            genre: "Science Fiction",
            description: "During a preview tour, a theme park suffers a major power breakdown that allows its cloned dinosaur exhibits to run amok. A group of visitors must survive the chaos and find a way to escape the island.",
            showDetails: false, // Initialize the showDetails so each movie can keep track of it's own state
        },
    ])


    // Function to toggle details for a movie
    const toggleDetails = (index) => {
        setMovies(movies.map((movie, i) => (
            i === index ? {...movie, showDetails: !movie.showDetails} : movie
        )))
    }

    // Function to remove a movie from the list when a button is clicked
    const removeMovie = (index) => {
        setMovies(movies.filter((movie, i) => i !== index))
    }

    // Const filteredList = movies.filter

    return (
    <>
        <ul>
            {movies.map((movie, index) => (
                <li key={index}>
                    <span className="movie-title" onClick={() => toggleDetails(index)}>
                        {movie.title}
                    </span>
                    {movie.showDetails && (
                      <>
                         <h3>Genre: <span className="movie-information">{movie.genre}</span></h3>
                         <h3>Description: <span className="movie-information">{movie.description}</span></h3>
                      </>  
                    )}
                    <button onClick={() => removeMovie(index)}>Remove</button> 
                    </li>)
                )}

        </ul>
    </>
    )

}
export default MoviesList;