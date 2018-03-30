<template>
<div>
    <div id='movie-card'>
        <div class="card" style="width: 18rem;">
            <img class="card-img-top" :src='movieData.Poster' alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">{{movieData.Title}}</h5>
                <a @click.prevent='addMovie(movieData)' href='' class='btn btn-primary'>Add to Favorites</a>
            </div>
        </div>
    </div>
</div>

</template>


<script>
import Movies from './Movies'

export default {
    name: 'MovieCard',
    data () {
        return {
            
        }
    },
    props: [
        'movieData', 'addMovie', 'favorites'
    ],
    methods: {
    }

}

</script>

<style scoped>

</style>
