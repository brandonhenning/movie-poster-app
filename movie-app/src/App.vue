<template>
<div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand home-title" href="#">Movie Poster Search</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/fav">Favorites</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/bro">Brochure</router-link>
          </li>
        </ul>
      </div>
  </nav>

  <div class='container' id='app'>
    <router-view :searchForMovies='searchForMovies' :addMovie='addMovie' 
    :movies='movies' :favorites='favorites' :searchTerm='searchTerm' 
    :clearFavorites='clearFavorites' :getOpinion='getOpinion' :opinion='opinion' 
    :opinionTitle='opinionTitle' id='app-box'/>
  </div>
</div>
</template>

<script>
import Movies from './components/Movies'
import MovieCard from './components/MovieCard'
import Favorites from './components/Favorites'

export default {
  name: 'App',
  components: {
    MovieCard,
    Movies,
    Favorites
  },
  props: ['searchTerm'],
  data() {
    return {
      movies: [],
      favorites: [],
      opinion: '',
      opinionTitle: ''
    }
  },
  methods: {
    addMovie(movie) {
        this.favorites.push(movie)
        console.log(this.favorites)
    },
    getOpinion() {
      const URL = '../static/opinions.json'
      fetch(URL)
        .then(res => res.json())
        .then(result => {
            let num = Math.round(Math.random() * 6)
            this.opinion = result[num].opinion
            this.opinionTitle = result[num].rating
        })
    },
    searchForMovies(subject) {
      const API_URL = `http://www.omdbapi.com/?&apikey=47ee5f53&s=${subject}`
      fetch(API_URL)
          .then(res => res.json())
          .then(result => {
              this.movies = result.Search
          })
      },
    clearFavorites() {
      this.favorites = []
    }
  }
}
</script>

<style scoped>
.home-title {
  font-size: 25px;
}

#app-box {
  padding-top: 20px;
}

</style>
