const movies = [
  {
    title: "Kalki 2898 AD",
    genre: "Action/Sci-Fi",
    votes: "1.2L votes",
    rating: "8.4",
    emoji: "🎬",
    badge: "PREMIERING",
    className: "poster1"
  },

  {
    title: "Fighter",
    genre: "Action",
    votes: "89K votes",
    rating: "8.1",
    emoji: "🚀",
    badge: "NEW",
    className: "poster2"
  },

  {
    title: "Dune: Part Two",
    genre: "Sci-Fi/Adventure",
    votes: "76K votes",
    rating: "7.9",
    emoji: "👁️",
    badge: "",
    className: "poster3"
  },

  {
    title: "Mufasa: The Lion King",
    genre: "Animation",
    votes: "62K votes",
    rating: "7.6",
    emoji: "🎭",
    badge: "",
    className: "poster4"
  },

  {
    title: "Pushpa 2",
    genre: "Action/Drama",
    votes: "2.1L votes",
    rating: "8.8",
    emoji: "⚔️",
    badge: "TRENDING",
    className: "poster5"
  }
];

const upcomingMovies = [
  {
    title: "Spider-Man: Beyond",
    genre: "Marvel/Action",
    release: "Releasing Jul 25",
    emoji: "🕷️",
    className: "poster1"
  },

  {
    title: "Singham Returns 2",
    genre: "Action",
    release: "Releasing Aug 15",
    emoji: "🦸",
    className: "poster2"
  },

  {
    title: "Aquaman 3",
    genre: "DC/Adventure",
    release: "Releasing Sep 10",
    emoji: "🌊",
    className: "poster3"
  }
];

const movieGrid = document.getElementById("movieGrid");
const upcomingGrid = document.getElementById("upcomingGrid");

function renderMovies(){

  movies.forEach(movie => {

    movieGrid.innerHTML += `
    
      <div class="movie-card">

        <div class="poster ${movie.className}">

          ${movie.badge ? `<div class="badge">${movie.badge}</div>` : ""}

          ${movie.emoji}

          <div class="rating">
            ${movie.rating}
          </div>

        </div>

        <div class="movie-info">

          <h3>${movie.title}</h3>

          <p>${movie.genre}</p>

          <p>${movie.votes}</p>

        </div>

      </div>

    `;
  });

}

function renderUpcoming(){

  upcomingMovies.forEach(movie => {

    upcomingGrid.innerHTML += `
    
      <div class="movie-card">

        <div class="poster ${movie.className}">
          ${movie.emoji}
        </div>

        <div class="movie-info">

          <h3>${movie.title}</h3>

          <p>${movie.genre}</p>

          <p>${movie.release}</p>

        </div>

      </div>

    `;
  });

}

renderMovies();
renderUpcoming();

const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("keyup", () => {

  const value = searchInput.value.toLowerCase();

  const filteredMovies = movies.filter(movie =>
    movie.title.toLowerCase().includes(value)
  );

  movieGrid.innerHTML = "";

  filteredMovies.forEach(movie => {

    movieGrid.innerHTML += `
    
      <div class="movie-card">

        <div class="poster ${movie.className}">

          ${movie.badge ? `<div class="badge">${movie.badge}</div>` : ""}

          ${movie.emoji}

          <div class="rating">
            ${movie.rating}
          </div>

        </div>

        <div class="movie-info">

          <h3>${movie.title}</h3>

          <p>${movie.genre}</p>

          <p>${movie.votes}</p>

        </div>

      </div>

    `;
  });

});
