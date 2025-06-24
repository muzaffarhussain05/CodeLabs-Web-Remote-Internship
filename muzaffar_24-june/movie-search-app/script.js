const apiKey = ""; // Replace with your actual OMDb API key

async function searchMovie() {
  const input = document.getElementById("movie-input").value.trim();
  const details = document.getElementById("movie-details");
  const searchButton = document.querySelector(".search-box button");

  if (!input) {
    details.innerHTML = `<p>Please enter a movie name.</p>`;
    return;
  }

  
  searchButton.disabled = true;
  searchButton.textContent = "Searching...";
  details.innerHTML = `<p>🔄 Fetching movie details...</p>`;

  const url = `https://www.omdbapi.com/?t=${encodeURIComponent(input)}&apikey=${apiKey}`;

  try {
    const res = await fetch(url);
    const data = await res.json();

    if (data.Response === "True") {
      details.innerHTML = `
        <div class="movie-card">
          <div class="movie-poster">
            <img src="${data.Poster !== "N/A" ? data.Poster : "https://via.placeholder.com/300x445?text=No+Image"}" alt="${data.Title}" />
          </div>
          <div class="movie-info">
            <h2>${data.Title} (${data.Year})</h2>
            <div class="genres">
              ${data.Genre.split(",").map(g => `<span class="badge">${g.trim()}</span>`).join("")}
            </div>
            <p><strong>Director:</strong> ${data.Director}</p>
            <p><strong>Actors:</strong> ${data.Actors}</p>
            <p><strong>Plot:</strong> ${data.Plot}</p>
            <p class="rating">⭐ IMDB Rating: ${data.imdbRating}</p>
          </div>
        </div>
      `;
    } else {
      details.innerHTML = `<p>❌ Movie not found. Try another.</p>`;
    }
  } catch (err) {
    details.innerHTML = `<p>⚠️ Error fetching movie. Please try again later.</p>`;
    console.error(err);
  }

  
  searchButton.disabled = false;
  searchButton.textContent = "Search";
}
