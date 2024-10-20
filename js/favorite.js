function loadWatchlist() {
    const watchlist = JSON.parse(localStorage.getItem('watchlist')) || [];
    const watchlistContainer = document.getElementById('watchlist');

    if (watchlist.length === 0) {
      watchlistContainer.innerHTML = '<p>Your watchlist is empty.</p>';
      return;
    }

    watchlist.forEach(movie => {
      const movieDiv = document.createElement('div');
      movieDiv.className = 'movie-card';

      const movieImage = document.createElement('img');
      movieImage.src = movie.image;
      movieImage.alt = movie.name;
      movieImage.className = 'movie-poster';

      const movieBrief = document.createElement('p');
      movieBrief.textContent = `${movie.name}.`;

      const removeBtn = document.createElement('button');
      removeBtn.textContent = 'Remove from Watchlist';
      removeBtn.className = 'remove-btn';
      removeBtn.onclick = function () {
        removeFromWatchlist(movie.name);
      };

      movieDiv.appendChild(movieImage);
      movieDiv.appendChild(movieBrief);
      movieDiv.appendChild(removeBtn);
      watchlistContainer.appendChild(movieDiv);
    });
  }

  function removeFromWatchlist(movieName) {
    let watchlist = JSON.parse(localStorage.getItem('watchlist')) || [];
    watchlist = watchlist.filter(movie => movie.name !== movieName);
    localStorage.setItem('watchlist', JSON.stringify(watchlist));
    location.reload(); 
  }


  window.onload = loadWatchlist;