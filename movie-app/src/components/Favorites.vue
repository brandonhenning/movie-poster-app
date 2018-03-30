<template>
    <div>
        <h1 class='text-center'>Favorites</h1>
        <h5>{{opinionTitle}}</h5>
        <p>{{opinion}}</p>
        <button @click.prevent='clearFavorites()' class='btn btn-danger clear-button'>Clear Favorites</button>
        <button @click.prevent='getOpinion()' class='btn btn-primary'>Collection Opinion</button>
        <div id='fav-group' class='card-group'>
            <div v-for='movie in favorites' class='card-group'>
                <MovieCard :movieData='movie' :addMovie='addMovie'></MovieCard>
            </div>
        </div>
    </div>
</template>


<script>
import MovieCard from './MovieCard'
import Movies from './Movies'

export default {
  name: 'Favorites', 
  props: ['favorites', 'addMovie', 'movies', 'clearFavorites', 'getOpinion', 'opinion', 'opinionTitle'],
  components: {
      MovieCard, Movies
  },
  data() {
      return {
      }
  },
  methods: {
  }
}
</script>


<style scoped>
#fav-group {
    margin-top: 15px
}
</style>