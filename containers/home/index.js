import React from 'react';

import FeaturedMovie from '@/components/featured-movie';
import Categories from '@/components/categories';
import MoviesSection from '@/components/movies-section';

function HomeContainer({topRatedMovies = [], selectedCategory , popularMovies = [] , categories = []}) {
  return (
    <div>
       <FeaturedMovie movie={topRatedMovies?.[0]} />
       <Categories categories={categories.slice(0,5)}/>
       {
        selectedCategory.movies.length > 0 &&
        <MoviesSection movies={selectedCategory.movies} title={
          categories.find((genre) =>`${genre.id}` === selectedCategory.id).name.toUpperCase()
        }/>
       }
       <MoviesSection movies={topRatedMovies.slice(1,7)} title='popular fılms'/>
       <MoviesSection movies={popularMovies.slice(1,7)} title='Your Favorıtes'/>
    </div>
  )
}

export default HomeContainer
