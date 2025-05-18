import MovieView from '@/component/movie-view/MovieView'
import NotFoundSaved from '@/component/notFoundSaved/NotFoundSaved';
import { useStateValue } from '@/context'


const Saved = () => {
  const [state] = useStateValue()
  console.log(state);
  
  return (
    <div>
      {state.saved.length===0?<NotFoundSaved/>:  <MovieView data={state.saved}/>}
    
    </div>
  )
}

export default Saved