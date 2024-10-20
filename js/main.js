const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");

arrows.forEach((arrow, i) => {
  const itemNumber = movieLists[i].querySelectorAll("img").length;
  let clickCounter = 0;
  arrow.addEventListener("click", () => {
    const ratio = Math.floor(window.innerWidth / 270);
    clickCounter++;
    if (itemNumber - (4 + clickCounter) + (4 - ratio) >= 0) {
      movieLists[i].style.transform = `translateX(${
        movieLists[i].computedStyleMap().get("transform")[0].x.value - 300
      }px)`;
    } else {
      movieLists[i].style.transform = "translateX(0)";
      clickCounter = 0;
    }
  });   

  console.log(Math.floor(window.innerWidth / 270));
});



const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(
  ".container,.movie-list-title,.navbar-container,.sidebar,.left-menu-icon,.toggle"
);

ball.addEventListener("click", () => {
  items.forEach((item) => {
    item.classList.toggle("active");
  });
  ball.classList.toggle("active");
});

//favorite

function addTofavoritelist(movieName, movieImage) {
  
  let watchlist = JSON.parse(localStorage.getItem('watchlist')) || [];

 
  if (!watchlist.some(movie => movie.name === movieName)) {
   
    watchlist.push({ name: movieName, image: movieImage });
    localStorage.setItem('watchlist', JSON.stringify(watchlist));
    alert(`${movieName} has been added to your watchlist!`);
  } else {
    alert(`${movieName} is already in your watchlist!`);
  }
}