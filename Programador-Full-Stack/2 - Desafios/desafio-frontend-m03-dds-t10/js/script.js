const movies = document.querySelector("#movies-container")
const btnPrev = document.querySelector("#btn-prev")
const btnNext = document.querySelector("#btn-next")
const input = document.querySelector("input")
const body = document.querySelector("body")

async function catchFilm(x, y) {
  try {
    const response = await axios.get(api)
    for (i = x; i < y; i++) {
      let urlTeste = response.data.results[i].poster_path;
      let movie = document.createElement("div")
      movie.classList.add("movie")
      movie.style.backgroundImage = `url(${urlTeste})`
      movies.appendChild(movie)
      const movieInfo = document.createElement("div")
      movieInfo.classList.add("movie__info")
      movie.appendChild(movieInfo)
      const movieTitle = document.createElement("span")
      movieTitle.classList.add("movie__title")
      movieTitle.textContent = response.data.results[i].title
      movieInfo.appendChild(movieTitle)
      const movieRating = document.createElement("span")
      movieRating.classList.add("movie__rating")
      movieRating.textContent = response.data.results[i].vote_average.toFixed(1);
      movieInfo.appendChild(movieRating)
      const img = document.createElement("img")
      img.src = "./assets/estrela.svg"
      img.alt = "Estrela"
      movieRating.appendChild(img)
      movie.setAttribute("id", response.data.results[i].id);
      let idModal = 0;
      const modal = document.querySelector(".modal")
      const modalClose = document.querySelector(".modal__close")
      movie.addEventListener("click", async function () {
        if (movie) {
          modal.classList.remove("hidden")
          idModal = movie.id
          apiModal = ` https://tmdb-proxy.cubos-academy.workers.dev/3/movie/${idModal}?language=pt-BR`
          const response3 = await axios.get(apiModal)
          const modalTitle = document.querySelector(".modal__title")
          modalTitle.textContent = response3.data.title;
          const modalImg = document.querySelector(".modal__img")
          modalImg.src = response3.data.backdrop_path;
          const modalDescription = document.querySelector(".modal__description")
          modalDescription.textContent = response3.data.overview;
          const modalAverage = document.querySelector(".modal__average")
          modalAverage.textContent = response3.data.vote_average.toFixed(1);
          const genres = response3.data.genres
          const modalGenres = document.querySelector(".modal__genres")
          if (modalGenres.childElementCount >= 0) {
            while (modalGenres.firstChild) {
              modalGenres.removeChild(modalGenres.firstChild);
            }
          }
          for (let i = 0; i < genres.length; i++) {

            const span = document.createElement("span")
            span.classList.add("modal__genre");
            span.textContent = genres[i].name;
            modalGenres.appendChild(span);
          }
        }
      })
      modalClose.addEventListener("click", async function () {
        modal.classList.add("hidden")
      })
      modal.addEventListener("click", async function () {
        modal.classList.add("hidden")
      })
    }
  } catch (error) {
  }
}
function removeMovies() {
  const filmes = document.querySelectorAll('.movie');
  for (const film of filmes) {
    film.remove()
  }
};
async function catchFilm2(x, y) {
  try {
    const api2 = "https://tmdb-proxy.cubos-academy.workers.dev/3/search/movie?language=pt-BR&include_adult=false&query=";
    const inputValue = input.value
    console.log(inputValue)
    const response = await axios.get(`${api2}${inputValue}`)
    for (i = x; i < y; i++) {
      let urlTeste = response.data.results[i].poster_path;
      let movie = document.createElement("div")
      movie.classList.add("movie")
      movie.style.backgroundImage = `url(${urlTeste})`
      movies.appendChild(movie)
      const movieInfo = document.createElement("div")
      movieInfo.classList.add("movie__info")
      movie.appendChild(movieInfo)
      const movieTitle = document.createElement("span")
      movieTitle.classList.add("movie__title")
      movieTitle.textContent = response.data.results[i].title
      movieInfo.appendChild(movieTitle)
      const movieRating = document.createElement("span")
      movieRating.classList.add("movie__rating")
      movieRating.textContent = response.data.results[i].vote_average.toFixed(1);
      movieInfo.appendChild(movieRating)
      const img = document.createElement("img")
      img.src = "./assets/estrela.svg"
      img.alt = "Estrela"
      movieRating.appendChild(img)
      movie.setAttribute("id", response.data.results[i].id);
      let idModal = 0;
      const modal = document.querySelector(".modal")
      const modalClose = document.querySelector(".modal__close")
      movie.addEventListener("click", async function () {
        if (movie) {
          modal.classList.remove("hidden")
          idModal = movie.id
          apiModal = ` https://tmdb-proxy.cubos-academy.workers.dev/3/movie/${idModal}?language=pt-BR`
          const response3 = await axios.get(apiModal)
          const modalTitle = document.querySelector(".modal__title")
          modalTitle.textContent = response3.data.title;
          const modalImg = document.querySelector(".modal__img")
          modalImg.src = response3.data.backdrop_path;
          const modalDescription = document.querySelector(".modal__description")
          modalDescription.textContent = response3.data.overview;
          const modalAverage = document.querySelector(".modal__average")
          modalAverage.textContent = response3.data.vote_average.toFixed(1);
          const genres = response3.data.genres
          const modalGenres = document.querySelector(".modal__genres")
          if (modalGenres.childElementCount >= 0) {
            while (modalGenres.firstChild) {
              modalGenres.removeChild(modalGenres.firstChild);
            }
          }
          for (let i = 0; i < genres.length; i++) {

            const span = document.createElement("span")
            span.classList.add("modal__genre");
            span.textContent = genres[i].name;
            modalGenres.appendChild(span);
          }
        }
      })
      modalClose.addEventListener("click", async function () {
        modal.classList.add("hidden")
      })
      modal.addEventListener("click", async function () {
        modal.classList.add("hidden")
      })
    }
  } catch (error) {
  }
}
let contador = 0;
catchFilm(0, 6)
btnNext.addEventListener("click", function () {
  removeMovies()
  if (contador === 0) {
    contador++
    catchFilm(6, 12)
    return
  }
  if (contador === 1) {
    contador++
    catchFilm(12, 18)
    return
  }
  if (contador > 1) {
    contador = 0
    catchFilm(0, 6)
    return
  }
})
btnPrev.addEventListener("click", function () {
  removeMovies()
  if (contador == 0) {
    contador = 2
    catchFilm(12, 18)
    return
  }
  if (contador === 2) {
    contador--
    catchFilm(6, 12)
    return
  }
  if (contador === 1) {
    contador--
    catchFilm(0, 6)
    return
  }
})
input.addEventListener("keydown", async function (event) {
  if (event.key === "Enter") {
    removeMovies();
    if (input.value) {
      await catchFilm2(0, 6);

    } else {
      await catchFilm(0, 6);
      contador = 0
    }
    input.value = "";
  }
});

