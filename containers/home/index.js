import React from 'react';

import Movies from '@/mocks/movies.json';
import Genres from '@/mocks/genres.json';

import FeaturedMovie from '@/components/featured-movie';
import Categories from '@/components/categories';
import MoviesSection from '@/components/movies-section';

function HomeContainer({selectedCategory}) {
  return (
    <div>
       <FeaturedMovie movie={Movies.results[0]} />
       <Categories categories={Genres.genres.slice(0,5)}/>
       {
        selectedCategory.movies.length > 0 &&
        <MoviesSection movies={selectedCategory.movies} title={
            Genres.genres.find((genre) =>`${genre.id}` === selectedCategory.id).name.toUpperCase()
        }/>
       }
       <MoviesSection movies={Movies.results.slice(1,7)} title='popular fılms'/>
       <MoviesSection movies={Movies.results.slice(7,13)} title='Your Favorıtes'/>
    </div>
  )
}

export default HomeContainer
