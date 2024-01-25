import HomeContainer from '@/containers/home';
import {getSingleCategory ,getTopRatedMovies , getPopularMovies, getCategories} from '@/services/movie';

async function Home({params}) {
    let selectedCategory ;

    const [{results: topRatedMovies} , {results: popularMovies} , {genres: categories}] = await Promise.all([getTopRatedMovies(), getPopularMovies() , getCategories()]);

    if(params.category?.length > 0) {
        const {results} = await getSingleCategory(params.category[0]);
        selectedCategory = results
    }
    
  return <HomeContainer 
  categories={categories}
  popularMovies={popularMovies}
  topRatedMovies={topRatedMovies}
   selectedCategory={{
    id: params.category?.[0] ?? '',
    movies: selectedCategory ? topRatedMovies.slice(0,7) : [],
  }} />;
}

export default Home;