async function movieOfTheDay() {
  try {

    const endPointGeral = "https://tmdb-proxy.cubos-academy.workers.dev/3/movie/436969?language=pt-BR"
    const endPointDeVideos = "https://tmdb-proxy.cubos-academy.workers.dev/3/movie/436969/videos?language=pt-BR"
    const response1 = await axios.get(endPointGeral)
    const response2 = await axios.get(endPointDeVideos)
    const highlightVideo = document.querySelector(".highlight__video")
    let minhaImg = response1.data.backdrop_path;
    highlightVideo.style.backgroundImage = `url(${minhaImg})`
    highlightVideo.style.backgroundSize = "cover"
    const highlighlTitle = document.querySelector(".highlight__title")
    highlighlTitle.textContent = response1.data.title
    const highlightRating = document.querySelector(".highlight__rating")
    highlightRating.textContent = response1.data.vote_average.toFixed(1);
    const highlightGenres = document.querySelector(".highlight__genres")
    let genres = [];
    for (let i = 0; i < response1.data.genres.length; i++) {
      if (i < response1.data.genres.length - 1) {
        genres += `${response1.data.genres[i].name}`
        genres += `, `
      } else {
        genres += `${response1.data.genres[i].name}`
      }
    }
    highlightGenres.textContent = genres
    const highlightLaunch = document.querySelector(".highlight__launch")
    const data = response1.data.release_date
    let dia = "";
    let mes = "";
    let ano = "";
    for (let i = 0; i < data.length; i++) {
      if (i < 4) {
        ano += data[i]
      } else if (i > 4 && i < 7) {
        mes += data[i]
      } else if (i > 7) {
        dia += data[i]
      }
    }
    if (mes === "01") {
      highlightLaunch.textContent = `${dia} DE JANEIRO DE ${ano} `
    } else if (mes === "02") {
      highlightLaunch.textContent = `${dia} DE FEVEREIRO DE ${ano} `
    }
    else if (mes === "03") {
      highlightLaunch.textContent = `${dia} DE MARÇO DE ${ano} `
    }
    else if (mes === "04") {
      highlightLaunch.textContent = `${dia} DE ABRIL DE ${ano} `
    }
    else if (mes === "05") {
      highlightLaunch.textContent = `${dia} DE MAIO DE ${ano} `
    }
    else if (mes === "06") {
      highlightLaunch.textContent = `${dia} DE JUNHO DE ${ano} `
    }
    else if (mes === "07") {
      highlightLaunch.textContent = `${dia} DE JULHO DE ${ano} `
    }
    else if (mes === "08") {
      highlightLaunch.textContent = `${dia} DE AGOSTO DE ${ano} `
    }
    else if (mes === "09") {
      highlightLaunch.textContent = `${dia} DE SETEMBRO DE ${ano} `
    }
    else if (mes === "10") {
      highlightLaunch.textContent = `${dia} DE OUTUBRO DE ${ano} `
    }
    else if (mes === "11") {
      highlightLaunch.textContent = `${dia} DE NOVEMBRO DE ${ano} `
    }
    else if (mes === "12") {
      highlightLaunch.textContent = `${dia} DE DEZEMBRO DE ${ano} `
    }

    const highlightDescription = document.querySelector(".highlight__description");
    highlightDescription.textContent = response1.data.overview;
    const highlightVideoLink = document.querySelector(".highlight__video-link")
    const key = response2.data.results[0].key
    const youtube = "https://www.youtube.com/watch?v="
    highlightVideoLink.href = `${youtube}${key}`
  } catch (error) {
  }
}
movieOfTheDay()