<template>
<div class='container'>
    <h1 class='text-center'>Movies</h1>
    <form @submit.prevent='searchForMovies(searchTerm)'>
            <label for="search">Search</label>
            <input v-model="searchTerm" type="text" name="search" id="search">
            <button type="submit" name="button">Search for Movies!</button>
    </form>
    <!-- <button @click='clearMovies()' class='btn btn-danger clear-button'>Clear Movies</button> -->
    <div id='main-card' class='card-group'>
        <div v-for='movie in movies' class='card-group'>
            <MovieCard :movieData='movie' :addMovie='addMovie'></MovieCard>
        </div>
    </div>
</div>
</template>




<script>
import MovieCard from './MovieCard'

export default {
  name: 'Movies', 
  components: {
      MovieCard
  },
  props: ['movies', 'searchForMovies', 'addMovie'],
  data() {
      return {
          searchTerm: ''
      }
  }
}
</script>



<style scoped>
.clear-button {
    margin-left: 5em;
}
#main-card{
    margin-top: 15px;
}

</style>
